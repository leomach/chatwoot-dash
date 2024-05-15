function getContext() {
  console.log("clicou no botão de teste")
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
  responsavel = eventData.data.currentAgent.name
  cliente = eventData.data.contact.name
  telefone = eventData.data.contact.phone_number
  redeEscolar = eventData.data.conversation.labels[0]
  usuario = eventData.data.contact.custom_attributes.tipo_do_usuario
  canal = eventData.data.conversation.meta.channel
  descricao = eventData.data.conversation.messages[0].content
  console.log({
    responsavel: responsavel,
    redeEscolar: redeEscolar,
    usuario: usuario,
    canal: canal
  })
}
)

function postContext() {
  let mutation = `
  mutation {
    createCard(input: {
      pipe_id: 301394535,
      title: "Teste leandro",
      fields_attributes: [
        {field_id: "respons_veis_pelo_atendimento", field_value: 304779060},
        {field_id: "qual_o_nome_do_solicitante", field_value: ${cliente}},
        {field_id: "telefone", field_value: ${telefone}},
        {field_id: "rede_escolarr", field_value: "487284757"},
        {field_id: "selecione_qual_o_seu_tipo_de_usu_rio_por_favor", field_value: ${usuario}},
        {field_id: "tipo_de_solicita_o", field_value: "Dúvida"},
        {field_id: "canal_de_atendimento", field_value: "Whatsapp"},
        {field_id: "descreve_aqui_sua_solicita_o_por_favor", field_value: ${descricao}},
      ]
    }
    ) {
      card {
        title
      }
    }
  }`

  let results = fetch('https://api.pipefy.com/graphql', {
    method: 'POST',

    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },

    body: JSON.stringify({ query: mutation })
  })
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
}