<script lang="ts">
	import Button from '$lib/Button.svelte';
	import SoundPlayer from '../soundPlayer';
	import { onMount } from 'svelte';

	const LOGO_OPEN = '/static/cat-logo-open.png';
	const LOGO_CLOSED = '/static/cat-logo-close.png';

	let src = LOGO_OPEN;
	let interval: NodeJS.Timeout;

	let soundPlayer: SoundPlayer;
	onMount(() => {
		soundPlayer = new SoundPlayer('/static/meow.wav');
		preloadImage(LOGO_CLOSED);
	});

	function preloadImage(url: string) {
		const img = new Image();
		img.src = url;
	}

	function handleClick() {
		soundPlayer?.play();
		src = LOGO_CLOSED;
		clearInterval(interval);
		interval = setTimeout(() => {
			src = LOGO_OPEN;
		}, 750);
	}
</script>

<div>
	<img width="330" height="266" on:click={handleClick} {src} alt="gata borracha logo" />
</div>

<div class="mt-8 text-5xl text-center">
	<div class="text-shadow">Gata Borracha</div>
	<div class="text-shadow">The Game</div>
</div>

<div class="mt-6 text-5xl">
	<Button href="/categories" class="px-8">Jugar</Button>
</div>

<style>
	.text-shadow {
		text-shadow: 0px 5px 0px rgba(0, 128, 255, 0.4), 0px -5px 0px rgba(255, 0, 0, 0.4);
	}
</style>
