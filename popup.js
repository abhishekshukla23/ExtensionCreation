const countElemen=document.getElementById("count")
const addBtn=document.getElementById("add")
let count=0;
addBtn.addEventListener("click",()=>{
    count+=1;
    countElemen.textContent=count;
})