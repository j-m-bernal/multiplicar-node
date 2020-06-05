//requires
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log(`\n== Tabla de multiplicar del ${argv.base} al ${argv.limite} ==\n`.green);
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data.yellow))
            .catch(err => console.log(err.red));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(err => console.log(err.red));
        break;
    case 'borrar':
        break;
    default:
        console.log("Comando undefinido".red);
}