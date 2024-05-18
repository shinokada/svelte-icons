<script lang="ts">
  import Card from 'flowbite-svelte/Card.svelte';
  import List from 'flowbite-svelte/List.svelte';
  import Li from 'flowbite-svelte/Li.svelte';
  import A from 'flowbite-svelte/A.svelte';
  import Badge from 'flowbite-svelte/Badge.svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import { onMount } from 'svelte';

  let totalDownloads = 0;

  onMount(async () => {
    try {
      const libs = [
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

      const today = new Date();
      const todayString = today.toISOString().slice(0, 10);
      
      const totalPromises = libs.map((lib) => fetch(`https://api.npmjs.org/downloads/point/2020-01-01:${todayString}/${lib}`));

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

  let imgFlowbite = {
    src: '/images/resized/flowbite.webp',
    alt: 'Flowbite Svelte Icons'
  };
  let imgAnt = {
    src: '/images/resized/ant.webp',
    alt: 'Ant Design Icons'
  };
  let imgAwesome = {
    src: '/images/resized/awesome.webp',
    alt: 'Font Awesome Icons'
  };
  let imgBootstrap = {
    src: '/images/resized/bootstrap1.webp',
    alt: 'Bootstrap Icons'
  };
  let imgBoxicons = {
    src: '/images/resized/boxicons.webp',
    alt: 'Boxicons'
  };
  let imgCrypto = {
    src: '/images/resized/crypto.webp',
    alt: 'Cryptocurrency Icons'
  };
  let imgCircleFlags = {
    src: '/images/resized/circle-flags.webp',
    alt: 'Circle Flags'
  };
  let imgCoreui = {
    src: '/images/resized/coreui.webp',
    alt: 'Coreui Icons'
  };
  let imgCssgg = {
    src: '/images/resized/cssgg.webp',
    alt: 'css.gg Icons'
  };
  let imgEvil = {
    src: '/images/resized/evil.webp',
    alt: 'Evil Icons'
  };
  let imgFeather = {
    src: '/images/resized/feather.webp',
    alt: 'Feather Icons'
  };
  let imgFile = {
    src: '/images/resized/fileicons.webp',
    alt: 'File Icons'
  };
  let imgFlagIcons = {
    src: '/images/resized/flag-icons3.webp',
    alt: 'Flag Icons'
  };
  let imgFlags = {
    src: '/images/resized/flags.webp',
    alt: 'Flags'
  };
  let imgGoogle = {
    src: '/images/resized/google-material.webp',
    alt: 'Google Materialdesign Icons'
  };
  let imgHero = {
    src: '/images/resized/heros1.webp',
    alt: 'Heroicons'
  };
  let imgHero2 = {
    src: '/images/resized/heros2.webp',
    alt: 'Heroicons v2'
  };
  let imgIon = {
    src: '/images/resized/ion.webp',
    alt: 'Ionicons'
  };
  let imgLucide = {
    src: '/images/resized/lucide.webp',
    alt: 'Lucide'
  };
  let imgMaterial = {
    src: '/images/resized/materialdesign.webp',
    alt: 'Material Design Icons'
  };
  let imgOct = {
    src: '/images/resized/octicons.webp',
    alt: 'Octicons'
  };
  let imgRadix = {
    src: '/images/resized/radix.webp',
    alt: 'Radix Icons'
  };
  let imgRemix = {
    src: '/images/resized/remix1.webp',
    alt: 'RemixIcon'
  };
  let imgSimple = {
    src: '/images/resized/simple.webp',
    alt: 'Simple-icons'
  };
  let imgSupertiny = {
    src: '/images/resized/supertiny.webp',
    alt: 'Supertinyicons'
  };
  let imgTabler = {
    src: '/images/resized/tabler1.webp',
    alt: 'Tabler Icons'
  };
  let imgTeeny = {
    src: '/images/resized/teeny1.webp',
    alt: 'Teeny Icons'
  };
  let imgTwemoji = {
    src: '/images/resized/twemoji2.webp',
    alt: 'Twitter emoji'
  };
  let imgWeather = {
    src: '/images/resized/weather.webp',
    alt: 'Weather Icons'
  };
  let description = '20+ Icon sets from Font Awesome, Bootstrap, Flag, Cryptocurrency, Heroicons, File icons, Weather, Twitter emoji, Tabler icons and more.';
  const hFiveClass = 'my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ';
</script>

<MetaTags
  facebook={{
    appId: '674328730934834'
  }}
  title="Svelte SVG Icon Sets"
  {description}
  openGraph={{
    type: 'website',
    title: 'Svelte SVG Icon Sets',
    url: 'https://svelte-svg-icons.vercel.app/',
    description: `${description}`,
    images: [
      {
        url: 'https://open-graph-vercel.vercel.app/api/svelte-svg-icons',
        width: 1200,
        height: 630,
        alt: 'Svelte SVG Icon Sets'
      }
    ],
    siteName: 'Svelte SVG Icon Sets'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: 'Svelte SVG Icon Sets',
    description: `${description}`,
    image: 'https://open-graph-vercel.vercel.app/api/svelte-svg-icons',
    imageAlt: 'Svelte SVG Icon Sets'
  }}
/>

<h1>Svelte SVG Icon Sets</h1>

<div class="flex flex-wrap justify-center gap-4 pb-8">
  <Badge color="pink">Svelte 4, 5, and 5:Runes</Badge>
  <Badge color="blue">Support CSS frameworks</Badge>
  <Badge color="purple">Faster compling</Badge>
  <Badge color="yellow">IDE Support</Badge>
  <Badge color="dark" large>Total downloads: {formatNumber(totalDownloads)}</Badge>
</div>

<h2>Svelte 5: Runes</h2>
<div class="flex flex-wrap justify-center gap-4">
  <Card img={imgFlowbite.src}>
    <img src="https://badgen.net/npm/dt/flowbite-svelte-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/flowbite-svelte-icons" alt="weekly download number" class="inline" />
    <Badge  color="pink" class="dark:text-white px-2 my-2">A11y</Badge>
    <img src="https://img.shields.io/npm/v/flowbite-svelte-icons/next" alt="npm" />
    <h5 class={hFiveClass}>
      <A href="https://flowbite-svelte-icons.codewithshin.com/guide/svelte-5/getting-started" target="_blank">Flowbite-Svelte-Icons</A>
    </h5>
    <List>
      <Li>510+ mono and color SVG icons</Li>
      <Li>v1: 4/5, v2: 5:Runes</Li>
      <Li>Source: <A href="https://github.com/themesberg/flowbite-icons">Flowbite Icons</A></Li>
      <Li><A href="https://flowbite-svelte-icons.codewithshin.com/guide/svelte-5/getting-started">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgLucide.src}>
    <img src="https://badgen.net/npm/dt/svelte-lucide" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-lucide" alt="weekly download number" class="inline" />
    <Badge  color="pink" class="dark:text-white px-2 my-2">A11y</Badge>
    <img src="https://img.shields.io/npm/v/svelte-lucide/next" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-lucide.codewithshin.com/guide/svelte-5/getting-started" target="_blank">Svelte-Lucide</A>
    </h5>
    <List>
      <Li>1460+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/lucide-icons/lucide">Lucide icons</A></Li>
      <Li><A href="https://svelte-lucide.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgAwesome.src}>
    <img src="https://badgen.net/npm/dt/svelte-awesome-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-awesome-icons" alt="weekly download number" class="inline" />
    <Badge  color="pink" class="dark:text-white px-2 my-2">A11y</Badge>
    <img src="https://img.shields.io/npm/v/svelte-awesome-icons/next" alt="npm" />
    <h5 class={hFiveClass}>
      <A href="https://svelte-awesome-icons.codewithshin.com/guide/svelte-5/getting-started" target="_blank">Svelte-Awesome-Icons</A>
    </h5>
    <List>
      <Li>2000+ SVG icons</Li>
      <Li>v1: 4/5, v2: 5:Runes</Li>
      <Li>Source: <A href="https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs">Font Awesome</A></Li>
      <Li><A href="https://svelte-awesome-icons.codewithshin.com/guide/svelte-5/getting-started">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgHero2.src}>
    <img src="https://badgen.net/npm/dt/svelte-heros-v2" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-heros-v2" alt="weekly download number" class="inline" />
    <Badge  color="pink" class="dark:text-white px-2 my-2">A11y</Badge>
    <img src="https://img.shields.io/npm/v/svelte-heros-v2/next" alt="npm" class="inline"/>
    <h5 class={hFiveClass}>
      <A href="https://svelte-heros-v2.codewithshin.com/guide/svelte-5/getting-started" target="_blank">Svelte-Heros-v2</A>
    </h5>
    <List>
      <Li>870+ SVG icons</Li>
      <Li>Source: <A href="https://heroicons.com/">Heroicons v2</A></Li>
      <Li><A href="https://svelte-heros-v2.codewithshin.com/guide/svelte-5/getting-started">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgFlags.src}>
    <img src="https://badgen.net/npm/dt/svelte-flags" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-flags" alt="weekly download number" class="inline" />
    <Badge  color="pink" class="dark:text-white px-2 my-2">A11y</Badge>
    <img src="https://img.shields.io/npm/v/svelte-flags/next" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-flags.codewithshin.com/guide/svelte-5/getting-started" target="_blank">Svelte-Flags</A>
    </h5>
    <List>
      <Li>250+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/hampusborgos/country-flags">Country flags</A></Li>
      <Li><A href="https://svelte-flags.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgAnt.src}>
    <img src="https://badgen.net/npm/dt/svelte-ant-design-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-ant-design-icons" alt="weekly download number" class="inline" />
    <Badge  color="pink" class="dark:text-white px-2 my-2">A11y</Badge>
    <img src="https://img.shields.io/npm/v/svelte-ant-design-icons/next" alt="npm" class="inline"/>
    <h5 class={hFiveClass}>
      <A href="https://svelte-ant-design-icons.codewithshin.com/guide/svelte-5/getting-started" target="_blank">Svelte-Ant-Design-Icons</A>
    </h5>
    <List>
      <Li>780+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/ant-design/ant-design-icons">Ant Design Icons</A></Li>
      <Li><A href="https://svelte-ant-design-icons.codewithshin.com/guide/svelte-5/getting-started">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgSupertiny.src}>
    <img src="https://badgen.net/npm/dt/svelte-supertiny" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-supertiny" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-supertiny/next" alt="npm"  class="inline" />
    <h5 class={hFiveClass}>
      <A href="https://svelte-supertiny.codewithshin.com/" target="_blank">Svelte-Supertiny</A>
    </h5>
    <List>
      <Li>340+ SVG logos for popular brands</Li>
      <Li>v1: 4/5, v2: 5:Runes</Li>
      <Li>Source: <A href="https://github.com/edent/SuperTinyIcons">SuperTinyIcons</A></Li>
      <Li><A href="https://svelte-supertiny.codewithshin.com/">Icons and Docs</A></Li>
    </List>
  </Card>
</div>

<h2>Svelte 4/5</h2>

<div class="flex flex-wrap justify-center gap-4">
  <Card img={imgFlowbite.src}>
    <img src="https://badgen.net/npm/dt/flowbite-svelte-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/flowbite-svelte-icons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/flowbite-svelte-icons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://flowbite-svelte-icons.codewithshin.com/guide/svelte-4/getting-started" target="_blank">Flowbite-Svelte-Icons</A>
    </h5>
    <List>
      <Li>510+ mono and color SVG icons</Li>
      <Li>v1: 4/5, v2: 5:Runes</Li>
      <Li>Source: <A href="https://github.com/themesberg/flowbite-icons">Flowbite Icons</A></Li>
      <Li><A href="https://flowbite-svelte-icons.codewithshin.com/guide/svelte-4/getting-started">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgAwesome.src}>
    <img src="https://badgen.net/npm/dt/svelte-awesome-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-awesome-icons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-awesome-icons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-awesome-icons.codewithshin.com/guide/svelte-4/getting-started" target="_blank">Svelte-Awesome-Icons</A>
    </h5>
    <List>
      <Li>2000+ SVG icons</Li>
      <Li>v1: 4/5, v2: 5:Runes</Li>
      <Li>Source: <A href="https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs">Font Awesome</A></Li>
      <Li><A href="https://svelte-awesome-icons.codewithshin.com/guide/svelte-4/getting-started">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgHero2.src}>
    <img src="https://badgen.net/npm/dt/svelte-heros-v2" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-heros-v2" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-heros-v2" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-heros-v2.codewithshin.com/guide/svelte-4/getting-started" target="_blank">Svelte-Heros-v2</A>
    </h5>
    <List>
      <Li>870+ SVG icons</Li>
      <Li>Source: <A href="https://heroicons.com/">Heroicons v2</A></Li>
      <Li><A href="https://svelte-heros-v2.codewithshin.com/guide/svelte-4/getting-started">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgAnt.src}>
    <img src="https://badgen.net/npm/dt/svelte-ant-design-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-ant-design-icons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-ant-design-icons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-ant-design-icons.codewithshin.com/guide/svelte-4/getting-started" target="_blank">Svelte-Ant-Design-Icons</A>
    </h5>
    <List>
      <Li>780+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/ant-design/ant-design-icons">Ant Design Icons</A></Li>
      <Li><A href="https://svelte-ant-design-icons.codewithshin.com/guide/svelte-4/getting-started">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgSupertiny.src}>
    <img src="https://badgen.net/npm/dt/svelte-supertiny" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-supertiny" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-supertiny" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-supertiny.codewithshin.com" target="_blank">Svelte-Supertiny</A>
    </h5>
    <List>
      <Li>340+ SVG logos for popular brands</Li>
      <Li>v1: 4/5, v2: 5:Runes</Li>
      <Li>Source: <A href="https://github.com/edent/SuperTinyIcons">SuperTinyIcons</A></Li>
      <Li><A href="https://svelte-supertiny.codewithshin.com/">Icons and Docs</A></Li>
    </List>
  </Card>

  <Card img={imgBootstrap.src}>
    <img src="https://badgen.net/npm/dt/svelte-bootstrap-svg-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-bootstrap-svg-icons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-bootstrap-svg-icons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-bootstrap-svg-icons.codewithshin.com/" target="_blank">Svelte-Bootstrap-Svg-Icons</A>
    </h5>
    <List>
      <Li>1950+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/twbs/icons">Bootstrap icons</A></Li>
      <Li><A href="https://svelte-bootstrap-svg-icons/codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgBoxicons.src}>
    <img src="https://badgen.net/npm/dt/svelte-boxicons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-boxicons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-boxicons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-boxicons.codewithshin.com" target="_blank">Svelte-Boxicons</A>
    </h5>
    <List>
      <Li>1500+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/atisawd/boxicons/">Boxicons</A></Li>
      <Li><A href="https://svelte-boxicons.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgCircleFlags.src}>
    <img src="https://badgen.net/npm/dt/svelte-circle-flags" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-circle-flags" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-circle-flags" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-circle-flags.codewithshin.com" target="_blank">Svelte-Circle-Flags</A>
    </h5>
    <List>
      <Li>380+ SVG Circle Flag icons</Li>
      <Li>Source: <A href="https://github.com/HatScripts/circle-flags">Circle-Flags</A></Li>
      <Li><A href="https://svelte-circle-flags/codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgCoreui.src}>
    <img src="https://badgen.net/npm/dt/svelte-coreui-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-coreui-icons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-coreui-icons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-coreui-icons.codewithshin.com" target="_blank">Svelte-Coreui-Icons</A>
    </h5>
    <List>
      <Li>1500+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/coreui/coreui-icons">CoreUI Icons</A></Li>
      <Li><A href="https://svelte-coreui-icons.codewithshin.com/">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgCrypto.src}>
    <img src="https://badgen.net/npm/dt/svelte-cryptocurrency-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-cryptocurrency-icons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-cryptocurrency-icons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-cryptocurrency-icons.codewithshin.com/" target="_blank">Svelte-Cryptocurrency-Icons</A>
    </h5>
    <List>
      <Li>470+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/spothq/cryptocurrency-icons">Cryptocurrency icons</A></Li>
      <Li><A href="https://svelte-cryptocurrency-icons.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgCssgg.src}>
    <img src="https://badgen.net/npm/dt/svelte-cssgg-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-cssgg-icons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-cssgg-icons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-cssgg-icons.codewithshin.com" target="_blank">Svelte-Cssgg-Icons</A>
    </h5>
    <List>
      <Li>700+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/astrit/css.gg">css.gg</A></Li>
      <Li><A href="https://svelte-cssgg-icons.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgEvil.src}>
    <img src="https://badgen.net/npm/dt/svelte-evil-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-evil-icons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-evil-icons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-evil-icons.codewithshin.com" target="_blank">Svelte-Evil-Icons</A>
    </h5>
    <List>
      <Li>70+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/evil-icons/evil-icons">Evil Icons</A></Li>
      <Li><A href="https://svelte-evil-icons.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgFeather.src}>
    <img src="https://badgen.net/npm/dt/svelte-feathers" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-feathers" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-feathers" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-feathers.codewithshin.com/" target="_blank">Svelte-Feathers</A>
    </h5>
    <List>
      <Li>280+ SVG icons</Li>
      <Li>Source: <A href="https://feathericons.com/">Feather-icons</A></Li>
      <Li><A href="https://svelte-feathers.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgFile.src}>
    <img src="https://badgen.net/npm/dt/svelte-file-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-file-icons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-file-icons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-file-icons.codewithshin.com" target="_blank">Svelte-File-Icons</A>
    </h5>
    <List>
      <Li>930+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/file-icons/icons">File icons</A></Li>
      <Li><A href="https://svelte-file-icons.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgFlagIcons.src}>
    <img src="https://badgen.net/npm/dt/svelte-flag-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-flag-icons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-flag-icons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-flag-icons.codewithshin.com/" target="_blank">Svelte-Flag-Icons</A>
    </h5>
    <List>
      <Li>260+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/lipis/flag-icons">Flag Icons</A></Li>
      <Li><A href="https://svelte-flag-icons.codewithshin.com/">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgFlags.src}>
    <img src="https://badgen.net/npm/dt/svelte-flags" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-flags" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-flags" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-flags.codewithshin.com/" target="_blank">Svelte-Flags</A>
    </h5>
    <List>
      <Li>250+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/hampusborgos/country-flags">Country flags</A></Li>
      <Li><A href="https://svelte-flags.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>

  <Card img={imgGoogle.src}>
    <img src="https://badgen.net/npm/dt/svelte-google-materialdesign-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-google-materialdesign-icons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-google-materialdesign-icons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-google-materialdesign-icons.codewithshin.com/" target="_blank">Svelte-Google-Materialdesign-Icons</A>
    </h5>
    <List>
      <Li>2120+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/marella/material-design-icons/tree/main/svg">Material-Design-Icons</A></Li>
      <Li><A href="https://svelte-google-materialdesign-icons.codewithshin.com/">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgHero.src}>
    <img src="https://badgen.net/npm/dt/svelte-heros" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-heros" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-heros" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-heros.codewithshin.com/" target="_blank">Svelte-Heros</A>
    </h5>
    <List>
      <Li>580+ SVG icons</Li>
      <Li>Source: <A href="https://heroicons.com/">Heroicons</A></Li>
      <Li><A href="https://svelte-heros.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgIon.src}>
    <img src="https://badgen.net/npm/dt/svelte-ionicons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-ionicons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-ionicons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-ionicons.codewithshin.com" target="_blank">Svelte-Ionicons</A>
    </h5>
    <List>
      <Li>1330+ SVG icons</Li>
      <Li>Source: <A href="https://ionic.io/ionicons">Ionicicons</A></Li>
      <Li><A href="https://svelte-ionicons.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgLucide.src}>
    <img src="https://badgen.net/npm/dt/svelte-lucide" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-lucide" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-lucide" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-lucide.codewithshin.com/" target="_blank">Svelte-Lucide</A>
    </h5>
    <List>
      <Li>1460+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/lucide-icons/lucide">Lucide icons</A></Li>
      <Li><A href="https://svelte-lucide.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgMaterial.src}>
    <img src="https://badgen.net/npm/dt/svelte-materialdesign-icons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-materialdesign-icons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-materialdesign-icons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-materialdesign-icons.codewithshin.com" target="_blank">Svelte-Materialdesign-Icons</A>
    </h5>
    <List>
      <Li>7330+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/Templarian/MaterialDesign">MaterialDesign</A></Li>
      <Li><A href="https://svelte-materialdesign-icons.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>

  <Card img={imgOct.src}>
    <img src="https://badgen.net/npm/dt/svelte-oct" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-oct" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-oct" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-oct.codewithshin.com/" target="_blank">Svelte-Oct</A>
    </h5>
    <List>
      <Li>270+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/primer/octicons">Octicons</A></Li>
      <Li><A href="https://svelte-oct.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>

  <Card img={imgRadix.src}>
    <img src="https://badgen.net/npm/dt/svelte-radix" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-radix" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-radix" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-radix.codewithshin.com/" target="_blank">Svelte-Radix</A>
    </h5>
    <List>
      <Li>310+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/radix-ui/icons">Radix icons</A></Li>
      <Li><A href="https://svelte-radix.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>

  <Card img={imgRemix.src}>
    <img src="https://badgen.net/npm/dt/svelte-remix" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-remix" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-remix" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-remix.codewithshin.com/" target="_blank">Svelte-Remix</A>
    </h5>
    <List>
      <Li>2270+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/Remix-Design/RemixIcon">RemixIcon</A></Li>
      <Li><A href="https://svelte-remix.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>

  <Card img={imgSimple.src}>
    <img src="https://badgen.net/npm/dt/svelte-simples" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-simples" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-simples" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-simples.codewithshin.com/" target="_blank">Svelte-Simples</A>
    </h5>
    <List>
      <Li>2620+ SVG icons for popular brands</Li>
      <Li>Source: <A href="https://github.com/simple-icons/simple-icons/">Simple-icons</A></Li>
      <Li><A href="https://svelte-simples.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
  <Card img={imgTabler.src}>
    <img src="https://badgen.net/npm/dt/svelte-tabler" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-tabler" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-tabler" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-tabler.codewithshin.com/" target="_blank">Svelte-Tabler</A>
    </h5>
    <List>
      <Li>4600+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/tabler/tabler-icons">Tabler Icons</A></Li>
      <Li><A href="https://svelte-tabler.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>

  <Card img={imgTeeny.src}>
    <img src="https://badgen.net/npm/dt/svelte-teenyicons" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-teenyicons" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-teenyicons" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-teenyicons.codewithshin.com/" target="_blank">Svelte-Teenyicons</A>
    </h5>
    <List>
      <Li>600+ SVG icons</Li>
      <Li>Source: <A href="https://github.com/teenyicons/teenyicons">Teenyicons</A></Li>
      <Li><A href="https://svelte-teenyicons.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>

  <Card img={imgTwemoji.src}>
    <img src="https://badgen.net/npm/dt/svelte-twitter-emoji" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-twitter-emoji" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-twitter-emoji" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-twitter-emoji.codewithshin.com/" target="_blank">Svelte-Twitter-Emoji</A>
    </h5>
    <List>
      <Li>3600+ Twitter emoji SVG color icons</Li>
      <Li>Source: <A href="https://github.com/twitter/twemoji">Twemoji</A></Li>
      <Li><A href="https://svelte-twitter-emoji.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>

  <Card img={imgWeather.src}>
    <img src="https://badgen.net/npm/dt/svelte-weather" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-weather" alt="weekly download number" class="inline" />
    <img src="https://img.shields.io/npm/v/svelte-weather" alt="npm" class="inline" >
    <h5 class={hFiveClass}>
      <A href="https://svelte-weather.codewithshin.com/" target="_blank">Svelte-Weather</A>
    </h5>
    <List>
      <Li>210+ Weather SVG icons</Li>
      <Li>Source: <A href="https://github.com/erikflowers/weather-icons">weather-icons</A></Li>
      <Li><A href="https://svelte-weather.codewithshin.com">Icons and Docs</A></Li>
    </List>
  </Card>
</div>
