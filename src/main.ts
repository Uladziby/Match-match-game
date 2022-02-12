import { FooterElement } from "./components/footer/footer";
import { SettingsPage } from "./components/settings-page/settings-page";
import { ScorePage } from "./components/score-page/score-page";
import { StartPage } from "./components/startPage";
import { HeaderElement } from "./components/header/header";
import "./styles.scss";

export class Main {
  public readonly header: HeaderElement;

  public readonly footer: FooterElement;

  private containerElem: HTMLElement | null = null;

  private startPage!: StartPage;

  private scorePage!: ScorePage;

  private settingsPage!: SettingsPage;

  private routing!: Array<IRouting>;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new HeaderElement();
    this.rootElement.append(this.header.element);
    this.footer = new FooterElement();
    this.rootElement.after(this.footer.element);

    window.addEventListener("popstate", () => {
      this.containerElem = document.getElementById("container");
      this.routing = [
        {
          name: "start",
          component: () => {
            this.containerElem?.remove();
            this.startPage = new StartPage(this.rootElement);
          },
        },
        {
          name: "score",
          component: () => {
            this.containerElem?.remove();
            this.scorePage = new ScorePage(this.rootElement);
          },
        },
        {
          name: "settings",
          component: () => {
            this.containerElem?.remove();
            this.settingsPage = new SettingsPage(this.rootElement);
          },
        },
      ];

      const defaultRoute = {
        name: "",
        component: () => {
          this.containerElem?.remove();
          this.startPage = new StartPage(this.rootElement);
        },
      };

      const currentRouteName = window.location.hash.slice(1);
      const currentRoute = this.routing.find(
        (p: { name: string }) => p.name === currentRouteName,
      );
      // let defaultRoute = routing.find((p: { name: string; }) => p.name === '');
      (currentRoute || defaultRoute).component();
    });
  }
}

interface IRouting {
  name: string;
  component: () => void;
}
