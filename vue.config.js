const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // TO ADD A BREAKPOINT on chrome to vue components! 
  // ONLY NEEDS TO BE DONE ONCE PER PROJECT!!
  // add another object 
  // on chrome debugger.. go to sources
  configureWebpack: {
    devtool: `source-map`
  }
})
