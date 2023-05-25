<script lang="ts">
  import { Card, Badge } from 'flowbite-svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import { page } from '$app/stores';
  import type { PageData } from '../$types';
  let data: PageData = $page.data;

  function formatNumber(number: number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    } else {
      return number.toString();
    }
  }

  let imgAnt = {
    src: '/images/resized/ant.webp',
    alt: 'Ant Design icons'
  };
  let imgAwesome = {
    src: '/images/resized/awesome.webp',
    alt: 'Font Awesome icons'
  };
  let imgBootstrap = {
    src: '/images/resized/bootstrap1.webp',
    alt: 'Bootstrap icons'
  };
  let imgCrypto = {
    src: '/images/resized/crypto1.webp',
    alt: 'Cryptocurrency icons'
  };
  let imgCircleFlags = {
    src: '/images/resized/circle-flags.webp',
    alt: 'Circle Flags'
  };
  let imgFeather = {
    src: '/images/resized/feather.webp',
    alt: 'Feather icons'
  };
  let imgFile = {
    src: '/images/resized/fileicons.webp',
    alt: 'File icons'
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
    alt: 'Google Materialdesign icons'
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
    alt: 'Material Design icons'
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
    alt: 'Tabler icons'
  };
  let imgTeeny = {
    src: '/images/resized/teeny1.webp',
    alt: 'Teeny icons'
  };
  let imgTwemoji = {
    src: '/images/resized/twemoji2.webp',
    alt: 'Twitter emoji'
  };
  let imgWeather = {
    src: '/images/resized/weather1.webp',
    alt: 'Weather icons'
  };
  let description =
    '20+ Icon sets from Font Awesome, Bootstrap, Flag, Cryptocurrency, Heroicons, File icons, Weather, Twitter emoji, Tabler icons and more.';
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

<h1>SVG Icon Sets for Svelte</h1>

<h2>Support all CSS frameworks</h2>

<div class="flex flex-wrap justify-center gap-4 pb-8">
  <Badge large>Total downloads: {formatNumber(data.totalDownloads)}</Badge>
  <Badge color="green" large>Weekly downloads: {formatNumber(data.weeklyDownloads)}</Badge>
</div>

<div class="flex flex-wrap justify-center gap-4">
  <Card img={imgAnt.src} href="https://svelte-ant-design-icons.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Ant-Design-Icons
    </h5>
    <p>
      780+ SVG icons from <a href="https://github.com/ant-design/ant-design-icons"
        >Ant Design Icons</a
      >.<br />
      <a href="https://github.com/shinokada/svelte-ant-design-icons/blob/main/docs/icon-list.md"
        >Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/375c734a6ec74f44adfe4aa76b117ab9?version=3.50.1">REPL 1,</a>
      <a href="https://svelte.dev/repl/38a6fcd635c14255b7a30c1a7d4b05c2?version=3.50.1">REPL 2</a>
    </p>
  </Card>

  <Card img={imgAwesome.src} href="https://svelte-awesome-icons.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Awesome-Icons
    </h5>
    <p>
      2000+ SVG icons from <a href="https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs"
        >Font Awesome</a
      >.<br />
      <a href="https://github.com/shinokada/svelte-awesome-icons/blob/main/docs/icon-list.md"
        >Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/c0045886b264408fba13f1de70c42932?version=3.48.0">REPL</a>
    </p>
  </Card>

  <Card img={imgBootstrap.src} href="https://svelte-bootstrap-svg-icons.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Bootstrap-Svg-Icons
    </h5>
    <p>
      1660+ SVG icons from <a href="https://github.com/twbs/icons">Bootstrap icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-bootstrap-svg-icons/blob/main/docs/icon-list.md"
        >Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/1613cc34aef7417783284b74e250c8e8?version=3.48.0">REPL</a>
    </p>
  </Card>

  <Card img={imgCircleFlags.src} href="https://svelte-circle-flags.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Circle-Flags
    </h5>
    <p>
      330+ SVG icons from <a href="https://github.com/HatScripts/circle-flags">Circle-Flags</a>.<br
      />
      <a href="https://github.com/shinokada/svelte-circle-flags/blob/main/docs/icon-list.md"
        >Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/382095078be04da7a5008b7f5e41d5c8?version=3.48.0">REPL</a>
    </p>
  </Card>

  <Card img={imgCrypto.src} href="https://svelte-cryptocurrency-icons.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Cryptocurrency-Icons
    </h5>
    <p>
      470+ SVG icons from
      <a href="https://github.com/spothq/cryptocurrency-icons">Cryptocurrency icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-cryptocurrency-icons/blob/main/docs/icon-list.md"
        >Icon names</a
      >
    </p>
  </Card>

  <Card img={imgFeather.src} href="https://svelte-feathers.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Feathers
    </h5>
    <p>
      280+ SVG icons from <a href="https://feathericons.com/">Feather-icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-feathers/blob/main/docs/icon-list.md"
        >Icon names</a
      >
    </p>
  </Card>

  <Card img={imgFlagIcons.src} href="https://svelte-flag-icons.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Flag-Icons
    </h5>
    <p>
      260+ SVG icons from <a href="https://github.com/lipis/flag-icons">Flag Icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-flag-icons/blob/main/docs/icon-list.md"
        >Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/70a4c2d5242f4cfa8dba85529184d7a3?version=3.48.0">REPL</a>
    </p>
  </Card>

  <Card img={imgFlags.src} href="https://svelte-flags.codewithshin.com/">
    <img src="https://badgen.net/npm/dt/svelte-flags" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-flags" alt="weekly download number" class="inline" />
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Flags
    </h5>
    <p>
      250+ SVG icons from <a href="https://github.com/hampusborgos/country-flags">Country flags</a
      >.<br />
      <a href="https://github.com/shinokada/svelte-flags/blob/main/flags.md">Icon names</a>
    </p>
  </Card>

  <Card img={imgFile.src} href="https://svelte-file-icons.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-File-Icons
    </h5>
    <p>
      930+ SVG icons from <a href="https://github.com/file-icons/icons">File icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-file-icons/blob/main/docs/icon-list.md"
        >Icon names</a
      >
      <br />
      <a href="https://svelte.dev/repl/985ea64e08a942b493afa91538fef9b1?version=3.48.0">REPL</a>
    </p>
  </Card>

  <Card img={imgGoogle.src} href="https://svelte-google-materialdesign-icons.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Google-Materialdesign-Icons
    </h5>
    <p>
      10600+ SVG icons from <a href="https://github.com/material-icons/material-icons"
        >Material-Icons</a
      >.<br />
      <a
        href="https://github.com/shinokada/svelte-google-materialdesign-icons/blob/main/docs/icon-list.md"
        >Icon names</a
      >
    </p>
  </Card>

  <Card img={imgHero.src} href="https://svelte-heros.codewithshin.com/">
    <img src="https://badgen.net/npm/dt/svelte-heros" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-heros" alt="weekly download number" class="inline" />
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Heros
    </h5>
    <p>
      460+ SVG icons from <a href="https://heroicons.com/">Heroicons</a>.<br />
      <a href="https://github.com/shinokada/svelte-heros/blob/main/docs/icon-list.md">Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/48606ee88712441caebd7d09aa62602c?version=3.48.0">REPL</a>
    </p>
  </Card>

  <Card img={imgHero2.src} href="https://svelte-heros-v2.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Heros-v2
    </h5>
    <p>
      260+ SVG icons from <a href="https://heroicons.com/">Heroicons v2</a>.<br />
      <a href="https://github.com/shinokada/svelte-heros-v2/blob/main/docs/icon-list.md"
        >Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/1948d7b5157f44709cff380d9783342c?version=3.49.0">REPL 1</a>
      <a href="https://svelte.dev/repl/e26c4ea516a0493cb64797879b1fe46d?version=3.49.0">REPL 2</a>
    </p>
  </Card>

  <Card img={imgIon.src} href="https://svelte-ionicons.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Ionicons
    </h5>
    <p>
      1330+ SVG icons from <a href="https://ionic.io/ionicons">Ionicicons</a>.<br />
      <a href="https://github.com/shinokada/svelte-ionicons/blob/main/docs/icon-list.md"
        >Icon names</a
      >
    </p>
  </Card>

  <Card img={imgLucide.src} href="https://svelte-lucide.codewithshin.com/">
    <img src="https://badgen.net/npm/dt/svelte-lucide" alt="total download number" class="inline" />
    <img
      src="https://badgen.net/npm/dw/svelte-lucide"
      alt="weekly download number"
      class="inline"
    />
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Lucide
    </h5>
    <p>
      590+ SVG icons from <a href="https://github.com/lucide-icons/lucide">Lucide icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-lucide/blob/main/docs/icon-list.md">Icon names</a
      >
    </p>
  </Card>

  <Card img={imgMaterial.src} href="https://svelte-materialdesign-icons.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Materialdesign-Icons
    </h5>
    <p>
      6980+ SVG icons from <a href="https://github.com/Templarian/MaterialDesign">MaterialDesign</a
      >.<br />
      <a href="https://github.com/shinokada/svelte-materialdesign/blob/main/docs/icon-list.md"
        >Icon names</a
      >
    </p>
  </Card>

  <Card img={imgOct.src} href="https://svelte-oct.codewithshin.com/">
    <img src="https://badgen.net/npm/dt/svelte-oct" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-oct" alt="weekly download number" class="inline" />
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Svelte-Oct</h5>
    <p>
      500+ SVG icons from <a href="https://github.com/primer/octicons">Octicons</a>.<br />
      <a href="https://github.com/shinokada/svelte-oct/blob/main/docs/icon-list.md">Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/fccdaf257870448bbb6b924fda6c3a5e?version=3.49.0">REPL</a>
    </p>
  </Card>

  <Card img={imgRadix.src} href="https://svelte-radix.codewithshin.com/">
    <img src="https://badgen.net/npm/dt/svelte-radix" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-radix" alt="weekly download number" class="inline" />
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Radix
    </h5>
    <p>
      310+ SVG icons from <a href="https://github.com/radix-ui/icons">Radix icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-radix/blob/main/docs/icon-list.md">Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/fb0def38847240f3a51460a56bf53225?version=3.49.0">REPL</a>
    </p>
  </Card>

  <Card img={imgRemix.src} href="https://svelte-remix.codewithshin.com/">
    <img src="https://badgen.net/npm/dt/svelte-remix" alt="total download number" class="inline" />
    <img src="https://badgen.net/npm/dw/svelte-remix" alt="weekly download number" class="inline" />
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Remix
    </h5>
    <p>
      2270+ SVG icons from <a href="https://github.com/Remix-Design/RemixIcon">RemixIcon</a>.<br />
      <a href="https://github.com/shinokada/svelte-remix/blob/main/docs/icon-list.md">Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/60e7000b54004872aa4006535fcef7fd?version=3.48.0">REPL</a>
    </p>
  </Card>

  <Card img={imgSimple.src} href="https://svelte-simples.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Simples
    </h5>
    <p>
      2230+ SVG icons for popular brands from <a href="https://simpleicons.org/s">Simple-icons</a
      >.<br />
      <a href="https://github.com/shinokada/svelte-simples/blob/main/icon-names.md">Icon names</a>
    </p>
  </Card>

  <Card img={imgTabler.src} href="https://svelte-tabler.codewithshin.com/">
    <img src="https://badgen.net/npm/dt/svelte-tabler" alt="total download number" class="inline" />
    <img
      src="https://badgen.net/npm/dw/svelte-tabler"
      alt="weekly download number"
      class="inline"
    />
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Tabler
    </h5>
    <p>
      1970+ SVG icons from <a href="https://github.com/tabler/tabler-icons">Tabler Icons</a>.<br />
      <a href="https://github.com/shinokada/svelte-tabler/blob/main/docs/icon-list.md">Icon names</a
      ><br />
      <a href="https://svelte.dev/repl/55ccaffe3d414235a6bb554ffd98f4bc?version=3.48.0">REPL 1</a>,
      <a href="https://svelte.dev/repl/b63ed92a79a047bdb2017fac63624130?version=3.48.0">REPL 2</a>
    </p>
  </Card>

  <Card img={imgTeeny.src} href="https://svelte-teenyicons.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Teenyicons
    </h5>
    <p>
      600+ SVG icons from <a href="https://github.com/teenyicons/teenyicons">Teenyicons</a>.<br />
      <a href="https://github.com/shinokada/svelte-teenyicons/blob/main/docs/icon-list.md"
        >Icon names</a
      >
    </p>
  </Card>

  <Card img={imgTwemoji.src} href="https://svelte-twitter-emoji.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Twitter-Emoji
    </h5>
    <p>
      3600+ Twitter emoji SVG color icons from <a href="https://github.com/twitter/twemoji"
        >Twemoji</a
      >.<br />
      <a href="https://github.com/shinokada/svelte-twitter-emoji/blob/main/docs/icon-list.md"
        >Icon names</a
      ><br />
    </p>
  </Card>

  <Card img={imgWeather.src} href="https://svelte-weather.codewithshin.com/">
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
    <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Svelte-Weather
    </h5>
    <p>
      210+ Weather SVG icons from <a href="https://github.com/erikflowers/weather-icons"
        >weather-icons</a
      >.<br />
      <a href="https://github.com/shinokada/svelte-weather/blob/main/docs/icon-list.md"
        >Icon names</a
      ><br />
    </p>
  </Card>
</div>
