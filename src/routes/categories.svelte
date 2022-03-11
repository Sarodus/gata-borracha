<script lang="ts">
	import Button from '$lib/Button.svelte';
	import { CATEGORIES } from '../constants';
	import { categories } from '../store';

	function toggleCategory(tag: string) {
		if ($categories.includes(tag)) {
			$categories = $categories.filter((c) => c !== tag);
		} else {
			$categories = [...$categories, tag];
		}
	}
	$: disabled = $categories.length === 0;
</script>

<div class="text-5xl text-center">
	<div class="text-shadow">Categorias</div>
</div>

<div class="grid gap-4 w-full mt-6">
	{#each CATEGORIES as category}
		<div class:opacity-20={!$categories.includes(category.tag)}>
			<Button on:click={() => toggleCategory(category.tag)} class="flex">
				<div class="flex flex-col items-center self-center w-2/3">
					<div class="text-5xl">
						{category.name}
					</div>
					<div class="text-xl">
						{category.description}
					</div>
				</div>
				<div class="">
					<img src={category.image} alt={category.name} class="w-32" />
				</div>
			</Button>
		</div>
	{/each}
</div>

<div class="flex justify-between w-full mt-8 text-3xl">
	<div class="w-2/5">
		<Button href="/">&lt;&lt;Atrás</Button>
	</div>
	<div class="w-2/5">
		<Button href="/players" {disabled}>Sigamos&gt;&gt;</Button>
	</div>
</div>
