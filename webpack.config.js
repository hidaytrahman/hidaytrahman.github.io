module.exports = {
  resolve: {
    fallback: {
      fs: false,
      path: false,
      crypto: false
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /node_modules\/html2pdf\.js/,
          /node_modules\/.*\.map$/
        ]
      }
    ]
  },
  ignoreWarnings: [
    {
      module: /html2pdf\.js/
    },
    {
      message: /Failed to parse source map/
    }
  ]
}