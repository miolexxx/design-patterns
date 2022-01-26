var Database = /** @class */ (function () {
    function Database() {
        if (Database.instance) {
            return Database.instance;
        }
        this._sql = "";
        Database.instance = this;
    }
    Database.prototype.getData = function () {
        return this._sql;
    };
    Database.prototype.sql = function (sql) {
        this._sql += sql;
    };
    return Database;
}());
var db1 = new Database();
var db2 = new Database();
db1.sql("some");
console.log(db1.getData());
db2.sql("info");
console.log(db2.getData());
