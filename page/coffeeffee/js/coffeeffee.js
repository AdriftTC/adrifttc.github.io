// раскрытие меню с кофе
function toggleVisibility() {
  let element = document.getElementById("hiddenDiv");
  if (element.style.opacity === "0") {
    element.style.cssText = "height: 100%; opacity: 1;";
  } else {
    element.style.cssText = "height: 0; opacity: 0; transition: 0.2s";
  }
}

// раскрытие меню с десертами
function toggleVisibility2() {
  let element = document.getElementById("hidden__Div");
  if (element.style.opacity === "0") {
    element.style.cssText = "height: 100%; opacity: 1;";
  } else {
    element.style.cssText = "height: 0; opacity: 0; transition: 0.2s";
  }
}
