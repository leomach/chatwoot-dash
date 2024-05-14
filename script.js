function getContext() {
  window.addEventListener("message", function (event) {
    console.log("clicou no botão de teste")
  }
  )
}

let contexto = {}
let responsavel = ''
let cliente = ''
let telefone = ''
let redeEscolar = ''
let usuario = ''
let tipo = ''
let canal = ''
let descricao = ''

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE3MTUzNTA3MjEsImp0aSI6ImIxYjMzNGE1LWZhNDEtNDg3Ni1iMTVkLTRiZmI0NWU0ZjRlNCIsInN1YiI6MzA0Nzc5MDYwfQ.RSkmIyHUhIbarqTWY9bgQbDwfgEwSwMGB7Z-l_CjYpI3rdvnQSQ2ronfdajjKnXs36WHg5HPCooL8UOIFhiFNg'

window.addEventListener("message", function (event) {
  const eventData = event.data
  contexto = eventData
  console.log(contexto)
}
)

async function postContext() {
  let results = await fetch('https://api.pipefy.com/graphql', {
    method: 'POST',

    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },

    body: JSON.stringify({
      query: `{
        mutation {
          createCard(input: {
            pipe_id: 301394535,
            title: "Teste leandro",
            fields_attributes: [
              {field_id: "respons_veis_pelo_atendimento", field_value: 304779060},
              {field_id: "qual_o_nome_do_solicitante", field_value: "Teste 123"},
              {field_id: "telefone", field_value: "95252616"},
              {field_id: "rede_escolarr", field_value: "487284757"},
              {field_id: "selecione_qual_o_seu_tipo_de_usu_rio_por_favor", field_value: "Equipe administrativa"},
              {field_id: "tipo_de_solicita_o", field_value: "Dúvida"},
              {field_id: "canal_de_atendimento", field_value: "Whatsapp"},
              {field_id: "descreve_aqui_sua_solicita_o_por_favor", field_value: "Whatsapp"},
            ]
          }
          ) {
            card {
              title
            }
          }
        }
        }`
    })
  })
  let characters = await results.json();
  console.log(characters.data)
}