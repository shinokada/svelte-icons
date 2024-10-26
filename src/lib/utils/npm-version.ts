import type { LibType, PackageVersions, Versions } from '../types';

function isPrerelease(version: string): boolean {
  return version.includes('-');
}

// function getTwoHighestVersions(versions: string[]): Versions {
//   // First get all stable versions (no pre-release tags)
//   const stableVersions = versions
//     .filter((v) => !isPrerelease(v))
//     .sort((a, b) => -a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

//   // If we have no stable versions, fall back to including pre-release versions
//   const sortedVersions =
//     stableVersions.length > 0
//       ? stableVersions
//       : versions.sort(
//           (a, b) => -a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
//         );

//   return {
//     latest: sortedVersions[0],
//     previousStable: sortedVersions[1]
//   };
// }

export async function fetchPackageVersions(packages: LibType[]): Promise<PackageVersions> {
  const results: PackageVersions = {};

  await Promise.all(
    packages.map(async (pkg) => {
      try {
        const response = await fetch(`https://registry.npmjs.org/${pkg.packageName}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${pkg.packageName}`);
        }

        const data = await response.json();
        const versions = Object.keys(data.versions);

        // First check if there's a latest dist-tag
        const latestFromTag = data['dist-tags']?.['latest'];
        const v1Latest = data['dist-tags']?.['v1-latest'];
        results[pkg.packageName] = {
          latest: latestFromTag,
          v1Latest
        };
      } catch (error) {
        console.error(`Error fetching versions for ${pkg.packageName}:`, error);
        results[pkg.packageName] = {
          latest: undefined,
          v1Latest: undefined
        };
      }
    })
  );

  return results;
}
