<script context="module">
    const API_URL = 'https://us-central1-ineverever-4a3ef.cloudfunctions.net/iNeverEver';

    export async function load({ fetch }) {
        let phrases;
        try {
            const response = await fetch(API_URL);
            if (response.status === 200) {
                const data = await response.json();
                phrases = data.ineverever;
            }
        } catch (error) {
            console.error('ERROR GETTING PHRASES');
        }

        return {
            props: {
                phrases
            }
        };
    }
</script>

<script lang="ts">
    import { type Phrase, allPhrases } from '../store';
    import '../app.css';
    import { onMount } from 'svelte';
    import '../registerServiceWorker';

    export let phrases: Phrase[] = [];
    onMount(() => {
        if (phrases) {
            $allPhrases = phrases;
        }
    });
</script>

<div class="container flex flex-col items-center p-8 mx-auto h-screen w-screen">
    <slot />
</div>
