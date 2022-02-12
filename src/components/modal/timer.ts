import { BaseComponent } from "../base-component";
import "./timer.scss";

export class TimerElement extends BaseComponent {
  private timeMin = 0;

  private timeSec = 0;
  // private readonly score : ScoreElement;

  constructor() {
    super("div", ["timer_container"]);

    const timerElement = document.createElement("div");
    timerElement.className = "timer_element";

    setInterval(() => {
      this.updateCounter();

      const minutes =
        this.timeMin < 10 ? `0${this.timeMin}` : `${this.timeMin}`;
      const seconds =
        this.timeSec < 10 ? `0${this.timeSec}` : `${this.timeSec}`;

      timerElement.innerText = `${minutes}:${seconds}`;
    }, 1000);
    this.element.appendChild(timerElement);
  }

  updateCounter() {
    this.timeSec %= 60;

    this.timeSec + 1;
    if (this.timeSec > 59) {
      this.timeMin + 1;
      this.timeSec = 0;
    }
  }
}
