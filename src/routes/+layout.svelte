<script>
  import '../app.postcss';
  import DarkMode from 'flowbite-svelte/DarkMode.svelte';
  import Runatics from './utils/Runatics.svelte';
  export let data;
  const analyticsId = data.ANALYTICS_ID_TWO

  let darkmodebtn = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50';
</script>
<Runatics {analyticsId} />
<DarkMode btnClass={darkmodebtn} />
<main class="w-full mx-auto px-2 pt-12">
  <slot />
</main>
