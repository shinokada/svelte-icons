<script>
	import { EcommerceCard, Badge } from 'flowbite-svelte';

	let imgAwesome = {
		src: '/images/awesome.webp',
		alt: 'Font Awesome icons'
	};
	let imgBootstrap = {
		src: '/images/bootstrap1.webp',
		alt: 'Bootstrap icons'
	};
	let imgCrypto = {
		src: '/images/crypto1.webp',
		alt: 'Cryptocurrency icons'
	};
	let imgCircleFlags = {
		src: '/images/circle-flags.webp',
		alt: 'Circle Flags'
	};
	let imgFeather = {
		src: '/images/feather.webp',
		alt: 'Feather icons'
	};
	let imgFile = {
		src: '/images/fileicons.webp',
		alt: 'File icons'
	};
	let imgFlagIcons = {
		src: '/images/flag-icons3.webp',
		alt: 'Flag Icons'
	};
	let imgFlags = {
		src: '/images/flags.webp',
		alt: 'Flags'
	};
	let imgGoogle = {
		src: '/images/google-material.webp',
		alt: 'Google Materialdesign icons'
	};
	let imgHero = {
		src: '/images/heros1.webp',
		alt: 'Heroicons'
	};
	let imgHero2 = {
		src: '/images/heros2.webp',
		alt: 'Heroicons v2'
	};
	let imgIon = {
		src: '/images/ion.webp',
		alt: 'Ionicons'
	};
	let imgLucide = {
		src: '/images/lucide.webp',
		alt: 'Lucide'
	};
	let imgMaterial = {
		src: '/images/materialdesign.webp',
		alt: 'Material Design icons'
	};
	let imgOct = {
		src: '/images/octicons.webp',
		alt: 'Octicons'
	};
	let imgRadix = {
		src: '/images/radix.webp',
		alt: 'Radix Icons'
	};
	let imgRemix = {
		src: '/images/remix1.webp',
		alt: 'RemixIcon'
	};
	let imgSimple = {
		src: '/images/simple.webp',
		alt: 'Simple-icons'
	};
	let imgTabler = {
		src: '/images/tabler1.webp',
		alt: 'Tabler icons'
	};
	let imgTeeny = {
		src: '/images/teeny1.webp',
		alt: 'Teeny icons'
	};
	let imgTwemoji = {
		src: '/images/twemoji2.webp',
		alt: 'Twitter emoji'
	};
	let imgWeather = {
		src: '/images/weather1.webp',
		alt: 'Weather icons'
	};
	let divClass = 'm-8 max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700';
	let headerClass = 'text-3xl font-semibold tracking-tight text-gray-900 dark:text-white';
</script>

<h1>SVG Icon Sets for Svelte</h1>

<h2>Support all CSS frameworks</h2>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgAwesome}
	title="Font Awesome: Svelte-awesome-icons"
	href="https://www.npmjs.com/package/svelte-awesome-icons"
>
	<img src="https://badgen.net/npm/dw/svelte-awesome-icons" alt="weekly download number" />
	<p>
		2000+ SVG icons from <a href="https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs"
			>Font Awesome</a
		>.<br />
		<a href="https://github.com/shinokada/svelte-awesome-icons/blob/main/icon-list.md">Icon names</a
		><br />
		<a href="https://svelte.dev/repl/c0045886b264408fba13f1de70c42932?version=3.48.0">REPL</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgBootstrap}
	title="Bootstrap: Svelte-bootstrap-svg-icons"
	href="https://www.npmjs.com/package/svelte-bootstrap-svg-icons"
>
	<img src="https://badgen.net/npm/dw/svelte-bootstrap-svg-icons" alt="weekly download number" />
	<p>
		1660+ SVG icons from <a href="https://github.com/twbs/icons">Bootstrap icons</a>.<br />
		<a href="https://github.com/shinokada/svelte-bootstrap-svg-icons/blob/main/icon-list.md"
			>Icon names</a
		><br />
		<a href="https://svelte.dev/repl/1613cc34aef7417783284b74e250c8e8?version=3.48.0">REPL</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgCircleFlags}
	title="Circle Flags: Svelte-Circle-Flags"
	href="https://www.npmjs.com/package/svelte-circle-flags"
>
	<img src="https://badgen.net/npm/dw/svelte-circle-flags" alt="weekly download number" />
	<p>
		330+ SVG icons from <a href="https://github.com/HatScripts/circle-flags">Circle-Flags</a>.<br />
		<a href="https://github.com/shinokada/svelte-circle-flags/blob/main/icon-list.md">Icon names</a
		><br />
		<a href="https://svelte.dev/repl/382095078be04da7a5008b7f5e41d5c8?version=3.48.0">REPL</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgCrypto}
	title="Cryptocurrency: Svelte-Cryptocurrency-Icons"
	href="https://www.npmjs.com/package/svelte-cryptocurrency-icons"
>
	<div class="flex">
		<img src="https://badgen.net/npm/dw/svelte-cryptocurrency-icons" alt="weekly download number" />
	</div>
	<p>
		470+ SVG icons from
		<a href="https://github.com/spothq/cryptocurrency-icons">Cryptocurrency icons</a>.<br />
		<a href="https://github.com/shinokada/svelte-cryptocurrency-icons/blob/main/icon-list.md"
			>Icon names</a
		>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgFeather}
	title="Feather icons: Svelte-feathers"
	href="https://www.npmjs.com/package/svelte-feathers"
>
	<img src="https://badgen.net/npm/dw/svelte-feathers" alt="weekly download number" />
	<p>
		280+ SVG icons from <a href="https://feathericons.com/">Feather-icons</a>.<br />
		<a href="https://github.com/shinokada/svelte-feathers/blob/main/icon-list.md">Icon names</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgFlagIcons}
	title="Flag-Icons: Svelte-Flag-Icons"
	href="https://www.npmjs.com/package/svelte-flag-icons"
>
	<img src="https://badgen.net/npm/dw/svelte-flag-icons" alt="weekly download number" />
	<p>
		260+ SVG icons from <a href="https://github.com/lipis/flag-icons">Flag Icons</a>.<br />
		<a href="https://github.com/shinokada/svelte-flag-icons/blob/main/icon-list.md">Icon names</a
		><br />
		<a href="https://svelte.dev/repl/70a4c2d5242f4cfa8dba85529184d7a3?version=3.48.0">REPL</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgFlags}
	title="Country flags: Svelte-Flags"
	href="https://www.npmjs.com/package/svelte-flags"
>
	<img src="https://badgen.net/npm/dw/svelte-flags" alt="weekly download number" />
	<p>
		250+ SVG icons from <a href="https://github.com/hampusborgos/country-flags">Country flags</a
		>.<br />
		<a href="https://github.com/shinokada/svelte-flags/blob/main/flags.md">Icon names</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgFile}
	title="File icons: Svelte-file-icons"
	href="https://www.npmjs.com/package/svelte-file-icons"
>
	<img src="https://badgen.net/npm/dw/svelte-file-icons" alt="weekly download number" />
	<p>
		930+ SVG icons from <a href="https://github.com/file-icons/icons">File icons</a>.<br />
		<a href="https://github.com/shinokada/svelte-file-icons/blob/main/icon-list.md">Icon names</a>
		<br />
		<a href="https://svelte.dev/repl/985ea64e08a942b493afa91538fef9b1?version=3.48.0">REPL</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgGoogle}
	title="Google Materialdesign: Svelte-google-materialdesign-icons"
	href="https://www.npmjs.com/package/svelte-google-materialdesign-icons"
>
	<img
		src="https://badgen.net/npm/dw/svelte-google-materialdesign-icons"
		alt="weekly download number"
	/>
	<p>
		10600+ SVG icons from <a href="https://github.com/material-icons/material-icons"
			>Material-Icons</a
		>.<br />
		<a href="https://github.com/shinokada/svelte-google-materialdesign-icons/blob/main/icon-list.md"
			>Icon names</a
		>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgHero}
	title="Heroicons: Svelte-Heros"
	href="https://www.npmjs.com/package/svelte-heros"
>
	<img src="https://badgen.net/npm/dw/svelte-heros" alt="weekly download number" />
	<p>
		460+ SVG icons from <a href="https://heroicons.com/">Heroicons</a>.<br />
		<a href="https://github.com/shinokada/svelte-heros/blob/main/icon-list.md">Icon names</a><br />
		<a href="https://svelte.dev/repl/48606ee88712441caebd7d09aa62602c?version=3.48.0">REPL</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgHero2}
	title="Heroicons v2: Svelte-Heros-v2"
	href="https://www.npmjs.com/package/svelte-heros-v2"
>
	<img src="https://badgen.net/npm/dw/svelte-heros-v2" alt="weekly download number" />
	<p>
		260+ SVG icons from <a href="https://heroicons.com/">Heroicons v2</a>.<br />
		<a href="https://github.com/shinokada/svelte-heros-v2/blob/main/icon-list.md">Icon names</a><br
		/>
		<a href="https://svelte.dev/repl/1948d7b5157f44709cff380d9783342c?version=3.49.0">REPL 1</a>
		<a href="https://svelte.dev/repl/e26c4ea516a0493cb64797879b1fe46d?version=3.49.0">REPL 2</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgIon}
	title="Ionicons: Svelte-ionicons"
	href="https://www.npmjs.com/package/svelte-ionicons"
>
	<img src="https://badgen.net/npm/dw/svelte-ionicons" alt="weekly download number" />
	<p>
		1330+ SVG icons from <a href="https://ionic.io/ionicons">Ionicicons</a>.<br />
		<a href="https://github.com/shinokada/svelte-ionicons/blob/main/icon-list.md">Icon names</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgLucide}
	title="Lucide: Svelte-Lucide"
	href="https://www.npmjs.com/package/svelte-lucide"
>
	<img src="https://badgen.net/npm/dw/svelte-lucide" alt="weekly download number" />
	<p>
		590+ SVG icons from <a href="https://github.com/lucide-icons/lucide">Lucide icons</a>.<br />
		<a href="https://github.com/shinokada/svelte-lucide/blob/main/icon-list.md">Icon names</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgMaterial}
	title="Materialdesign: Svelte-materialdesign-icons"
	href="https://www.npmjs.com/package/svelte-materialdesign-icons"
>
	<img src="https://badgen.net/npm/dw/svelte-materialdesign-icons" alt="weekly download number" />
	<p>
		6980+ SVG icons from <a href="https://github.com/Templarian/MaterialDesign">MaterialDesign</a
		>.<br />
		<a href="https://github.com/shinokada/svelte-materialdesign/blob/main/icon-list.md"
			>Icon names</a
		>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgOct}
	title="Octicons: Svelte-Oct"
	href="https://www.npmjs.com/package/svelte-oct"
>
	<img src="https://badgen.net/npm/dw/svelte-oct" alt="weekly download number" />
	<p>
		500+ SVG icons from <a href="https://github.com/primer/octicons">Octicons</a>.<br />
		<a href="https://github.com/shinokada/svelte-oct/blob/main/icon-list.md">Icon names</a><br />
		<a href="https://svelte.dev/repl/fccdaf257870448bbb6b924fda6c3a5e?version=3.49.0">REPL</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgRadix}
	title="Radix icons: Svelte-Radix"
	href="https://www.npmjs.com/package/svelte-radix"
>
	<img src="https://badgen.net/npm/dw/svelte-radix" alt="weekly download number" />
	<p>
		310+ SVG icons from <a href="https://github.com/radix-ui/icons">Radix icons</a>.<br />
		<a href="https://github.com/shinokada/svelte-radix/blob/main/icon-list.md">Icon names</a><br />
		<a href="https://svelte.dev/repl/fb0def38847240f3a51460a56bf53225?version=3.49.0">REPL</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgRemix}
	title="RemixIcon: Svelte-Remix"
	href="https://www.npmjs.com/package/svelte-remix"
>
	<img src="https://badgen.net/npm/dw/svelte-remix" alt="weekly download number" />
	<p>
		2270+ SVG icons from <a href="https://github.com/Remix-Design/RemixIcon">RemixIcon</a>.<br />
		<a href="https://github.com/shinokada/svelte-remix/blob/main/icon-list.md">Icon names</a><br />
		<a href="https://svelte.dev/repl/60e7000b54004872aa4006535fcef7fd?version=3.48.0">REPL</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgSimple}
	title="Simple icons: Svelte-Simples"
	href="https://www.npmjs.com/package/svelte-simples"
>
	<img src="https://badgen.net/npm/dw/svelte-simples" alt="weekly download number" />
	<p>
		2230+ SVG icons for popular brands from <a href="https://simpleicons.org/s">Simple-icons</a>.<br
		/>
		<a href="https://github.com/shinokada/svelte-simples/blob/main/icon-names.md">Icon names</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgTabler}
	title="Tabler: Svelte-tabler"
	href="https://www.npmjs.com/package/svelte-tabler"
>
	<img src="https://badgen.net/npm/dw/svelte-tabler" alt="weekly download number" />
	<p>
		1970+ SVG icons from <a href="https://github.com/tabler/tabler-icons">Tabler Icons</a>.<br />
		<a href="https://github.com/shinokada/svelte-tabler/blob/main/icon-list.md">Icon names</a><br />
		<a href="https://svelte.dev/repl/55ccaffe3d414235a6bb554ffd98f4bc?version=3.48.0">REPL 1</a>,
		<a href="https://svelte.dev/repl/b63ed92a79a047bdb2017fac63624130?version=3.48.0">REPL 2</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgTeeny}
	title="Teeny icons: Svelte-Teenyicons"
	href="https://www.npmjs.com/package/svelte-teenyicons"
>
	<img src="https://badgen.net/npm/dw/svelte-teenyicons" alt="weekly download number" />
	<p>
		600+ SVG icons from <a href="https://github.com/teenyicons/teenyicons">Teenyicons</a>.<br />
		<a href="https://github.com/shinokada/svelte-teenyicons/blob/main/icon-list.md">Icon names</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgTwemoji}
	title="Twitter emoji: Svelte-twitter-emoji"
	href="https://www.npmjs.com/package/svelte-twitter-emoji"
>
	<div class="flex">
		<img src="https://badgen.net/npm/dw/svelte-twitter-emoji" alt="weekly download number" />
	</div>
	<p>
		3600+ Twitter emoji SVG color icons from <a href="https://github.com/twitter/twemoji">Twemoji</a
		>.<br />
		<a href="https://github.com/shinokada/svelte-twitter-emoji/blob/main/icon-list.md">Icon names</a
		><br />
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgWeather}
	title="Weather icons: Svelte-Weather"
	href="https://www.npmjs.com/package/svelte-weather"
>
	<div class="flex">
		<img src="https://badgen.net/npm/dw/svelte-weather" alt="weekly download number" />
	</div>
	<p>
		210+ Weather SVG icons from <a href="https://github.com/erikflowers/weather-icons"
			>weather-icons</a
		>.<br />
		<a href="https://github.com/shinokada/svelte-weather/blob/main/icon-list.md">Icon names</a><br
		/>
	</p>
</EcommerceCard>
