function getContext () {
    
}

window.addEventListener("message", function (event) {
    if (!isJSONValid(event.data)) {
      return;
    }
  
    const eventData = JSON.parse(event.data);
    console.log(eventData)
  })