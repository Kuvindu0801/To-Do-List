const textBox = document.getElementById("textbox");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (textBox.value.trim() === '') {  
        alert("You must Enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = textBox.value;  

    let tick = document.createElement("span");
    tick.className = "tick";  
    tick.innerHTML = "\u2713";
    tick.style.display = "none";
    li.appendChild(tick);

    let del = document.createElement("span");
    del.className = "delete"; 
    del.innerHTML = "\u00d7";
    li.appendChild(del);


    listContainer.appendChild(li);
    textBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        let tick = e.target.querySelector("span:first-child");
        if (e.target.classList.contains("checked")) {
            tick.style.display = "inline";
        } else {
            tick.style.display = "none";
        }
    } else if (e.target.tagName === "SPAN") {

        if (e.target.innerHTML === "\u00d7") {
            e.target.parentElement.remove();
        }
    }
}, false);
