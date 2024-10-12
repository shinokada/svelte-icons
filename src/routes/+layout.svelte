<script lang="ts">
  import '../app.pcss';
  import { page } from '$app/stores';
  // import type { Component } from 'svelte';
  // import type { ListType } from 'runes-webkit';
  import { Footer } from 'runes-webkit';
  import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  // import Nav from './utils/Nav.svelte';
  import { Runatics } from 'runatics';

  let { children, data } = $props();
  const analyticsId = data.ANALYTICS_ID_ICONS;
  let metaTags = $state(
    $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags
  );

  let currentUrl = $state($page.url.pathname);
  $effect(() => {
    currentUrl = $page.url.pathname;
    metaTags = $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags;
  });

  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com'
  };

  // const siteName = removeHyphensAndCapitalize(__NAME__)
  // const twitterUrl = 'https://twitter.com/shinokada'
  // const githubUrl = `https://github.com/shinokada/${__NAME__}`
</script>

<RunesMetaTags {...metaTags} />
<Runatics {analyticsId} />
<main class="mx-auto w-full px-2 pt-12">
  {@render children()}
</main>
<Footer {brand} />
