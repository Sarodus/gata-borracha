import { build } from '$service-worker';

export default (event: FetchEvent): void => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key => {
                if (!build.includes(key)) {
                    return caches.delete(key);
                }
            })
        ))
    );
};
