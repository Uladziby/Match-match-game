import { ScoreDB } from "./database";
import { Main } from "./main";
import "./styles.scss";

window.onload = () => {
  const appElement = document.getElementById("app");
  if (!appElement) throw Error("App root element");
  location.href = "#start";
  const app = new Main(appElement);
};
