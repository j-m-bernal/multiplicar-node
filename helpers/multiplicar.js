const fs = require('fs');
const colors = require('colors');
colors.enable();

const creaTablaMultiplicar=async ( {b=1,l=false,h=10} )=>{
        let salida="";
        let consola=""
        for(let i = 1; i<=h; i++){
            salida+=`${b} x ${i}  = ${b * i} \n`;
            consola+=`${b} ${colors.blue("x")} ${i}  ${colors.blue("=")} ${b * i} \n`;
        };
        try{
            fs.writeFileSync(`./salida/tabla-de-${b}.txt`, salida);
            if(l){
                console.log('**********'.green,colors.red('Tabla del '+b) ,'***************'.green)
                console.log('**************************************\n'.green);
                console.log(consola);
                console.log('**************************************'.green);
            }
            return (`Archivo ${colors.green(`tabla-de-${b}.txt`)} Creado`);
        }catch(err){
            throw ("Se prdujo un error".yellow, err);
        }
}


module.exports = {
    creaArchivo:creaTablaMultiplicar
}




