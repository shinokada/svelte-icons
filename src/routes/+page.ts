import type { PageLoad } from './$types';
import { svelte4_icons } from '$lib/data/icons';
import { fetchPackageVersions } from '$lib/utils/npm-version';

export const load = (async () => {
  try {
    const versions = await fetchPackageVersions(svelte4_icons);
    return {
      versions
    };
  } catch (error) {
    console.error('Failed to fetch versions:', error);
    return {
      versions: {},
      error: 'Failed to fetch versions'
    };
  }
}) satisfies PageLoad;
