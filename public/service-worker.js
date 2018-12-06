
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('hamamul-v1').then(function (cache) {
            return cache.add(
				'/',
				'/404.html',
				'/add2homescreen_index.html',
				'/css_grid_index.html',
				'/fetch_json_index.html',
				'/index.html',
				'/kalkulator_add2number.html',
				'/leaflet_index.html',
				'/manifest.json',
				'/css/leaflet_style.css',
				'/js/kalkulator_add2number.js',
				'/js/peta.js',
				'/images/gdk.png',
				'/images/background-jogja.png',
				'/images/background-jogja -long.png',
				'/images/logo/homescreen.png',
				'/images/logo/grid.png',
				'/images/logo/json.png',
				'/images/logo/kalkulator.png',
				'/images/logo/leaflet.png',
				'/images/logo/offline.png',
				'/images/location/de-mata.jpg',
				'/images/location/Taman-Pintar-Yogyakarta.jpg',
				'/images/location/jogjabay.jpg',
				'/images/location/kebun-buah-mangunan.jpg',
				'/images/location/foto-bukit-bintang-jogja.jpg'
			);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open('hamamul-v1').then(function (cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function (response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});

self.addEventListener('activate', function activator(event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys
                .filter(function (key) {
                    return key.indexOf('hamamul-v1') !== 0;
                })
                .map(function (key) {
                    return caches.delete(key);
                })
            );
        })
    );
});
