<script lang="ts">
	import Button from '$lib/Button.svelte';
	import { players } from '../store';

	const MIN_PLAYERS = 2;
	let num = $players.length;

	function increase() {
		num++;
		$players = [
			...$players,
			{
				name: '',
				lives: 7
			}
		];
	}

	function decrease() {
		if (num > MIN_PLAYERS) {
			num--;
			$players = $players.slice(0, -1);
		}
	}

	function resetLives() {
		$players.forEach((_, i) => {
			$players[i].lives = 7;
		});
	}

	$: disabled = $players.some((player) => !player.name);
</script>

<div class="text-5xl text-center">
	<div class="text-shadow">¿Cuántos sois?</div>
</div>

<div class="flex flex-row items-center mt-5">
	<div class="arrow arrow-left" on:click={decrease} />
	<div class="px-5 text-4xl">{num}</div>
	<div class="arrow arrow-right" on:click={increase} />
</div>

<div class="mt-4">
	{#each $players as player}
		<div class="px-1 py-2 mt-4 text-3xl text-center border-4 border-black border-solid rounded-md">
			<input
				maxlength="10"
				type="text"
				class="text-4xl"
				placeholder="Nombre"
				bind:value={player.name}
			/>
		</div>
	{/each}
</div>

<div class="flex justify-between w-full mt-8 text-3xl">
	<div class="w-2/5">
		<Button href="/categories">&lt;&lt;Atrás</Button>
	</div>
	<div class="w-2/5">
		<Button on:click={resetLives} href="/game" {disabled}>Sigamos&gt;&gt;</Button>
	</div>
</div>

<style type="text/postcss">
	.arrow {
		@apply cursor-pointer w-0 h-0 border-t-transparent border-b-transparent border-r-transparent border-l-transparent;
		border-width: 30px;
	}
	.arrow-left {
		@apply border-r-blue-600;
	}
	.arrow-right {
		@apply border-l-blue-600;
	}
</style>
