//don't share
const secret = "SUPER SECRET";
//share
const john = "John";
const peter = "Peter";

console.log(module);
/*
//when you console.log(module) in the terminal
Module {
  id: '.',
  path: '/home/john/node_express',
  exports: {},
  //whatever we add in the exports, we can access anywhere in the application
  filename: '/home/john/node_express/4a.names.js',
  loaded: false,
  children: [],
  paths: [
    '/home/john/node_express/node_modules',
    '/home/john/node_modules',
    '/home/node_modules',
    '/node_modules'
  ]
}
*/

module.exports = { john, peter };
//now you can access it anywhere in the application
