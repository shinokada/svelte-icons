<script lang="ts">
  import Card from 'svelte-5-ui-lib/Card.svelte';
  import List from 'svelte-5-ui-lib/List.svelte';
  import Li from 'svelte-5-ui-lib/Li.svelte';
  import A from 'svelte-5-ui-lib/A.svelte';
  import Badge from 'svelte-5-ui-lib/Badge.svelte';
  import { NpmVersion, NpmDownloads } from 'svelte-shields';

  import { onMount } from 'svelte';

  let totalDownloads = $state(0);

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

  const svelte5_icons = [
      {
        packageName: 'flowbite-svelte-icons',
        label: 'Flowbite Svelte Icons',
        tag: 'next',
        a11y: true,
        img : {
          src: '/images/resized/flowbite.webp',
          alt: 'Flowbite Svelte Icons'
        },
        download_color: '3FCD41',
        version_color: 'red',
        desc: '510+ mono and color SVG icons',
        source: {
          url : 'https://github.com/themesberg/flowbite-icons',
          label : 'Flowbite Icons'
        },
        repo: 'https://github.com/themesberg/flowbite-svelte-icons',
        docs: 'https://flowbite-svelte-icons.codewithshin.com/guide/svelte-5/getting-started',
      },
      {
        packageName: 'svelte-awesome-icons',
        label: 'Svelte Awesome Icons',
        tag: 'next',
        a11y: true,
        img : {
          src: '/images/resized/awesome.webp',
          alt: 'Svelte Awesome Icons'
        },
        download_color: '3FCD41',
        version_color: 'red',
        desc: '2000+ SVG icons',
        source: {
          url : 'https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs',
          label : 'Font Awesome'
        },
        repo: 'https://github.com/shinokada/svelte-awesome-icons',
        docs: 'https://svelte-awesome-icons.codewithshin.com/guide/svelte-5/getting-started',
      },
      {
        packageName: 'svelte-heros-v2',
        label: 'Svelte Heros v2',
        tag: 'next',
        a11y: true,
        img : {
          src: '/images/resized/heros.webp',
          alt: 'Svelte Heros v2: v2'
        },
        download_color: '3FCD41',
        version_color: 'red',
        desc: '870+ SVG icons',
        source: {
          url : 'https://heroicons.com/',
          label : 'Heroicons v2'
        },
        repo: 'https://github.com/shinokada/svelte-heros-v2',
        docs: 'https://svelte-heros-v2.codewithshin.com/guide/svelte-5/getting-started',
      },
      {
        packageName : 'svelte-lucide',
        label : 'Svelte Lucide',
        tag: 'next',
        a11y: true,
        img : {
          src: '/images/resized/lucide.webp',
          alt: 'Svelte Lucide'
        },
        download_color: '3FCD41',
        version_color: 'red',
        desc: '1460+ SVG icons',
        source: {
          url : 'https://github.com/lucide-icons/lucide',
          label : 'Lucide icons'
        },
        repo: 'https://github.com/shinokada/svelte-lucide',
        docs: 'https://svelte-lucide.codewithshin.com/guide/svelte-5/getting-started',
      },
      {
        packageName: 'svelte-radix',
        label: 'Svelte Radix',
        tag: 'next',
        a11y: true,
        img : {
          src: '/images/resized/radix.webp',
          alt: 'Svelte Radix'
        },
        download_color: '3FCD41',
        version_color: 'red',
        desc: '310+ SVG icons',
        source: {
          url : 'https://github.com/radix-ui/icons',
          label: 'Radix icons'
        },
        repo: 'https://github.com/shinokada/svelte-radix',
        docs: 'https://svelte-radix.codewithshin.com/guide/svelte-5/getting-started',
      },
      {
        packageName: 'svelte-ionicons',
        label: 'Svelte Ionicons',
        tag: 'next',
        a11y: true,
        img : {
          src: '/images/resized/ion.webp',
          alt: 'Svelte Ionicons'
        },
        download_color: '3FCD41',
        version_color: 'red',
        desc: '1330+ SVG icons',
        source: {
          url : 'https://ionic.io/ionicons',
          label : 'Ionicons'
        },
        repo: 'https://github.com/shinokada/svelte-ionicons',
        docs: 'https://svelte-ionicons.codewithshin.com/guide/svelte-5/getting-started',
      },
      {
        packageName: 'svelte-flags',
        label: 'Svelte Flags',
        tag: 'next',
        a11y: true,
        img : {
          src: '/images/resized/flags.webp',
          alt: 'Svelte Flags'
        },
        download_color: '3FCD41',
        version_color: 'red',
        desc: '250+ SVG icons',
        source: {
          url : 'https://github.com/hampusborgos/country-flags',
          label : 'Country flags'
        },
        repo: 'https://github.com/shinokada/svelte-flags',
        docs: 'https://svelte-flags.codewithshin.com/guide/svelte-5/getting-started',
      },
      {
        packageName: 'svelte-flag-icons',
        label: 'Svelte Flag Icons',
        tag: 'next',
        a11y: true,
        img : {
          src: '/images/resized/flag-icons3.webp',
          alt: 'Svelte Flags'
        },
        download_color: '3FCD41',
        version_color: 'red',
        desc: '260+ SVG icons',
        source: {
        url : 'https://github.com/lipis/flag-icons',
        label : 'Flag icons'
      },
      repo: 'https://github.com/shinokada/svelte-flag-icons',
      docs: 'https://svelte-flag-icons.codewithshin.com',
      },
      {
        packageName: 'svelte-remix',
        label: 'Svelte Remix',
        tag: 'next',
        a11y: true,
        img : {
          src: '/images/resized/remix1.webp',
          alt: 'Svelte Remix'
        },
        download_color: '3FCD41',
        version_color: 'red',
        desc: '2270+ SVG icons',
        source: {
          url : 'https://github.com/Remix-Design/RemixIcon',
          label : 'Remixicon'
        },
        repo: 'https://github.com/shinokada/svelte-remix',
        docs: 'https://svelte-remix.codewithshin.com/guide/svelte-5/getting-started',
      },
      {
        packageName: 'svelte-ant-design-icons',
        label: 'Svelte Ant Design Icons',
        tag: 'next',
        a11y: true,
        img : {
          src: '/images/resized/ant.webp',
          alt: 'Svelte Ant Design Icons'
        },
        download_color: '3FCD41',
        version_color: 'red',
        desc: '780+ SVG icons',
        source: {
          url : 'https://github.com/ant-design/ant-design-icons',
          label : 'Ant Design Icons'
        },
        repo: 'https://github.com/shinokada/svelte-ant-design-icons',
        docs: 'https://svelte-ant-design-icons.codewithshin.com/guide/svelte-5/getting-started',
      },
      {
        packageName: 'svelte-supertiny',
        label: 'Svelte Supertiny',
        tag: 'next',
        img : {
          src: '/images/resized/supertiny.webp',
          alt: 'Svelte Supertiny'
        },
        download_color: '3FCD41',
        version_color: 'red',
        desc: '140+ SVG logos for popular brands',
        source: {
          url : 'https://github.com/edent/SuperTinyIcons',
          label : 'SuperTinyIcons'
        },
        repo: 'https://github.com/shinokada/svelte-supertiny',
        docs: 'https://svelte-supertiny.codewithshin.com',
      }
  ]

  const svelte4_icons = [
    {
      packageName: 'flowbite-svelte-icons',
      label: 'Flowbite Svelte Icons',
      a11y: true,
      img : {
        src: '/images/resized/flowbite.webp',
        alt: 'Flowbite Svelte Icons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '510+ SVG icons',
      source: {
        url : 'https://github.com/Flowbite/flowbite-svelte-icons',
        label : 'Flowbite Svelte Icons'
      },
      repo: 'https://github.com/shinokada/flowbite-svelte-icons',
      docs: 'https://flowbite-svelte-icons.codewithshin.com/',
    },
    {
      packageName: 'svelte-awesome-icons',
      label: 'Svelte Awesome Icons',
      img : {
        src: '/images/resized/awesome.webp',
        alt: 'Svelte Awesome Icons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '2000+ SVG icons',
      source: {
        url : 'https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs',
        label : 'Font Awesome'
      },
      repo: 'https://github.com/shinokada/svelte-awesome-icons',
      docs: 'https://svelte-awesome-icons.codewithshin.com/',
    },
    {
      packageName: 'svelte-heros-v2',
      label: 'Svelte Heros v2',
      img : {
        src: '/images/resized/heros.webp',
        alt: 'Svelte Heros v2: v2'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '870+ SVG icons',
      source: {
        url : 'https://heroicons.com/',
        label : 'Heroicons v2'
      },
      repo: 'https://github.com/shinokada/svelte-heros-v2',
      docs: 'https://svelte-heros-v2.codewithshin.com/',
    },
    {
      packageName : 'svelte-lucide',
      label : 'Svelte Lucide',
      img : {
        src: '/images/resized/lucide.webp',
        alt: 'Svelte Lucide'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '1460+ SVG icons',
      source: {
        url : 'https://github.com/lucide-icons/lucide',
        label : 'Lucide icons'
      },
      repo: 'https://github.com/shinokada/svelte-lucide',
      docs: 'https://svelte-lucide.codewithshin.com/',
    },
    {
      packageName: 'svelte-radix',
      label: 'Svelte Radix',
      img : {
        src: '/images/resized/radix.webp',
        alt: 'Svelte Radix'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '310+ SVG icons',
      source: {
        url : 'https://github.com/radix-ui/icons',
        label: 'Radix icons'
      },
      repo: 'https://github.com/shinokada/svelte-radix',
      docs: 'https://svelte-radix.codewithshin.com/',
    },
    {
      packageName: 'svelte-ionicons',
      label: 'Svelte Ionicons',
      img : {
        src: '/images/resized/ion.webp',
        alt: 'Svelte Ionicons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '1330+ SVG icons',
      source: {
        url : 'https://ionic.io/ionicons',
        label : 'Ionicons'
      },
      repo: 'https://github.com/shinokada/svelte-ionicons',
      docs: 'https://svelte-ionicons.codewithshin.com/',
    },
    {
      packageName: 'svelte-flags',
      label: 'Svelte Flags',
      img : {
        src: '/images/resized/flags.webp',
        alt: 'Svelte Flags'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '250+ SVG icons',
      source: {
        url : 'https://github.com/hampusborgos/country-flags',
        label : 'Country flags'
      },
      repo: 'https://github.com/shinokada/svelte-flags',
      docs: 'https://svelte-flags.codewithshin.com/',
    },
    {
      packageName: 'svelte-remix',
      label: 'Svelte Remix',
      img : {
        src: '/images/resized/remix1.webp',
        alt: 'Svelte Remix'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '2270+ SVG icons',
      source: {
        url : 'https://github.com/Remix-Design/RemixIcon',
        label : 'Remixicon'
      },
      repo: 'https://github.com/shinokada/svelte-remix',
      docs: 'https://svelte-remix.codewithshin.com/',
    },
    {
      packageName: 'svelte-ant-design-icons',
      label: 'Svelte Ant Design Icons',
      img : {
        src: '/images/resized/ant.webp',
        alt: 'Svelte Ant Design Icons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '780+ SVG icons',
      source: {
        url : 'https://github.com/ant-design/ant-design-icons',
        label : 'Ant Design Icons'
      },
      repo: 'https://github.com/shinokada/svelte-ant-design-icons',
      docs: 'https://svelte-ant-design-icons.codewithshin.com/',
    },
    {
      packageName: 'svelte-supertiny',
      label: 'Svelte Supertiny',
      img : {
        src: '/images/resized/supertiny.webp',
        alt: 'Svelte Supertiny'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '140+ SVG logos for popular brands',
      source: {
        url : 'https://github.com/edent/SuperTinyIcons',
        label : 'SuperTinyIcons'
      },
      repo: 'https://github.com/shinokada/svelte-supertiny',
      docs: 'https://svelte-supertiny.codewithshin.com',
    },
    {
      packageName: 'svelte-bootstrap-svg-icons',
      label: 'Svelte Bootstrap SVG Icons',
      img : {
        src: '/images/resized/bootstrap1.webp',
        alt: 'Svelte Bootstrap SVG Icons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '1950+ SVG icons',
      source: {
        url : 'https://github.com/twbs/icons',
        label : 'Bootstrap icons'
      },
      repo: 'https://github.com/shinokada/svelte-bootstrap-svg-icons',
      docs: 'https://svelte-bootstrap-svg-icons.codewithshin.com',
    },
    {
      packageName: 'svelte-boxicons',
      label: 'Svelte Boxicons',
      img : {
        src: '/images/resized/boxicons.webp',
        alt: 'Svelte Boxicons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '1500+ SVG icons',
      source: {
        url : 'https://github.com/atisawd/boxicons/',
        label : 'Boxicons'
      },
      repo: 'https://github.com/shinokada/svelte-boxicons',
      docs: 'https://svelte-boxicons.codewithshin.com',
    },
    {
      packageName: 'svelte-circle-flags',
      label: 'Svelte Circle Flags',
      img : {
        src: '/images/resized/circle-flags.webp',
        alt: 'Svelte Circle Flags'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '380+ SVG circle flag icons',
      source: {
        url : 'https://github.com/HatScripts/circle-flags',
        label : 'Circle-Flags'
      },
      repo: 'https://github.com/shinokada/svelte-circle-flags',
      docs: 'https://svelte-circle-flags.codewithshin.com',
    },
    {
      packageName: 'svelte-coreui-icons',
      label: 'Svelte Coreui Icons',
      img : {
        src: '/images/resized/coreui.webp',
        alt: 'Svelte Coreui Icons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '1500+ SVG icons',
      source: {
        url : 'https://github.com/coreui/coreui-icons',
        label : 'Coreui Icons'
      },
      repo: 'https://github.com/shinokada/svelte-coreui-icons',
      docs: 'https://svelte-coreui-icons.codewithshin.com',
    },
    {
      packageName: 'svelte-cryptocurrency-icons',
      label: 'Svelte Cryptocurrency Icons',
      img : {
        src: '/images/resized/crypto.webp',
        alt: 'Svelte Cryptocurrency Icons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '470+ SVG icons',
      source: {
        url : 'https://github.com/spothq/cryptocurrency-icons',
        label : 'Cryptocurrency icons'
      },
      repo: 'https://github.com/shinokada/svelte-cryptocurrency-icons',
      docs: 'https://svelte-cryptocurrency-icons.codewithshin.com',
    },
    {
      packageName: 'svelte-cssgg-icons',
      label: 'Svelte CSSGG Icons',
      img : {
        src: '/images/resized/cssgg.webp',
        alt: 'Svelte CSSGG Icons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '700+ SVG icons',
      source: {
        url : 'https://github.com/astrit/css.gg',
        label : 'css.gg'
      },
      repo: 'https://github.com/shinokada/svelte-cssgg-icons',
      docs: 'https://svelte-cssgg-icons.codewithshin.com',
    },
    {
      packageName: 'svelte-evil-icons',
      label: 'Svelte Evil Icons',
      img : {
        src: '/images/resized/evil.webp',
        alt: 'Svelte Evil Icons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '70+ SVG icons',
      source: {
        url : 'https://github.com/evil-icons/evil-icons',
        label : 'Evil Icons'
      },
      repo: 'https://github.com/shinokada/svelte-evil-icons',
      docs: 'https://svelte-evil-icons.codewithshin.com',
    },
    {
      packageName: 'svelte-feathers',
      label: 'Svelte Feathers',
      img : {
        src: '/images/resized/feather.webp',
        alt: 'Svelte Feathers'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '280+ SVG icons',
      source: {
        url : 'https://feathericons.com/',
        label : 'Feather-icons'
      },
      repo: 'https://github.com/shinokada/svelte-feathers',
      docs: 'https://svelte-feathers.codewithshin.com',
    },
    {
      packageName: 'svelte-file-icons',
      label: 'Svelte File Icons',
      img : {
        src: '/images/resized/fileicons.webp',
        alt: 'Svelte File Icons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '930+ SVG icons',
      source: {
        url : 'https://github.com/file-icons/icons',
        label : 'File icons'
      },
      repo: 'https://github.com/shinokada/svelte-file-icons',
      docs: 'https://svelte-file-icons.codewithshin.com',
    },
    {
      packageName: 'svelte-flag-icons',
      label: 'Svelte Flag Icons',
      img : {
        src: '/images/resized/flag-icons3.webp',
        alt: 'Svelte Flag Icons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '260+ SVG icons',
      source: {
        url : 'https://github.com/lipis/flag-icons',
        label : 'Flag icons'
      },
      repo: 'https://github.com/shinokada/svelte-flag-icons',
      docs: 'https://svelte-flag-icons.codewithshin.com',
    },
    {
      packageName: 'svelte-google-materialdesign-icons',
      label: 'Svelte Google Material Design Icons',
      img : {
        src: '/images/resized/google-material.webp',
        alt: 'Svelte Google Material Design Icons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '2120+ SVG icons',
      source: {
        url : 'https://github.com/marella/material-design-icons/tree/main/svg',
        label : 'Material Design Icons'
      },
      repo: 'https://github.com/shinokada/svelte-google-materialdesign-icons',
      docs: 'https://svelte-google-materialdesign-icons.codewithshin.com',
    },
    {
      packageName: 'svelte-heros',
      label: 'Svelte Heros',
      img : {
        src: '/images/resized/heros.webp',
        alt: 'Svelte Heros'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '580+ SVG icons',
      source: {
        url : 'https://heroicons.com/',
        label : 'Heroicons'
      },
      repo: 'https://github.com/shinokada/svelte-heros',
      docs: 'https://svelte-heros.codewithshin.com',
    },
    {
      packageName: 'svelte-materialdesign-icons',
      label: 'Svelte Material Design Icons',
      img : {
        src: '/images/resized/materialdesign.webp',
        alt: 'Svelte Material Design Icons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '7330+ SVG icons',
      source: {
        url : 'https://github.com/Templarian/MaterialDesign',
        label : 'MaterialDesign'
      },
      repo: 'https://github.com/shinokada/svelte-materialdesign-icons',
      docs: 'https://svelte-materialdesign-icons.codewithshin.com',
    },
    {
      packageName: 'svelte-oct',
      label: 'Svelte Oct',
      img : {
        src: '/images/resized/octicons.webp',
        alt: 'Svelte Oct'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '270+ SVG icons',
      source: {
        url : 'https://github.com/primer/octicons',
        label : 'Octicons'
      },
      repo: 'https://github.com/shinokada/svelte-oct',
      docs: 'https://svelte-oct.codewithshin.com',
    },
    {
      packageName: 'svelte-simples',
      label: 'Svelte Simples',
      img : {
        src: '/images/resized/simple.webp',
        alt: 'Svelte Simples'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '2620+ SVG icons',
      source: {
        url : 'https://github.com/simple-icons/simple-icons/',
        label : 'Simple-icons'
      },
      repo: 'https://github.com/shinokada/svelte-simples',
      docs: 'https://svelte-simples.codewithshin.com',
    },
    {
      packageName: 'svelte-tabler',
      label: 'Svelte Tabler',
      img : {
        src: '/images/resized/tabler1.webp',
        alt: 'Svelte Tabler'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '4600+ SVG icons',
      source: {
        url : 'https://github.com/tabler/tabler-icons',
        label : 'Tabler Icons'
      },
      repo: 'https://github.com/shinokada/svelte-tabler',
      docs: 'https://svelte-tabler.codewithshin.com',
    },
    {
      packageName: 'svelte-teenyicons',
      label: 'Svelte Teenyicons',
      img : {
        src: '/images/resized/teeny1.webp',
        alt: 'Svelte Teenyicons'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '600+ SVG icons',
      source: {
        url : 'https://github.com/teenyicons/teenyicons',
        label : 'Teenyicons'
      },
      repo: 'https://github.com/shinokada/svelte-teenyicons',
      docs: 'https://svelte-teenyicons.codewithshin.com',
    },
    {
      packageName: 'svelte-twitter-emoji',
      label: 'Svelte Twitter Emoji',
      img : {
        src: '/images/resized/twemoji2.webp',
        alt: 'Svelte Twitter Emoji'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '3600+ Twitter emojiSVG color icons',
      source: {
        url : 'https://github.com/twitter/twemoji',
        label : 'Twemoji'
      },
      repo: 'https://github.com/shinokada/svelte-twitter-emoji',
      docs: 'https://svelte-twitter-emoji.codewithshin.com',
    },
    {
      packageName: 'svelte-weather',
      label: 'Svelte Weather',
      img : {
        src: '/images/resized/weather.webp',
        alt: 'Svelte Weather'
      },
      download_color: '3FCD41',
      version_color: 'blue',
      desc: '210+ SVG icons',
      source: {
        url : 'https://github.com/erikflowers/weather-icons',
        label : 'weather-icons'
      },
      repo: 'https://github.com/shinokada/svelte-weather',
      docs: 'https://svelte-weather.codewithshin.com',
    }
  ]

  const hFiveClass = 'my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ';
  const h2Class = 'text-center my-8 xl:my-12 2xl:my-16 text-4xl xl:text-5xl 2xl:text-6xl text-gray-900 dark:text-white'
</script>

{#snippet runesIcon({ packageName, label, img, download_color,
version_color, desc, source, repo, docs, tag, a11y })}
<Card img={img}>
  <NpmDownloads packageName={packageName} color={download_color} logo='' interval='dy' class="inline my-2"/>
  <NpmDownloads packageName={packageName} color={download_color} logo='' interval='dw' class="inline"/>
  {#if a11y}
  <Badge color="pink" divclass="dark:text-white px-2 my-2">A11y</Badge>
  {/if}
  <NpmVersion packageName={packageName} color={version_color} {tag} label={label} logo='svelte'/>
  <h5 class={hFiveClass}>
    <A href={docs} target="_blank">{label}</A>
  </h5>
  <List>
    <Li>{desc}</Li>
    <Li><A href={repo} target="_blank">GitHub repo</A></Li>
    <Li>Source: <A href={source.url} target="_blank">{source.label}</A></Li>
    <Li><A href={docs} target="_blank">Icon and Docs</A></Li>
  </List>
</Card>
{/snippet}


<h1 class="text-center my-4 xl:my-5 2xl:my-6 text-5xl xl:text-6xl 2xl:text-7xl text-gray-900 dark:text-white">Svelte SVG Icon Sets</h1>

<div class="flex flex-wrap justify-center gap-4 pb-6">
  <Badge color="pink">Svelte 4, 5, and 5:Runes</Badge>
  <Badge color="blue">Support CSS frameworks</Badge>
  <Badge color="purple">Faster compling</Badge>
  <Badge color="yellow">IDE Support</Badge>
  <Badge color="red" large>Total downloads: {formatNumber(totalDownloads)}</Badge>
</div>



<h2 class={h2Class}>Svelte 5: Runes</h2>
<div class="flex flex-wrap justify-center gap-6">
  
{#each svelte5_icons as { packageName, label, img, download_color,
  version_color, desc, source, docs, tag, a11y }}
  {@render runesIcon({ packageName, label, img, download_color,
    version_color, desc, source, docs, tag, a11y })}
{/each}

</div>

<h2 class={h2Class}>Svelte 4/5</h2>



<div class="flex flex-wrap justify-center gap-6">

  {#each svelte4_icons as { packageName, label, img, download_color,
    version_color, desc, source, docs }}
    {@render runesIcon({ packageName, label, img, download_color,
      version_color, desc, source, docs })}
  {/each}

</div>
