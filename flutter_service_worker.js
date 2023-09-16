'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dee4eb1de4d499c3e929d2979014d7ba",
".git/config": "b94448d58cc0b64639faba489489dfdc",
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
".git/index": "ecebaf2faa3ad66046ccdd3456ed510a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a3da29bbe6152192109e0a09d58c916f",
".git/logs/refs/heads/master": "8dc3f5fcba2afb0c6879dcf62dbb83e4",
".git/logs/refs/remotes/origin/master": "cdcafc8bd254d7e188cf98666e1fb2bf",
".git/objects/00/27274bba1d5a00d8ba6944f4b1cec7ae7b329d": "a5f35c0850fecf0f69d637ffa5101b88",
".git/objects/01/eb0b8b81b007e1d506a271dce6807216d0f013": "0d3061b5b6c87fc2a64d85b0eb75d157",
".git/objects/05/a87bb5c042c2b482a1cefdd851ab11d0054ea7": "791d0a96acc288bc2912124446189a71",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/bb1bb445999c0402a20932dc92f2feb53e6c3b": "54d5d64b67af5037e7a3447101bd3ddb",
".git/objects/08/4e4e344ae53b593a692e26bda0ee2079f9085f": "ce672acdfc0448279275fb19242948e8",
".git/objects/0d/0428a2ada55f7efa31db0a0cc30cf35b7d7c2f": "d192df3abd45a353bc6d93d2df8a8458",
".git/objects/10/61987dcc5237c73c8fea07f4ecbdae61c0cdcf": "a17fb1a9be7d11b9b135503171bd7463",
".git/objects/10/f033d0b9fc74e9e49b849fcf03b0cc1e76b164": "4a5f72488fc02ab72fcf2ac813bd47e3",
".git/objects/11/344e752fbc0cfb109d71a5f93fbc7fa3dae7a0": "9c2f5ab8491ca52b25048ad111007f55",
".git/objects/21/5ec41b4be44351459e2992b2a4002847744c66": "e111052f96bef62f6ac3aaea7948ee7b",
".git/objects/23/6ff6cfe9af588392f0ec3c7398fb64fac51d29": "a421c9079f4c84040ef1ca00aa4a3b70",
".git/objects/23/83a5b12d313ccd5168224d8c468f6abd17609b": "0cfa20cdf41b091ecae6be8a2fce21b6",
".git/objects/24/ee018d5715005d882b7e6469e1d1bffb95fb1f": "32c543e6e433bb8956b943240f2908cb",
".git/objects/26/9456a8651bc40a3b911ca69fe027da6ea6d50d": "320fbb1cda1a54f85e6951f1c4902300",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/d8bb6a4f61f3dbf55527a64a291a1051abfeff": "dc1e5c2757d0a8a5f8093b7d9c0bccb0",
".git/objects/31/504b116927ee3027fec883a7e60a5e868651d2": "98083418d835cd6174c677fcca8edf65",
".git/objects/34/1e92adf304276648ec123bf764a604ebc68fc4": "63ae8d1d7347d7657bdcee3de075fadb",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/77979bb5d86692364b8dc7d67b95a2c5c53a8b": "f7c0c924354c99dda7624f8e2af7dbc0",
".git/objects/37/87f5a1dad1f3d3b04c8de871b3632ae6648aec": "5125191380c9ddee2654ba15e865aeb1",
".git/objects/3a/50748bf9c461e186b248d255e097c941248c97": "4ca3104d55b6366a883ab68e290104a1",
".git/objects/3b/501c77dc9000822e1f677fc8d30f412f3ec650": "386b4981971a6d39e27b9bf8ebe54acb",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/42/ee2acf09cace3522d0c0c8cba6e4c1e8d69430": "68654bca417ed0cb7bcded447348569a",
".git/objects/43/24d02e1b2c3a903caab42885db3e646b2cf0f5": "b71990d75f7273ca30ebf962c73995b5",
".git/objects/44/f17021f2ee009ecf23b55b81153eea97da3840": "a3427cb5c8e7d9e998b9edbb857f0a25",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/d2d870d6723654b7da683f32ae7b58e8d7f2ea": "77aeb6aeeab73026d4da518b75634fd3",
".git/objects/4d/5743b3e0d4bccffb03e49b0360571e53d590af": "14058d56b6d64daaee0c70e137f3209c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/adfe6b013c257dd92417abd2f33d361e4f63a7": "2c037f4e76b622938318429a05046034",
".git/objects/55/40fe07f7e163197c7be6319b29666951130b57": "f0adb4edb35cc73383d211de0b991764",
".git/objects/5c/c9daa921ad5b3d6209267c090e356e387ca53e": "df327b1f66ea082d1908853f4e8d191d",
".git/objects/5f/008d0edf432b209e0281efe0f5c7fc576a0c34": "eec3aa636281478ec60301736c0b03cd",
".git/objects/68/01266da37a9a9af26d10b091cbb8eb4f6ab4cb": "99e3f07a3464d07c0201f4ae542c46ef",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/70/8a446fcd201bba8fdf0723e26b789a8cf3f652": "37dca910fced752be3b4baaceeaa90b2",
".git/objects/73/6f2d54913ba43b39bc0609ad7a6fa1e4ab6101": "0c006b908a32320d61c615800b59c5b4",
".git/objects/74/3ea8bf1d23e6a832b803c3af7b77972668a4f2": "20581622bab901c6a92e319b1a216c89",
".git/objects/77/1a532876e6c47af3bce1d466c88079612663fc": "c7a9264f54db04073847fa00bfecf18a",
".git/objects/7b/0ba8a4c58994a037206d45d774fdf2738ed805": "1297d385bb3bbf84ba4c929e746ea13e",
".git/objects/7c/7fc57160c80dfcbeb04b9a65aafa2f133d226e": "f42603696cb8659fd061b9c0f13437b8",
".git/objects/7c/e0410e10da28e162f867b67db1247de683b722": "54c05e4a81c4a3f6d5dea680b94c9ac9",
".git/objects/7d/17cfbcc18ecdeccb803adb6810d5090b850f48": "112e6afdc0d9b0b6d426ffe6eb6236a5",
".git/objects/81/f42624f68631a8a30cbf8cdbf0c71815a6a815": "ba883405be93681f8405e1dd6ff7f45f",
".git/objects/82/11f2ca0db324e2ba719698d9031025c89ea6a7": "afc0c24e7c3652f729284b22576334c2",
".git/objects/87/a157537e2d94c667aedcdbe38bd4f21b09514f": "f80db9de7aeced3093ae7cfa9cbbbd59",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/1df326d0a4606cbc3c3ff2ac7c65415a47b270": "71a87c0c74e8c173b3b7fcd55f6832a6",
".git/objects/9d/00349fcfe0fc7509dd026b1744b9737109bce5": "92abc3c2c6e16dff05f29aba0e716b7f",
".git/objects/9d/472c10f89d253d44fdba9fabdd8ac2390bb955": "03742342ed5acc2ee8ed0dad4576fd0d",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a0/07c14bb843d5a6f306ee69f6b9a9e31615a2a7": "93722d44af08275e64cee88488d4a8e0",
".git/objects/a6/ca4cf79c12b9c3a224e4edc1471de71ec2ae8e": "30e2ee91209214da10270e1b85be82f8",
".git/objects/b1/659d74dcb5a731d43695cef9e06488f15ff96d": "b498acabeb8af6fdb55ae13cc4fb4118",
".git/objects/b3/fed4de7fec43261ea0332e13a5442b8e1d9816": "aa0188a78f53a4792239505c28ca24aa",
".git/objects/b7/111abe9c7b5ef2fd0e457a18eafa579d47d5e5": "d2bd90e0bb6991d04bcdb3a8af9d575a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/8932e9f1dceadf10cb77406b6b0e1bb5d1297e": "9ab70eab01e7fe440c428e6acc26ff57",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/aacd4c5669a009a2c469780fbc56f6d351ddff": "9aad20ef7e83ad61bfea6f47ec2be46f",
".git/objects/c6/40b75f49366cf4ece9ae5a3954bdecfd2800d4": "489b7bd9fc52fa3d5d09e8803d0438ec",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/acc04d23e5d8e1c4e12b7558b5c70ab34b8b71": "70e81f8301310110bec824e8e1994b8b",
".git/objects/c7/e978ebaa8bc7921ffb870b83566182d04dbacc": "c0880b232aa8e598640a5f0197787c3c",
".git/objects/c8/8ede0bc4d503ab61360704bf53be056ba84c31": "803672790ff0c34195789806d4893fda",
".git/objects/cf/77c9834ccdb3eb1d4b3ae748c58c1b738c7db9": "c7d2dff11c663ad26be215ed4ce8ad82",
".git/objects/d0/d7428fdb3c9aeb8e578ae9325f1cf50165d18f": "2bbd2a3e8ec5453a69484499e9d08d33",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/b4b15b00e95644a9fca1ba0e2eba86523c0284": "37f647fdf1a6b12b753fd06f3a6f8dfc",
".git/objects/da/c7b903da6843681f27e02fe9be2aea5d579571": "4d25d7ab5cab93edbea87b23eb049d22",
".git/objects/db/fe21b1345d2d56151d32403355a21d332d44d2": "782d24bd6117998ab8777538e40b24ab",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/ad40ae96d9e2e89ed6c5a02b612faaf3e102b1": "05546757b9cc3f4e0d1ad8f082cc2e85",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/db764a6c8bbf7f2fc31de5ee2f0918c3916e8a": "a90435730abf59193e37f8f725ff6cea",
".git/objects/ee/ce135d776fb43c280ab3baf4247458d7b550ca": "00531762df44f640e691adc175f1dedc",
".git/objects/f3/b37fe7724e26a400f288c29fc9cb7f5456ed59": "2964dd5132247e145d05f1c534ce0abc",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/master": "dcc47364d811f3bd1f34172fd5701243",
".git/refs/remotes/origin/master": "dcc47364d811f3bd1f34172fd5701243",
"assets/AssetManifest.bin": "272bca9b0183dfdde7e1366a8760ae19",
"assets/AssetManifest.json": "b88bcb7eb85ca98b59675d2edb8dc2e2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "64b2d829aef8705fc514d3cb4d6db649",
"assets/images/extra/Vrushti_CV.pdf": "3544ce39bb74ec015df73eb54795f85e",
"assets/images/logo/flutter-logo.png": "6cc8091ea3a9fc664456103e151b0f0c",
"assets/images/logo/p1.png": "d6618428d6c358daadcdac66fce07bf0",
"assets/images/skill/c++.png": "9920f22485ef78ef92380e1b3614b2d5",
"assets/images/skill/c.png": "2279471322aa4e176f2fb1de4419754e",
"assets/images/skill/css.png": "5994b9712d7ba22152f11e6b9165f256",
"assets/images/skill/dart.png": "b82cc7c205ff11b797d6439a265a3781",
"assets/images/skill/flutter-logo.png": "cdd9990b15cb6b1cbda1cdb385571f4e",
"assets/images/skill/html.png": "83cb8868678052f363ebcc17a9a162f2",
"assets/images/skill/illustrator.png": "6e2cc24c6b84b107d3a95d246e6cdcda",
"assets/images/skill/java.png": "71256535026d4e82812d690697340e5d",
"assets/images/skill/postgresql.png": "4bafd46588110b1e172bb7027556960f",
"assets/images/skill/reactjs.png": "59ce5d0d44bfe4f3b47465292d1ab041",
"assets/images/skill/spring.png": "9a802a28d505d662b8c5375935bff8e0",
"assets/images/skill/springboot.png": "aabfcd1460428009f189478139f6d32d",
"assets/images/social/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/images/social/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/images/social/mail.png": "add9536e9167bfa217f3b8070e889c12",
"assets/images/social/medium.png": "4a79539f8dd8c356f086d2333f857fb3",
"assets/NOTICES": "92948e80d64eaf2daedae8c7c1439f35",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1bdf2a05c82fc05b4a83df80dbb2cfa3",
"/": "1bdf2a05c82fc05b4a83df80dbb2cfa3",
"main.dart.js": "8a83eb5d89124bb894beb4c634458b26",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
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
