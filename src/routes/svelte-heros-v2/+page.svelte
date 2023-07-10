<script>
  import { Tabs, TabItem } from 'flowbite-svelte';
	import * as Icons from 'svelte-heros-v2';
  const random_hex_color_code = () => {
		let n = (Math.random() * 0xfffff * 1000000).toString(16);
		return '#' + n.slice(0, 6);
	};
</script>

<Tabs style="pill" class="flex justify-center">
  <TabItem open>
    <span class="text-xl" slot="title">Mono</span>
    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-24 dark:text-white">
      {#each Object.entries(Icons) as [name, component]}
        <div class="flex gap-4 items-center text-lg">
          <svelte:component this={component} class="shrink-0 h-8 w-8"/>
          {name}
        </div>
      {/each}
    </div>
  </TabItem>
  <TabItem>
    <span class="text-xl" slot="title">Random Color</span>
    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-24 dark:text-white">
      {#each Object.entries(Icons) as [name, component]}
        <div class="flex gap-4 items-center text-lg">
          <svelte:component this={component} color={random_hex_color_code()} class="shrink-0 h-8 w-8"/>
          {name}
        </div>
      {/each}
    </div>
  </TabItem>
</Tabs>

