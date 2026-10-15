const clipBtn=document.getElementById("clip");
const statusEl=document.getElementById("status");
const clipsEl=document.getElementById("clips");


async function renderClips() {
    const data=await chrome.storage.local.get("clips");
    const clips=data.clips||[];
    clips.forEach(clip=> {
        const li=document.createElement("li")
        li.textContent=clip
        clipsEl.appendChild(li);
        
    });
}

renderClips();


clipBtn.addEventListener("click",async ()=>{
    const [tab]=await chrome.tabs.query({active:true,currentWindow:true})
    chrome.tabs.sendMessage(tab.id,{type:"GET_SELECTION"},async (response)=>{
        const text=response && response.text?response.text.trim():""
        if(!text){
            statusEl.textContent="select some text on the page first!"
            return
        }
        const data= await chrome.storage.local.get("clips");
        const clips=data.clips||[];
        clips.unshift(text)
        await chrome.storage.local.set({clips})
        chome.runtime.sendMessage(
            {
                type:"CLIPS_UPDATED"
            }
        )

    })
}
)
