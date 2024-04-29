import { getItem, getListItems } from "./components/open-json";
import { DisplayItemRightSection } from "./components/research";
import { vueSearch } from "./components/header.js";

export default () => {
  return {
    conf: {
      // set conf values here
    },
    data: {
      // set some data here
      searchValue: null,
      YearFilter: null,
      list: [],
      suggestions: [],
      itemDetail: {},
      showSuggestions: false,
      trie: true,
      filtres: null,
    },
    init() {
      // this is executed first
      // this.setList();
    },
    setList() {
      //this.data.list = getListItems("and");
      this.data.list = getListItems(this.data.searchValue);

      this.data.list.then((data) => {
        const slicedResult = data.slice(0, 5);
        //console.log(slicedResult); // Affichez le résultat si nécessaire
        this.data.suggestions = slicedResult;
      });

      //this.data.list = getListItems("and");
      //console.log("data", this.data);
      // let PromiseItems = getListItems("and");
      // PromiseItems.then((items) => {
      //   console.log(items);
      //   this.data.list = items;
      // });

      //const filteredList = this.filter("2019");
      //console.log("list", this.data.list);
    },
    setDetail(id) {
      DisplayItemRightSection(id);
      vueSearch(false);
    },
    filter(name) {
      if (this.data.filtres != null) {
        this.data.list = this.data.filtres;
      }
      const ListPromise = this.data.list;
      this.data.filtres = this.data.list;
      let resultat;

      if (ListPromise instanceof Promise) {
        ListPromise.then((items) => {
          resultat = items.filter((item) => item[name] == this.data.YearFilter);
          //console.log(resultat); // Affichez le résultat du filtre si nécessaire
          this.data.list = resultat;
        }).catch((error) => {
          console.error(
            "Une erreur s'est produite lors de la résolution de la promesse :",
            error,
          );
        });
      } else {
        this.data.list = ListPromise;
      }
    },
    sortAZ() {
      //console.log("sort A-Z");

      function compare(a, b, croissant = true) {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        let comparison = 0;

        if (croissant) {
          comparison = titleA.localeCompare(titleB);
        } else {
          comparison = titleB.localeCompare(titleA);
        }

        return comparison;
      }

      let ListPromise = this.data.list;

      // Vérifier si ListPromise est déjà une promesse
      if (ListPromise instanceof Promise) {
        ListPromise.then((items) => {
          //console.log(items.sort(compare));
          //this.data.list = items.sort(compare);
          this.data.list = items.sort((a, b) => compare(a, b, this.data.trie));
          this.data.trie = false;
        }).catch((error) => {
          console.error(
            "Une erreur s'est produite lors de la résolution de la promesse :",
            error,
          );
        });
      } else {
        //console.error("ListPromise n'est pas une promesse.");
        //this.data.list = ListPromise.sort(compare);
        this.data.list = ListPromise.sort((a, b) =>
          compare(a, b, this.data.trie),
        );
        //console.log(this.data.list);
        //console.log(this.data.trie);
        if (this.data.trie) {
          this.data.trie = false;
        } else {
          this.data.trie = true;
        }
      }

      return -1;
    },
    outside() {
      const handler = (event) => {
        if (!this.$refs.input.contains(event.target)) {
          this.data.showSuggestions = false;
        }
      };

      document.addEventListener("click", handler);

      // Nettoyez l'écouteur d'événements lorsque l'élément est détruit
      return () => {
        document.removeEventListener("click", handler);
      };
    },
  };
};

// titlesPromise.then((data) => {
//   displayTitles(data);
// });

//import data from "../media.json" assert { type: "json" };
//console.log(data);

//http://blog.thomsonreuters.com/index.php/mobile-patent-suits-graphic-of-the-day/

// const urlCsv =
//   "https://45vllf-5173.csb.app/medias_generatifs_extracted_data.csv";

// let nodes = {};
// let links = [];

// d3.csv(urlCsv, function (data) {
//   // Parcours des données du CSV
//   data.forEach(function (d) {
//     // Extraction des informations nécessaires
//     const source = d["schema:dataset"];
//     const target1 = d["skos:hasTopConcept_1"];
//     const target2 = d["skos:hasTopConcept_2"];
//     const target3 = d["skos:hasTopConcept_3"];
//     const target4 = d["skos:hasTopConcept_4"];

//     // Ajout des liens si les cibles existent
//     if (target1) links.push({ source, target: target1, type: "resolved" });
//     if (target2) links.push({ source, target: target2, type: "resolved" });
//     if (target3) links.push({ source, target: target3, type: "resolved" });
//     if (target4) links.push({ source, target: target4, type: "resolved" });

//     // Ajout des nœuds
//     //   nodes[source] = { name: source };
//     //   if (target1) nodes[target1] = { name: target1 };
//     //   if (target2) nodes[target2] = { name: target2 };
//     //   if (target3) nodes[target3] = { name: target3 };
//     //   if (target4) nodes[target4] = { name: target4 };
//   });

//   // Affichage des résultats
//   //console.log("Nodes:", nodes);
//   console.log("Links:", links);
// });
