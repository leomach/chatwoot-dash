function getContext () {
   console.log("Contexto: " + window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*'))
}