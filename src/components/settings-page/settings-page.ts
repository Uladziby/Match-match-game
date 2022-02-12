import { BaseComponent } from "../base-component";
import "./settings-page.scss";

export class SettingsPage extends BaseComponent {
  private difficultEasy!: BaseComponent;

  private difficultMedium!: BaseComponent;

  private difficultHard!: BaseComponent;

  private settingsField!: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super("div", ["settings_container"], "", "container");

    parentNode.append(this.element);

    this.difficultEasy = new BaseComponent("div", [
      "settings_container__difficult",
    ]);
    this.difficultEasy.element.innerText = `${"Easy"}`;
    this.element.append(this.difficultEasy.element);

    this.difficultMedium = new BaseComponent("div", [
      "settings_container__difficult",
    ]);
    this.difficultMedium.element.innerText = `${"Medium"}`;
    this.element.append(this.difficultMedium.element);

    this.difficultHard = new BaseComponent("div", [
      "settings_container__difficult",
    ]);
    this.difficultHard.element.innerText = `${"Hard"}`;
    this.element.append(this.difficultHard.element);
  }
}
