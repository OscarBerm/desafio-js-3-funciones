/* 1) Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función.

2) Modifica el código anterior para poder pasarle un color como argumento a la
función pintar. 

function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar); 
*/

function pintar(elemento, color) {
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele, "red"));
