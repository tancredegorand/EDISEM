import { DisplayItemRightSection } from "./research";

export function resizeGraph() {
  const divGraph = document.getElementById("dataviz_area");
  const leftSection = document.getElementById("left-section");
  const graphHeight = leftSection.offsetHeight - 100;
  let graphWidth;

  if (leftSection.offsetWidth < 500 || leftSection.offsetWidth > 600) {
    graphWidth = leftSection.offsetWidth - 80;
  } else {
    graphWidth = leftSection.offsetWidth - 200;
  }

  divGraph.style.width = graphWidth;
  svg.attr("width", graphWidth).attr("height", graphHeight);
  force.size([graphWidth, graphHeight]).resume();
}

let links = [
  { source: "1 The Road", target: "Mouvement Beat", id: "14036" },
  { source: "1 The Road", target: "performatif", id: "14036" },
  {
    source: "Anderson Cooper, 4K Original/(Deep)Fake Example",
    target: "Deepfake",
    id: "14035",
  },
  {
    source: "Anderson Cooper, 4K Original/(Deep)Fake Example",
    target: "Service",
    id: "14035",
  },
  {
    source: "Photos of Donald Trump Being Arrested II",
    target: "Faux",
    id: "14034",
  },
  {
    source: "Photos of Donald Trump Being Arrested II",
    target: "Fake images",
    id: "14034",
  },
  {
    source: "Photos of Donald Trump Being Arrested I",
    target: "Faux",
    id: "14033",
  },
  {
    source: "Photos of Donald Trump Being Arrested I",
    target: "Fake images",
    id: "14033",
  },
  { source: "Ce climat n’existe pas", target: "GAN", id: "14032" },
  { source: "Ce climat n’existe pas", target: "crise climatique", id: "14032" },
  { source: "Si Rome n’avait pas chuté", target: "génératif", id: "14031" },
  { source: "Si Rome n’avait pas chuté", target: "histoire", id: "14031" },
  { source: "Flick KA AI", target: "Données d'entraînement", id: "14030" },
  { source: "Flick KA AI", target: "Portrait", id: "14030" },
  { source: "Flick KA AI", target: "faux", id: "14030" },
  {
    source: "Machine, Being and Nothingness",
    target: "Histoire de l'art",
    id: "14029",
  },
  { source: "Machine, Being and Nothingness", target: "IA", id: "14029" },
  {
    source: "Flowers Blooming Backward Into Noise",
    target: "histoire des sciences",
    id: "14028",
  },
  {
    source: "Flowers Blooming Backward Into Noise",
    target: "Criminologie",
    id: "14028",
  },
  {
    source: "An Earthology of Moving Landforms",
    target: "médias",
    id: "14027",
  },
  {
    source: "An Earthology of Moving Landforms",
    target: "Prédiction",
    id: "14027",
  },
  { source: "Future Memories: Phaedo", target: "mémoire", id: "14026" },
  {
    source: "Future Memories: Phaedo",
    target: "Données d'entraînement",
    id: "14026",
  },
  { source: "Soft Evidence", target: "Deepfake", id: "14025" },
  { source: "Soft Evidence", target: "droit", id: "14025" },
  {
    source: "Soft Evidence",
    target: "Violation des droits d'un tiers",
    id: "14025",
  },
  {
    source: "Reconstitution de l’appel du 18 juin",
    target: "Authenticité",
    id: "14024",
  },
  {
    source: "Reconstitution de l’appel du 18 juin",
    target: "histoire",
    id: "14024",
  },
  {
    source: "Reconstitution de l’appel du 18 juin",
    target: "Reconstitution",
    id: "14024",
  },
  {
    source: "Pseudomnesia : The Electrician",
    target: "DALLE-2 (dataset)",
    id: "14023",
  },
  { source: "Pseudomnesia : The Electrician", target: "Artefact", id: "14023" },
  {
    source: "Pseudomnesia : The Electrician",
    target: "Fake images",
    id: "14023",
  },
  {
    source: "Pseudomnesia : The Electrician",
    target: "Photographie",
    id: "14023",
  },
  {
    source: "Have I Been Trained?",
    target: "Récupération de clips",
    id: "14022",
  },
  { source: "Have I Been Trained?", target: "LAION-5B", id: "14022" },
  {
    source: "Have I Been Trained?",
    target: "Données d'entraînement",
    id: "14022",
  },
  { source: "Have I Been Trained?", target: "Embedding", id: "14022" },
  { source: "Have I Been Trained?", target: "sémantique", id: "14022" },
  { source: "Have I Been Trained?", target: "Service", id: "14022" },
  {
    source: "Attack the Sun",
    target: "Attack the Sun (logiciel)",
    id: "14021",
  },
  {
    source: "Attack the Sun",
    target: "Attack the Sun (scénario)",
    id: "14021",
  },
  {
    source: "Attack the Sun",
    target: "Annotation : Dark media - irrationnalisme",
    id: "14021",
  },
  { source: "Attack the Sun", target: "Côte Ouest", id: "14021" },
  {
    source: "Abstraction & Reasoning Corpus",
    target: "Abstraction & Reasoning Corpus",
    id: "14020",
  },
  {
    source: "Abstraction & Reasoning Corpus",
    target: "Données d'entraînement",
    id: "14020",
  },
  {
    source: "Abstraction & Reasoning Corpus",
    target: "Données synthétiques",
    id: "14020",
  },
  {
    source: "Abstraction & Reasoning Corpus",
    target: "Rationalisme",
    id: "14020",
  },
  {
    source: "Blade Runner—Autoencoded",
    target: "Autoencoding Video Frames",
    id: "14019",
  },
  { source: "Blade Runner—Autoencoded", target: "Blade Runner", id: "14019" },
  { source: "Blade Runner—Autoencoded", target: "mémoire", id: "14019" },
  { source: "Blade Runner—Autoencoded", target: "Authenticité", id: "14019" },
  { source: "Blade Runner—Autoencoded", target: "Reconstruction", id: "14019" },
  { source: "GANS et usages de faux", target: "TLEL", id: "14018" },
  {
    source: "GANS et usages de faux",
    target: "Trois lignes (10K)",
    id: "14018",
  },
  { source: "GANS et usages de faux", target: "Entraînement", id: "14018" },
  { source: "GANS et usages de faux", target: "Artefact", id: "14018" },
  { source: "GANS et usages de faux", target: "GAN", id: "14018" },
  { source: "GANS et usages de faux", target: "faux", id: "14018" },
  { source: "Machine Unlearning", target: "MobileNET", id: "14017" },
  { source: "Machine Unlearning", target: "ImageNet", id: "14017" },
  { source: "Machine Unlearning", target: "Obfuscation", id: "14017" },
  { source: "Machine Unlearning", target: "Biais algorithmique", id: "14017" },
  { source: "Machine Unlearning", target: "Indéterminé", id: "14017" },
  {
    source: "Critical Climate Machine (102 dialogues)",
    target: "Dicy2",
    id: "14016",
  },
  {
    source: "Critical Climate Machine (102 dialogues)",
    target: "Cent-deux dialogues sur le climat en trois degrés",
    id: "14016",
  },
  {
    source: "Critical Climate Machine (102 dialogues)",
    target: "Désautomatisation",
    id: "14016",
  },
  {
    source: "Critical Climate Machine (102 dialogues)",
    target: "crise climatique",
    id: "14016",
  },
  {
    source: "Critical Climate Machine (102 dialogues)",
    target: "Authenticité",
    id: "14016",
  },
  {
    source: "Critical Climate Machine (102 dialogues)",
    target: "Pensée critique",
    id: "14016",
  },
];

let nodes = {};

// Compute the distinct nodes from the links.
links.forEach(function (link) {
  link.source =
    nodes[link.source] ||
    (nodes[link.source] = { name: link.source, id: link.id });
  link.target =
    nodes[link.target] ||
    (nodes[link.target] = { name: link.target, id: link.id });
});

let countLinks = {};

// Parcourez les liens pour compter le nombre de liens pour chaque node
links.forEach(function (link) {
  // Pour la source du lien
  countLinks[link.source.id] = (countLinks[link.source.id] || 0) + 1;

  // Pour la cible du lien
  countLinks[link.target.id] = (countLinks[link.target.id] || 0) + 1;
});

function interpolateColor(color1, color2, t) {
  const hex = function (x) {
    x = x.toString(16);
    return x.length === 1 ? "0" + x : x;
  };

  const r1 = parseInt(color1.substring(1, 3), 16);
  const g1 = parseInt(color1.substring(3, 5), 16);
  const b1 = parseInt(color1.substring(5, 7), 16);

  const r2 = parseInt(color2.substring(1, 3), 16);
  const g2 = parseInt(color2.substring(3, 5), 16);
  const b2 = parseInt(color2.substring(5, 7), 16);

  const r = Math.round(r1 * (1 - t) + r2 * t);
  const g = Math.round(g1 * (1 - t) + g2 * t);
  const b = Math.round(b1 * (1 - t) + b2 * t);

  return "#" + hex(r) + hex(g) + hex(b);
}

function count2color(count) {
  // Utiliser une échelle linéaire pour définir la couleur en fonction du count
  const color = interpolateColor("#FF0000", "#00FF00", (count - 1) / 9);
  return color;
}

console.log(links);

// Appliquer une couleur unique à chaque nœud en fonction du nombre de liens
Object.values(nodes).forEach((node) => {
  if (countLinks[node.id] > 7) {
    // Appliquer une couleur fixe aux nœuds avec plus de 4 liens
    node.color = "#5a00eb"; // Par exemple, couleur orange
  } else {
    // Utiliser la fonction count2color pour les nœuds avec 4 liens ou moins
    node.color = "#000";
  }
  console.log(node.name, node.color); // Log the node name and its color
});

// Maintenant, le tableau 'links' contient la propriété 'count' pour chaque node lié

//console.log(links);
let width = 200;
let height = 500;
let size_factor = 1 / 2;

/* fonction de resize de graph */
/*
document.body.addEventListener("wheel", function handleWheel(event) {
  if (scrollDirectionIsUp(event)) {
    if (size_factor < 4) {
      size_factor += 0.1;
    }

    console.log(size_factor);
  } else {
    if (size_factor > 1 / 3) {
      size_factor -= 0.1;
    }

    console.log(size_factor);
  }
});

function scrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}
*/
let force = d3.layout
  .force()
  .nodes(d3.values(nodes))
  .links(links)
  .size([width, height])
  .linkDistance((100 * size_factor) / 2)
  .charge((-1000 * size_factor) / 2)
  .start();

let svg = d3
  .select("#dataviz_area")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Per-type markers, as they don't inherit styles.
svg
  .append("defs")
  .selectAll("marker")
  .data(["suit", "licensing", "resolved"])
  .enter()
  .append("marker")
  .attr("id", function (d) {
    return d;
  })
  .attr("viewBox", "0 -5 20 20")
  .attr("refX", 15)
  .attr("refY", -1.5)
  .attr("markerWidth", 6)
  .attr("markerHeight", 6)
  .attr("orient", "auto")
  .append("path")
  .attr("d", "M0,-5L10,0L0,5");

let link = svg
  .append("g")
  .selectAll("line")
  .data(force.links())
  .enter()
  .append("line")
  .attr("class", function (d) {
    console.log("d = " + d);
    return "link " + d.type;
  })
  .attr("marker-end", function (d) {
    return "url(#" + d.type + ")";
  });

let node = svg
  .append("g")
  .selectAll(".node")
  .data(force.nodes())
  .enter()
  .append("g")
  .attr("class", "node")
  .attr("id", function (d) {
    //console.log(d);
    return d.id;
  })
  .attr("cursor", "pointer")
  .on("click", function (event, d) {
    // Code à exécuter lorsqu'un clic se produit sur le rectangle
    console.log("Rectangle cliqué !", event.id);
    DisplayItemRightSection(Number(event.id));
    setTimeout(function () {
      resizeGraph();
    }, 400);
  })
  .call(force.drag);

node
  .append("text")
  .attr("text-anchor", "middle")
  .attr("alignment-baseline", "center")
  .attr("display", "none")
  .text(function (d) {
    return d.name;
  });

node
  .append("rect")
  .attr("height", 30 * size_factor)
  .attr("fill", "white")
  .attr("stroke", (d) => d.color)
  .attr("stroke-width", 1) // Largeur de la bordure
  .attr("rx", 5)
  .attr("ry", 5)
  .attr("width", function (d) {
    // Mesurez la largeur du texte et ajoutez un espace supplémentaire
    var textWidth = this.parentNode.querySelector("text").textContent.length;
    //console.log(textWidth);
    return (textWidth * 5 + 60) * size_factor;
  });

node
  .append("text")
  .attr("font-family", "Inter")
  .attr("color", "#202020")
  .attr("font-weight", "500")
  .attr("font-size", 14 * size_factor + "px")
  .attr("text-anchor", "middle")
  .attr("alignment-baseline", "alphabetic")
  .attr("x", function (d) {
    var rectWidth = this.parentNode.querySelector("rect").getAttribute("width");
    var textWidth = this.parentNode.querySelector("text").getBBox().width;
    return (rectWidth - textWidth) / 2; // Centrez le texte en soustrayant la moitié de la largeur du texte
  })
  .attr("y", 20 * size_factor)
  .text(function (d) {
    return d.name;
  });

node
  .on("mouseover", function (event, d) {
    // Code à exécuter lorsque le curseur survole le rectangle

    d3.select(this).select("rect").attr("fill", "#6200ff"); // Changer la couleur de fond
    this.childNodes[2].setAttribute("fill", "#fff"); // Changer la couleur du texte
    this.childNodes[2].setAttribute("font-weight", "700");

    var links = d3.selectAll(".link");
    links.attr("opacity", 0.3);

    // Réduire l'opacité de toutes les autres nodes
    d3.selectAll(".node")
      .filter(function (otherNode) {
        return otherNode !== event;
      })
      .attr("opacity", 0.3);
  })
  .on("mouseout", function (event, d) {
    // Code à exécuter lorsque le curseur quitte le rectangle

    d3.select(this).select("rect").attr("fill", "#fff"); // Changer la couleur de fond
    this.childNodes[2].setAttribute("fill", "#202020"); // Changer la couleur du texte
    this.childNodes[2].setAttribute("font-weight", "500");
    var links = d3.selectAll(".link");
    links.attr("opacity", 1);
    // Rétablir l'opacité de toutes les autres nodes
    d3.selectAll(".node")
      .filter(function (otherNode) {
        return otherNode !== d;
      })
      .attr("opacity", 1);
  });

force.on("tick", function () {
  link
    .attr("x1", function (d) {
      return d.source.x + 40 * size_factor; // Ajoutez la moitié de la largeur du rectangle
    })
    .attr("y1", function (d) {
      return d.source.y + 20 * size_factor; // Ajoutez la moitié de la hauteur du rectangle
    })
    .attr("x2", function (d) {
      return d.target.x + 40 * size_factor;
    })
    .attr("y2", function (d) {
      return d.target.y + 20 * size_factor;
    });

  node.attr("transform", function (d) {
    return "translate(" + d.x + "," + d.y + ")";
  });
});

function transform(d) {
  return "translate(" + d.x + "," + d.y + ")";
}

// svg.call(
//   d3.behavior.zoom().on("zoom", function () {
//     link.attr(
//       "transform",
//       "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")",
//     );
//     node.attr("transform", function (d) {
//       var translatedX = d.x * d3.event.scale + d3.event.translate[0];
//       var translatedY = d.y * d3.event.scale + d3.event.translate[1];

//       return (
//         "translate(" +
//         translatedX +
//         "," +
//         translatedY +
//         ")scale(" +
//         d3.event.scale +
//         ")"
//       );
//     });
//   }),
// );
