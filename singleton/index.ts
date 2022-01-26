/**
 * Database singleton class
 */
class Database {
  private _sql: string;
  private static instance: Database;

  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this._sql = "";
    Database.instance = this;
  }

  public getData(): string {
    return this._sql;
  }

  public sql(sql: string) {
    this._sql += sql;
  }
}

// db1 and db2 reference to one instance
const db1 = new Database();
const db2 = new Database();

db1.sql("some");

console.log(db1.getData());

db2.sql("info");
console.log(db2.getData());
