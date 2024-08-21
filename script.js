document.addEventListener("DOMContentLoaded", function () {
  const greetingElement = document.getElementById("greeting");
  const nameInput = document.getElementById("name");
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", function () {
    const name = nameInput.value;
    if (name) {
      const greetingMessage = `नमस्ते, ${name}! विजया दशमी २०८१ को हार्दिक मंगलमय शुभकामना।`;
      greetingElement.textContent = greetingMessage;
      greetingElement.classList.add("show"); // Add the "show" class for the animation
    } else {
      greetingElement.textContent = "कृपया आफ्नो नाम प्रविष्ट गर्नुहोस्।";
      greetingElement.classList.remove("show"); // Remove the "show" class to hide the greeting
    }
  });
});
const nameSpan = document.querySelector("h1 span");
const submitButton = document.getElementById("submitButton");
const inputBox = document.querySelector(".box");
const label = document.querySelector(".lab");

submitButton.addEventListener("click", function () {
  nameSpan.innerHTML = ""; // Clear the existing content

  const name = inputBox.value; // Get the name from the input box
  const colors = ["#0c1269", "#9c1515", "#0f40f0"]; // Add more colors as needed
  let colorIndex = 0;

  // Display the name letter by letter
  for (let i = 0; i < name.length; i++) {
    const letter = name[i];
    const letterSpan = document.createElement("span");
    letterSpan.textContent = letter;
    nameSpan.appendChild(letterSpan);

    // Change the color every 0.3s
    setInterval(() => {
      letterSpan.style.color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }, 300);
  }
});
$(document).ready(function () {
  $("#submitButton").click(function () {
    // Add the "blasted" class to trigger the explosion animation
    $("#animatedImage").addClass("blasted");

    // Reset the animation after a short delay
    setTimeout(function () {
      $("#animatedImage").removeClass("blasted");
    }, 500); // Adjust the delay as needed
  });
});
