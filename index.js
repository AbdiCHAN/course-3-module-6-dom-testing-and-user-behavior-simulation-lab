// ==========================
// Utility Functions
// ==========================
function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId);
  const element = document.createElement("div");
  element.textContent = text;
  container.appendChild(element);
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element) element.remove();
}

function simulateClick(containerId, message) {
  const container = document.getElementById(containerId);
  container.textContent = message;
}

function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId);
  const input = form.querySelector("input");
  const output = document.getElementById(outputId);
  const errorMessage = document.getElementById("error-message");

  // Reset previous error
  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");

  if (!input.value.trim()) {
    errorMessage.textContent = "Input cannot be empty";
    errorMessage.classList.remove("hidden");
    return;
  }

  output.textContent = input.value;
  input.value = "";
}

// ==========================
// Exports for Jest
// ==========================
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};
