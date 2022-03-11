<script lang="ts">
	import { goto } from '$app/navigation';
	import SoundPlayer from '../soundPlayer';
	import { onMount } from 'svelte';
	import { players, phrases } from '../store';
	import Button from '$lib/Button.svelte';

	let soundPlayer;
	onMount(() => {
		soundPlayer = new SoundPlayer('/live-toggle.wav');
	});

	let index = 0;
	function nextPhrase() {
		selectedPlayersIndexes.forEach((i) => {
			$players[i].lives--;
		});

		if ($players.some((player) => player.lives === 0)) {
			return goto('/game-over');
		}

		selectedPlayersIndexes = [];

		index++;

		if (index >= $phrases.length) {
			index = 0;
		}
	}

	$: currentPhrase = $phrases[index]?.text;

	let selectedPlayersIndexes = [];
	function toggleSelect(index) {
		soundPlayer?.play();
		if (selectedPlayersIndexes.includes(index)) {
			selectedPlayersIndexes = selectedPlayersIndexes.filter((i) => i !== index);
		} else {
			selectedPlayersIndexes = [...selectedPlayersIndexes, index];
		}
	}
</script>

<div id="phrase" class="text-5xl text-center">
	Yo nunca {currentPhrase}
</div>

<div id="players" class="w-full mt-4">
	<article class="grid gap-2 text-xl">
		{#each $players as player, i}
			<div class:selected={selectedPlayersIndexes.includes(i)}>
				<Button on:click={() => toggleSelect(i)} nosound>
					<div>{player.name}</div>
					<div>{player.lives}</div>
				</Button>
			</div>
		{/each}
	</article>
</div>

<div id="next" class="flex mt-8">
	<Button class="text-4xl px-8" on:click={nextPhrase}>
		¡Frase!
	</Button>
</div>

<style type="text/postcss">
	.selected :global(button) {
		@apply bg-red-600;
	}
	article {
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
	}
</style>
