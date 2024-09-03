import "./styles.css";
import {buildHomePage} from "./home";
import { buildMenuPage } from "./menu";
import { buildAboutPage } from "./about";

buildHomePage();

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", buildHomePage);

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", buildMenuPage);

const aboutButton = document.querySelector("#about-button");
aboutButton.addEventListener("click", buildAboutPage);