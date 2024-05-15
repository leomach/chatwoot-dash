function getContext() {
  console.log("clicou no botão de teste")
}
var membros = [{
    user: {
      id: "139919",
      name: "Kleber Soares"
    }
  },
  {
    user: {
      id: "301064912",
      name: "Julie Jordão"
    }
  },
  {
    user: {
      id: "301065516",
      name: "Roberto Gadelha"
    }
  },
  {
    user: {
      id: "301318143",
      name: "Caiotuchi"
    }
  },
  {
    user: {
      id: "301975681",
      name: "Roberto"
    }
  },
  {
    user: {
      id: "302610447",
      name: "Sarah Oliveira"
    }
  },
  {
    user: {
      id: "303167405",
      name: "Beatriz Moura"
    }
  },
  {
    user: {
      id: "303167406",
      name: "Anderson Muniz"
    }
  },
  {
    user: {
      id: "303200763",
      name: "Tiago Morais Bezerra"
    }
  },
  {
    user: {
      id: "303241844",
      name: "Marcelo Augusto"
    }
  },
  {
    user: {
      id: "304779060",
      name: "Leandro Machado"
    }
  }]

var escolas = [
  {
    node: {
      id: "487282558",
      title: "caetes"
    }
  },
  {
    node: {
      id: "487284757",
      title: "lajedo"
    }
  },
  {
    node: {
      id: "487285018",
      title: "palmeirina"
    }
  },
  {
    node: {
      id: "487287688",
      title: "panelas"
    }
  },
  {
    node: {
      id: "513609728",
      title: "paranatama"
    }
  },
  {
    node: {
      id: "623095842",
      title: "venturosa"
    }
  },
  {
    node: {
      id: "625165310",
      title: "calcado"
    }
  },
  {
    node: {
      id: "625165680",
      title: "mlobato"
    }
  },
  {
    node: {
      id: "625165854",
      title: "santateresa"
    }
  },
  {
    node: {
      id: "625166178",
      title: "Colégio Souza Leão"
    }
  },
  {
    node: {
      id: "633326669",
      title: "pedra"
    }
  },
  {
    node: {
      id: "644643200",
      title: "Colégio Tempo de Crescer"
    }
  },
  {
    node: {
      id: "644643249",
      title: "Academia do Saber"
    }
  },
  {
    node: {
      id: "644748694",
      title: "Toddling Steps"
    }
  },
  {
    node: {
      id: "655474568",
      title: "pocao"
    }
  },
  {
    node: {
      id: "708296591",
      title: "saloa"
    }
  },
  {
    node: {
      id: "728852278",
      title: "hma"
    }
  },
  {
    node: {
      id: "744172969",
      title: "Vinícius de Morais"
    }
  },
  {
    node: {
      id: "744872621",
      title: "saobras"
    }
  },
  {
    node: {
      id: "810527330",
      title: "municipiodemo"
    }
  },
  {
    node: {
      id: "901313158",
      title: "capelanova"
    }
  },
  {
    node: {
      id: "913848257",
      title: "sanharo"
    }
  }
]

var canais = [
  {
    pipe: "Tawk",
    chat: "Channel::WebWidget"
  },
  {
    pipe: "Visita técnica",
    chat: ""
  },
  {
    pipe: "Whatsapp",
    chat: ""
  },
]

var contexto = {}
var responsavel = ''
var cliente = ''
var telefone = ''
var redeEscolar = ''
var usuario = ''
var tipo = ''
var canal = ''
var descricao = ''

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE3MTUzNTA3MjEsImp0aSI6ImIxYjMzNGE1LWZhNDEtNDg3Ni1iMTVkLTRiZmI0NWU0ZjRlNCIsInN1YiI6MzA0Nzc5MDYwfQ.RSkmIyHUhIbarqTWY9bgQbDwfgEwSwMGB7Z-l_CjYpI3rdvnQSQ2ronfdajjKnXs36WHg5HPCooL8UOIFhiFNg'

 window.addEventListener("message", function (event) {
  const eventData = JSON.parse(event.data)
  
  contexto = eventData
  console.log(contexto)
}
)

function getAttributes() {
  let responsavelPipe = getResponsavelID(contexto.data.currentAgent.name)
  responsavel = responsavelPipe

  cliente = contexto.data.contact.name
  telefone = contexto.data.contact.phone_number

  let redeEscolarPipe = getEscolaID(contexto.data.conversation.labels[0]);
  redeEscolar = redeEscolarPipe

  usuario = contexto.data.contact.custom_attributes.tipo_do_usuario

  let canalPipe = getCanalID(contexto.data.conversation.meta.channel)
  canal = canalPipe

  let mensagens = contexto.data.conversation.messages
  descricao = mensagens[mensagens.length - 1].content

  console.log({
    responsavel: responsavel,
    redeEscolar: redeEscolar,
    usuario: usuario,
    canal: canal
  })
}

function postContext() {
  let mutation = `
  mutation {
    createCard(input: {
      pipe_id: 301394535,
      title: "Teste leandro",
      fields_attributes: [
        {field_id: "respons_veis_pelo_atendimento", field_value: ${responsavel}},
        {field_id: "qual_o_nome_do_solicitante", field_value: "${cliente}"},
        {field_id: "telefone", field_value: "${telefone}"},
        {field_id: "rede_escolarr", field_value: "${redeEscolar}"},
        {field_id: "selecione_qual_o_seu_tipo_de_usu_rio_por_favor", field_value: "${usuario}"},
        {field_id: "tipo_de_solicita_o", field_value: "Dúvida"},
        {field_id: "canal_de_atendimento", field_value: "${canal}"},
        {field_id: "descreve_aqui_sua_solicita_o_por_favor", field_value: "${descricao}"},
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

function getResponsavelID(nome) {
  let responsavel = membros.find(e => e.user.name === nome)
  console.log(responsavel)
  let id = responsavel.user.id
  return id;
}

function getEscolaID(nome) {
  let escola = escolas.find(e => e.node.title === nome)
  console.log(escola)
  let id = escola.node.id
  return id;
}

function getCanalID(nome) {
  let canal = canais.find(e => e.chat === nome)
  let id = canal.pipe
  return id;
}