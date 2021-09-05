const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
let painting = false;

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    // ctx.moveTo(x, y);
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
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  // canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mouseenter", onMouseEnter);
  window.addEventListener("mouseup", stopPainting);
}
