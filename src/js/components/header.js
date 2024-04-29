const filterDiv = document.getElementById("filterDiv");
const logoBox = document.getElementById("logo");
const searchNavBar = document.getElementById("searchNavBar");
const searchSection = document.getElementById("section-search");
const btn_annuler = document.getElementById("btn-annuler");
const btn_valider = document.getElementById("btn-valider");
const appSections = document.querySelectorAll(".app-sections");

// ---- Vue ---- \\
export function vueSearch(etat) {
  if (etat == true) {
    searchNavBar.style.visibility = "hidden";
    searchSection.style.display = "block";
    appSections.forEach((section) => {
      section.style.display = "none";
    });
  } else {
    searchNavBar.style.visibility = "visible";
    searchSection.style.display = "none";
    appSections.forEach((section) => {
      section.style.display = "flex";
    });
  }
}

// ----- Logo Button -----\\

logoBox.addEventListener("click", function () {
  vueSearch(true);
});

// ----- Filter Button -----\\

// Popup filtre
$(document).ready(function () {
  $(".filtre").click(function (e) {
    e.stopPropagation();
    if (filterDiv.classList.contains("switch-on")) {
      filterDiv.classList.remove("switch-on");
    } else {
      filterDiv.classList.add("switch-on");
    }
    if ($(this).hasClass("active")) {
      $(".dialog").fadeOut(50);
      $(this).removeClass("active");
      $(".dialog-ajout").fadeOut(50);
      $(".add-filtre").removeClass("active");
      filterDiv.classList.remove("switch-on");
    } else {
      $(".dialog").delay(50).fadeIn(50);
      $(this).addClass("active");
    }
  });
  $(".radio > .button").click(function () {
    $(".radio").find(".button.active").removeClass("active");
    $(this).addClass("active");
  });

  function closeMenu() {
    $(".dialog").fadeOut(50);
    $(".filtre").removeClass("active");
    filterDiv.classList.remove("switch-on");
  }
  function clearFields() {
    const container = document.getElementById("additionalFieldsContainer");
    // Supprimer tous les éléments enfants du conteneur
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  btn_annuler.addEventListener("click", function () {
    // additionalFieldsContainer.remove();
    clearFields();
    closeMenu();
  });

  btn_valider.addEventListener("click", function () {
    // additionalFieldsContainer.remove();

    closeMenu();
  });

  $(document.body).click(function (e) {
    closeMenu();
  });

  $(".dialog").click(function (e) {
    e.stopPropagation();
  });
});

// Popup add filtre
$(document).ready(function () {
  $(".add-filtre").click(function (e) {
    e.stopPropagation();
    if ($(this).hasClass("active")) {
      $(".dialog-ajout").fadeOut(50);
      $(this).removeClass("active");
    } else {
      $(".dialog-ajout").delay(50).fadeIn(50);
      $(this).addClass("active");
    }
  });
  $(".radio > .button").click(function () {
    $(".radio").find(".button.active").removeClass("active");
    $(this).addClass("active");
  });

  function closeMenu() {
    $(".dialog-ajout").fadeOut(50);
    $(".add-filtre").removeClass("active");
  }

  $(document.body).click(function (e) {
    closeMenu();
  });

  $(".dialog-ajout").click(function (e) {
    e.stopPropagation();
  });

  function addField(id, fieldType, type, fieldName, placeholderText, options) {
    $(`#${id}`).click(function () {
      // Créer un nouvel élément input ou select en fonction du fieldType
      const container = document.getElementById("additionalFieldsContainer");

      if (fieldType === "input") {
        if (fieldName != "date") {
          const newField = document.createElement("input");
          newField.type = type;
          newField.name = `additionalField_${fieldName}`;
          newField.placeholder = placeholderText;
          container.appendChild(newField);
        }

        // Pour le champ de date
        if (fieldName === "date") {
          let newP = document.createElement("p");
          newP.textContent = "Entrer une date";
          container.appendChild(newP);

          // const startDateField = document.createElement("input");
          // startDateField.type = type;
          // startDateField.name = `additionalField_${fieldName}`;
          // container.appendChild(startDateField);

          const startDateField = document.createElement("input");
          startDateField.setAttribute("x-model", "data.YearFilter");
          startDateField.type = "number";
          startDateField.name = `additionalField_${fieldName}`;
          startDateField.min = "1900";
          startDateField.max = "2100";
          startDateField.step = "5";
          container.appendChild(startDateField);

          // const endDateField = document.createElement("input");
          // endDateField.type = type;
          // endDateField.name = `additionalField_${fieldName}_end`;
          // container.appendChild(endDateField);
        }
      } else if (fieldType === "select") {
        // Ajouter des options pour les champs de type select
        const newField = document.createElement("select");
        newField.name = `additionalField_${fieldName}`;
        newField.placeholder = placeholderText;

        options.forEach((option) => {
          const optionElement = document.createElement("option");
          optionElement.value = option.value;
          optionElement.textContent = option.label;
          newField.appendChild(optionElement);
        });

        container.appendChild(newField);
      }

      $(".dialog-ajout").fadeOut(50);
      $(this).removeClass("active");
    });
  }

  // Options pour les champs de type select
  const itemSetOptions = [
    { value: "a", label: "Tous les items sets" },
    { value: "a", label: "Item Set 01" },
    { value: "a", label: "Item Set 02" },
  ];

  const conceptOptions = [
    { value: "a", label: "Tous les concepts" },
    { value: "a", label: "Concept 01" },
    { value: "a", label: "Concept 02" },
  ];

  addField("ajouter_nom", "input", "text", "nom_auteur", "Nom de l'auteur");
  addField("ajouter_date", "input", "date", "date", "Date");
  addField("ajouter_type", "input", "text", "type_item", "Type d'item");
  addField(
    "ajouter_IS",
    "select",
    "text",
    "item_set",
    "Item set",
    itemSetOptions,
  );
  addField(
    "ajouter_concept",
    "select",
    "text",
    "concept",
    "Concept",
    conceptOptions,
  );

  // Gérer emplacement popup add_filtre
  var popupDialog = $(".dialog");
  var popupDialogAjout = $(".dialog-ajout");

  function ajusterPositionPopupAdd() {
    var hauteurPopupDialog = popupDialog.first().outerHeight();
    popupDialogAjout.css("top", hauteurPopupDialog);
  }

  ajusterPositionPopupAdd();

  $(document).on("DOMSubtreeModified", ".dialog", function () {
    ajusterPositionPopupAdd();
  });
});

// ---- Recherche filtres ---- \\
const input = document.querySelector('input[name="choix-filtre"]');
const suggestionsContainer = document.querySelector(".suggestions");
const suggestionsList = document.querySelectorAll(".dialog-ajout ul li a");

input.addEventListener("input", function () {
  const inputText = input.value.toLowerCase();

  suggestionsList.forEach((suggestion) => {
    const suggestionText = suggestion.textContent.toLowerCase();
    const suggestionElement = suggestion.parentElement;

    if (suggestionText.includes(inputText)) {
      suggestionElement.style.display = "block";
    } else {
      suggestionElement.style.display = "none";
    }
  });

  if (inputText.trim() !== "") {
    suggestionsContainer.style.display = "block";
  } else {
    suggestionsContainer.style.display = "none";
  }
});

//filter('date', data.YearFilter)
