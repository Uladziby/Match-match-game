import { BaseComponent } from "../../base-component";
import "../header.scss";

export class HeaderMenu extends BaseComponent {
  private btn_about: HTMLElement | null = null;

  private address: string | null = null;

  constructor(parentNode: HTMLElement | null = null) {
    super("div", ["header_menu"]);

    const btnScore: HTMLElement = document.createElement("button");
    const btnAbout: HTMLElement = document.createElement("button");
    const btnSettings: HTMLElement = document.createElement("button");

    btnAbout.className = "btn_about";
    btnAbout.innerText = "About Game";

    btnScore.className = "btn_score";
    btnScore.innerText = "Score";

    btnSettings.className = "btn_settings";
    btnSettings.innerText = "Settings";

    this.element.append(btnAbout);
    this.element.append(btnScore);
    this.element.append(btnSettings);

    btnAbout.addEventListener("click", () => {
      location.href = "#start";
      this.address = location.href;
    });
    btnSettings.addEventListener("click", () => {
      location.href = "#settings";
    });
    btnScore.addEventListener("click", () => {
      location.href = "#score";
      // new ScoreDB().write();
    });
  }
}
