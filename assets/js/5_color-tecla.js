const box = document.getElementById("key");
const body = document.querySelector("body");
let newBox

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        box.style.backgroundColor = "#ff9191";
    } else if (event.key === 's') {
        box.style.backgroundColor = "#e76a21";
    }  else if (event.key === 'd') {
        box.style.backgroundColor = "#ace1ff";
    }  else if (event.key === 'q' || 'w' || 'e') {
        console.log(newBox)
        if (newBox == undefined) {
            newBox = document.createElement("div");
            newBox.style.width = "200px";
            newBox.style.height = "200px";
            newBox.style.border = "1px solid #000";
            body.appendChild(newBox);
            if (event.key === 'q') {
                newBox.style.backgroundColor = "#962fc5";
            } else if (event.key === 'w') {
                newBox.style.backgroundColor = "#c1c1c1";
            }  else if (event.key === 'e') {
                newBox.style.backgroundColor = "#574b3c";
            }
        } else {
            if (event.key === 'q') {
                newBox.style.backgroundColor = "#962fc5";
            } else if (event.key === 'w') {
                newBox.style.backgroundColor = "#c1c1c1";
            }  else if (event.key === 'e') {
                newBox.style.backgroundColor = "#574b3c";
            }
        }
    }  
})