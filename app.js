const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const brush = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const reset = document.getElementById("jsReset");
const save = document.getElementById("jsSave");
const colors = document.querySelectorAll(".controls__color");

let painting = false;
let filling = false;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 500, 500);
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = "2.5";

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseEnter(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  ctx.moveTo(x, y);
}

function startPainting() {
  painting = true;
}
function stopPainting() {
  painting = false;
}

function handleColorClick(event) {
  const contextColor = event.target.style.backgroundColor;
  ctx.strokeStyle = contextColor;
  ctx.fillStyle = contextColor;
}

function handleRange(event) {
  const brushSize = event.target.value;
  ctx.lineWidth = brushSize;
}

function handleModeClick() {
  if (filling) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, 500, 500);
  }
}

function handleResetClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 500, 500);
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "BKS_paint";
  link.click();
}

function handleContextMenu(event) {
  event.preventDefault();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseenter", onMouseEnter);
  window.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleContextMenu);
}

colors.forEach((color) => color.addEventListener("click", handleColorClick));
if (brush) {
  brush.addEventListener("input", handleRange);
}
if (mode) {
  mode.addEventListener("click", handleModeClick);
}
if (reset) {
  reset.addEventListener("click", handleResetClick);
}
if (save) {
  save.addEventListener("click", handleSaveClick);
}
