function displayPoem(response) {
    console.log("poem generated");
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "b27477630t2c3f6fdcf49898efa1ba2o";
    let context = "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br/>. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong></strong> element at the end of the poem and NOT at the beginning";
    let prompt = `User instructions: Generate a French Poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    
    axios.get(apiUrl).then(displayPoem);

  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);