const input=document.getElementById("badge")

chrome.storage.local.get("badgeText").then((data)=>{
    input.value=data.badgeText||"";
})

document.getElementById("save").addEventListener("click",async ()=>{
    await chrome.storage.local.set({badgeText:input.value})
    document.getElementById("status").textContent="Saved!!"
    chrome.action.setBadgeText({text:input.value})
    chrome.action.setBadgeBackgroundColor({color:"#e8590c"})

})
