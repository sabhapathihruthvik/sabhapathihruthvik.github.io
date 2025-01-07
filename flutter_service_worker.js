'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bd44d0a134a07452a1e1102cb06c571f",
".git/config": "f3cb2a51f3136497cd91be9f6dc83659",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "c2e80e3dc21636fd05bf81223fca500f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f65b18fd66b9c9242d5710a6655c713d",
".git/logs/refs/heads/main": "ffec129b9d7aee1c55d488aa7890efaf",
".git/logs/refs/remotes/origin/main": "d35572dee9464fbef614b956630389e2",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/11519346e87fdb90792c6fb6d542a7b2516f41": "3c40ef2febe65835a33b18b6da1a9d42",
".git/objects/0a/9c6b05e2704d3621dcec26ffc9b5386d40e49e": "74982c340d1429baf4990600e28bfcba",
".git/objects/0f/d1d546dc62577244136b66892739942894cfda": "112e773a5adc656ec22b0a0cea5712b5",
".git/objects/12/714fa13f2a82bdb1510973265ea4dba8018e34": "c49ea689d8e9746851b6d2918fa751a3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2a/ed5171f4c6caf7830181f8752487bc6385388a": "97e775ce0f8b8756c009b8634fe8d698",
".git/objects/2e/346a98056c122b249ed03134b82c5032d72126": "5f65599b3ff60b4a31699d070cefe83a",
".git/objects/31/3b30ff76a94cfa36da265e78503efaf4ecc8da": "9cd5356b3d7db24a736b7d3d7880cf2d",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/5854eed7c3e7ea4c6dc869e6c53a7729dede81": "84181ed0856a8192d18d338cbfe5f6d8",
".git/objects/38/1f9f35897b7dd36ca063d0575555c294c878dd": "b31762cce3efe51efb355adc6eb9a67f",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/7ebdf8bc72a2f10399cee9ba2836e2a86bd563": "3f0169ced601248f24ed9d23970650f8",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/81e6fa2e5969b252547aa1bc3fdefa82e64a6d": "913c4c763b93185a07336fa5a75e1f52",
".git/objects/42/8616fe864b95ce72b9235919392c0669015e3e": "acd48091348c2022b38e1b8782cf0b7b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/263f24572bbb4db28b451e951e9b2f32eef03c": "a4861f4805996396077c3bc1c3d81ce2",
".git/objects/4a/e04ee1cb2454e0a882745df5bd5a868d49ca9a": "4f454feffd8dfe346d3a6aa93f700f66",
".git/objects/4d/14bb0cb7a5bb8649b3a04fa92cd64b10701af5": "198a46aeb0616ce2eb8e67560bbfbdcd",
".git/objects/54/403d5284eb1870fef3e8a741cab0be0264861a": "315293db49a3ca59f08002ccc0e90e61",
".git/objects/54/e4e3fc35ba70c67601ce9eaedb0f3089c64bd8": "64d6e0802764067ba32c9568d41f17e3",
".git/objects/56/1d0c7b975741e8e1cb5ff9717ef874105b6073": "b389f400fdaa2b5cc1ad30783be466aa",
".git/objects/57/bc1df1880225324b89187ed1179b9dc8e88be0": "e9e719e58dcd02108f891b4054730c68",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/6f466c5a6cc7b6ee36eac3f621b2c14dd80f13": "1d303ab09d26b37c1f1527c9c13c8310",
".git/objects/6a/bb3e40be5716f3b71afef529af1a434b210222": "9dc461ad2140937ec8e76e6de7d2b374",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/ddc6ce569d4e597070d0ad250c188406eb23e3": "c7dbe6d80ee809c7094692fef043e8b8",
".git/objects/70/83678454d0d88dd759ee36ce5fd278e037bb98": "832e7568b73950f9bdaec5b05cdf6847",
".git/objects/7a/e46a2bbc2011cd38ac9e7d7e0f70225d9fd2f4": "548746eab3ba10d06ae9c777fb035c73",
".git/objects/7d/7ca3263fbb99e08ea98a5ca5917ce8b0673446": "36ad0d860499aa239c91f893c79a8955",
".git/objects/81/4a800112399d68e5836df25777b57891472677": "d8533bc59d07da8f7161ddf1e6004899",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/23f2b5a4f7c68bf7ac7e14b8b34aeb57714b6a": "c73769048aab786d30d4a6379740667d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/27b9d5b96826ad0a5478576938358f6f5fa67b": "bc1370e16224fa8b52d5fa77c1f77672",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/58da83d57272e7c640ed0ffc8c01b32694da48": "4cdf8827fc08e11e3590913968524d8b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/2563101746c1734482723c7e68ff68c6cc49e8": "bc958bf9ebcb602b19a8a24df127af63",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/4fb2c9e788555431a55e65dce5ff12844c9152": "a37808a441a9357780440ade9e4c04bf",
".git/objects/a0/9a95738d14964f99f5421ea05414abb4fb1394": "193e0a0e963b8015aac0eae84e454ee6",
".git/objects/a2/4a584e88188aa06e118bc2ebfa45f9355fcfdc": "f2d1d66b9d3bea7117223eb6604f9566",
".git/objects/ac/43e170a1c2d00689d7529bace15c774e36eb9c": "577cd06126733335ba4e3351285d6635",
".git/objects/ac/df13b37318942c97e46de567d7b5b7ec7d99bd": "a1ed5c338cba0c280bc8a6a8583ddb95",
".git/objects/ae/eb0ff4693b7e1ba0161251658b32d25c1389f5": "a2a087dedb9ea4659809f37deeaf32fb",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/f8d08f4233f06b6e0f3c7b74f7a381d4e846ff": "dd5111021f2bc50754a0a0e641895335",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c4/80efce330ba7ea11864c1b75ae349e0e51b19f": "6967f08721ab3b67749524b3903f7b45",
".git/objects/c4/e7b880d36b7611cdd892c4aaf10af36bf36438": "86fbf61ff5b9096ca3ce362e47fef10f",
".git/objects/c7/cbb95bea0c2c277f6be639b62c3a44db0eff93": "ac7b75069ef75209c944ce8e939bd512",
".git/objects/c8/c1cd4a3c5f40f186a76bc23fe9d7bcb22b43bb": "e857bf79b38bec108d782c3950e63ad5",
".git/objects/cc/cd5b185e50db4e0c833e469c9f90efe0907049": "df12dc41a897d86f4dbc6eb0e2ea431d",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/ce/ece9108004e73eb5b8b4cb91e826d90d26d021": "c2f754223a3a922337ba7357e30d59a5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d79371f282e1b4169befd010f23c956a516ee7": "d624e89c2499a126ca9312a5c6b6a588",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e1/e6dafff5dfdb915a14dea16805907368322a94": "49c827d63c2a41cb943a8c75dfdf310b",
".git/objects/e3/556366325d7cec9ceed5549b7ce64237cd7198": "24fb29c7a3b9b9c980c550715e9ff6a9",
".git/objects/e5/e0d01386417707cab2b3cb5bd96090cfe27995": "992482e35864d157d0e27276ee9072b0",
".git/objects/e8/f40ec5f61d0a2532ea6a4492ba05f6f4ab0f0e": "a3f130c065664af3cfc1f5df6cc164ae",
".git/objects/e9/85569f51f03a58b7fc8429bb8e2556deb8ab06": "05a5ff3797f8f1a61ce2cadff043571e",
".git/objects/e9/dde868f9f0c69699e4a49015a1f8843dc80036": "181728c6d06acb3b750775b5a9d9b9ff",
".git/objects/eb/34343b8120c0a8893e699357bb085e99f5bd6e": "1f29197192573cf5cd8a322d1e8b8be9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/f576024bc664c3548b581ee584e4d84ff0d74f": "50849fb426e70ac80c833fe1af6e03e3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/35d73cd2b89cb214fcac0a9124621bcfd62f9b": "bb50a646178a0423fba7aed964e62496",
".git/objects/f5/69b2e130a54e1bc2418772146e6b101dd43017": "7035e1aa8d1bdcd63929326c26bc00f4",
".git/objects/f7/a211aea8bc63d15c6e29a726ed5221ebe6dd5f": "3656c08a5f71e11377785a56b45bcb4b",
".git/objects/f9/72903498f0b6de3e15556af87a4882a0332638": "83145c1f698b1c016557dac61adc421b",
".git/objects/fc/6665f268460cce2263b4e1d22ca6a5b789d054": "dd3012c7b833fbcfeb101c621d17b008",
".git/objects/ff/0bb559bb90a7b6b80ad009838cc7b87e014131": "35975b9caa32ac8a65441bdaa1eeaf67",
".git/refs/heads/main": "a04c4fab5eabf710a801c60f2fb666f1",
".git/refs/remotes/origin/main": "a04c4fab5eabf710a801c60f2fb666f1",
"assets/AssetManifest.bin": "91711a317cf4966921e342a7a02a2b72",
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
"flutter_bootstrap.js": "035eead530ea3b791ac32c24c589a559",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "65dacf0c0ac1e32c4756c5dcbe21c035",
"/": "65dacf0c0ac1e32c4756c5dcbe21c035",
"main.dart.js": "5ea99b6c105df8044eb1a4a929adb28e",
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
