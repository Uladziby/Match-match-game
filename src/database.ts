export class ScoreDB {
  public db!: IDBDatabase;

  public openRequest!: IDBOpenDBRequest;

  public transaction!: IDBTransaction;

  init(dbName: string, version?: number) {
    const DB = window.indexedDB;
    this.openRequest = DB.open(dbName, version);

    this.openRequest.onupgradeneeded = () => {
      console.log("onupgradeneeded");
      const database = this.openRequest.result;
      const store = database.createObjectStore("rankingPlayers", {
        keyPath: "email",
        autoIncrement: true,
      });

      store.createIndex("score", "score", { unique: false });
      store.createIndex("email", "email", { unique: true });
      this.db = database;
    };

    this.openRequest.onsuccess = () => {
      console.log("onsuccess");
      this.db = this.openRequest.result;

      this.transaction = this.db.transaction("rankingPlayers", "readwrite");
      this.write();
    };
    // this.db.transaction('rankingPlayers','readonly');
  }

  public write() {
    const { transaction } = this;
    const store = transaction.objectStore("rankingPlayers");
    const newUser: IUser = {
      firstName: "Andrej",
      lastName: "Vorobej",
      email: "vorobej@mai.ru",
    };

    const result = store.put(newUser);
    const result1 = store.put({
      points: "120",
      name: "albert",
      email: "albert@gmail.com",
      id: "2",
    });
    // let transaction: IDBTransaction = this.db.transaction('rankingPlayers', 'readonly');
    result.onsuccess = () => {
      console.log("success");
    };
    result.onerror = () => {
      console.log("error");
    };
  }

  public readAll() {
    this.transaction = this.db.transaction("rankingPlayers", "readonly");
    const store = this.transaction.objectStore("rankingPlayers");
    const result = store.getAll();

    this.transaction.oncomplete = () => {
      console.log(result.result);
    };
  }
}

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  id?: IDBValidKey;
}

/* class AppDB {
      public DB : ScoreDB;
      constructor(){
          this.DB = new ScoreDB();
          this.DB.init('ScoreDB')
      }
  } */
