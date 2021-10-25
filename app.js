
const {creaArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

creaArchivo(argv)
    .then(msg=>{console.log(msg)})
    .catch(err=>{console.log(err)});
