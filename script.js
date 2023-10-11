const button = document.querySelector("#cordinha > button")
const lampada = document.getElementById("lampada")
const efeito = document.getElementById("cordinha")
const h1 = document.querySelector("h1")

const audio = new Audio()
audio.src = "./assets/click.mp3"

let estaAcesa = false

button.addEventListener("click", () => {
  audio.play()
  if (estaAcesa) {
    efeito.style.animation = "animacaoCordinha 0.5s ease-in-out"
    lampada.querySelector("path").style.fill = "rgba(255, 255, 255, 0.096)"
    lampada.classList.remove("on")
    h1.classList.remove("onText")
  } else {
    efeito.style.animation = "animacaoCordinha 0.5s ease-in-out"
    lampada.querySelector("path").style.fill = "#ffd600"
    lampada.classList.add("on")
    h1.classList.add("onText")
  }
  estaAcesa = !estaAcesa

  efeito.addEventListener("animationend", () => {
    efeito.style.animation = ""
  })
})
