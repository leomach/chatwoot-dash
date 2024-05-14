function getContext () {
    window.addEventListener("message", function (event) {
      console.log("clicou no botão de teste")
      }
    )
  }

  let contexto = {}
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
        "Content-Type": "application/json"
        "Authorization": `Bearer ${token}`
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