/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch }) => {
  try {
    const libs = [
      'svelte-ant-design-icons',
      'svelte-awesome-icons',
      'svelte-bootstrap-svg-icons',
      'svelte-circle-flags',
      'svelte-cryptocurrency-icons',
      'svelte-feathers',
      'svelte-flag-icons',
      'svelte-flags',
      'svelte-file-icons',
      'svelte-google-materialdesign-icons',
      'svelte-heros',
      'svelte-heros-v2',
      'svelte-ionicons',
      'svelte-lucide',
      'svelte-materialdesign-icons',
      'svelte-oct',
      'svelte-radix',
      'svelte-remix',
      'svelte-simples',
      'svelte-tabler',
      'svelte-teenyicons',
      'svelte-twitter-emoji',
      'svelte-weather'
    ];
    let totalDownloads = 0;
    let weeklyDownloads = 0;
    const today = new Date();
    const todayString = today.toISOString().slice(0, 10);
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);
    const oneWeekAgoString = oneWeekAgo.toISOString().slice(0, 10);
  
    for (const lib of libs) {
      const weeklyResponse = await fetch(
        `https://api.npmjs.org/downloads/point/${oneWeekAgoString}:${todayString}/${lib}`
      );
      const weeklyData = await weeklyResponse.json();
      weeklyDownloads += weeklyData.downloads;
  
      const totalResponse = await fetch(
        `https://api.npmjs.org/downloads/point/2020-01-01:${todayString}/${lib}`
      );
      const totalData = await totalResponse.json();
      totalDownloads += totalData.downloads;
    }
  
    return { totalDownloads, weeklyDownloads };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
  
};