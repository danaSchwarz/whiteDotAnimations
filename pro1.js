const shape = document.querySelectorAll(".shape");
const shape1 = document.querySelector("#shape1");
const shape2 = document.querySelector("#shape2");
const shape3 = document.querySelector("#shape3");


shape.forEach(item => {
  item.addEventListener("click", event => {
    event.preventDefault();
    shape1.classList.add("rotation1");
    shape2.classList.add("rotation2");
    shape3.classList.add("rotation3");
    setTimeout(() => {
      shape1.classList.remove("rotation1");
      shape2.classList.remove("rotation2");
      shape3.classList.remove("rotation3");
    }, 5_000)
  })
})