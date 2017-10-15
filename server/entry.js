require('babel-register')({
  plugins: ['transform-async-to-generator'],
  ignore: function(filename) {
    if (filename.includes('koa-ratelimit')) return false
    if (filename.includes('node_modules')) return true
    return false
  }
})
debugger
console.log(33)
require('./app.js')
