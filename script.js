// impedir arrastar imagem
document.querySelector("#frente > img").draggable = false;

// troca de tema

const botaotrocatema = document.querySelector(".switcher > button")
const imagemprincipal = document.querySelector("#frente > img")

botaotrocatema.onclick = function switcher(){
    if (document.body.classList.contains("light")) {
        document.body.classList.remove("light")
        imagemprincipal.setAttribute("src", "./assets/main-image.png")
    } else {
        document.body.classList.add("light")
        imagemprincipal.setAttribute("src", "./assets/main-image-light.png")
        
    }
}

const versoBotao = document.querySelector("#verso > button")
const verso = document.querySelector("#verso")
const frenteBotao = document.querySelector("#frente > .botao > button")
const frente = document.querySelector("#frente")

versoBotao.onclick = function sumir() {
  verso.style.display = "none"
  frente.style.display = "flex"
}

frenteBotao.onclick = function aparecer() {
  verso.style.display = "flex"
  frente.style.display = "none"
}