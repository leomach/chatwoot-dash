function getContext () {
    window.addEventListener("message", function (event) {
      
        const eventData = JSON.parse(event.data);
        console.log(eventData)
      })
    
}
