import { UserName } from "./userName";
import { BaseComponent } from "../base-component";
import "./modal.scss";

export class ModalWindow extends BaseComponent {
  private cover: BaseComponent;

  private textNameUser: HTMLElement;

  private currentUser: UserName;

  static setName: string;

  constructor(
    parentNode: HTMLElement,
    currentUser: UserName,
    textNameUser: HTMLElement,
  ) {
    super("div", ["modal"]);
    this.currentUser = currentUser;
    this.textNameUser = textNameUser;
    console.log(parentNode);
    this.cover = new BaseComponent("div", ["cover"]);
    this.cover.element.id = "cover";

    parentNode.append(this.cover.element);
    parentNode.append(this.element);

    this.createPopup();
  }

  createPopup(): void {
    let container: BaseComponent | null = null;
    let content: BaseComponent | null = null;

    container = new BaseComponent("div", ["container"]);
    content = new BaseComponent("div", ["content"]);

    // create container > content > 3 input field + button

    this.element.append(container.element);

    container.element.appendChild(content.element);

    const contentUser = this.createElement("content_user", "div");
    const btnSend = this.createElement("content_send", "button", "Login");

    content.element.append(contentUser);
    content.element.append(btnSend);

    btnSend.addEventListener("click", () => {
      this.currentUser.setFirstName = (
        firstNameInput as HTMLInputElement
      ).value;

      this.currentUser.setLastName = (lastNameInput as HTMLInputElement).value;

      this.currentUser.setEmail = (emailInput as HTMLInputElement).value;

      this.textNameUser.innerText = `${this.currentUser.getName}`;
      this.element.remove();
      this.cover.element.remove();
    });

    const firstName = this.createElement("first_name", "label", "first name");
    const firstNameInput = this.createElement("content_user__input", "input");

    const lastName = this.createElement("last_name", "label", "last name");
    const lastNameInput = this.createElement("content_user__input", "input");

    const email = this.createElement("email", "label", "email");
    const emailInput = this.createElement("content_user__input", "input");

    contentUser.appendChild(firstName);
    contentUser.appendChild(firstNameInput);

    firstNameInput.addEventListener("input", () => {
      // this.validate();
    });

    contentUser.appendChild(lastName);
    contentUser.appendChild(lastNameInput);
    lastNameInput.addEventListener("input", () => {
      // his.validate();
    });

    contentUser.appendChild(email);
    contentUser.appendChild(emailInput);
    emailInput.addEventListener("input", () => {
      // this.validate();
    });
  }

  createElement(className: string, tag: string, text = ""): HTMLElement {
    const element: HTMLElement = document.createElement(tag);
    element.className = className;
    element.innerText = text;

    return element;
  }
}
