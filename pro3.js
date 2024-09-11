const eye = document.querySelectorAll(".eye-box");

eye.forEach(item => {
  item.addEventListener("mouseover", event => {
    event.preventDefault();
    event.currentTarget.querySelector("#white").classList.remove("eye-open");
    event.currentTarget.querySelector("#white").classList.add("eye-close");

    event.currentTarget.querySelector("#black").classList.add("iris-big");
    event.currentTarget.querySelector("#black").classList.remove("iris-small");

  })
})

eye.forEach(item => {
  item.addEventListener("mouseout", event => {
    event.preventDefault();
    event.currentTarget.querySelector("#white").classList.add("eye-open");
    event.currentTarget.querySelector("#white").classList.remove("eye-close");

    event.currentTarget.querySelector("#black").classList.remove("iris-big");
    event.currentTarget.querySelector("#black").classList.add("iris-small");
  })
})



