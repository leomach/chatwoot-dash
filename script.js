function getContext () {
    window.addEventListener("message", function (event) {
      console.log(window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*'))
      return window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*')
      }
    )
  }

  window.addEventListener("message", function (event) {  
      const eventData = event.data
      console.log(eventData)
  
    }
  )