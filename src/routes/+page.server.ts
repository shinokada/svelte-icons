/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch }) => {
  try {
    const packageNames = [
      'svelte-supertiny',
      'svelte-evil-icons',
      'svelte-cssgg-icons',
      'svelte-circle-flags',
      'svelte-feathers',
      'svelte-file-icons',
      'svelte-bootstrap-svg-icons',
      'svelte-ionicons',
      'svelte-lucide'
    ];

    const data: { [key: string]: number } = {}; // Explicitly define the type of 'data'

    // Create an array of promises for each fetch request
    const fetchPromises = packageNames.map(async (packageName) => {
      const response = await fetch(`https://bundlephobia.com/api/size?package=${packageName}`);
      const packageData = await response.json();

      // Extracting the unpacked size from the response and convert to kB
      const packageSizeInBytes = packageData.size;
      const packageSizeInKB = packageSizeInBytes / 1024;

      // Return the package size and the package name for later mapping
      return { packageName, packageSizeInKB };
    });

    // Wait for all the fetch requests to complete concurrently
    const results = await Promise.all(fetchPromises);

    // Map the results back to the 'data' object
    results.forEach(({ packageName, packageSizeInKB }) => {
      data[packageName] = packageSizeInKB;
    });

    return data;
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
};
