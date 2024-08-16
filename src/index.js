function generatePoem(event) {
    event.preventDefault();
  
    new Typewriter("#poem", {
      strings: "Be gentle: What you're holding is my heart.",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);