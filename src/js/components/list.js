// // ------  SCROLL ITEM SET -------- \\
// const itemSetsList = document.getElementById("itemSetsList");
// let isDragging = false;
// let startPosX = 0;
// let startScrollX = 0;

// itemSetsList.addEventListener("mousedown", (e) => {
//   isDragging = true;
//   startPosX = e.clientX;
//   startScrollX = itemSetsList.scrollLeft;
//   itemSetsList.style.cursor = "grabbing";
// });

// document.addEventListener("mousemove", (e) => {
//   if (isDragging) {
//     const deltaX = e.clientX - startPosX;
//     let newScrollX = startScrollX - deltaX;

//     newScrollX = Math.max(
//       0,
//       Math.min(newScrollX, itemSetsList.scrollWidth - itemSetsList.clientWidth),
//     );

//     itemSetsList.scrollLeft = newScrollX;
//   }
// });

// document.addEventListener("mouseup", () => {
//   if (isDragging) {
//     isDragging = false;
//     itemSetsList.style.cursor = "grab";
//   }
// });
