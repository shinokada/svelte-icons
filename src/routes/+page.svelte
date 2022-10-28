<script>
	import { Card, Badge } from 'flowbite-svelte';

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
	let divClass = 'm-8 max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700';
	let headerClass = 'text-3xl font-semibold tracking-tight text-gray-900 dark:text-white';
</script>

<h1>SVG Icon Sets for Svelte</h1>

<h2>Support all CSS frameworks</h2>

<div class="flex flex-wrap justify-center gap-4">
	<Card
		{divClass}
		{headerClass}
		img={imgAnt.src}
		title="Ant Design: Svelte-Ant-Design-Icons"
		href="https://www.npmjs.com/package/svelte-ant-design-icons"
	>
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

	<Card
		{divClass}
		{headerClass}
		img={imgAwesome.src}
		title="Font Awesome: Svelte-Awesome-Icons"
		href="https://www.npmjs.com/package/svelte-awesome-icons"
	>
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

	<Card
		{divClass}
		{headerClass}
		img={imgBootstrap.src}
		title="Bootstrap: Svelte-Bootstrap-Svg-Icons"
		href="https://www.npmjs.com/package/svelte-bootstrap-svg-icons"
	>
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
		<p>
			1660+ SVG icons from <a href="https://github.com/twbs/icons">Bootstrap icons</a>.<br />
			<a href="https://github.com/shinokada/svelte-bootstrap-svg-icons/blob/main/icon-list.md"
				>Icon names</a
			><br />
			<a href="https://svelte.dev/repl/1613cc34aef7417783284b74e250c8e8?version=3.48.0">REPL</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgCircleFlags.src}
		title="Circle Flags: Svelte-Circle-Flags"
		href="https://www.npmjs.com/package/svelte-circle-flags"
	>
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
		<p>
			330+ SVG icons from <a href="https://github.com/HatScripts/circle-flags">Circle-Flags</a>.<br
			/>
			<a href="https://github.com/shinokada/svelte-circle-flags/blob/main/icon-list.md"
				>Icon names</a
			><br />
			<a href="https://svelte.dev/repl/382095078be04da7a5008b7f5e41d5c8?version=3.48.0">REPL</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgCrypto.src}
		title="Cryptocurrency: Svelte-Cryptocurrency-Icons"
		href="https://www.npmjs.com/package/svelte-cryptocurrency-icons"
	>
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
		<p>
			470+ SVG icons from
			<a href="https://github.com/spothq/cryptocurrency-icons">Cryptocurrency icons</a>.<br />
			<a href="https://github.com/shinokada/svelte-cryptocurrency-icons/blob/main/icon-list.md"
				>Icon names</a
			>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgFeather.src}
		title="Feather Icons: Svelte-Feathers"
		href="https://www.npmjs.com/package/svelte-feathers"
	>
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
		<p>
			280+ SVG icons from <a href="https://feathericons.com/">Feather-icons</a>.<br />
			<a href="https://github.com/shinokada/svelte-feathers/blob/main/icon-list.md">Icon names</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgFlagIcons.src}
		title="Flag-Icons: Svelte-Flag-Icons"
		href="https://www.npmjs.com/package/svelte-flag-icons"
	>
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
		<p>
			260+ SVG icons from <a href="https://github.com/lipis/flag-icons">Flag Icons</a>.<br />
			<a href="https://github.com/shinokada/svelte-flag-icons/blob/main/icon-list.md">Icon names</a
			><br />
			<a href="https://svelte.dev/repl/70a4c2d5242f4cfa8dba85529184d7a3?version=3.48.0">REPL</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgFlags.src}
		title="Country Flags: Svelte-Flags"
		href="https://www.npmjs.com/package/svelte-flags"
	>
		<img src="https://badgen.net/npm/dt/svelte-flags" alt="total download number" class="inline" />
		<img src="https://badgen.net/npm/dw/svelte-flags" alt="weekly download number" class="inline" />
		<p>
			250+ SVG icons from <a href="https://github.com/hampusborgos/country-flags">Country flags</a
			>.<br />
			<a href="https://github.com/shinokada/svelte-flags/blob/main/flags.md">Icon names</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgFile.src}
		title="File Icons: Svelte-File-Icons"
		href="https://www.npmjs.com/package/svelte-file-icons"
	>
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

		<p>
			930+ SVG icons from <a href="https://github.com/file-icons/icons">File icons</a>.<br />
			<a href="https://github.com/shinokada/svelte-file-icons/blob/main/icon-list.md">Icon names</a>
			<br />
			<a href="https://svelte.dev/repl/985ea64e08a942b493afa91538fef9b1?version=3.48.0">REPL</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgGoogle.src}
		title="Google Materialdesign: Svelte-Google-Materialdesign-Icons"
		href="https://www.npmjs.com/package/svelte-google-materialdesign-icons"
	>
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

	<Card
		{divClass}
		{headerClass}
		img={imgHero.src}
		title="Heroicons: Svelte-Heros"
		href="https://www.npmjs.com/package/svelte-heros"
	>
		<img src="https://badgen.net/npm/dt/svelte-heros" alt="total download number" class="inline" />
		<img src="https://badgen.net/npm/dw/svelte-heros" alt="weekly download number" class="inline" />

		<p>
			460+ SVG icons from <a href="https://heroicons.com/">Heroicons</a>.<br />
			<a href="https://github.com/shinokada/svelte-heros/blob/main/icon-list.md">Icon names</a><br
			/>
			<a href="https://svelte.dev/repl/48606ee88712441caebd7d09aa62602c?version=3.48.0">REPL</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgHero2.src}
		title="Heroicons v2: Svelte-Heros-v2"
		href="https://www.npmjs.com/package/svelte-heros-v2"
	>
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

		<p>
			260+ SVG icons from <a href="https://heroicons.com/">Heroicons v2</a>.<br />
			<a href="https://github.com/shinokada/svelte-heros-v2/blob/main/icon-list.md">Icon names</a
			><br />
			<a href="https://svelte.dev/repl/1948d7b5157f44709cff380d9783342c?version=3.49.0">REPL 1</a>
			<a href="https://svelte.dev/repl/e26c4ea516a0493cb64797879b1fe46d?version=3.49.0">REPL 2</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgIon.src}
		title="Ionicons: Svelte-Ionicons"
		href="https://www.npmjs.com/package/svelte-ionicons"
	>
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

		<p>
			1330+ SVG icons from <a href="https://ionic.io/ionicons">Ionicicons</a>.<br />
			<a href="https://github.com/shinokada/svelte-ionicons/blob/main/icon-list.md">Icon names</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgLucide.src}
		title="Lucide: Svelte-Lucide"
		href="https://www.npmjs.com/package/svelte-lucide"
	>
		<img src="https://badgen.net/npm/dt/svelte-lucide" alt="total download number" class="inline" />
		<img
			src="https://badgen.net/npm/dw/svelte-lucide"
			alt="weekly download number"
			class="inline"
		/>

		<p>
			590+ SVG icons from <a href="https://github.com/lucide-icons/lucide">Lucide icons</a>.<br />
			<a href="https://github.com/shinokada/svelte-lucide/blob/main/icon-list.md">Icon names</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgMaterial.src}
		title="Materialdesign: Svelte-Materialdesign-Icons"
		href="https://www.npmjs.com/package/svelte-materialdesign-icons"
	>
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

		<p>
			6980+ SVG icons from <a href="https://github.com/Templarian/MaterialDesign">MaterialDesign</a
			>.<br />
			<a href="https://github.com/shinokada/svelte-materialdesign/blob/main/icon-list.md"
				>Icon names</a
			>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgOct.src}
		title="Octicons: Svelte-Oct"
		href="https://www.npmjs.com/package/svelte-oct"
	>
		<img src="https://badgen.net/npm/dt/svelte-oct" alt="total download number" class="inline" />
		<img src="https://badgen.net/npm/dw/svelte-oct" alt="weekly download number" class="inline" />

		<p>
			500+ SVG icons from <a href="https://github.com/primer/octicons">Octicons</a>.<br />
			<a href="https://github.com/shinokada/svelte-oct/blob/main/icon-list.md">Icon names</a><br />
			<a href="https://svelte.dev/repl/fccdaf257870448bbb6b924fda6c3a5e?version=3.49.0">REPL</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgRadix.src}
		title="Radix icons: Svelte-Radix"
		href="https://www.npmjs.com/package/svelte-radix"
	>
		<img src="https://badgen.net/npm/dt/svelte-radix" alt="total download number" class="inline" />
		<img src="https://badgen.net/npm/dw/svelte-radix" alt="weekly download number" class="inline" />

		<p>
			310+ SVG icons from <a href="https://github.com/radix-ui/icons">Radix icons</a>.<br />
			<a href="https://github.com/shinokada/svelte-radix/blob/main/icon-list.md">Icon names</a><br
			/>
			<a href="https://svelte.dev/repl/fb0def38847240f3a51460a56bf53225?version=3.49.0">REPL</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgRemix.src}
		title="RemixIcon: Svelte-Remix"
		href="https://www.npmjs.com/package/svelte-remix"
	>
		<img src="https://badgen.net/npm/dt/svelte-remix" alt="total download number" class="inline" />
		<img src="https://badgen.net/npm/dw/svelte-remix" alt="weekly download number" class="inline" />

		<p>
			2270+ SVG icons from <a href="https://github.com/Remix-Design/RemixIcon">RemixIcon</a>.<br />
			<a href="https://github.com/shinokada/svelte-remix/blob/main/icon-list.md">Icon names</a><br
			/>
			<a href="https://svelte.dev/repl/60e7000b54004872aa4006535fcef7fd?version=3.48.0">REPL</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgSimple.src}
		title="Simple Icons: Svelte-Simples"
		href="https://www.npmjs.com/package/svelte-simples"
	>
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

		<p>
			2230+ SVG icons for popular brands from <a href="https://simpleicons.org/s">Simple-icons</a
			>.<br />
			<a href="https://github.com/shinokada/svelte-simples/blob/main/icon-names.md">Icon names</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgTabler.src}
		title="Tabler: Svelte-Tabler"
		href="https://www.npmjs.com/package/svelte-tabler"
	>
		<img src="https://badgen.net/npm/dt/svelte-tabler" alt="total download number" class="inline" />
		<img
			src="https://badgen.net/npm/dw/svelte-tabler"
			alt="weekly download number"
			class="inline"
		/>

		<p>
			1970+ SVG icons from <a href="https://github.com/tabler/tabler-icons">Tabler Icons</a>.<br />
			<a href="https://github.com/shinokada/svelte-tabler/blob/main/icon-list.md">Icon names</a><br
			/>
			<a href="https://svelte.dev/repl/55ccaffe3d414235a6bb554ffd98f4bc?version=3.48.0">REPL 1</a>,
			<a href="https://svelte.dev/repl/b63ed92a79a047bdb2017fac63624130?version=3.48.0">REPL 2</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgTeeny.src}
		title="Teeny Icons: Svelte-Teenyicons"
		href="https://www.npmjs.com/package/svelte-teenyicons"
	>
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

		<p>
			600+ SVG icons from <a href="https://github.com/teenyicons/teenyicons">Teenyicons</a>.<br />
			<a href="https://github.com/shinokada/svelte-teenyicons/blob/main/icon-list.md">Icon names</a>
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgTwemoji.src}
		title="Twitter Emoji: Svelte-Twitter-Emoji"
		href="https://www.npmjs.com/package/svelte-twitter-emoji"
	>
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

		<p>
			3600+ Twitter emoji SVG color icons from <a href="https://github.com/twitter/twemoji"
				>Twemoji</a
			>.<br />
			<a href="https://github.com/shinokada/svelte-twitter-emoji/blob/main/icon-list.md"
				>Icon names</a
			><br />
		</p>
	</Card>

	<Card
		{divClass}
		{headerClass}
		img={imgWeather.src}
		title="Weather Icons: Svelte-Weather"
		href="https://www.npmjs.com/package/svelte-weather"
	>
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

		<p>
			210+ Weather SVG icons from <a href="https://github.com/erikflowers/weather-icons"
				>weather-icons</a
			>.<br />
			<a href="https://github.com/shinokada/svelte-weather/blob/main/icon-list.md">Icon names</a><br
			/>
		</p>
	</Card>
</div>
