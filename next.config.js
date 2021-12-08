module.exports = {
  reactStrictMode: true,
  optimizeFonts: true,
    images:{
        domains:['links.papareact.com'],
        formats: ['image/avif', 'image/webp'],
    },
    devIndicators: {
      autoPrerender: false,
    },
    compress: true,
    webpack5: true,
    swcMinify: false
}
