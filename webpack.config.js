module.exports = {
    module: {
      rules: [
        // 此处省略一万个字
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'
        }
      ]
    },
  }