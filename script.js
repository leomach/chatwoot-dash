function getContext () {
    window.addEventListener("message", function (event) {
      
        const eventData = event.data
        console.log(eventData)
      }
    )

  }
  window.addEventListener("message", function (event) {  
      const eventData = event.data
      console.log(eventData)
  
    }
  )