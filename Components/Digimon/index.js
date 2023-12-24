import Alpine from "alpinejs";
import axios from "axios";
import digimon from "./digimon.js";

window.Alpine = Alpine;
window.axios = axios;

Alpine.data("digimon", digimon);
Alpine.start();
