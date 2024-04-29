import { resizeGraph } from "./graph.js";

// --- switch list / graph --- \\

const toggle_list = document.getElementById("toggle-on");
const toggle_graph = document.getElementById("toggle-off");
const list_elements = document.querySelectorAll(".app-list");
const graph_elements = document.querySelectorAll(".app-graph");

toggle_graph.addEventListener("click", (event) => {
  graph_elements.forEach((element) => {
    element.style.display = "flex";
  });
  list_elements.forEach((element) => {
    element.style.display = "none";
  });
  resizeGraph();
});

toggle_list.addEventListener("click", (event) => {
  graph_elements.forEach((element) => {
    element.style.display = "none";
  });
  list_elements.forEach((element) => {
    element.style.display = "flex";
  });
});
