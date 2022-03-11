import { browser } from "$app/env";
import { derived, writable } from "svelte/store";
import { CATEGORY_TAGS } from "./constants";

export interface Phrase {
    text: string;
    category: string;
}

export interface Player {
    name: string;
    lives: number;
}

function createLocalstorageStore<T>(key, defaultValue: any, processValue: (value: T) => T = (value: T) => value) {
    const store = writable<T>(defaultValue);

    function loadLocalstorage() {
        const localstorageValue = localStorage.getItem(key);
        const initialLocalstorageValue = localstorageValue ? JSON.parse(localstorageValue) : defaultValue;
        store.set(processValue(initialLocalstorageValue));
    }

    if (browser) {
        loadLocalstorage();
        store.subscribe(value => localStorage.setItem(key, JSON.stringify(value)));
    }

    return store
}

export const categories = createLocalstorageStore<string[]>(
    "categories",
    [],
    (categories) => categories.filter(c => CATEGORY_TAGS.includes(c))
);
export const allPhrases = createLocalstorageStore<Phrase[]>(
    "phrases",
    [],
);
export const players = createLocalstorageStore<Player[]>(
    "players",
    [
        { name: '', lives: 7 },
        { name: '', lives: 7 },
    ]
);

export const phrases = derived([categories, allPhrases], ([$categories, $phrases]) => {
    const phrases = $phrases.filter(phrase => $categories.includes(phrase.category));
    return phrases.sort(() => Math.random() - 0.5);
});
