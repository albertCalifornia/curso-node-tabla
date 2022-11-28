const fs = require('fs');

const crearArchivo = async (base = 5) => {

    try {
        console.log('Usando async')
        console.log('====================');
        console.log('  Tabla del : ' + base);
        console.log('====================');  
    
        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
    
        console.log(salida);
    
        fs.writeFileSync(`./salidadir/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt creado`);

    } catch (err) {
        throw err;
        
    }

}

module.exports = {
    crearArchivo
}
