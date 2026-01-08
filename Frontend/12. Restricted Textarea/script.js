// select the necessary DOM elements
let textArea = document.getElementById("myTextArea");
let charCount = document.getElementById("charCount");
// get the maximum length from the HTML attribute
const maxLength = textArea.getAttribute("maxLength");

// add event listener for the 'input' event (fires as the user types/pastes)
textArea.addEventListener("input", function () {
  const currentLength = this.value.length;
  const remainingChar = maxLength - currentLength;

  // update the counter display
  charCount.textContent = remainingChar;

  // visual feedback
  if (remainingChar <= 10) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "black";
  }
});

// initialize the counter on page load if needed
charCount.textContent = maxLength;

console.log(textArea);
