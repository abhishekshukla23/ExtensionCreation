async function showTabInfo() {
    const [tab]=await chrome.tabs.query({active:true,currentWindow:true})
    document.getElementById("title").textContent=tab.title;
    document.getElementById("url").textContent=tab.url;
}
showTabInfo()