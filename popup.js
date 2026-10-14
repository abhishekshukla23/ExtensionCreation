
const countElement = document.getElementById("count");

async function showSavedCounts() {
    const data = await chrome.storage.local.get("count");
    countElement.textContent = data.count || 0;
}

showSavedCounts();

document.getElementById("add").addEventListener("click", async () => {
    const data = await chrome.storage.local.get("count");
    const next = (data.count || 0) + 1;

    await chrome.storage.local.set({ count: next });
    countElement.textContent = next;
});
