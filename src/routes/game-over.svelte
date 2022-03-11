<script lang="ts">
	import Button from '$lib/Button.svelte';
	import { players } from '../store';

	$: losers = $players.filter((player) => player.lives === 0);
</script>

<div>
	<img src="/static/cat-logo-close.png" alt="gata borracha logo" />
</div>

<div class="mt-4">
	<div class="flex flex-col mt-4">
		{#each losers as player}
			<div class="w-1/4 m-2 text-4xl text-red-600 cursor-pointer">
				<div>{player.name}</div>
			</div>
		{/each}
	</div>
</div>

<div class="mt-8 text-5xl text-center">
	<p>Parece que alguien se ha quedado sin vidas</p>
	<p>¡no tengáis piedad!</p>
</div>

<div class="flex mt-8 text-5xl">
	<Button href="/">Volver a jugar</Button>
</div>
