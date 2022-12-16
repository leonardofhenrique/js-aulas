const cliente = require("./clientes.json")

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor))
}

// const encontrado = encontrar(cliente, "nome" , "Kirby")

// console.log(encontrado)

function filtrar(clientes){
    return clientes.filter((cliente) =>{
        return ( 
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        )
    })
}

// const filtrados = filtrar(cliente)

// console.log(filtrados)

function ordenar(lista, propriedade){
    const resultado = lista.sort((a,b) => {
        if (a[propriedade] > b[propriedade]){
            return 1
        }
        if (a[propriedade] < b[propriedade]){
            return -1
        }
        return 0
    })

    return resultado
}

const oredenado = ordenar(cliente, "nome")

console.log(oredenado)