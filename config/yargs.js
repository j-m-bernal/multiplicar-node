const argv = require('yargs')
                        .option('b',{
                            alias:'base',
                            type: 'number',
                            demandOption:true,
                            description:'Numero base para crera la tabla'
                        })
                        .option('l',{
                            alias:'listar',
                            default: false,
                            type: 'boolean',
                            demandOption:true,
                            description:"Lista el resultado en consola"
                        })
                        .option('h',{
                            alias:'hasta',
                            type: 'number',
                            demandOption:true,
                            default:10,
                            description:'Establece el limite de la tabla'
                        })
                        .check((argv,options)=>{
                            if(isNaN(argv.base)){
                                throw "La base debe ser numerica"
                            }
                            if(isNaN(argv.hasta)){
                                throw "hasta debe ser numerico"
                            }
                            return true;     
                        })
                        .argv;

module.exports = argv; 