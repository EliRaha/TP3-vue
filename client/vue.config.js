const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = defineConfig({
//   transpileDependencies: true,
//   chainWebpack: (config) => {
//     config.module.rule('eslint').use('eslint-loader').options({ emitWarning: false })
//   }
// })