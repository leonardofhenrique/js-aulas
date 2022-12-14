const pet = {
  nome: "Rex",
  dataDeNascimento: "12/03/2017",
  brinquedoFavorito: "bolinha",
  cor: "cinza",
};

const chaves = ["nome", "dataDeNascimento", "brinquedoFavorito", "cor"];

chaves.forEach( (chave) => {
    console.log(`a chave ${chave} tem valor ${pet[chave]}`)
})