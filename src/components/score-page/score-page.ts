import { ScoreDB } from "../../database";
import { BaseComponent } from "../base-component";
import "./score-page.scss";

export class ScorePage extends BaseComponent {
  private title!: BaseComponent;

  // private db!: IDBDatabase;
  private scoreField!: BaseComponent;

  private rank!: BaseComponent;

  private name!: BaseComponent;

  private points!: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super("div", ["score_container"], "", "container");
    parentNode.append(this.element);
    this.createPage();
    const db = new ScoreDB();
    const initDb = db.init("UladzibyDB", 1);
    db.readAll();
  }

  createPage() {
    this.title = new BaseComponent(
      "div",
      ["score_container__title"],
      "<h2>Best Players<h2>",
    );

    this.element.append(this.title.element);

    this.scoreField = new BaseComponent("div", ["score_container__scoreField"]);
    this.element.append(this.scoreField.element);

    this.rank = new BaseComponent("div", ["score_container__scoreField-rank"]);
    this.rank.element.innerText = `${1}`;
    this.scoreField.element.append(this.rank.element);

    this.name = new BaseComponent("div", ["score_container__scoreField-name"]);
    this.name.element.innerText = `${"ALbert"}`;
    this.scoreField.element.append(this.name.element);

    this.points = new BaseComponent("div", [
      "score_container__scoreField-points",
    ]);
    this.points.element.innerText = `${100}`;
    this.scoreField.element.append(this.points.element);
  }
}
