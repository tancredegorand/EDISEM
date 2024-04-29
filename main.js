import "./src/scss/index.scss";

import Alpine from "alpinejs";
import * as d3 from "d3";

import App from "./src/js/app";

import "./src/js/components/open-json";

import "./src/js/components/header";
import "./src/js/components/list";
import "./src/js/components/modal";
import "./src/js/components/split-screen";
import "./src/js/components/research";
import "./src/js/components/switch";
import "./src/js/components/graph";

window.App = App;

Alpine.start();
