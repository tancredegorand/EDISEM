import { getTitlesWithValue } from "./open-json";
import { getItem } from "./open-json";
import { getListItems } from "./open-json";

import { vueSearch } from "./header";
import { defaultView } from "./split-screen";
import { gray } from "d3";

// ----- search bar -----\\

const searchInputs = document.querySelectorAll(".search-input");
const ulInputs = document.querySelectorAll(".suggestions-list");
const firstSearch = document.getElementById("first-search");

const h1Item = document.getElementById("h1Item");
const tdAuteur = document.getElementById("tdAuteur");
const tdDate = document.getElementById("tdDate");
const tdId = document.getElementById("tdId");
const tdClass = document.getElementById("tdClass");
const pDescription = document.getElementById("pDescription");
const ulListOfConcept = document.getElementById("list-of-concept");

const itemImgs = document.getElementsByClassName("itemImg");

const table_items = document.getElementById("table_items");
//

function clearDisplayTable() {
  const tableItems = document.getElementById("table_items");
  tableItems.innerHTML = "";
}

function clearDisplayLi() {
  ulInputs.forEach((ulInput) => {
    ulInput.innerHTML = "";
  });
}

function searchEnter() {
  const currentValue = searchInputs[1].value;
  clearDisplayTable();
  clearDisplayLi();
  //defaultView(true);

  const itemsPromise = getListItems(currentValue);
  itemsPromise.then((items) => {
    //displayItems(items); //modif
  });
}

document.addEventListener("click", (event) => {
  const isInputClick = Array.from(searchInputs).some((input) =>
    input.contains(event.target),
  );
  if (!isInputClick) {
    clearDisplayLi();
  }
});
function tdSetColorDelay(id) {
  const element = document.getElementById(id);
  const tdElements = element.querySelectorAll("td");
  tdElements.forEach((e) => {
    e.classList.add("tdActive");
  });
}

function tdSetColor(id) {
  const elementWithId = document.getElementById(id);

  const tdElements = elementWithId.querySelectorAll("td");
  tdElements.forEach((e) => {
    e.classList.add("tdActive");
  });
}

function clearTdColor() {
  const trItems = table_items.querySelectorAll("tr");
  trItems.forEach((tr) => {
    const tdElements = tr.querySelectorAll("td");
    tdElements.forEach((td) => {
      td.classList.remove("tdActive");
    });
  });
}
export function DisplayItemRightSection(id) {
  const item = getItem(id);
  //console.log(item);
  item.then((Object) => {
    h1Item.innerHTML = Object[0].title;
    tdAuteur.innerHTML = Object[0].autheur;
    tdDate.innerHTML = Object[0].date;
    tdId.innerHTML = Object[0].id;
    tdClass.innerHTML = Object[0].type;
    pDescription.innerHTML = Object[0].desc;

    for (let i = 0; i < itemImgs.length; i++) {
      itemImgs[i].src = Object[0].img;
    }

    ulListOfConcept.innerHTML = "";
    for (let i = 0; i < Object[0].concepts.length; i++) {
      const liElement = document.createElement("li");
      liElement.innerHTML = Object[0].concepts[i].display_title;
      liElement.classList = "concept";
      liElement.id = Object[0].concepts[i].value_resource_id;
      ulListOfConcept.appendChild(liElement);
    }
  });

  clearTdColor();
  tdSetColor(id);
  //console.log("DisplayItemRightSection");
  defaultView(false);
}

function displayTitles(titles) {
  // clearDisplayLi();
  // ulInputs.forEach((ulInput) => {
  //   titles.slice(0, 5).forEach((titleObject) => {
  //     const liElement = document.createElement("li");
  //     //liElement.classList.add("li-search");
  //     liElement.id = titleObject.id;
  //     liElement.textContent = titleObject.title;
  //     ulInput.appendChild(liElement);
  //     liElement.addEventListener("click", (event) => {
  //       vueSearch(false);
  //       DisplayItemRightSection(titleObject.id);
  //       searchEnter();
  //     });
  //   });
  // });
}

function displayItems(items) {
  clearDisplayLi();

  items.forEach((Object) => {
    const titre_item = document.createElement("td");
    const classe_item = document.createElement("td");
    const date_item = document.createElement("td");
    const trElement = document.createElement("tr");

    trElement.id = Object.id;

    titre_item.textContent = Object.title;
    classe_item.textContent = Object.classe;
    date_item.textContent = Object.date;

    trElement.addEventListener("click", (event) => {
      DisplayItemRightSection(Object.id);
    });

    trElement.appendChild(titre_item);
    trElement.appendChild(classe_item);
    trElement.appendChild(date_item);
    table_items.appendChild(trElement);
  });
}

searchInputs.forEach((searchInput) => {
  // --- display --- \\
  searchInput.addEventListener("input", (e) => {
    const currentValue = e.target.value;
    const titlesPromise = getTitlesWithValue(currentValue);
    //console.log(titlesPromise);

    searchInputs.forEach((otherInput) => {
      if (otherInput !== e.target) {
        otherInput.value = currentValue;
      }
    });
    //
    if (currentValue != "") {
      titlesPromise.then((titles) => {
        displayTitles(titles);
      });
    } else {
      clearDisplayLi();
    }
  });

  // --- search --- \\

  searchInput.addEventListener("keydown", (event) => {
    const currentValue = event.target.value;
    if (event.key === "Enter" && currentValue != "") {
      //console.log("Enter key pressed!");
      searchEnter();
    }
  });
});

firstSearch.addEventListener("keydown", (event) => {
  const currentValue = event.target.value;
  if (event.key === "Enter" && currentValue != "") {
    vueSearch(false);
    defaultView(true);
  }
});

// vueSearch(false);
// defaultView(true);

const researchBtn = document.getElementById("RechercherBtn");
researchBtn.addEventListener("click", (e) => {
  const currentValue = firstSearch.value;
  if (currentValue != "") {
    vueSearch(false);
    defaultView(true);
  }
});
