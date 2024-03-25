function generateFortune(event) {
  event.preventDefault();

  new Typewriter("#fortune", {
    strings: "Looking into your future...",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let formElement = document.querySelector("#fortune-input");
formElement.addEventListener("submit", generateFortune);
