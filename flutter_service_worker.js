'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6bce6433b7d3d86b251ac6e25e1dd73c",
".git/config": "455cde7405cf55e1b5ce39ea4eed3a1d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "50f820156db39d0875ee6ca0c0ecd58a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "01138fac4b356915004da3ee74707638",
".git/logs/refs/heads/master": "01138fac4b356915004da3ee74707638",
".git/logs/refs/remotes/origin/master": "673cbcef487a5abd65f898f5385f5ffa",
".git/objects/00/40a0909bcb9c68c4d05e4d54e953e2f109a19c": "64c35aebc5a53df9d27c5fa3883813ce",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/08/16445169486f0bd33e6a131c667e5f3c789f66": "01349180df373293ecf9aa0d6a4086b7",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/69baacafa4a75dcc0da0f06ce62923cb0abbe7": "63e03b916c01150d1de2da648a547dc6",
".git/objects/0d/5ce5192f7bb463be7b5417743fab0f1dd85884": "a744aac84720a45031cd2405b0831d48",
".git/objects/0d/91ea9c9534d69f8ed5e4c2bb0dd9fc699f94f4": "d10a29aa01c1f394cfc6e703002d4369",
".git/objects/17/6d617bf4cdbdf2d6d40a88a7472c63608370cd": "0718946cc83d47deaff19f83d3ca0927",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/22/66c9b1a5fb316e8ca96daf58462b08021d215f": "7e0ba7f4e240222cfeb04f64eb699478",
".git/objects/25/809759b2320b9c1ee820a589ff8428c3bd67e7": "c885f723aba2143f6cf49aca2631bb32",
".git/objects/26/0727e3ee1bcc5469c79243cbea2517152f8264": "87c22e16ddb4a49b3ca84f8f5be9dc15",
".git/objects/27/09236d93f3b59e3a9e33b576a5953f5e5b7c01": "e8d17ed7cb244f5ef71eeed285a9eac5",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/30/f577216cfe8bac4652b6b399da33eff7ac62e3": "c9a71f6d6f70388fe5a0b6a9ceb09965",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/6da0a12ef3e685ac30387cd3d164074d3dee30": "fa589bfe334f06d9690673bb8a62133f",
".git/objects/3f/0525c3584aad9821fc1118d3da9df347785194": "48d781a1da76652b0b0eeb476a4dd70b",
".git/objects/42/a8699d85d61cf2e294de4d5a3406552c435870": "7b8f0cce38b0fdb317ba97f1656e916b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/d056aca47ec3bea4d6095e8fc88b714691a97b": "28f76e347580976254fdbd693366aee5",
".git/objects/4e/e481eba5a1aa2726a24278818ad6a0099bc4fb": "71944a29b8b96c86baedd65f2e079a36",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/62/05c7399325a38d250202e0af55e749f9105e76": "ac05c8028bedd5d6d09e4b94cc9ea221",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/12d66ec0082a347526abe16ac6d35e2192cbb2": "ae18bff2aa375a6223702e4997b40359",
".git/objects/69/691eb7fcfab1e55af0fab78e2de8abdd0b1057": "b1ed063c390630f9793a6f93e79b9fa0",
".git/objects/6e/099ccdcd8aa345abde53367700ae1e7c2bc5bb": "75f3afcf81f6f8e72660134157c4f6ed",
".git/objects/6e/ab9083a37500b954f9a07bc0633536393237e5": "170818fe8b5aebe24c4d6cc1b81ea1b1",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/74/f2c222a686208adfbb1c72a4d543a4dead0c05": "870690303c5e4b541922de82fb59f268",
".git/objects/77/f17536b248f653394f2469ac2a64be846a9ba1": "00767b6f3d1c7359ceae1955b92d4bd2",
".git/objects/84/5f954e40e0900c9cd2b81c6113fad128d27185": "720976622c055fb8a5cf97bdd39252ce",
".git/objects/86/bf8e903ba8df2aa83b9ab08076419ba101cd66": "366be3c369d10e3f9f654bf7674e2d46",
".git/objects/87/222063dabbc799c9e9d5dafbd362539da6640b": "7c0f22b986b2aa01656ab93c115f7415",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/155896ea0401fcf1258c76579ff9414313ebe5": "d633b9530d776da19164eaf34cddbac7",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/94/a6b7cc661a4c4867533e1a310bc8032c9e76d5": "961532ad20b350f885c9cebf150b8cad",
".git/objects/a2/a05a22706303b6dfc2b9b267eb5c5b2857038d": "a7a445a166926a430a51b33f23aaa2dc",
".git/objects/a2/a19297f230f374311dada726451eed5c5ccedd": "b70648dbdc2ddfd2a50af6c1fc9c96bf",
".git/objects/ad/1095961f9f869cb561b3fbdf73c2bb6ef187c6": "a624d04d0f6c8dac3aa270eedcd429fb",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/ba519bdb38d936ceae1e9f614990705a7697b5": "0b68379e095b74a9e229b8e4027eae91",
".git/objects/b1/42bfc099943227f79947f382c2eac89de775ef": "5e542760eb40c094cbe58d2de5c3e67c",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/7ae71a48328aff1e6f6494bb1288bea4114b60": "1910acfc86b4829c4152bda65fe1f28b",
".git/objects/b6/968a5228591fa87b5f1f0eabe1f4e2d5895519": "04cceeb770621ba6a9e31f6765429264",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/820c03b81ecd32321ecd44d5fb0a6fb99d6031": "8bf0fde13bb06cad066bffa5a85e58bf",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/08a730f58eac19c2e32fcee34c4d52e54ed0ca": "f0fa70cfa773b67b2369b745bd921af2",
".git/objects/c7/e5f302859ee61cdf6eaf948f1ef5ecc7b393a0": "07548ce62162dccec279cb26d9f28f3c",
".git/objects/d0/75dcb0e9699ffb4a4d4f85f1c339573e23e5f0": "2c30ad2680f11a739b415b323b77b6da",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/d92de95d68a22abbb4ef3463ecbb4264fe3c57": "9ce0d9094d6034ca6b1df9f41f7ce768",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/f123c83bcfec69df3fba913f298b4f90934375": "2b1b838374c78a99ed129f39caf880b7",
".git/objects/dc/16aa6ca6b39dce0cdceeae311f2be8d7a45786": "53de5af02e2bf48ce328bdb7c5f93b70",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/e5d010a0dd2c4f6d2f8f4698a7842939b71cbb": "a021a63d391cad025e84258897bcfe10",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/c1716758b0b7baf719c5441416f7f642946588": "65f73f0ac63935420d8fc671f2769a4e",
".git/objects/f1/65680594edc361c9c216d6ec3553c9ce221df9": "07569d32dbf794affe28b0283ca03d71",
".git/objects/f2/4aaa87166e0a41000f8a9feb54e0384f5c6228": "6d08d37492daf525c0763d0252b82760",
".git/objects/f5/2111537a2b9b3ca4b26ed8010dac1ef77484c9": "a6cc585caf6fb49e4ba910b12c84619c",
".git/objects/f6/f7b47a3acd7ab8c28dd0769b92a6ac1c545e9a": "79c76bb6612870ff63b39cf20201c56f",
".git/objects/f8/155574bf96a0c57fa00cf0f8ec702e9601551b": "357139b233b20f6bf8262bfefb408bbf",
".git/refs/heads/master": "36250d7acf80cab6b0177ff9e087805a",
".git/refs/remotes/origin/master": "36250d7acf80cab6b0177ff9e087805a",
"assets/AssetManifest.bin": "9b97c6c640daf08dcb0bb98845c3d8f9",
"assets/AssetManifest.json": "8bf4966fa976d5577ba06edd5e1503e8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e86926e48f4743a9bc719b26fe179dbe",
"assets/images/aai.jpeg": "6a6d7b4fe24f7eeba0f9be4f4d770520",
"assets/images/Background.jpg": "4b3e73a92a785ced4509fe9a1871f14c",
"assets/images/logo.jpg": "692550519274350310f7d5f5e51ccc9d",
"assets/images/puran.jpg": "5bc8c8f677c71c01daf90a38d44fc075",
"assets/NOTICES": "41d1ab8dd0fe6369852efcd188477987",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2c493c956abe0b2f70020a4744f47414",
"/": "2c493c956abe0b2f70020a4744f47414",
"main.dart.js": "b8adac527c1a53014ff327a47a97fa47",
"manifest.json": "bbcba3fba252982346ebde4420d4d1c5",
"version.json": "3dacafd6fb60caecd2b067bff97f8dee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
