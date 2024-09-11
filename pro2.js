const shape = document.querySelectorAll(".shape");
const shape1 = document.querySelector("#shape1");
const shape2 = document.querySelector("#shape2");
const shape3 = document.querySelector("#shape3");


shape.forEach(item => {
  item.addEventListener("click", event => {
    event.preventDefault();
    shape1.classList.toggle("rotation1");
    shape2.classList.toggle("rotation2");
    shape3.classList.toggle("rotation3");
  })
})
