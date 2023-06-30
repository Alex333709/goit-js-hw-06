const validationInput = document.querySelector("#validation-input");

const inputLength = Number(validationInput.dataset.length);

validationInput.addEventListener("blur", validateInput);

function validateInput() {
  const inputValue = validationInput.value.trim();
  const isValid = inputValue.length === Number(inputLength);

  if (isValid) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}
