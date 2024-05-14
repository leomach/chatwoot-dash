function getContext () {
    window.addEventListener("message", function (event) {
      console.log("clicou no botão")
      }
    )
  }

  window.addEventListener("message", function (event) {  
      const eventData = event.data
      console.log(eventData)
  
    }
  )