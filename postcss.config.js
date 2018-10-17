module.exports = {
  ident: 'postcss',
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-preset-env': {
      features: {
        'custom-properties': true,
        'custom-media-queries': true,
        'nesting-rules': true,
      },
      autoprefixer: {
        grid: true,
      },
      browsers: ['last 2 versions'],
    },
  },
}
