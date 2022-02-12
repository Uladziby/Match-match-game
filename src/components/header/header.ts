import { ScorePage } from "../score-page/score-page";
import { NewPlayer } from "./registration/newPlayer";
import "./header.scss";
import { BaseComponent } from "../base-component";
import { HeaderMenu } from "./header-menu/header-menu";

export class HeaderElement extends BaseComponent {
  private readonly header_menu: HeaderMenu;

  private readonly header_player: NewPlayer;

  constructor() {
    super("header", ["header"], "", "header");
    this.header_menu = new HeaderMenu(this.element);
    this.header_player = new NewPlayer(this.element);

    this.element.appendChild(this.header_menu.element);
    this.element.appendChild(this.header_player.element);
  }
}
