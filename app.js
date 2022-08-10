const names = require('./4a.names');
// const {john, peter} = require('./4a.names'); //alternative import option
const sayHi = require('./4b.utils');
//require is a general default variable - mentioned before
//if local modules, there is a need for .(./ or ../), external modules- just ''

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
/*
Hello Susan
Hello John
Hello Peter
*/

console.log(names);
//in terminal: { john: 'John', peter: 'Peter' }