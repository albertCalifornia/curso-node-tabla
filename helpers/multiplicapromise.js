const fs = require('fs');

const crearArchivo = ( base = 5 ) => {
    return new Promise((resolve, reject) => {
        
        console.log('Usando Promise')
        console.log('====================');
        console.log('  Tabla del : '+ base);
        console.log('====================');
        
            let salida = '';
        
        for( let i = 1; i<=10; i++){
            salida += `${base} x ${ i } = ${ base * i }\n`;
        }
        
        console.log(salida);
        
        fs.writeFileSync( `./salidadir/tabla-${ base }.txt`, salida);
            resolve(`tabla-${ base }.txt creado`);



    })


} 

module.exports = {
    crearArchivo
}
