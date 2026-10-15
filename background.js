async function applyBadge() {
    const data=await chrome.storage.local.get("badgeText")
    if(data.badgeText){
       await chrome.action.setBadgeText({text:data.badgeText})
        await chrome.action.setBadgeBackgroundColor({color:"#e8590c"})
    }
    else{
        setBadgeText({text:""})
    }
    
}
applyBadge()