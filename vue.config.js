module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gate-zero-prototype/'
    : '/',
  outputDir: 'docs',
  transpileDependencies: [
    'vuetify'
  ]
}
