//--Booleans--//
let isDrawing = false;

//--Colors--//
let canvasColor = "bisque";
let crayonColor = "saddlebrown";
document.documentElement.style.setProperty("--canvas-color", canvasColor);
document.documentElement.style.setProperty("--hover-color", crayonColor);

//--HTML Elements--//
let gridContainer = document.getElementById("grid-container");
let sizeText = document.getElementById("grid-size-text");
let square = document.createElement("div");
square.classList.add("square");

//--Grid Functions--//
function createGrid(size) {
  gridContainer.innerHTML = "";
  let cellSize = `${500 / size}px`;
  square.style.height = cellSize;
  square.style.width = cellSize;

  for (let i = 0; i < size * size; i++) {
    gridContainer.appendChild(square.cloneNode(true));
  }
}

function updateGridText(value) {
  sizeText.innerText = value;
}

function updateGridSize(value) {
  createGrid(value);
}

//--Color Changing--//
function updateCanvasColor(value) {
  canvasColor = value;
  document.documentElement.style.setProperty("--canvas-color", canvasColor);
  createGrid(sizeText.textContent);
}

function updateCrayonColor(value) {
  crayonColor = value;
  document.documentElement.style.setProperty("--hover-color", crayonColor);
}

//--Event Listeners--//
document.addEventListener("DOMContentLoaded", function () {
  createGrid(16);
});

document.addEventListener("mousedown", function (event) {
  if (event.target.matches(".square")) {
    isDrawing = true;
  }
});

document.addEventListener("mouseup", function (event) {
  if (event.target.matches(".square")) {
    isDrawing = false;
  }
});

document.addEventListener("mousemove", function (event) {
  let e = event.target;

  if (isDrawing && e.matches(".square")) {
    e.style.backgroundColor = crayonColor;
  }
});

document.addEventListener("click", function (event) {
  let e = event.target;

  if (e.matches(".square")) {
    e.style.backgroundColor = crayonColor;
  }
});
