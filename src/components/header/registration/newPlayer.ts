import { UserName } from "../../modal/userName";
import { ModalWindow } from "../../modal/modalWindow";
import { BaseComponent } from "../../base-component";
import "../header.scss";
import "./newplayer.scss";
import "../../modal/modal.scss";

export class NewPlayer extends BaseComponent {
  private btnNewPlayer: BaseComponent;

  private currentUser: UserName;

  private textNameUser!: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super("div", ["header_newPlayer"]);

    this.btnNewPlayer = new BaseComponent("button", ["btn_player"]);
    this.btnNewPlayer.element.innerText = "new player";
    this.element.append(this.btnNewPlayer.element);

    this.textNameUser = new BaseComponent("span", ["header_nameUser"]);
    this.element.appendChild(this.textNameUser.element);

    this.currentUser = new UserName();
    this.btnNewPlayer.element.addEventListener("click", () => {
      if (this.textNameUser.element.innerText !== "") {
        this.textNameUser.destroy();
      }
      this.textNameUser = new BaseComponent("span", ["header_nameUser"]);
      this.element.appendChild(this.textNameUser.element);

      const modal = new ModalWindow(
        parentNode,
        this.currentUser,
        this.textNameUser.element,
      );
    });
  }
}
