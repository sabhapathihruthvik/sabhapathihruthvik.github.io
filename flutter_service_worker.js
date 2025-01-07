'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "91711a317cf4966921e342a7a02a2b72",
"assets/AssetManifest.bin.json": "9f0106108f94129228e60c67432a0a11",
"assets/AssetManifest.json": "ae1bdac5238d91c7374d7ef7db145c9e",
"assets/assets/AppIcons.zip": "b82fd6de20902db5ff20f2e0b978a1df",
"assets/assets/appstore.png": "cb94da550eafbc972476bb77525969f2",
"assets/assets/fenrir.jpg": "3ecd57c4d66ba1de08db3ec44e7283a6",
"assets/assets/playstore.png": "df78c5e7c820c7bd055b2930f824b6e1",
"assets/assets/profile-pic.png": "cb702655b0f138ae4f19d7bea7b288e0",
"assets/assets/space_coffee.riv": "0cc8d17efd098dba34c356495fe74c58",
"assets/assets/tech_icons/dartlang.svg": "384ad99903293e87f01f49214db88050",
"assets/assets/tech_icons/django.svg": "e0294088244706327ec9092d977518ba",
"assets/assets/tech_icons/docker.svg": "a3cc1af0e4d58a9082a2d4db93e5e8c5",
"assets/assets/tech_icons/figma.svg": "1c4f37801e58491b4778dcece69baadd",
"assets/assets/tech_icons/firebase.svg": "10b0719343408095f5a9b369e0787115",
"assets/assets/tech_icons/flask.svg": "c3295210d3adf07043de95739c8a51a1",
"assets/assets/tech_icons/flutterio.svg": "59a662c262bb9fae1751abe4d13abb84",
"assets/assets/tech_icons/getbootstrap.svg": "ebc85b26307890aa1407517448830c6c",
"assets/assets/tech_icons/git.svg": "adcab6a564a11096dc35f681cfb02ce6",
"assets/assets/tech_icons/html5.svg": "9f2e1637c83e37e8f555044e12324734",
"assets/assets/tech_icons/java.svg": "249fe040428adedb1d5b3bb6811ef492",
"assets/assets/tech_icons/javascript.svg": "efc3c6fd4940efe54cf3a4d327dc4ee4",
"assets/assets/tech_icons/jenkins.svg": "975530cacbd7b5ceb9a6c053f0eeae6c",
"assets/assets/tech_icons/kubernetes.svg": "f7a858b2625ddd2ebdf31ecc1688f576",
"assets/assets/tech_icons/linux.svg": "038f0f990f8ebbac7f981d34f6a132e9",
"assets/assets/tech_icons/mongodb.svg": "ce756188f8cec48ed678bf47355ccf48",
"assets/assets/tech_icons/mysql.svg": "b17fad3b96d322d48ddbfa196f93158b",
"assets/assets/tech_icons/opencv.svg": "5ca2926640fb5adde52005561a17b28d",
"assets/assets/tech_icons/python.svg": "ffc01dcc015f573d0f1d831fb7b6cbca",
"assets/assets/tech_icons/pytorch.svg": "ef7d26131def6c39ea3af3a08f1b903a",
"assets/assets/tech_icons/rasa.svg": "5ddc76e3417c7e17c8ee9c74f8742133",
"assets/assets/tech_icons/sqlite.svg": "332417a7f4156fbd6f81615a48286092",
"assets/assets/tech_icons/supabase.svg": "3cca935b231d5e990629327c2efb86f0",
"assets/assets/tech_icons/tensorflow.svg": "3766283c45d537cea7708ea7eafffab2",
"assets/assets/tech_icons/twilio.svg": "6556f4f8b251c44c18026c1aafec38b0",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "906485badaa93886d61ccf6fb8cf7d50",
"assets/NOTICES": "4fa91a71065f25083e51578944f366b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "54ecd0f8b67555c93203bed98d3a59b6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ba46505a8c53ed900fad1e4add109c57",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "65dacf0c0ac1e32c4756c5dcbe21c035",
"/": "65dacf0c0ac1e32c4756c5dcbe21c035",
"main.dart.js": "4d4f59d519a80955a0454d314c6b03a7",
"manifest.json": "ec2a9f3876369c5cb1bf60a00cd0c235",
"version.json": "30e7101059553bc737b8ab4ebab9977b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
