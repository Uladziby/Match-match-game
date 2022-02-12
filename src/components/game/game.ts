import { CardsField } from "../cards-field/cards-field";
import { Card } from "../card/card";
import { BaseComponent } from "../base-component";
import { delay } from "../../shared/delay";
import { TimerElement } from "../modal/timer";

export class Game extends BaseComponent {
  private FLIP_DELAY = 1000;

  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  private timer: TimerElement;

  constructor() {
    super();

    this.timer = new TimerElement();
    this.cardsField = new CardsField();
    this.element.appendChild(this.timer.element);
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]) {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener("click", () => {
        console.log("click");
        this.cardHandler(card);
      });
    });

    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) {
      return;
    }
    this.isAnimation = true;
    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      await delay(this.FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    }

    // TODO: else make cards red
    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
