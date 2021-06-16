// // next.config.js
// const path = require('path');
// const withImages = require('next-images')
// module.exports = withImages({
//   exclude: path.resolve(__dirname, 'src/assets/svg'),
//   webpack(config, options) {
//     return config
//   }
// })

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// }
//
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  images: {
    loader: 'imgix',
    path: 'http://localhost:3000/',
  },
};