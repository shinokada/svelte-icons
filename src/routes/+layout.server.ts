import type { MetaProps } from 'runes-meta-tags';
import { ANALYTICS_ID_ICONS, GITHUB_TOKEN } from '$env/static/private';
import { metaTitle, metaDescription } from 'runes-meta-tags';

export const load = async ({ url, fetch }) => {
  const siteName = metaTitle('/', __NAME__);
  const title = metaTitle(url.pathname, __NAME__);
  const basicDesc = 'SVG icon sets for Svelte 4/5/Runes';
  const description = metaDescription(url.pathname, basicDesc);
  const keywords = 'svelte, runes, svg icons, sveltekit, svg component';

  const layoutMetaTags: MetaProps = {
    title: 'Svelte SVG Icon Sets',
    description,
    keywords,
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      creator: '@shinokada',
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

  // Fetch file counts from multiple GitHub repos
  const repoConfig: Record<string, { repo: string; path: string; exclude?: number; recursive?: boolean }> = {
    'flowbite-svelte-icons': { repo: 'flowbite-svelte-icons', path: 'src/lib', exclude: 3 },
    'svelte-animated-icons': { repo: 'svelte-animated-icons', path: 'src/lib', exclude: 3, recursive: true },
    'svelte-awesome-icons': { repo: 'svelte-awesome-icons', path: 'src/lib', exclude: 3 },
    'svelte-ant-design-icons': { repo: 'svelte-ant-design-icons', path: 'src/lib', exclude: 3 },
    'svelte-bootstrap-svg-icons': { repo: 'svelte-bootstrap-svg-icons', path: 'src/lib', exclude: 3 },
    'svelte-flags': { repo: 'svelte-flags', path: 'src/lib', exclude: 3 },
    'svelte-flag-icons': { repo: 'svelte-flag-icons', path: 'src/lib', exclude: 3 },
    'svelte-heros': { repo: 'svelte-heros', path: 'src/lib', exclude: 3 },
    'svelte-heros-v2': { repo: 'svelte-heros-v2', path: 'src/lib', exclude: 3 },
    'svelte-ionicons': { repo: 'svelte-ionicons', path: 'src/lib', exclude: 3 },
    'svelte-lucide': { repo: 'svelte-lucide', path: 'src/lib', exclude: 3 },
    'svelte-radix': { repo: 'svelte-radix', path: 'src/lib', exclude: 3 },
    'svelte-remix': { repo: 'svelte-remix', path: 'src/lib', exclude: 3 },
    'svelte-supertiny': { repo: 'svelte-supertiny', path: 'src/lib', exclude: 3 },
    'svelte-tabler': { repo: 'svelte-tabler', path: 'src/lib', exclude: 3 },
  }

  const fetchFileCount = async (repo: string, path: string, recursive = false): Promise<number> => {
    try {
      const url = `https://api.github.com/repos/shinokada/${repo}/contents/${path}`;
      // console.log(`Fetching: ${url}`);
      
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json'
      };
      
      // Add authentication if token is available
      if (GITHUB_TOKEN) {
        headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
      }
      
      const response = await fetch(url, { headers });
      
      // console.log(`Response for ${repo}: status=${response.status}`);
      
      if (!response.ok) {
        console.error(`Failed to fetch ${repo}: ${response.status} ${response.statusText}`);
        return 0;
      }
      
      const data = await response.json();
      // console.log(`${repo} returned ${data.length} items`);
      
      let fileCount = 0;
      
      if (recursive) {
        const promises: Promise<number>[] = [];
        
        for (const item of data) {
          if (item.type === 'file') {
            fileCount++;
          } else if (item.type === 'dir') {
            // console.log(`Found subdirectory in ${repo}: ${item.path}`);
            promises.push(fetchFileCount(repo, item.path, true));
          }
        }
        
        const subdirCounts = await Promise.all(promises);
        fileCount += subdirCounts.reduce((sum, count) => sum + count, 0);
        // console.log(`${repo} total recursive count: ${fileCount}`);
      } else {
        fileCount = data.filter((item: any) => item.type === 'file').length;
        // console.log(`${repo} file count: ${fileCount}`);
      }
      
      return fileCount;
    } catch (error) {
      console.error(`Error fetching ${repo}:`, error);
      return 0;
    }
  };

  // Fetch all counts in parallel
  const countPromises = Object.entries(repoConfig).map(async ([packageName, config]) => {
    const totalCount = await fetchFileCount(config.repo, config.path, config.recursive);
    const count = Math.max(0, totalCount - (config.exclude ?? 0));
    // console.log(`${packageName}: totalCount=${totalCount}, exclude=${config.exclude}, final count=${count}`);
    return { packageName, count };
  });

  const counts = await Promise.all(countPromises);
  // console.log('All counts:', counts);

  const iconCounts = Object.fromEntries(
    counts.map(({ packageName, count }) => [packageName, count])
  );

  // console.log('iconCounts object:', iconCounts);
  return {
    layoutMetaTags,
    ANALYTICS_ID_ICONS,
    iconCounts
  };
};
