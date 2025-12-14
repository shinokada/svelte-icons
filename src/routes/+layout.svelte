<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { Footer } from 'runes-webkit';
	import { MetaTags, deepMerge } from 'runes-meta-tags';
	import { Runatics } from 'runatics';

	let { children, data } = $props();
	const analyticsId = $derived(data.ANALYTICS_ID_ICONS);
	let metaTags = $derived(
		page.data.pageMetaTags
			? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
			: data.layoutMetaTags
	);

	const brand = {
		name: 'codewithshin.com',
		href: 'https://codewithshin.com'
	};
</script>

<MetaTags {...metaTags} />
<Runatics {analyticsId} />
<main class="mx-auto w-full px-2 pt-12">
	{@render children()}
</main>
<Footer {brand} />
