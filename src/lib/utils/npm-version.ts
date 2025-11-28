import type { LibType, PackageVersions } from '../types';

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
