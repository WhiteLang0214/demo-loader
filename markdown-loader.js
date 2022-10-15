
// 一个loader

const marked = require('marked')

module.exports = (source) => {
  // 对资源的处理过程
  // 1. 传入需要处理的资源
  // 2. 返回处理好的资源
  
  // // 测试代码
  // return "console.log('hahaha')"

  const html =  marked(source)
  // // 方法1: 手动将 html 转为 js 代码
  // const code = `module.exports=${JSON.stringify(html)}`
  // return code

  // 方法2: 使用 html-loader 直接返回 html
  return html
}