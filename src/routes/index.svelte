<script>
	import { EcommerceCard } from 'flowbite-svelte';
	let imgIon = {
		src: '/images/ion.webp',
		alt: 'Ionicons'
	};
	let imgHero = {
		src: '/images/heros.webp',
		alt: 'Heroicons'
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
	let divClass = 'm-8 max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700';
	let headerClass = 'text-3xl font-semibold tracking-tight text-gray-900 dark:text-white';
</script>

<h1>Svelte SVG Icons</h1>

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
