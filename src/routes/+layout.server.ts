import type { MetaProps } from 'runes-meta-tags';
import { ANALYTICS_ID_ICONS } from '$env/static/private';
import { metaTitle, metaDescription, metaImg } from 'runes-meta-tags';

export const load = ({ url }) => {
  const siteName = metaTitle('/', __NAME__);
  const title = metaTitle(url.pathname, __NAME__);
  const basicDesc = 'SVG icon sets for Svelte 4/5/Runes';
  const description = metaDescription(url.pathname, basicDesc);
  const image = metaImg(url.pathname, __NAME__);
  const keywords = 'svelte, runes, svg icons, sveltekit, svg component';

  const layoutMetaTags: MetaProps = {
    title: 'Svelte SVG Icon Sets',
    description,
    keywords,
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title,
      description,
      image: 'https://open-graph-vercel.vercel.app/api/svelte-svg-icons',
      imageAlt: title
    },
    og: {
      type: 'website',
      title,
      description,
      url: url.href,
      image: 'https://open-graph-vercel.vercel.app/api/svelte-svg-icons',
      imageAlt: title,
      siteName,
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID_ICONS
  };
};
