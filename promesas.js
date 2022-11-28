const empleados = [
    {
        id: 1,
        nombre: 'Pablo'
    },

    {
        id: 2,
        nombre: 'Antonella'
    },

    {
        id: 3,
        nombre: 'Gabriel'
    },

    {
        id: 4,
        nombre: 'Albert'
    }

]


const salarios = [
    {
        id: 1,
        salario: 1000
    },

    {
        id: 2,
        salario: 0
    },

    {
        id: 3,
        salario: 1700
    },

    {
        id: 4,
        salario: 2400
    }

]

const getEmpleado = ( id ) => {

    return new Promise(( resolve, reject ) =>{

        const empleado = empleados.find( e => e.id === id)?.nombre;

         (empleado) ? resolve( empleado ) : reject(`No existe empleado con id ${ id }`)
        }
    );
    
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario) ? resolve(salario) : reject(`No tiene salario ese id ${ id}`)
    })

}




const id = 2;

getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch( err => console.log( err ) );



getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));