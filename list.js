const inputBox=document.querySelector(".input");
const listBox=document.querySelector("#list-container");
const button=document.querySelector(".btn");
function addTask(){
    if(inputBox.value===''){
        alert("Please enter something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7"
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
button.addEventListener("click", ()=>{
    addTask();
})
listBox.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listBox.innerHTML);
}
function showData(){
    listBox.innerHTML = localStorage.getItem("data");
}
showData();