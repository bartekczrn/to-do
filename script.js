const inputBox = document.getElementById("inputBox");
const listSection = document.getElementById("listSection");

function addTask(){
    // Cannot be blank condition
    if(inputBox.value === ""){
        alert("Task cannot be blank!");
    }
    // Creating var. li, getting text from inputBox and
    // adding it to the list
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listSection.appendChild(li);

        // Creating x symbol after li element
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

listSection.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData() 
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listSection.innerHTML);
}

function showSavedData(){
    listSection.innerHTML = localStorage.getItem("data");
}

showSavedData()
