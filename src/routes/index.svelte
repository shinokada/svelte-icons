<script>
	import { EcommerceCard } from 'flowbite-svelte';
	let imgIon = {
		src: '/images/ion.webp',
		alt: 'Ionicons'
	};
	let imgAwesome = {
		src: '/images/awesome.webp',
		alt: 'Font Awesome icons'
	};
	let imgHero = {
		src: '/images/heros.webp',
		alt: 'Heroicons'
	};
	let imgMaterial = {
		src: '/images/materialdesign.webp',
		alt: 'Material Design icons'
	};
	let imgFlagIcons = {
		src: '/images/flag-icons3.webp',
		alt: 'Flag Icons'
	};
	let imgCircleFlags = {
		src: '/images/circle-flags.webp',
		alt: 'Circle Flags'
	};
	let imgLucide = {
		src: '/images/lucide.webp',
		alt: 'Lucide'
	};
	let imgFlags = {
		src: '/images/flags.webp',
		alt: 'Flags'
	};
	let imgSimple = {
		src: '/images/simple.webp',
		alt: 'Simple-icons'
	};
	let imgFeather = {
		src: '/images/feather.webp',
		alt: 'Feather icons'
	};
	let imgFile = {
		src: '/images/fileicons.webp',
		alt: 'File icons'
	};
	let imgGoogle = {
		src: '/images/google-material.webp',
		alt: 'Google Materialdesign icons'
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
		2000+ SVG icons from the <a href="https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs"
			>Font Awesome</a
		>.<br />
		<a href="https://github.com/shinokada/svelte-awesome-icons/blob/main/icon-list.md">Icon names</a
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
		460+ SVG icons from the <a href="https://heroicons.com/">Heroicons</a>.<br />
		<a href="https://github.com/shinokada/svelte-heros/blob/main/icon-names.md">Icon names</a>
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
		6980+ SVG icons from the <a href="https://github.com/Templarian/MaterialDesign"
			>MaterialDesign</a
		>.<br />
		<a href="https://github.com/shinokada/svelte-materialdesign/blob/main/icon-list.md"
			>Icon names</a
		>
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
		10600+ SVG icons from the <a href="https://github.com/material-icons/material-icons"
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
	img={imgFlagIcons}
	title="Flag-Icons: Svelte-Flag-Icons"
	href="https://www.npmjs.com/package/svelte-flag-icons"
>
	<img src="https://badgen.net/npm/dw/svelte-flag-icons" alt="weekly download number" />
	<p>
		260+ SVG icons from <a href="https://github.com/lipis/flag-icons">Flag Icons</a>.<br />
		<a href="https://github.com/shinokada/svelte-flag-icons/blob/main/icon-list.md">Icon names</a>
	</p>
</EcommerceCard>

<EcommerceCard
	{divClass}
	{headerClass}
	img={imgCircleFlags}
	title="Circle Flagss: Svelte-Circle-Flags"
	href="https://www.npmjs.com/package/svelte-circle-flags"
>
	<img src="https://badgen.net/npm/dw/svelte-circle-flags" alt="weekly download number" />
	<p>
		330+ SVG icons from <a href="https://github.com/HatScripts/circle-flags">Circle-Flags</a>.<br />
		<a href="https://github.com/shinokada/svelte-circle-flags/blob/main/icon-list.md">Icon names</a>
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
		1330+ SVG icons from the <a href="https://ionic.io/ionicons">Ionicicons</a>.<br />
		<a href="https://github.com/shinokada/svelte-ionicons/blob/main/icon-list.md">Icon names</a>
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
		250+ SVG icons from the <a href="https://github.com/hampusborgos/country-flags">Country flags</a
		>.<br />
		<a href="https://github.com/shinokada/svelte-flags/blob/main/flags.md">Icon names</a>
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
		280+ SVG icons from the <a href="https://feathericons.com/">Feather-icons</a>.<br />
		<a href="https://github.com/shinokada/svelte-feathers/blob/main/icon-list.md">Icon names</a>
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
		590+ SVG icons from the <a href="https://github.com/lucide-icons/lucide">Lucide icons</a>.<br />
		<a href="https://github.com/shinokada/svelte-lucide/blob/main/icon-list.md">Icon names</a>
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
		930+ SVG icons from the <a href="https://github.com/file-icons/icons">File icons</a>.<br />
		<a href="https://github.com/shinokada/svelte-file-icons/blob/main/icon-list.md">Icon names</a>
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
		2230+ SVG icons for popular brands from the <a href="https://simpleicons.org/s">Simple-icons</a
		>.<br />
		<a href="https://github.com/shinokada/svelte-simples/blob/main/icon-names.md">Icon names</a>
	</p>
</EcommerceCard>
