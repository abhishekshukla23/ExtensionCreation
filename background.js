// //not always running
// //chrome recieves an event
// //chrome wakes it on events it sleeps when quiet
// //so listeners must be registered at the top level

chrome.runtime.onInstalled.addListener(()=>{
    console.log("Extension service worker woked up")

})

chrome.action.onClicked.addListener((tab)=>{
      console.log("Icon clicked while on the tab:",tab.url)
}
)