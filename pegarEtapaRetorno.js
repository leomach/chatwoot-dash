function getPhase() {
  let query = `
  query {
    phase(id: 319705813) {
      cards {
        nodes {
          id
          fields {
            name
            value
          }
        }
      }
    }
}`
let results = fetch('https://api.pipefy.com/graphql', {
  method: 'POST',
  
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  },
  
  body: JSON.stringify({ query: query })
})
.then(res => res.json())
.then(json => {
  console.log(json)
  
  if (json.data.phase.cards.nodes.length == 0){
    let retorno = document.getElementsByClassName('retorno')[0];
    let paragrafo = document.createElement('p');
    paragrafo.style = 'color: orange;'
    paragrafo.innerHTML = `Não temos card para retorno ao cliente!`
    retorno.append(paragrafo);
  }
  
  let retorno = document.getElementsByClassName('retorno')[0];
  
  var responsavel = ''
  var cliente = ''
  var telefone = ''
  var redeEscolar = ''
  var descricao = ''
  var etapa = ''
  var id = 0
  
  function getFields(cards) {
    cards.fields.forEach(field => {
      if(field.name == "Responsáveis pelo atendimento") {
        responsavel = field.value
      }
      if(field.name == "Nome do cliente") {
        cliente = field.value
      }
      if(field.name == "Telefone do cliente") {
        telefone = field.value
      }
      if(field.name == "Rede escolar") {
        redeEscolar = field.value
      }
      if(field.name == "Descrição do chamado") {
        descricao = field.value
      }
      if(field.name == "Etapa do atendimento") {
        etapa = field.value
      }
    })

    id = cards.id
    console.log(id)
  }
  
  json.data.phase.cards.nodes.forEach(card => {
    let divItem = document.createElement('div');
    divItem.classList.add("card")
    
    let h4 = document.createElement('h4');
    h4.classList.add("card-h4");
    
    let p = document.createElement('p');
    p.classList.add("card-p");
    
    getFields(card)
    
    let button = document.createElement('button');
    button.classList.add('card-button');
    button.setAttribute("id", id)
    button.setAttribute("onclick", "updateCard(this.id)")
    button.innerHTML = "Concluir"
    
    h4.innerHTML = responsavel
    p.innerHTML = `${cliente} com o telefone ${telefone} da rede escolar "${redeEscolar}" entrou em contato pelo motivo: ${descricao}`
    divItem.append(h4)
    divItem.append(p)
    divItem.append(button)
    document.getElementsByClassName("cards")[0].append(divItem)
  })
})
.catch(erro => {
  console.log(erro)
  let retorno = document.getElementsByClassName('retorno')[0];
  let paragrafo = document.createElement('p');
  paragrafo.style = 'color: red;'
  paragrafo.innerHTML = `Houve um erro na requisição do Pipefy: ${erro}`
  retorno.append(paragrafo);
});
}

function updateCard(id) {

  let mutation = `
  mutation {
    updateCardField(input: {card_id: ${id}, field_id: "copy_of_tipo_de_solicita_o", new_value: "Concluído"}) {
      card {
        id
      }
    }
  }`
  let confirma = confirm('Você tem certeza que quer concluir o card?');
  if (confirma == true){
    let results = fetch('https://api.pipefy.com/graphql', {
    method: 'POST',
    
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    
    body: JSON.stringify({ query: mutation })
    })
    .then(res => res.json())
    .then(json => {
    console.log(json)
      document.getElementsByClassName("cards").innerHTML = "carregando...";
      alert('O card foi concluído!')
    })
    .catch(erro => {
      alert(`Houve um erro na requisição do Pipefy: ${erro}`)
    });
  }
}