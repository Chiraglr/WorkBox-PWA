const path = require('path');
const {InjectManifest} = require('workbox-webpack-plugin');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache')

// module.exports = {
//   webpack: (config, options) => {
//     // config.entry.push('/ServiceWorker.js');
//     // const nextEntry = config.entry;
//     // config.entry = async function () {
//     //   return await nextEntry().then((res) => {res['service-worker'] = './ServiceWorker.js'; return res;});
//     // };
//     // config.entry().then((res) => console.log(typeof res, Array.isArray(res), res));
//     config.plugins.push(new InjectManifest({
//       swSrc: path.resolve(__dirname, 'ServiceWorker.js'),
//       swDest: path.resolve(__dirname, './public/sw.js'),
//       // Any other config if needed.
//     }));
//     return config;
//   },
//   reactStrictMode: true,
// }
const withpwa = withPWA({

  pwa: {
    dest: 'public',
    // disable: true,
    // runtimeCaching,
    swSrc: './ServiceWorker.js',
    swDest: path.join(__dirname, './public/sw.js'),
  },
  // future: {
  //   webpack5: true,
  // },
});

console.log(JSON.stringify(withpwa));

module.exports = withpwa;