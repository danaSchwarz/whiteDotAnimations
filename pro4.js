const con = document.querySelector("#container");

const text = "En la era de la conectividad digital las redes sociales han transformado radicalmente la forma en que nos comunicamos e interactuamos en línea Este fenómeno ha dado lugar a una nueva dinámica lingüística donde el lenguaje escrito adopta una forma más coloquial y cotidiana reflejando la oralidad en un contexto público a gran escala De esta manera las redes sociales han abierto nuevas oportunidades de intercambio en áreas y sectores que han sido descuidados por los medios convencionales Este cambio ha permitido un discurso alternativo y una mayor diversidad de voces en la esfera pública lo que también ha dejado sus huellas a nivel lingüístico En el contexto de las redes sociales se han notado cambios de ortografía como abreviaturas o simplificaciones de palabras tanto como afectos sobre el léxico y la morfosintaxis Desde sus inicios las redes sociales han evolucionado y diversificado";
const word_array = text.split(" ");

word_array.forEach(word => {
  console.log(word);
  con.insertAdjacentHTML("beforeend", `<div class="word-div"><h4 class="word-h4 animation-wiggle">${word}</h4></div>`);
})

const wordDiv = document.querySelectorAll(".word-div");


wordDiv.forEach(word => {
  word.addEventListener("mouseover", event => {
    event.preventDefault();

    event.currentTarget.querySelector(".word-h4").classList.add("show");
    event.currentTarget.querySelector(".word-h4").classList.remove("animation-wiggle");
  })
})

wordDiv.forEach(word => {
  word.addEventListener("mouseout", event => {
    event.preventDefault();

    event.currentTarget.querySelector(".word-h4").classList.remove("show");
    event.currentTarget.querySelector(".word-h4").classList.add("animation-wiggle");
  })
})

