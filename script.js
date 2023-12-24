const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list container");

let addTask = function(){
    if(inputBox.value===''){
        alert("you must Enter somethings ");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u2716";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

let saveData=()=>{
    localStorage.setItem("data",listContainer.innerHTML);
}

let showData =()=>{
    listContainer.innerHTML = localStorage.getItem('data');
}

showData();