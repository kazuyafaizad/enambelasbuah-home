    // vue.config.js
    module.exports = {
        chainWebpack: config => {
          config
          .plugin('html')
          .tap(args => {
            args[0].title = '16buah Official Website'
            return args
          })
        }
      }