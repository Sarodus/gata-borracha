import { browser } from "$app/env";

function supportServiceWorker() {
    if (!('serviceWorker' in navigator)) {
        console.error('No Service Worker support!');
        return false;
    }
    if (!('PushManager' in window)) {
        console.error('No Push API Support!');
        return false;
    }
    return false;
}

if (browser && supportServiceWorker()) {
    navigator.serviceWorker.register('/service-worker.js');
}
