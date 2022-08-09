//no window (browser support) for node unlike javascript
//Globals - global variables

//some of the default global variables
// __dirname - Path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current modules (file)
// process - info about the env where the program is being xecuted (now our machine, but in servers like Heroku and AWS)

console.log(__dirname);
setInterval(()=> {
    console.log('Hello World');
}, 1000)