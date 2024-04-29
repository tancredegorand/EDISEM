// ---- import jsonld --- \\

// URL du fichier JSON-LD
const jsonldUrl = "./medias.jsonld";

// Récupérer le contenu du fichier JSON-LD
async function fetchJsonldFile(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Erreur de chargement du fichier JSON-LD: ${response.status} ${response.statusText}`,
      );
    }

    const jsonldString = await response.text();
    return jsonldString;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function openJson() {
  return fetchJsonldFile(jsonldUrl).then((jsonldString) => {
    if (jsonldString) {
      const jsonldObject = JSON.parse(jsonldString);

      return jsonldObject;
    }
  });
}

// ---- fonctions --- //

export async function getTitles() {
  try {
    // Récupérer l'objet JSON-LD
    const jsonldObject = await openJson();

    // Vérifier si l'objet existe et contient un tableau d'items
    if (jsonldObject && Array.isArray(jsonldObject)) {
      // Extraire tous les titres
      const titles = jsonldObject.map((item) => ({
        title: item["o:title"],
        id: item["o:id"],
      }));
      //console.log("Titles:", titles);
      return titles;
    } else {
      console.error(
        "L'objet JSON-LD n'est pas conforme à la structure attendue.",
      );
      return null;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des titres:", error);
    return null;
  }
}

export async function getTitlesWithValue(value) {
  try {
    // Récupérer l'objet JSON-LD
    const jsonldObject = await openJson();

    // Vérifier si l'objet existe et contient un tableau d'items
    if (jsonldObject && Array.isArray(jsonldObject)) {
      // Filtrer et mapper les résultats
      const matchingTitlesWithIds = jsonldObject
        .filter((item) => {
          const title = item["o:title"];
          return title && title.toLowerCase().includes(value.toLowerCase());
        })
        .map((item) => ({ title: item["o:title"], id: item["o:id"] }));

      // Retourner directement le tableau JSON
      return matchingTitlesWithIds;
    } else {
      console.error(
        "L'objet JSON-LD n'est pas conforme à la structure attendue.",
      );
      return [];
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des titres:", error);
    return [];
  }
}

export async function getListItems(value) {
  try {
    // Récupérer l'objet JSON-LD
    const jsonldObject = await openJson();

    // Vérifier si l'objet existe et contient un tableau d'items
    if (jsonldObject && Array.isArray(jsonldObject)) {
      // Filtrer et mapper les résultats
      const matchingTitlesWithIds = jsonldObject
        .filter((item) => {
          const title = item["o:title"];
          return title && title.toLowerCase().includes(value.toLowerCase());
        })
        .map((item) => ({
          title: item["o:title"],
          classe: item["o:resource_class"]["o:id"],
          date: item["dcterms:date"][0]["@value"],
          id: item["o:id"],
        }));

      // Retourner directement le tableau JSON
      return matchingTitlesWithIds;
    } else {
      console.error(
        "L'objet JSON-LD n'est pas conforme à la structure attendue.",
      );
      return [];
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des items pour la liste:",
      error,
    );
    return [];
  }
}

export async function getItem(targetId) {
  try {
    // Récupérer l'objet JSON-LD
    const jsonldObject = await openJson();

    // Vérifier si l'objet existe et contient un tableau d'items
    if (jsonldObject && Array.isArray(jsonldObject)) {
      // Filtrer et mapper les résultats
      const matchingItem = jsonldObject
        .filter((item) => {
          const id = item["o:id"];
          return id && id === targetId;
        })
        .map((item) => ({
          title: item["o:title"],
          id: item["o:id"],
          autheur:
            (item["bibo:authorList"] && item["bibo:authorList"][0]["@value"]) ||
            "Inconnu",
          date: item["dcterms:date"][0]["@value"],
          desc: item["dcterms:description"][0]["@value"],
          type: item["dcterms:type"][0]["@value"],
          img: item["thumbnail_display_urls"]["large"],
          concepts: item["skos:hasTopConcept"],
        }));

      return matchingItem;
    } else {
      console.error(
        "L'objet JSON-LD n'est pas conforme à la structure attendue.",
      );
      return [];
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'item:", error);
    return [];
  }
}

// ----  exemple utilisations des fonctions ----- \\

//const valueToSearch = "an";
//console.log(getTitlesWithValue(valueToSearch));
