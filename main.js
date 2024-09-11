const dot = document.querySelector("#dot");
const circle = document.querySelector(".circle");
const container2 = document.querySelector("#container2");
const container1 = document.querySelector("#container1");
const closeBtn = document.querySelector(".close-btn");
const body = document.querySelector("body");


dot.addEventListener("click", event => {
  event.preventDefault();
  if (circle.classList.contains("animation-expand")) {
    circle.classList.remove("animation-expand");
    circle.classList.add("animation-reverse");
    container2.classList?.add("closing");
    container2.classList?.remove("opening");
    circle.classList.remove("big-circle");
  }
  else if (!circle.classList.contains("animation-expand")) {
    circle.classList.remove("animation-reverse");
    circle.classList.add("animation-expand");
    circle.classList.add("big-circle");
    container2.classList?.add("opening");
    container2.classList?.remove("closing");
  }
})

dot.addEventListener("mouseout", event => {
  event.preventDefault();
  circle.classList?.remove("dot-hover");
  circle.classList.add("leave-dot");
})

dot.addEventListener("mouseover", event => {
  event.preventDefault();
  circle.classList?.remove("leave-dot");
  circle.classList.add("dot-hover");
})


const card = document.querySelectorAll(".card");

card.forEach(c => {
  c.addEventListener("mouseover", event => {
    event.preventDefault();
    card.forEach(ca => {
      ca.classList.add("hide");
      ca.classList.remove("show");
    })
    if (event.currentTarget.classList.contains("hide")) {
      event.currentTarget.classList.remove("hide");
    }
    if (!event.currentTarget.classList.contains("show")) {
      event.currentTarget.classList.add("show");
    }
  })
})

card.forEach(c => {
  c.addEventListener("mouseout", event => {
    event.preventDefault();
    card.forEach(ca => {
      ca.classList?.add("show");
      ca.classList?.remove("hide");
    })
  })
})

card.forEach(c => {
  c.addEventListener("click", event => {
    event.preventDefault();
    event.currentTarget.querySelector(".card-text").classList?.add("card-text-visible");
    event.currentTarget.querySelector(".card-text").classList?.remove("card-text-hidden");
    event.currentTarget.classList?.add("card-whole");
    event.currentTarget.querySelector(".pic").classList?.remove("pic-size-small");
    event.currentTarget.querySelector(".pic").classList?.add("pic-size-big");

    document.addEventListener('click', e => {
      if (!c.contains(e.target)) {
        c.querySelector(".card-text").classList?.remove("card-text-visible");
        c.querySelector(".card-text").classList?.add("card-text-hidden");
        c.classList?.remove("card-whole");
        c.querySelector(".pic").classList?.add("pic-size-small");
        c.querySelector(".pic").classList?.remove("pic-size-big");
      }
    });
  })
})
