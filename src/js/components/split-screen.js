import { disjoint } from "d3";
import { resizeGraph } from "./graph.js";
import { vueSearch } from "./header.js";

const splitter = document.getElementById("splitter");
const leftSection = document.getElementById("left-section");
const rightSection = document.getElementById("right-section");
const canvas = document.getElementById("dataviz_area");
const svg = document.getElementById("dataviz_area").querySelector("svg");

const closeWindowBtn = document.getElementById("div-close-window");

let isDragging = false;
let mouseX = 0;
let windowWidth = 0;
//let calculVWR = 0;
let calculVWL = 0;

function splitterMove(e) {
  if (isDragging) {
    mouseX = e.clientX;
    windowWidth = window.innerWidth;
    calculVWL = (mouseX / windowWidth) * 100;
    //calculVWR = 100 - calculVWR;

    resizeGraph();

    if (calculVWL < 47) {
      //console.log("GAUCHE");
      leftSection.style.width = "30vw";
      rightSection.style.width = "70vw";
    } else if (calculVWL > 53) {
      //console.log("DROITE");
      leftSection.style.width = "70vw";
      rightSection.style.width = "30vw";
      //dataviz_area.style.width = "65vw";

      //console.log(canvas.offsetHeight);
    } else if (calculVWL > 47 && calculVWL < 53) {
      leftSection.style.width = "50vw";
      rightSection.style.width = "50vw";

      // console.log("CENTRE");
    }
  }
}

splitter.addEventListener("mousedown", (e) => {
  isDragging = true;
  document.body.style.userSelect = "none";
  document.body.style.cursor = "ew-resize";

  document.addEventListener("mousemove", splitterMove);

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.removeEventListener("mousemove", splitterMove);
    document.body.style.userSelect = "auto";
    document.body.style.cursor = "auto";
  });
});

export function defaultView(value) {
  if (value == true) {
    rightSection.style.display = "none";
    leftSection.style.width = "100vw";
    leftSection.style.marginRight = "30px";
    splitter.style.display = "none";
  } else {
    splitter.style.display = "block";
    if (
      leftSection.style.width != "70vw" &&
      leftSection.style.width != "50vw" &&
      leftSection.style.width != "30vw"
    ) {
      //console.log("false");
      splitter.style.display = "block";
      rightSection.style.display = "flex";
      rightSection.style.width = "50vw";
      leftSection.style.display = "flex";
      leftSection.style.width = "50vw";
      leftSection.style.marginRight = "10px";
    }
  }
}

closeWindowBtn.addEventListener("click", (e) => {
  defaultView(true);
  setTimeout(resizeGraph, 200); //retarder à cause de l'animation
});

// vueSearch(false);
// defaultView(true);
