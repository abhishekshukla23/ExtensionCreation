//this script can see the page
//this is the one that answers questions related to the page
//it waits for a message then replies with a text

console.log("Content script loaded!");
chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
        if (message.type === "COUNT_LINKS") {
            const links = document.querySelectorAll("a");
            sendResponse({ count: links.length });
        }
    }
);