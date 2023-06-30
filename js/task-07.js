const fontSizeControl = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

fontSizeControl.addEventListener("input", function () {
  const fontSize = fontSizeControl.value + "px";
  textElement.style.fontSize = fontSize;
});
