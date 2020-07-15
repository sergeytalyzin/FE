// const withLess = require('@zeit/next-less')
// module.exports = withLess({
//     cssModules: false,
//     lessLoaderOptions: {
//         javascriptEnabled: true
//     }
// })
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withImages = require('next-images');
module.exports = withCSS(withLess())


