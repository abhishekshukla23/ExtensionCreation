

chrome.runtime.onMessage.addListener((message)=>{
    if(message.type==='GET_SELECTION'){
        const selectedText=window.getSelection().toString()
        sendResponse({text:selectedText})
    }
})