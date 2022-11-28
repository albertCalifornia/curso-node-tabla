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
    },

    {
        id: 5,
        nombre: 'Reberto'
    }
]


const salarios = [
    {
        id: 1,
        salario: 1000
    },

    {
        id: 2,
        salario: 2100
    },

    {
        id: 3,
        salario: 1700
    },

    {
        id: 4,
        salario: 2400
    },

    {
        id: 5,
        salario: 0
    }

]

//! 
const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const vmEmpleado = empleados.find(e => e.id === id)?.nombre;
        (vmEmpleado) ? resolve(vmEmpleado) : reject(`No existe ese trabajador con el Id ${id}`)
    }
    );
}


//!  Usando Promise
const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const vmSalario = salarios.find(s => s.id === id)?.salario;
        (vmSalario) ? resolve(vmSalario) : reject(`No tene Salario el Id ${id}`)
    });
}


//!  Usando async - await
const getInformeUser = async(id) => {
    try {
        const vmEmpleado = await getEmpleado(id);
        const vmSalario = await getSalario(id);
        return `El salario del Trabajador ${vmEmpleado} es de ${vmSalario}`;

    } catch (peterror) {
        throw peterror;
    }

}

const id = 5;

getInformeUser(id)
    .then( msg => {
        console.log('TODO BIEN')
        console.log(msg)
    })

    .catch(err => {
        console.log('TODO MAALL')
        console.log(err)
    });