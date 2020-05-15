const fade = (element) => {
  element.classList.add("animated", "fadeIn");
}

const appear = (element) => {
  element.style.color = "white";
}

const disappear = (element) => {
  element.hidden = true;
}