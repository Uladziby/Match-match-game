import { App } from "../app";
import { BaseComponent } from "./base-component";

export class StartPage extends BaseComponent {
  private readonly content: BaseComponent;

  private readonly textAboutGame: BaseComponent;

  private readonly btn_Start: BaseComponent;

  onStartGame: (() => HTMLElement) | null = null;

  constructor(parentNode: HTMLElement | null = null) {
    super("div", ["start_page"], "", "container");

    parentNode?.append(this.element);

    this.content = new BaseComponent("div", ["start_page__content"]);
    const contentStartPage = this.content.element;
    this.element.append(contentStartPage);

    this.textAboutGame = new BaseComponent(
      "div",
      ["start_page__content_about"],
      `<h2>How to play?</h2>
         <div>1.Register player</div>
         <div>2.Configure settings</div> 
         <div>3.and click Start</div>`,
    );
    contentStartPage.appendChild(this.textAboutGame.element);

    this.btn_Start = new BaseComponent(
      "button",
      ["start_page__content_btn"],
      "start game",
    );
    contentStartPage.appendChild(this.btn_Start.element);

    this.btn_Start.element.addEventListener("click", () => {
      this.content.destroy();
      new App(this.element).start();
    });
  }
}
