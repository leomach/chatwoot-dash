function getContext () {
    window.addEventListener("message", function (event) {
      console.log("clicou no botão de teste")
      }
    )
  }

  let contexto = {}

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
        "Content-Type": "application/json"
      },
  
      body: JSON.stringify({
        query: `{
          card(id: 925508878)  {
            title
            done
            id
            updated_at
            
            fields {
              field {
                id
              }
              name value
            }
          }
        }`
      })
    })
    let characters = await results.json();
    console.log(characters.data)
  }