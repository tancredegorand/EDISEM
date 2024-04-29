//const apiUrl = "https://edisem.arcanes.ca/omk/api";
//const endpoint = "/items/14034";
//const fullUrl = apiUrl + endpoint;

//console.log("test " + fullUrl);

// fetch(fullUrl, { mode: "no-cors" })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("err " + response.status);
//     }
//     console.log(response);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Erreur requête:", error);
//   });

// const key_identity = "VOTRE_KEY_IDENTITY";
// const key_credential = "VOTRE_KEY_CREDENTIAL";

// const fullUrl = `${apiUrl}/${endpoint}?key_identity=${key_identity}&key_credential=${key_credential}`;

// console.log(fullUrl);

// fetch(fullUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Erreur HTTP: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Erreur lors de la requête:", error);
//   });

// class OmekaApi {
//   constructor(apiUrl) {
//     this.apiUrl = apiUrl;
//   }

//   async getItems() {
//     try {
//       const response = await fetch(`${this.apiUrl}/items`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error("Error fetching items:", error.message);
//       throw error;
//     }
//   }
// }

// // Exemple d'utilisation de la classe OmekaApi
// const omeka = new OmekaApi("https://edisem.arcanes.ca/omk/api");

// // Appel de la méthode getItems pour récupérer les items depuis l'API
// omeka
//   .getItems()
//   .then((items) => {
//     console.log("Items:", items);
//     // Vous pouvez traiter les données des items ici
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//     // Gérer les erreurs ici
//   });
