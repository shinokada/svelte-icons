<script lang="ts">
  import  Card from 'flowbite-svelte/Card.svelte';
  import  Badge from 'flowbite-svelte/Badge.svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import { page } from '$app/stores';
  import type { PageData } from '../$types';
  // let data: PageData = $page.data;
  import { onMount } from 'svelte';

let totalDownloads = 0;
let weeklyDownloads = 0;

onMount(async () => {
  try {
    const libs = [
      // 'flowbite-svelte-icons',
      'svelte-ant-design-icons',
      'svelte-awesome-icons',
      'svelte-bootstrap-svg-icons',
      // 'svelte-boxicons',
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
    
    const today = new Date();
    const todayString = today.toISOString().slice(0, 10);
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);
    const oneWeekAgoString = oneWeekAgo.toISOString().slice(0, 10);
    
    const weeklyPromises = libs.map(lib => fetch(
        `https://api.npmjs.org/downloads/point/${oneWeekAgoString}:${todayString}/${lib}`
    ));
    const totalPromises = libs.map(lib => fetch(
        `https://api.npmjs.org/downloads/point/2020-01-01:${todayString}/${lib}`
    ));
    
    const weeklyResponses = await Promise.all(weeklyPromises);
    const totalResponses = await Promise.all(totalPromises);
    
    for (const response of weeklyResponses) {
        const data = await response.json();
        weeklyDownloads += data.downloads;
    }
    
    for (const response of totalResponses) {
        const data = await response.json();
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
  let description =
    '20+ Icon sets from Font Awesome, Bootstrap, Flag, Cryptocurrency, Heroicons, File icons, Weather, Twitter emoji, Tabler icons and more.';
  const hFiveClass = 'my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline'
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
    site_name: 'Svelte SVG Icon Sets'
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
  <Badge large color="pink">Svelte 3 & 4</Badge>
  <Badge large color="blue">Support CSS frameworks</Badge>
  <Badge large color="purple">Faster compling</Badge>
  <Badge large color="yellow">IDE Support</Badge>
  <Badge color="dark" large>Total downloads: {formatNumber(totalDownloads)}</Badge>
  <Badge color="green" large>Weekly downloads: {formatNumber(weeklyDownloads)}</Badge>
</div>

<div class="flex flex-wrap justify-center gap-4">
  <Card img={imgFlowbite.src}>
    <h5 class="{hFiveClass}">
      <a href="https://github.com/themesberg/flowbite-svelte-icons" target="_blank">Flowbite-Svelte-Icons</a>
    </h5>
    <p>
      450+ mono and color SVG icons from <a href="https://github.com/themesberg/flowbite-icons"
        >Flowbite Icons</a
      >.<br />
      <a href="https://github.com/themesberg/flowbite-svelte-icons/blob/main/icon-list.md"
        >Icon names</a
      ><br />
      <a href="https://github.com/themesberg/flowbite-svelte-icons/blob/main/icon-images.md">Icon images</a>
    </p>
  </Card>
  <Card img={imgAnt.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-ant-design-icons"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-ant-design-icons"
      alt="weekly download number"
      class="inline"
    />
    <h5 class="{hFiveClass}">
      <a href="https://svelte-ant-design-icons.codewithshin.com/" target="_blank">Svelte-Ant-Design-Icons</a>
    </h5>
    <p>
      780+ SVG icons from <a href="https://github.com/ant-design/ant-design-icons"
        >Ant Design Icons</a
      >.<br />
      <a href="https://github.com/shinokada/svelte-ant-design-icons/blob/main/icon-list.md"
        >Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/375c734a6ec74f44adfe4aa76b117ab9?version=3.50.1">REPL 1,</a>
      <a href="https://svelte.dev/repl/38a6fcd635c14255b7a30c1a7d4b05c2?version=3.50.1">REPL 2</a>
    </p>
  </Card>

  <Card img={imgAwesome.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-awesome-icons"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-awesome-icons"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-awesome-icons.codewithshin.com/" target="_blank">Svelte-Awesome-Icons</a>
    </h5>
    <p>
      2000+ SVG icons from <a href="https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs"
        >Font Awesome</a
      >.<br />
      <a href="https://github.com/shinokada/svelte-awesome-icons/blob/main/icon-list.md"
        >Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/c0045886b264408fba13f1de70c42932?version=3.48.0">REPL</a>
    </p>
  </Card>

  <Card img={imgBootstrap.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-bootstrap-svg-icons"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-bootstrap-svg-icons"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-bootstrap-svg-icons.codewithshin.com/" target="_blank">Svelte-Bootstrap-Svg-Icons</a>
    </h5>
    <p>
      1660+ SVG icons from <a href="https://github.com/twbs/icons">Bootstrap icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-bootstrap-svg-icons/blob/main/icon-list.md"
        >Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/1613cc34aef7417783284b74e250c8e8?version=3.48.0">REPL</a>
    </p>
  </Card>

  <Card img={imgBoxicons.src}>
    <Badge large color="red" class="dark:text-white px-4">New</Badge>
    <img
    src="https://badgen.net/npm/dt/svelte-boxicons"
    alt="total download number"
    class="inline"
  />
  <img
    src="https://badgen.net/npm/dw/svelte-boxicons"
    alt="weekly download number"
    class="inline"
  />
   <h5 class="{hFiveClass}">
      <a href="https://shinokada.github.io/svelte-boxicons/" target="_blank">Svelte-Boxicons</a>
    </h5>
    <p>
      1500+ SVG icons from <a href="https://github.com/atisawd/boxicons/">Boxicons</a>.<br />
      <a href="https://github.com/shinokada/svelte-boxicons/blob/main/icon-list.md"
        >Icon names</a
      >
    </p>
  </Card>

  <Card img={imgCircleFlags.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-circle-flags"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-circle-flags"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-circle-flags.codewithshin.com/" target="_blank">Svelte-Circle-Flags</a>
    </h5>
    <p>
      330+ SVG icons from <a href="https://github.com/HatScripts/circle-flags">Circle-Flags</a>.<br
      />
      <a href="https://github.com/shinokada/svelte-circle-flags/blob/main/icon-list.md"
        >Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/382095078be04da7a5008b7f5e41d5c8?version=3.48.0">REPL</a>
    </p>
  </Card>

  <Card img={imgCrypto.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-cryptocurrency-icons"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-cryptocurrency-icons"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-cryptocurrency-icons.codewithshin.com/" target="_blank">Svelte-Cryptocurrency-Icons</a>
    </h5>
    <p>
      470+ SVG icons from
      <a href="https://github.com/spothq/cryptocurrency-icons">Cryptocurrency icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-cryptocurrency-icons/blob/main/icon-list.md"
        >Icon names</a
      >
    </p>
  </Card>

  <Card img={imgFeather.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-feathers"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-feathers"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-feathers.codewithshin.com/" target="_blank">Svelte-Feathers</a>
    </h5>
    <p>
      280+ SVG icons from <a href="https://feathericons.com/">Feather-icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-feathers/blob/main/icon-list.md"
        >Icon names</a
      >
    </p>
  </Card>

  <Card img={imgFlagIcons.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-flag-icons"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-flag-icons"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-flag-icons.codewithshin.com/" target="_blank">Svelte-Flag-Icons</a>
    </h5>
    <p>
      260+ SVG icons from <a href="https://github.com/lipis/flag-icons">Flag Icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-flag-icons/blob/main/icon-list.md"
        >Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/70a4c2d5242f4cfa8dba85529184d7a3?version=3.48.0">REPL</a>
    </p>
  </Card>

  <Card img={imgFlags.src}>
    <img src="https://badgen.net/npm/dt/svelte-flags" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-flags" alt="weekly download number" class="inline" />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-flags.codewithshin.com/" target="_blank">Svelte-Flags</a>
    </h5>
    <p>
      250+ SVG icons from <a href="https://github.com/hampusborgos/country-flags">Country flags</a
      >.<br />
      <a href="https://github.com/shinokada/svelte-flags/blob/main/flags.md">Icon names</a>
    </p>
  </Card>

  <Card img={imgFile.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-file-icons"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-file-icons"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-file-icons.codewithshin.com/" target="_blank">Svelte-File-Icons</a>
    </h5>
    <p>
      930+ SVG icons from <a href="https://github.com/file-icons/icons">File icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-file-icons/blob/main/icon-list.md"
        >Icon names</a
      >
      <br />
      <a href="https://svelte.dev/repl/985ea64e08a942b493afa91538fef9b1?version=3.48.0">REPL</a>
    </p>
  </Card>

  <Card img={imgGoogle.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-google-materialdesign-icons"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-google-materialdesign-icons"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-google-materialdesign-icons.codewithshin.com/" target="_blank">Svelte-Google-Materialdesign-Icons</a>
    </h5>
    <p>
      10600+ SVG icons from <a href="https://github.com/material-icons/material-icons"
        >Material-Icons</a
      >.<br />
      <a
        href="https://github.com/shinokada/svelte-google-materialdesign-icons/blob/main/icon-list.md"
        >Icon names</a
      >
    </p>
  </Card>

  <Card img={imgHero.src}>
    <img src="https://badgen.net/npm/dt/svelte-heros" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-heros" alt="weekly download number" class="inline" />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-heros.codewithshin.com/" target="_blank">Svelte-Heros</a>
    </h5>
    <p>
      460+ SVG icons from <a href="https://heroicons.com/">Heroicons</a>.<br />
      <a href="https://github.com/shinokada/svelte-heros/blob/main/icon-list.md">Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/48606ee88712441caebd7d09aa62602c?version=3.48.0">REPL</a>
    </p>
  </Card>

  <Card img={imgHero2.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-heros-v2"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-heros-v2"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-heros-v2.codewithshin.com/" target="_blank">Svelte-Heros-v2</a>
    </h5>
    <p>
      260+ SVG icons from <a href="https://heroicons.com/">Heroicons v2</a>.<br />
      <a href="https://github.com/shinokada/svelte-heros-v2/blob/main/icon-list.md"
        >Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/1948d7b5157f44709cff380d9783342c?version=3.49.0">REPL 1</a>
      <a href="https://svelte.dev/repl/e26c4ea516a0493cb64797879b1fe46d?version=3.49.0">REPL 2</a>
    </p>
  </Card>

  <Card img={imgIon.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-ionicons"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-ionicons"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-ionicons.codewithshin.com/" target="_blank">Svelte-Ionicons</a>
    </h5>
    <p>
      1330+ SVG icons from <a href="https://ionic.io/ionicons">Ionicicons</a>.<br />
      <a href="https://github.com/shinokada/svelte-ionicons/blob/main/icon-list.md"
        >Icon names</a
      >
    </p>
  </Card>

  <Card img={imgLucide.src}>
    <img src="https://badgen.net/npm/dt/svelte-lucide" alt="total download number" class="inline" />
    <img
      src="https://badgen.net/npm/dw/svelte-lucide"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-lucide.codewithshin.com/" target="_blank">Svelte-Lucide</a>
    </h5>
    <p>
      590+ SVG icons from <a href="https://github.com/lucide-icons/lucide">Lucide icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-lucide/blob/main/icon-list.md">Icon names</a
      >
    </p>
  </Card>

  <Card img={imgMaterial.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-materialdesign-icons"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-materialdesign-icons"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-materialdesign-icons.codewithshin.com/" target="_blank">Svelte-Materialdesign-Icons</a>
    </h5>
    <p>
      6980+ SVG icons from <a href="https://github.com/Templarian/MaterialDesign">MaterialDesign</a
      >.<br />
      <a href="https://github.com/shinokada/svelte-materialdesign/blob/main/icon-list.md"
        >Icon names</a
      >
    </p>
  </Card>

  <Card img={imgOct.src}>
    <img src="https://badgen.net/npm/dt/svelte-oct" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-oct" alt="weekly download number" class="inline" />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-oct.codewithshin.com/" target="_blank">Svelte-Oct</a>
    </h5>
    <p>
      500+ SVG icons from <a href="https://github.com/primer/octicons">Octicons</a>.<br />
      <a href="https://github.com/shinokada/svelte-oct/blob/main/icon-list.md">Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/fccdaf257870448bbb6b924fda6c3a5e?version=3.49.0">REPL</a>
    </p>
  </Card>

  <Card img={imgRadix.src}>
    <img src="https://badgen.net/npm/dt/svelte-radix" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-radix" alt="weekly download number" class="inline" />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-radix.codewithshin.com/" target="_blank">Svelte-Radix</a>
    </h5>
    <p>
      310+ SVG icons from <a href="https://github.com/radix-ui/icons">Radix icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-radix/blob/main/icon-list.md">Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/fb0def38847240f3a51460a56bf53225?version=3.49.0">REPL</a>
    </p>
  </Card>

  <Card img={imgRemix.src}>
    <img src="https://badgen.net/npm/dt/svelte-remix" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-remix" alt="weekly download number" class="inline" />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-remix.codewithshin.com/" target="_blank">Svelte-Remix</a>
    </h5>
    <p>
      2270+ SVG icons from <a href="https://github.com/Remix-Design/RemixIcon">RemixIcon</a>.<br />
      <a href="https://github.com/shinokada/svelte-remix/blob/main/icon-list.md">Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/60e7000b54004872aa4006535fcef7fd?version=3.48.0">REPL</a>
    </p>
  </Card>

  <Card img={imgSimple.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-simples"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-simples"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-simples.codewithshin.com/" target="_blank">Svelte-Simples</a>
    </h5>
    <p>
      2230+ SVG icons for popular brands from <a href="https://simpleicons.org/s">Simple-icons</a
      >.<br />
      <a href="https://github.com/shinokada/svelte-simples/blob/main/icon-names.md">Icon names</a>
    </p>
  </Card>

  <Card img={imgTabler.src}>
    <img src="https://badgen.net/npm/dt/svelte-tabler" alt="total download number" class="inline" />
    <img
      src="https://badgen.net/npm/dw/svelte-tabler"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-tabler.codewithshin.com/" target="_blank">Svelte-Tabler</a>
    </h5>
    <p>
      1970+ SVG icons from <a href="https://github.com/tabler/tabler-icons">Tabler Icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-tabler/blob/main/icon-list.md">Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/55ccaffe3d414235a6bb554ffd98f4bc?version=3.48.0">REPL 1</a>,
      <a href="https://svelte.dev/repl/b63ed92a79a047bdb2017fac63624130?version=3.48.0">REPL 2</a>
    </p>
  </Card>

  <Card img={imgTeeny.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-teenyicons"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-teenyicons"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-teenyicons.codewithshin.com/" target="_blank">Svelte-Teenyicons</a>
    </h5>
    <p>
      600+ SVG icons from <a href="https://github.com/teenyicons/teenyicons">Teenyicons</a>.<br />
      <a href="https://github.com/shinokada/svelte-teenyicons/blob/main/icon-list.md"
        >Icon names</a
      >
    </p>
  </Card>

  <Card img={imgTwemoji.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-twitter-emoji"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-twitter-emoji"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-twitter-emoji.codewithshin.com/" target="_blank">Svelte-Twitter-Emoji</a>
    </h5>
    <p>
      3600+ Twitter emoji SVG color icons from <a href="https://github.com/twitter/twemoji"
        >Twemoji</a
      >.<br />
      <a href="https://github.com/shinokada/svelte-twitter-emoji/blob/main/icon-list.md"
        >Icon names</a
      ><br />
    </p>
  </Card>

  <Card img={imgWeather.src}>
    <img
      src="https://badgen.net/npm/dt/svelte-weather"
      alt="total download number"
      class="inline"
    />
    <img
      src="https://badgen.net/npm/dw/svelte-weather"
      alt="weekly download number"
      class="inline"
    />
   <h5 class="{hFiveClass}">
      <a href="https://svelte-weather.codewithshin.com/" target="_blank">Svelte-Weather</a>
    </h5>
    <p>
      210+ Weather SVG icons from <a href="https://github.com/erikflowers/weather-icons"
        >weather-icons</a
      >.<br />
      <a href="https://github.com/shinokada/svelte-weather/blob/main/icon-list.md"
        >Icon names</a
      ><br />
    </p>
  </Card>
</div>
