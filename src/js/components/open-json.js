// ---- import jsonld --- \\

// URL du fichier JSON-LD
const jsonldUrl = "/src/medias.jsonld";

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
  let data = [
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14036",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14036,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "1 The Road",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/b1894623046c9d5e7d3f007fcd68a9af1f9880aa.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/b1894623046c9d5e7d3f007fcd68a9af1f9880aa.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/b1894623046c9d5e7d3f007fcd68a9af1f9880aa.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14058",
            "o:id": 14058
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14058",
                "o:id": 14058
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "1 The Road"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "1 the Road est un livre écrit par une Cadillac équipée d’une caméra de surveillance, d’un GPS, d’un microphone et d’une horloge connectés à une intelligence artificielle. Ross Goodwin, qui a conçu cet appareillage, a fait voyager la voiture de New York à La Nouvelle-Orléans. Parallèlement à la progression du voyage, un manuscrit a été généré ligne par ligne sur de longs rouleaux de papier qui remplissaient les sièges arrière de la voiture. Enraciné dans les traditions de la littérature américaine de la Beat Generation, dans le journalisme gonzo et dans les dernières recherches en réseaux de neurones artificiels, 1 the Road serait le premier roman écrit par une IA. Ce travail littéraire expérimental renouvelle une réflexion sur la place de l’auteur à l’ère des algorithmes d’apprentissage automatique."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Œuvre littéraire"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2018"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Ross Goodwin"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://en.wikipedia.org/wiki/1_the_Road"
            },
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://www.youtube.com/watch?v=TqsW0PMd8R0"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://digitaldozen.io/wp-content/uploads/2019/03/Cover-francais.png"
            }
        ],
        "schema:productionCompany": [
            {
                "type": "literal",
                "property_id": 1232,
                "property_label": "productionCompany",
                "is_public": true,
                "@value": "Jean Boîte Éditions"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13958",
                "value_resource_id": 13958,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13958",
                "display_title": "Mouvement Beat"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/7285",
                "value_resource_id": 7285,
                "value_resource_name": "items",
                "url": "/omk/admin/item/7285",
                "display_title": "performatif"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14035",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14035,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Anderson Cooper, 4K Original/(Deep)Fake Example",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/6913bdc6a191d345c37997b5a2618ee336cdb242.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/6913bdc6a191d345c37997b5a2618ee336cdb242.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/6913bdc6a191d345c37997b5a2618ee336cdb242.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14057",
            "o:id": 14057
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14057",
                "o:id": 14057
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Anderson Cooper, 4K Original/(Deep)Fake Example"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Dans ce court extrait vidéo, on découvre Anderson Cooper, célèbre journaliste de CNN, filmé dans le contexte d'un journal télévisé. Deux clips se succèdent. Le premier, dans le cadre gauche de l’image, montre un extrait original de Cooper délivrant une information sur l’actualité politique américaine. Le second, dans le cadre de droite, montre un deepfake. Dans ce second clip, Cooper délivre une information sur la façon dont l'extrait en cours de visionnage a été produit par un calcul réalisé sur un GPU (une carte graphique) extrêmement puissant. Il conclut : « 90 % du public ne peut faire la différence [avec un document audiovisuel original]. » Cet extrait en résolution 4K a été mis en ligne par l’entreprise DeepKnown/LipSynthesis pour démontrer l'efficacité de son service en lipsyncing (synchronisation labiale)."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Document vidéo"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2023"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://www.youtube.com/watch?v=3wVpVH0Wa6E"
            },
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://www.lipsynthesis.com/getstarted"
            }
        ],
        "schema:productionCompany": [
            {
                "type": "literal",
                "property_id": 1232,
                "property_label": "productionCompany",
                "is_public": true,
                "@value": "DeepKnown/LipSynthesis"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/12243",
                "value_resource_id": 12243,
                "value_resource_name": "items",
                "url": "/omk/admin/item/12243",
                "display_title": "Deepfake"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13957",
                "value_resource_id": 13957,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13957",
                "display_title": "Service"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14034",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14034,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Photos of Donald Trump Being Arrested II",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/dda951c08b3a96e4bf5b03b0eca6da13d68de9ef.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/dda951c08b3a96e4bf5b03b0eca6da13d68de9ef.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/dda951c08b3a96e4bf5b03b0eca6da13d68de9ef.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14056",
            "o:id": 14056
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14056",
                "o:id": 14056
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Photos of Donald Trump Being Arrested II"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Ces images prétendant montrer l'arrestation de Donald Trump sont fausses. Elles ont été générées par Eliot Higgins à l’aide du logiciel d’intelligence artificielle générative Midjourney. Dès leur publication le 20 mars 2023 sur Twitter, les faux clichés ont rapidement gagné en popularité, en raison de rumeurs sur l'inculpation de Trump alors qu’il devait comparaitre dans un procès civil pour fraude à New York. Quelques jours avant la parution des photos, Trump a lui-même déclaré sur son réseau TruthSocial qu’il devait être arrêté en date du 21 mars pour ensuite être amené au tribunal. Higgins, fondateur du groupe international Bellingcat, a souligné dans sa publication Twitter que les images étaient fabriquées. Dans les jours suivant, un grand nombre d’articles de presse (voir Google Fact Check Tools, actuellement en bêta-test) ont confirmé que Trump n'a pas été arrêté à la date annoncée."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Document visuel"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2023"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Eliot Higgins"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://x.com/EliotHiggins/status/1637927681734987777?s=20"
            },
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://www.holo.mg/stream/eliot-higgins-donald-trump-arrest-deepfake/"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://www.holo.mg/wp-content/uploads/2023/03/HOLO-STREAM-20230320-Eliot-Higgins-Deepfake-Trump-Arrest-1200.jpg"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13457",
                "value_resource_id": 13457,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13457",
                "display_title": "Faux"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/6595",
                "value_resource_id": 6595,
                "value_resource_name": "items",
                "url": "/omk/admin/item/6595",
                "display_title": "Fake images"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14033",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14033,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Photos of Donald Trump Being Arrested I",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/15752a1adde96a1c8fe743383fd172953a3fac82.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/15752a1adde96a1c8fe743383fd172953a3fac82.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/15752a1adde96a1c8fe743383fd172953a3fac82.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14055",
            "o:id": 14055
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14055",
                "o:id": 14055
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Photos of Donald Trump Being Arrested I"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Ces images prétendant montrer l'arrestation de Donald Trump sont fausses. Elles ont été générées par Eliot Higgins à l’aide du logiciel d’intelligence artificielle générative Midjourney. Dès leur publication le 20 mars 2023 sur Twitter, les faux clichés ont rapidement gagné en popularité, en raison de rumeurs sur l'inculpation de Trump alors qu’il devait comparaitre dans un procès civil pour fraude à New York. Quelques jours avant la parution des photos, Trump a lui-même déclaré sur son réseau TruthSocial qu’il devait être arrêté en date du 21 mars pour ensuite être amené au tribunal. Higgins, fondateur du groupe international Bellingcat, a souligné dans sa publication Twitter que les images étaient fabriquées. Dans les jours suivant, un grand nombre d’articles de presse (voir Google Fact Check Tools, actuellement en bêta-test) ont confirmé que Trump n'a pas été arrêté à la date annoncée."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Document visuel"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2023"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Eliot Higgins"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://x.com/EliotHiggins/status/1637927681734987777?s=20"
            },
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://thedispatch.com/article/fact-check-photos-of-donald-trump-being-arrested-are-fake/"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://thedispatch.com/wp-content/uploads/2023/03/FrsWi88WcAAx-4C.jpeg"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13457",
                "value_resource_id": 13457,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13457",
                "display_title": "Faux"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/6595",
                "value_resource_id": 6595,
                "value_resource_name": "items",
                "url": "/omk/admin/item/6595",
                "display_title": "Fake images"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14032",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14032,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Ce climat n’existe pas",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/0e4304f737791e24eeb121321e5296714ac120d5.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/0e4304f737791e24eeb121321e5296714ac120d5.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/0e4304f737791e24eeb121321e5296714ac120d5.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14054",
            "o:id": 14054
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14054",
                "o:id": 14054
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Ce climat n’existe pas"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Afin de sensibiliser la population aux bouleversements climatiques, le site Ce climat n’existe pas, une initiative de Mila Québec, propose de montrer votre école, votre maison ou encore votre bureau ravagés par des inondations, un incendie ou un épisode de smog sans précédent. L’expérience a été conduite durant au moins un an. «Il faudra voir si l’expérience se poursuit. Les coûts pour faire tourner les algorithmes sont quand même grands», observe Victor Schmidt, l’un des contributeurs du dispositif, interrogé dans un article en ligne publié sur Udemnouvelles."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Site internet"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2021"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Sasha Luccioni, Victor Schmidt, Alex Hernandez-Garcia, Yoshua Bengio (dir.)"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://ici.radio-canada.ca/nouvelle/1831399/bouleversements-climatiques-intelligence-artificielle-mila-quebec"
            },
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://nouvelles.umontreal.ca/article/2021/10/14/ce-climat-n-existe-pas-encore/#:~:text=Lanc%C3%A9%20le%2014%20octobre%2C%20Ce,la%20population%20%C3%A0%20leurs%20cons%C3%A9quences."
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://images.radio-canada.ca/q_auto,w_1200/v1/ici-info/16x9/ce-climat-nexiste-pas.png"
            }
        ],
        "schema:productionCompany": [
            {
                "type": "literal",
                "property_id": 1232,
                "property_label": "productionCompany",
                "is_public": true,
                "@value": "Mila Québec"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/10830",
                "value_resource_id": 10830,
                "value_resource_name": "items",
                "url": "/omk/admin/item/10830",
                "display_title": "GAN"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/10762",
                "value_resource_id": 10762,
                "value_resource_name": "items",
                "url": "/omk/admin/item/10762",
                "display_title": "crise climatique"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14031",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14031,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Si Rome n’avait pas chuté",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/23b252b9bf4223231daca59087e49c36d66cd51e.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/23b252b9bf4223231daca59087e49c36d66cd51e.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/23b252b9bf4223231daca59087e49c36d66cd51e.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14053",
            "o:id": 14053
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14053",
                "o:id": 14053
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Si Rome n’avait pas chuté"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Et si, au lieu de se détourner d’une nouvelle technologie, les historiens essayaient de se l’approprier pour la mettre au service de leur matière ? C’est le pari de l’historien de l’Antiquité, Raphaël Doan. Passionné par les évolutions technologiques, il s’est plongé dans le dernier état de la recherche en « IA générative » afin d’en tirer profit et comprendre comment l’histoire pouvait s’articuler avec ces nouveaux outils. De cette expérience est né ce livre, une uchronie sur un Empire romain bénéficiant d'une révolution industrielle avant l'heure. Le scénario a été imaginé et pensé par l’historien, mais l’écriture et les illustrations ont été, sous sa direction, réalisées par différentes intelligences artificielles."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Œuvre littéraire"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2023"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Raphaël Doan"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://passes-composes.com/book/370"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://passes-composes.com/media/cache/book/couvertures/9791040403869.jpg"
            }
        ],
        "schema:productionCompany": [
            {
                "type": "literal",
                "property_id": 1232,
                "property_label": "productionCompany",
                "is_public": true,
                "@value": "Passés/Composés"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/9601",
                "value_resource_id": 9601,
                "value_resource_name": "items",
                "url": "/omk/admin/item/9601",
                "display_title": "génératif"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/6476",
                "value_resource_id": 6476,
                "value_resource_name": "items",
                "url": "/omk/admin/item/6476",
                "display_title": "histoire"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14030",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14030,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Flick KA AI",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/57dbc26aac65118861ba3efdb86a75d9ecd57f17.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/57dbc26aac65118861ba3efdb86a75d9ecd57f17.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/57dbc26aac65118861ba3efdb86a75d9ecd57f17.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14052",
            "o:id": 14052
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14052",
                "o:id": 14052
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Flick KA AI"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Dans l'installation \"FLICK_KA\" – un photomaton situé dans le foyer du ZKM – plus de 50 000 portraits de visiteurs ont été pris au cours des 10 dernières années. Ces photos ont servi de données d'entraînement pour l'algorithme de \"Flick KA AI\", qui génère des portraits entièrement artificiels à partir des caractéristiques combinées de toutes les personnes photographiées. L’œuvre expose le spectateur à un test : essayez de faire la différence entre des personnes réelles et celles générées artificiellement. Après un temps, les images présentées sont sous-titrées avec la réponse : « Born » ou « Generated »."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Œuvre visuelle"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2019"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Daniel Heiss"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://zkm.de/en/flick-ka-ai"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://zkm.de/sites/default/files/styles/r17_720_dynamic/public/bild/heiss_flick_ka_ai_0.jpg"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13225",
                "value_resource_id": 13225,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13225",
                "display_title": "Données d'entraînement"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13956",
                "value_resource_id": 13956,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13956",
                "display_title": "Portrait"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/6450",
                "value_resource_id": 6450,
                "value_resource_name": "items",
                "url": "/omk/admin/item/6450",
                "display_title": "faux"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14029",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14029,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Machine, Being and Nothingness",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/ccf9fd10c118ddcb55bc59cb20453455db0bcfc8.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/ccf9fd10c118ddcb55bc59cb20453455db0bcfc8.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/ccf9fd10c118ddcb55bc59cb20453455db0bcfc8.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14051",
            "o:id": 14051
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14051",
                "o:id": 14051
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Machine, Being and Nothingness"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "L’Être, la Machine et le Néant est une série de peintures et de dessins réalisés en collaboration avec diverses Intelligences Artificielles et avec l’historienne d’art Chrystelle Desbordes. Le projet se joue du nouvel académisme machinique en créant frictions et amalgames dans l’histoire de l’art, grâce à une pratique naïve et joyeuse du Deep Learning."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Œuvre visuelle"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2019"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Christophe Bruno"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://christophebruno.com/portfolio/machine-being-and-nothingness-2019/"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://christophebruno.files.wordpress.com/2021/03/courbet-monet-72dpi.jpg"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/6667",
                "value_resource_id": 6667,
                "value_resource_name": "items",
                "url": "/omk/admin/item/6667",
                "display_title": "Histoire de l'art"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13164",
                "value_resource_id": 13164,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13164",
                "display_title": "IA"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14028",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14028,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Flowers Blooming Backward Into Noise",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/4c93f7a726bcb32e30aa63a6d0e050ce0ed3bedb.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/4c93f7a726bcb32e30aa63a6d0e050ce0ed3bedb.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/4c93f7a726bcb32e30aa63a6d0e050ce0ed3bedb.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14064",
            "o:id": 14064
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14064",
                "o:id": 14064
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Flowers Blooming Backward Into Noise"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Flowers Blooming Backward Into Noise est un « documanifesto » animé de vingt minutes sur l'art de l'intelligence artificielle générative. Le réalisateur y explique le fonctionnement des modèles de diffusion, ainsi que leurs correspondances avec la photographie composite, les corrélations statistiques et la criminologie photographique du 19e."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Essai vidéo"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2023"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Eryk Salvaggio"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://www.cyberneticforests.com/news/flowers-blooming-backward-into-noise-2023"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://images.squarespace-cdn.com/content/5dd366b5ac1101724ff2fac7/e98be2df-5afb-4407-aa9c-77cc67daaa91/eryk_salvaggio_studio_photograph_of_a_flower_with_white_backgro_98351167-2895-4336-a964-fd6259cf5299.png?content-type=image%2Fpng"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/7683",
                "value_resource_id": 7683,
                "value_resource_name": "items",
                "url": "/omk/admin/item/7683",
                "display_title": "histoire des sciences"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13973",
                "value_resource_id": 13973,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13973",
                "display_title": "Criminologie"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14027",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14027,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "An Earthology of Moving Landforms",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/ab54acdec111ac08e5bfd76683284aab4a5af53e.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/ab54acdec111ac08e5bfd76683284aab4a5af53e.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/ab54acdec111ac08e5bfd76683284aab4a5af53e.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14049",
            "o:id": 14049
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14049",
                "o:id": 14049
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "An Earthology of Moving Landforms"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "An Earthology of Moving Landforms examine l’utilisation de techniques de prédiction vidéo basées sur l’apprentissage automatique, dans le contexte de l’imagerie satellitaire développée pour observer les transformations du paysage. Gil-Fournier cherche à explorer le caractère cinématographique de certains des reliefs mouvants de la planète, tels que les thalwegs des rivières, les glaciers à la dérive, ou les dunes rampantes. Ce projet présente une méthode pour générer des paysages prédictifs, un atelier spéculatif pensé pour comprendre l’intrication particulière entre les médias visuels et les surfaces de la planète. Ainsi l’auteur cherche à remettre en question les contextes extractifs et financiers qui ont donné naissance aux changements environnementaux que l’on connaît aujourd'hui."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Atelier"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2018"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Abelardo Gil-Fournier"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://abelardogfournier.org/works/earthology.html"
            },
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://vimeo.com/334787159"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://abelardogfournier.org/images/meanders-orig-pred-opt.gif"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/5797",
                "value_resource_id": 5797,
                "value_resource_name": "items",
                "url": "/omk/admin/item/5797",
                "display_title": "médias"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13954",
                "value_resource_id": 13954,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13954",
                "display_title": "Prédiction"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14026",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14026,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Future Memories: Phaedo",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/129d7dfbcbd0951b5b3837829979733dd10c5470.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/129d7dfbcbd0951b5b3837829979733dd10c5470.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/129d7dfbcbd0951b5b3837829979733dd10c5470.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14048",
            "o:id": 14048
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14048",
                "o:id": 14048
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Future Memories: Phaedo"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "L’œuvre d’Osamu Tezuka, le « Dieu du manga », a laissé une trace dans les mémoires de nombreuses générations. Future Memories : Phaedo est un projet qui vise à créer une nouvelle œuvre d’Osamu Tezuka trente ans après sa mort. Pour y parvenir, trois IA ont été développées et entraînées à l’aide de l’apprentissage automatique. Elles ont été chargées de générer l’histoire, de nouveaux personnages et les dessins. Les modèles entraînés ont ensuite été utilisés pour créer un court manga de vingt-deux pages. La narration repose sur une intrigue scientifique liée au changement climatique."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Manga"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2021"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Satoshi Kurihara, Kazushi Mukaiyama"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://developer.nvidia.com/blog/osamu-tezuka-ai-supporterd-manga/?fbclid=IwAR0hObSmyeYor_YfDuO_uvsDH2WJSKCQk3fFoHf6mqZwaUdPPy0XooRRX9c"
            },
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://www.bloomberg.com/press-releases/2021-06-22/kioxia-s-ai-project-wins-2020-field-innovation-award-silver-prize-from-japanese-society-for-artificial-intelligence"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://brand.kioxia.com/en-jp/assets/imgs/articles/index/thumb14.jpg"
            }
        ],
        "schema:productionCompany": [
            {
                "type": "literal",
                "property_id": 1232,
                "property_label": "productionCompany",
                "is_public": true,
                "@value": "Kioxia Corporation"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/4981",
                "value_resource_id": 4981,
                "value_resource_name": "items",
                "url": "/omk/admin/item/4981",
                "display_title": "mémoire"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13225",
                "value_resource_id": 13225,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13225",
                "display_title": "Données d'entraînement"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14025",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14025,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Soft Evidence",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/f39091f467a3a61ab310089dfbf82aed67f7c337.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/f39091f467a3a61ab310089dfbf82aed67f7c337.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/f39091f467a3a61ab310089dfbf82aed67f7c337.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14047",
            "o:id": 14047
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14047",
                "o:id": 14047
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Soft Evidence"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Soft Evidence se présente comme une installation vidéo composée de scènes visuelles lentes (slow cinéma) qui ne se sont jamais produites – des films manipulés par des machines entraînées à mentir (deep fakes). De plus, les artistes se sont engagées dans un exercice juridique, en inventant un contrat de « médias synthétiques et manipulés » pour que le sujet approuve l'intention explicite des réalisatrices d’échanger des visages dans un contexte de production audiovisuelle."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Œuvre filmique"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2021"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Ania Catherine and Dejha Ti"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://www.operator.la/blog/soft-evidence"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://images.squarespace-cdn.com/content/v1/5e1e479fd3d5560077d76f43/1632929431907-5E2QJGO6R6IOW1G638QA/operator-art-soft-evidence.png?format=1500w"
            }
        ],
        "schema:productionCompany": [
            {
                "type": "literal",
                "property_id": 1232,
                "property_label": "productionCompany",
                "is_public": true,
                "@value": "Operator"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/12243",
                "value_resource_id": 12243,
                "value_resource_name": "items",
                "url": "/omk/admin/item/12243",
                "display_title": "Deepfake"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/7125",
                "value_resource_id": 7125,
                "value_resource_name": "items",
                "url": "/omk/admin/item/7125",
                "display_title": "droit"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13231",
                "value_resource_id": 13231,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13231",
                "display_title": "Violation des droits d'un tiers"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14024",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14024,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Reconstitution de l’appel du 18 juin",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/047e7eefdfad270dbc20b05e5bdc8e753b74e813.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/047e7eefdfad270dbc20b05e5bdc8e753b74e813.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/047e7eefdfad270dbc20b05e5bdc8e753b74e813.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14046",
            "o:id": 14046
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14046",
                "o:id": 14046
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Reconstitution de l’appel du 18 juin"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "En partenariat avec l’Ircam et Ircam Amplify, le journal Le Monde a tenté de recréer l’appel du 18 juin 1940 du général de Gaulle sur les ondes radio. Il n’en existe aucun enregistrement sonore, si ce n’est une répétition du discours par de Gaulle lui-même, quatre jours après la première annonce. C'est la seule trace sonore qui est chaque fois présentée lors des commémorations du célèbre appel. La reconstruction d'un document inexistant de cette importance représente un défi au croisement de l’histoire et de la technologie, pour – selon le média Le Monde, interroger la puissance et les limites de l’intelligence artificielle."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Document sonore"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2023"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://www.dailymotion.com/video/x8hbihf"
            },
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://www.lemonde.fr/videos/video/2023/01/18/moi-general-de-gaulle-l-appel-du-18-juin-peut-il-etre-reconstitue_6158301_1669088.html"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Charles_de_Gaulle_au_micro_de_la_BBC.jpg"
            }
        ],
        "schema:productionCompany": [
            {
                "type": "literal",
                "property_id": 1232,
                "property_label": "productionCompany",
                "is_public": true,
                "@value": "Ircam et Le Monde"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13419",
                "value_resource_id": 13419,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13419",
                "display_title": "Authenticité"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/6476",
                "value_resource_id": 6476,
                "value_resource_name": "items",
                "url": "/omk/admin/item/6476",
                "display_title": "histoire"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13952",
                "value_resource_id": 13952,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13952",
                "display_title": "Reconstitution"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14023",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14023,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Pseudomnesia : The Electrician",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/3c3f0cdc7efecfe5ecf2956f7cd3307469b11034.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/3c3f0cdc7efecfe5ecf2956f7cd3307469b11034.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/3c3f0cdc7efecfe5ecf2956f7cd3307469b11034.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14045",
            "o:id": 14045
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14045",
                "o:id": 14045
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Pseudomnesia : The Electrician"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Ce portrait en noir et blanc de deux femmes dans un style années 1940 a été généré par une IA (DALL-E 2). L'une des deux femmes est jeune, le regard intense et profond, tourné vers le lointain. L'autre est plus âgée, elle se tient derrière elle, les mains posées sur ses épaules regardant vers le bas. Alors que la nature synthétique de l’image avait été préalablement cachée par son auteur, le cliché a finalement gagné le prestigieux Sony World Photography Award (dans la catégorie créativité). Puis, provocant un scandale, le photographe a décliné le prix devant la presse, tout en affirmant que « L’IA n’est pas de la photographie » (propos recueillis dans Artforum, 2023)."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Œuvre photographique"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2022"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Boris Eldagsen"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://www.francetvinfo.fr/replay-radio/l-etoile-du-jour/l-artiste-boris-eldagsen-revele-que-sa-photo-recompensee-par-un-sony-award-est-l-uvre-d-une-ia-et-veut-ouvrir-le-debat_5752295.html"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://i0.wp.com/www.eldagsen.com/wp-content/uploads/2022/12/eldagsen_THEELECTRICIAN.jpg"
            }
        ],
        "schema:dataset": [
            {
                "type": "resource",
                "property_id": 1604,
                "property_label": "dataset",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13942",
                "value_resource_id": 13942,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13942",
                "display_title": "DALLE-2 (dataset)"
            }
        ],
        "schema:algorithm": [
            {
                "type": "resource",
                "property_id": 393,
                "property_label": "algorithm",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13934",
                "value_resource_id": 13934,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13934",
                "display_title": "DALLE-2"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13416",
                "value_resource_id": 13416,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13416",
                "display_title": "Artefact"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13451",
                "value_resource_id": 13451,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13451",
                "display_title": "Fake images"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13951",
                "value_resource_id": 13951,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13951",
                "display_title": "Photographie"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14022",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14022,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Have I Been Trained?",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/c9cf775612b3f83245b561cf8f30e2a175279544.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/c9cf775612b3f83245b561cf8f30e2a175279544.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/c9cf775612b3f83245b561cf8f30e2a175279544.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14043",
            "o:id": 14043
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14043",
                "o:id": 14043
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Have I Been Trained?"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Site permettant aux artistes visuels (plasticiens, photographes, illustrateurs…) de produire une recherche par image afin de savoir si leurs œuvres apparaissent dans les bases de données de l’IA générative. Pour cela, le service s’appuie sur LAION (Large-scale Artificial Intelligence Open Network), un gigantesque ensemble d’images produit et distribué par une organisation non lucrative du même nom, afin de fournir l’industrie de l’apprentissage automatique. LAION est notamment l’ensemble de données utilisé par le modèle Stable Diffusion."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Site internet, outil"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2022"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Mat Dryhurst"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://haveibeentrained.com/"
            },
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://github.com/rom1504/clip-retrieval"
            }
        ],
        "schema:dataset": [
            {
                "type": "resource",
                "property_id": 1604,
                "property_label": "dataset",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13941",
                "value_resource_id": 13941,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13941",
                "display_title": "LAION-5B"
            }
        ],
        "schema:algorithm": [
            {
                "type": "resource",
                "property_id": 393,
                "property_label": "algorithm",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13933",
                "value_resource_id": 13933,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13933",
                "display_title": "Récupération de clips"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13225",
                "value_resource_id": 13225,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13225",
                "display_title": "Données d'entraînement"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13950",
                "value_resource_id": 13950,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13950",
                "display_title": "Embedding"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/4395",
                "value_resource_id": 4395,
                "value_resource_name": "items",
                "url": "/omk/admin/item/4395",
                "display_title": "sémantique"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13957",
                "value_resource_id": 13957,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13957",
                "display_title": "Service"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14021",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14021,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Attack the Sun",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/21a8f6d34df25437ed24637da774854b17b3c48b.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/21a8f6d34df25437ed24637da774854b17b3c48b.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/21a8f6d34df25437ed24637da774854b17b3c48b.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14042",
            "o:id": 14042
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14042",
                "o:id": 14042
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Attack the Sun"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Attack the sun est un film dont les dialogues ont été générés par une intelligence artificielle au cours même du tournage. On y suit la dérive de Steven Moran, un youtuber californien paraissant sombrer dans la folie. La machine parasite l’écriture du film, et aiguille la dérive de ce jeune californien qui, au volant de sa voiture, s’enfonce toujours plus loin dans les méandres de son être. Elle accompagne la dilution progressive du langage autant que de la psyché du personnage. Reprenant les codes visuels de l’autofilmage à destination d’internet, le film révèle les détours obscurs de cette errance à travers un magma d’images, de mots, de lieux s'entrelaçant les uns les autres. Quelle peut être l’issue de ce parcours ? Le film dresse en filigrane le portrait d’un potentiel tueur en devenir, alliant frustration, isolement et narcissisme technologiquement assisté."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Œuvre filmique"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2019"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Fabien Zocco et Gwendal Sartre"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://www.fabienzocco.net/attackthesun.html"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://www.fabienzocco.net/pics/fabien_zocco_attackthesun.jpg"
            }
        ],
        "schema:productionCompany": [
            {
                "type": "literal",
                "property_id": 1232,
                "property_label": "productionCompany",
                "is_public": true,
                "@value": "Nuit Blanche Productions et Espace croisé"
            }
        ],
        "schema:dataset": [
            {
                "type": "resource",
                "property_id": 1604,
                "property_label": "dataset",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13940",
                "value_resource_id": 13940,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13940",
                "display_title": "Attack the Sun (scénario)"
            }
        ],
        "schema:algorithm": [
            {
                "type": "resource",
                "property_id": 393,
                "property_label": "algorithm",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13932",
                "value_resource_id": 13932,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13932",
                "display_title": "Attack the Sun (logiciel)"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13349",
                "value_resource_id": 13349,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13349",
                "display_title": "Annotation : Dark media - irrationnalisme"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13972",
                "value_resource_id": 13972,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13972",
                "display_title": "Côte Ouest"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14020",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14020,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Abstraction & Reasoning Corpus",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/a448578f86f7cf5a2347d5880d6f63d6d9ac0b96.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/a448578f86f7cf5a2347d5880d6f63d6d9ac0b96.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/a448578f86f7cf5a2347d5880d6f63d6d9ac0b96.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:19+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14041",
            "o:id": 14041
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14041",
                "o:id": 14041
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Abstraction & Reasoning Corpus"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Abstraction & Reasoning Corpus est une œuvre en ligne pensée pour produire un jeu de données visuel et fictif. Le jeu de données a été imaginé en tant que « test de raisonnement d’agent pour des concepts tels que la hiérarchie, la permanence des objets et la symétrie. » Le corpus en question est inspiré par les travaux de François Cholet, en particulier le développement d’un test d’intelligence psychométrique général pour l’intelligence artificielle."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Œuvre en ligne"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2020"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Anil Bawa-Cavia"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://cavvia.net/039/"
            },
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://github.com/fchollet/ARC"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://cavvia.net/assets/images/ARC-preview-6.png"
            }
        ],
        "schema:dataset": [
            {
                "type": "resource",
                "property_id": 1604,
                "property_label": "dataset",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13939",
                "value_resource_id": 13939,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13939",
                "display_title": "Abstraction & Reasoning Corpus"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13225",
                "value_resource_id": 13225,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13225",
                "display_title": "Données d'entraînement"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13971",
                "value_resource_id": 13971,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13971",
                "display_title": "Données synthétiques"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13402",
                "value_resource_id": 13402,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13402",
                "display_title": "Rationalisme"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14019",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14019,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Blade Runner—Autoencoded",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/84bada3d90dcf013cc31233b66d9a6e908f22a52.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/84bada3d90dcf013cc31233b66d9a6e908f22a52.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/84bada3d90dcf013cc31233b66d9a6e908f22a52.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:18+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14040",
            "o:id": 14040
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14040",
                "o:id": 14040
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Blade Runner—Autoencoded"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Blade Runner-Autoencoded est un film réalisé grâce à l'entraînement d'un auto-encodeur – un type de réseau d'apprentissage profond et génératif – dans le but de récréer les images du film Blade Runner de 1982. L’auto-encodeur apprend à modéliser les images du film en essayant de les copier à travers un canal d’information rétréci, tout en étant optimisé pour créer des images qui sont aussi ressemblantes que possible aux images originales. Après la phase d’entraînement, l’auto-encodeur réinterprète chaque image dans l’ordre du film, et les images reconstruites sont ensuite réordonnées pour créer la continuité originale du film. La séquence qui en résulte est très onirique, allant de scènes statiques, dont le modèle semble se souvenir correctement, à des séquences fugaces – généralement très mouvementées – que le modèle peine à comprendre."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Œuvre filmique"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2016"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Terence Broad"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://terencebroad.com/works/blade-runner-autoencoded"
            },
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://www.youtube.com/watch?v=3CbKAa7g5Wo"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://images.squarespace-cdn.com/content/v1/5e417305686d8a11f786eb86/1581511400569-LDELTQO4LNJTVFJTBH9Y/br_still4.png?format=1500w"
            }
        ],
        "schema:dataset": [
            {
                "type": "resource",
                "property_id": 1604,
                "property_label": "dataset",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13938",
                "value_resource_id": 13938,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13938",
                "display_title": "Blade Runner"
            }
        ],
        "schema:algorithm": [
            {
                "type": "resource",
                "property_id": 393,
                "property_label": "algorithm",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13931",
                "value_resource_id": 13931,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13931",
                "display_title": "Autoencoding Video Frames"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/4981",
                "value_resource_id": 4981,
                "value_resource_name": "items",
                "url": "/omk/admin/item/4981",
                "display_title": "mémoire"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13419",
                "value_resource_id": 13419,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13419",
                "display_title": "Authenticité"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13949",
                "value_resource_id": 13949,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13949",
                "display_title": "Reconstruction"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14018",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14018,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "GANS et usages de faux",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/ea0ee0048231e4993dfe12d8900b30a97ad10ea7.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/ea0ee0048231e4993dfe12d8900b30a97ad10ea7.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/ea0ee0048231e4993dfe12d8900b30a97ad10ea7.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:18+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14039",
            "o:id": 14039
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14039",
                "o:id": 14039
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "GANS et usages de faux"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Cet atelier propose d’étudier un environnement de travail (TLEL) spécialement conçu pour la recherche sur les réseaux adversaires génératifs ou GAN (Gaëtan Robillard, « Des algorithmes à l’œuvre : Naissance du Computer Art et environnements génératifs », Thèse de doctorat : esthétique, sciences et technologies des Arts, Université Paris 8, 2022). Cet environnement est pensé pour découvrir, façonner ou critiquer ce type de modèle, dans un contexte de recherche et d’expérimentation. Sur un mode démo tout d’abord, l’atelier ouvre ensuite à une discussion sur le processus d’entraînement en lui-même, ainsi que sur les transformations informationnelles ou visuelles qui caractérisent l’image synthétique."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Atelier"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2023"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Gaëtan Robillard"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://github.com/robillardstudio/three-lines-in-latent-space"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://user-images.githubusercontent.com/103901906/176937177-ef705ff3-603f-4fb1-9243-b15b1783b3a0.png"
            }
        ],
        "schema:dataset": [
            {
                "type": "resource",
                "property_id": 1604,
                "property_label": "dataset",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13937",
                "value_resource_id": 13937,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13937",
                "display_title": "Trois lignes (10K)"
            }
        ],
        "schema:algorithm": [
            {
                "type": "resource",
                "property_id": 393,
                "property_label": "algorithm",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13930",
                "value_resource_id": 13930,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13930",
                "display_title": "TLEL"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13948",
                "value_resource_id": 13948,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13948",
                "display_title": "Entraînement"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13416",
                "value_resource_id": 13416,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13416",
                "display_title": "Artefact"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/10830",
                "value_resource_id": 10830,
                "value_resource_name": "items",
                "url": "/omk/admin/item/10830",
                "display_title": "GAN"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/6450",
                "value_resource_id": 6450,
                "value_resource_name": "items",
                "url": "/omk/admin/item/6450",
                "display_title": "faux"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14017",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14017,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Machine Unlearning",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/5b1377b4154d2a9dbc86379d7a84a22b6f7719eb.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/5b1377b4154d2a9dbc86379d7a84a22b6f7719eb.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/5b1377b4154d2a9dbc86379d7a84a22b6f7719eb.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:18+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14038",
            "o:id": 14038
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14038",
                "o:id": 14038
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Machine Unlearning"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Cet atelier se penche sur le modèle MobileNET, un réseau d’apprentissage profond entraîné pour la classification d’images. Grâce à des méthodes graphiques et génératives, l’atelier examine la reconnaissance d’image pour remettre en cause les biais d’entraînement du modèle en question. Ces méthodes emploient des fonctions aléatoires pour perturber l'objectif initial du réseau et révéler ainsi le caractère indéterminé des résultats. Différents modes d’interaction sont proposés : une interface en ligne pour tester différents modèles dont MobileNET, et un programme JavaScript de quelques lignes (librairies p5.js et ml5.js), suffisamment concis pour soutenir une introduction à la programmation informatique."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Atelier"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2023"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Gaëtan Robillard"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://robillardstudio.github.io/dev/mobilenet2gif/"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://robillardstudio.github.io/dev/mobilenet2gif/image.gif"
            }
        ],
        "schema:productionCompany": [
            {
                "type": "literal",
                "property_id": 1232,
                "property_label": "productionCompany",
                "is_public": true,
                "@value": "Robillard Studio"
            }
        ],
        "schema:dataset": [
            {
                "type": "resource",
                "property_id": 1604,
                "property_label": "dataset",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13936",
                "value_resource_id": 13936,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13936",
                "display_title": "ImageNet"
            }
        ],
        "schema:algorithm": [
            {
                "type": "resource",
                "property_id": 393,
                "property_label": "algorithm",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13929",
                "value_resource_id": 13929,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13929",
                "display_title": "MobileNET"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13953",
                "value_resource_id": 13953,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13953",
                "display_title": "Obfuscation"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13947",
                "value_resource_id": 13947,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13947",
                "display_title": "Biais algorithmique"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13970",
                "value_resource_id": 13970,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13970",
                "display_title": "Indéterminé"
            }
        ]
    },
    {
        "@context": "https://edisem.arcanes.ca/omk/api-context",
        "@id": "https://edisem.arcanes.ca/omk/api/items/14016",
        "@type": [
            "o:Item",
            "dcterms:MediaType"
        ],
        "o:id": 14016,
        "o:is_public": true,
        "o:owner": {
            "@id": "https://edisem.arcanes.ca/omk/api/users/9",
            "o:id": 9
        },
        "o:resource_class": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_classes/11",
            "o:id": 11
        },
        "o:resource_template": {
            "@id": "https://edisem.arcanes.ca/omk/api/resource_templates/68",
            "o:id": 68
        },
        "o:thumbnail": null,
        "o:title": "Critical Climate Machine (102 dialogues)",
        "thumbnail_display_urls": {
            "large": "https://edisem.arcanes.ca/omk/files/large/25b7bb1535483c6096f942d92cbdbc211c1145de.jpg",
            "medium": "https://edisem.arcanes.ca/omk/files/medium/25b7bb1535483c6096f942d92cbdbc211c1145de.jpg",
            "square": "https://edisem.arcanes.ca/omk/files/square/25b7bb1535483c6096f942d92cbdbc211c1145de.jpg"
        },
        "o:created": {
            "@value": "2023-11-08T15:54:18+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:modified": {
            "@value": "2023-12-07T15:25:14+00:00",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "o:primary_media": {
            "@id": "https://edisem.arcanes.ca/omk/api/media/14037",
            "o:id": 14037
        },
        "o:media": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/media/14037",
                "o:id": 14037
            }
        ],
        "o:item_set": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/item_sets/14065",
                "o:id": 14065
            }
        ],
        "o:site": [
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/3",
                "o:id": 3
            },
            {
                "@id": "https://edisem.arcanes.ca/omk/api/sites/5",
                "o:id": 5
            }
        ],
        "dcterms:title": [
            {
                "type": "literal",
                "property_id": 1,
                "property_label": "Title",
                "is_public": true,
                "@value": "Critical Climate Machine (102 dialogues)"
            }
        ],
        "dcterms:description": [
            {
                "type": "literal",
                "property_id": 4,
                "property_label": "Description",
                "is_public": true,
                "@value": "Critical Climate Machine est un projet qui quantifie et révèle les mécanismes de désinformation sur le réchauffement climatique. Le projet consiste en une sculpture de données et une installation sonore. L'installation sonore se compose elle-même d'un ensemble de cent-deux dialogues à travers lesquels de faux arguments sont confrontés à leur réfutation. Les voix ont été enregistrées avec des étudiants durant plusieurs ateliers au cours desquels le Jeu de la réfutation – un jeu de cartes spécialement conçu pour le projet – a encouragé la littératie climatique, la pensée critique et le débat. Enfin, les dialogues ont été réinterprétés et spatialisés à travers un modèle d'apprentissage automatique génératif conçu pour l'improvisation musicale."
            }
        ],
        "dcterms:type": [
            {
                "type": "literal",
                "property_id": 8,
                "property_label": "Type",
                "is_public": true,
                "@value": "Œuvre sonore"
            }
        ],
        "dcterms:date": [
            {
                "type": "literal",
                "property_id": 7,
                "property_label": "Date",
                "is_public": true,
                "@value": "2021"
            }
        ],
        "bibo:authorList": [
            {
                "type": "literal",
                "property_id": 58,
                "property_label": "list of authors",
                "is_public": true,
                "@value": "Gaëtan Robillard"
            }
        ],
        "bibo:uri": [
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://robillardstudio.github.io/ccm.html"
            },
            {
                "type": "uri",
                "property_id": 121,
                "property_label": "uri",
                "is_public": true,
                "@id": "https://www.ircam.fr/article/gaetan-robillard-data-portrait-du-climatoscepticisme"
            }
        ],
        "schema:image": [
            {
                "type": "uri",
                "property_id": 1701,
                "property_label": "image",
                "is_public": true,
                "@id": "https://robillardstudio.github.io/img/gaetan-robillard-critical-climate_2022_3_L.jpg"
            }
        ],
        "schema:productionCompany": [
            {
                "type": "literal",
                "property_id": 1232,
                "property_label": "productionCompany",
                "is_public": true,
                "@value": "Robillard Studio"
            }
        ],
        "schema:dataset": [
            {
                "type": "resource",
                "property_id": 1604,
                "property_label": "dataset",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13919",
                "value_resource_id": 13919,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13919",
                "display_title": "Cent-deux dialogues sur le climat en trois degrés"
            }
        ],
        "schema:algorithm": [
            {
                "type": "resource",
                "property_id": 393,
                "property_label": "algorithm",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13928",
                "value_resource_id": 13928,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13928",
                "display_title": "Dicy2"
            }
        ],
        "skos:hasTopConcept": [
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13943",
                "value_resource_id": 13943,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13943",
                "display_title": "Désautomatisation"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/10762",
                "value_resource_id": 10762,
                "value_resource_name": "items",
                "url": "/omk/admin/item/10762",
                "display_title": "crise climatique"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13419",
                "value_resource_id": 13419,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13419",
                "display_title": "Authenticité"
            },
            {
                "type": "resource",
                "property_id": 1718,
                "property_label": "has top concept",
                "is_public": true,
                "@id": "https://edisem.arcanes.ca/omk/api/items/13944",
                "value_resource_id": 13944,
                "value_resource_name": "items",
                "url": "/omk/admin/item/13944",
                "display_title": "Pensée critique"
            }
        ]
    }
    ];
  return data;
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
