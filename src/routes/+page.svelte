<script lang="ts">
  import type { LibType } from '$lib/types.js';
  import { Card, List, Li, A, Badge } from 'flowbite-svelte';
  import { NpmVersion, NpmDownload } from 'svelte-shields';
  import { svelte4_icons, svelte5_icons, illust } from '$lib/data/icons';
  import { onMount } from 'svelte';
  
  let { data } = $props();

  // $inspect('data: ', data.iconCounts);

  const svelte5_icons_dynamic = $derived(
    svelte5_icons.map(icon => {
      const count = data.iconCounts?.[icon.packageName];
      // console.log('icon', icon.packageName, 'count', count);
      if (count !== undefined) {
        return {
          ...icon,
          desc: `${count} SVG icons`
        };
      }
      return icon;
    })
  );

  // $inspect('svelte5_icons_dynamic', svelte5_icons_dynamic);
  // Utility function to format date as YYYY-MM-DD
  const formatDate = (date: Date) => date.toISOString().slice(0, 10);

  const getLastOneWeekRange = () => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 1); // Set end date to yesterday

    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 6); // 6 days before yesterday

    return {
      start: formatDate(startDate),
      end: formatDate(endDate)
    };
  };

  let totalDownloads = $state(0);

  onMount(async () => {
    try {
      const libs = [
        'flowbite-svelte-illustrations',
        'svelte-kawaii',
        'svelte-animated-icons',
        'flowbite-svelte-icons',
        'svelte-ant-design-icons',
        'svelte-awesome-icons',
        'svelte-bootstrap-svg-icons',
        'svelte-boxicons',
        'svelte-circle-flags',
        'svelte-coreui-icons',
        'svelte-cssgg-icons',
        'svelte-cryptocurrency-icons',
        'svelte-evil-icons',
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
        'svelte-supertiny',
        'svelte-teenyicons',
        'svelte-twitter-emoji',
        'svelte-weather'
      ];

      // const today = new Date();
      // const todayString = today.toISOString().slice(0, 10);

      // const totalPromises = libs.map((lib) =>
      //   fetch(`https://api.npmjs.org/downloads/point/2020-01-01:${todayString}/${lib}`)
      // );

      const dateRange = getLastOneWeekRange();
      const totalPromises = libs.map((lib) =>
        fetch(`https://api.npmjs.org/downloads/point/${dateRange.start}:${dateRange.end}/${lib}`)
      );

      const totalResponses = await Promise.all(totalPromises);

      for (const response of totalResponses) {
        const data = await response.json();
        // console.log('data', data.downloads)
        totalDownloads += data.downloads;
      }
    } catch (error) {
      console.error(`Error in onMount: ${error}`);
    }
  });

  function formatNumber(number: number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    } else {
      return number.toString();
    }
  }

  const hFiveClass =
    'relative my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ';
  const h2Class =
    'text-center my-8 xl:my-12 2xl:my-16 text-4xl xl:text-5xl 2xl:text-6xl text-gray-900 dark:text-white';
</script>

{#snippet runesIcon({
  packageName,
  label,
  link,
  link2,
  logo,
  logoColor,
  img,
  download_color,
  labelColor,
  version_color,
  desc,
  source,
  repo,
  docs,
  tag,
  a11y,
  href
}: LibType)}
  <Card img={img['src']}>
    <div class="m-6">
    <NpmDownload
      {packageName}
      color={download_color}
      {logo}
      {logoColor}
      {labelColor}
      interval="dy"
      class="my-2 inline"
      {link}
    />
    <NpmDownload
      {packageName}
      color={download_color}
      {logo}
      {logoColor}
      {labelColor}
      interval="dw"
      class="inline"
      {link}
    />
    <NpmVersion
      {packageName}
      color={version_color}
      {logoColor}
      {labelColor}
      {tag}
      {label}
      logo="svelte"
      link={link2}
    />
    <h5 class={hFiveClass}>
      <A href={docs} target="_blank">{label}</A>
      {#if a11y}
        <Badge {href} target="_blank" class="text-sm absolute right-0 top-1 dark:text-white">A11y</Badge>
      {/if}
    </h5>
    <List>
      <Li>{desc}</Li>
      <Li><A href={repo} target="_blank">GitHub repo</A></Li>
      {#if source}
        <Li>Source: <A href={source.url} target="_blank">{source.label}</A></Li>
      {/if}
      <Li><A href={docs} target="_blank">Icon and Docs</A></Li>
    </List>
    </div>
  </Card>
{/snippet}

<h1
  class="my-4 text-center text-5xl text-gray-900 xl:my-5 xl:text-6xl 2xl:my-6 2xl:text-7xl dark:text-white"
>
  Svelte SVG Icon Sets
</h1>

<div class="flex flex-wrap justify-center gap-4 pb-6">
  <Badge color="pink" large>Svelte 4, 5, and 5:Runes</Badge>
  <Badge color="blue" large>Support CSS frameworks</Badge>
  <Badge color="purple" large>Faster compling</Badge>
  <Badge color="yellow" large>IDE Support</Badge>
  <Badge color="green" large>Total Weekly Downloads: {formatNumber(totalDownloads)}</Badge>
</div>

<h2 class={h2Class}>Svelte 5 Runes</h2>
<div class="flex flex-wrap justify-center gap-6">
  {#each svelte5_icons_dynamic as { packageName, label, link, link2, logo, logoColor, labelColor, img, download_color, version_color, desc, source, repo, docs, tag, a11y, href }}
    {@render runesIcon({
      packageName,
      label,
      link,
      link2,
      logo,
      logoColor,
      img,
      download_color,
      labelColor,
      version_color,
      desc,
      source,
      repo,
      docs,
      tag,
      a11y,
      href
    })}
  {/each}
</div>


<h2 class={h2Class}>Illustrations</h2>
<div class="flex flex-wrap justify-center gap-6">
  {#each illust as { packageName, label, link, link2, logo, logoColor, labelColor, img, download_color, version_color, desc, source, repo, docs, tag, a11y, href }}
    {@render runesIcon({
      packageName,
      label,
      link,
      link2,
      logo,
      logoColor,
      img,
      download_color,
      labelColor,
      version_color,
      desc,
      source,
      repo,
      docs,
      tag,
      a11y,
      href
    })}
  {/each}
</div>

<h2 class={h2Class}>Svelte 4/5</h2>
<div class="flex flex-wrap justify-center gap-6 mb-8">
  {#each svelte4_icons as { packageName, label, logo, logoColor, tag, link, link2, img, download_color, version_color, desc, source, repo, docs }}
    {@render runesIcon({
      packageName,
      label,
      img,
      download_color,
      version_color,
      desc,
      source,
      repo,
      docs,
      logo,
      logoColor,
      tag,
      link,
      link2
    })}
  {/each}
</div>
