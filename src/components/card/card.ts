import { BaseComponent } from "../base-component";
import "./card.scss";

const FLIP_CLASS = "flipped";

export class Card extends BaseComponent {
  private card: BaseComponent;

  private cardFront: BaseComponent;

  private cardBack: BaseComponent;

  constructor(readonly image: string) {
    super("div", ["card-container"]);
    this.card = new BaseComponent("div", ["card"]);
    this.cardFront = new BaseComponent("div", ["card__front"]);
    this.cardFront.element.style.backgroundImage = `url('./images/${image}`;
    this.cardBack = new BaseComponent("div", ["card__back"]);
    this.element.append(this.card.element);
    this.card.element.append(this.cardFront.element);
    this.card.element.append(this.cardBack.element);
  }

  flipToBack() {
    console.log("flipToBack");
    return this.flip(true);
  }

  flipToFront() {
    console.log("flipToFront");
    return this.flip(false);
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener("transitionend", () => resolve(), {
        once: true,
      });
    });
  }
}
