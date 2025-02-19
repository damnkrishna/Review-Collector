const form = document.getElementById("form");

const tosubmit = document.getElementById("to-submit");

const result = document.getElementById("data");

tosubmit.addEventListener("click",()=>{
    const value = form.value;
    if(value===""){
        return;
    }
    const li=document.createElement("li");
    li.innerText=value;

    result.prepend(li);
    form.value="";
});