import "./cards-field.scss";
import { BaseComponent } from "../base-component";
import { Card } from "../card/card";

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  private SHOW_TIME = 3000;

  constructor() {
    super("div", ["cards-field"]);
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = "";
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => {
      this.element.appendChild(card.element);
      setTimeout(() => {
        this.cards.forEach((card) => card.flipToBack());
      }, this.SHOW_TIME);
    });
  }
}
