<script context="module">
	import { browser } from '$app/env';
	import SoundPlayer from '../soundPlayer';
	let audio;
	if (browser) {
		audio = new SoundPlayer('/click.wav');
	}
</script>

<script lang="ts">
	export let disabled = false;
	export let href: string = undefined;
	export let nosound = false;

	function play() {
		if (!nosound) {
			audio.play();
		}
	}

	$: classes = `block w-full h-full px-1 py-2 text-center border-4 border-black border-solid rounded-md ${$$props.class}`;
</script>

{#if href}
	<a on:click on:click={play} class={classes} class:disabled {href}>
		<slot />
	</a>
{:else}
	<button on:click on:click={play} class={classes} class:disabled>
		<slot />
	</button>
{/if}

<style type="text/postcss">
	.disabled {
		@apply pointer-events-none opacity-20;
	}
</style>
