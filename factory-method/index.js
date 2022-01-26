var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HTTPConnection = /** @class */ (function () {
    function HTTPConnection() {
    }
    HTTPConnection.prototype.sendData = function (data) {
        console.log("HTTP get data: ".concat(data));
    };
    HTTPConnection.prototype.receiveData = function () {
        return "Data from HTTP";
    };
    return HTTPConnection;
}());
var HTTPSConnection = /** @class */ (function () {
    function HTTPSConnection() {
    }
    HTTPSConnection.prototype.sendData = function (data) {
        console.log("HTTPS get data: ".concat(data));
    };
    HTTPSConnection.prototype.receiveData = function () {
        return "Data from HTTPS";
    };
    return HTTPSConnection;
}());
var FTPConnection = /** @class */ (function () {
    function FTPConnection() {
    }
    FTPConnection.prototype.sendData = function (data) {
        console.log("FTP get data: ".concat(data));
    };
    FTPConnection.prototype.receiveData = function () {
        return "Data from FTP";
    };
    return FTPConnection;
}());
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.prototype.connect = function () {
        var con = this.createConnection();
        con.sendData("data");
        console.log(con.receiveData());
    };
    return Browser;
}());
var HTTPBrowser = /** @class */ (function (_super) {
    __extends(HTTPBrowser, _super);
    function HTTPBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTTPBrowser.prototype.createConnection = function () {
        return new HTTPConnection();
    };
    return HTTPBrowser;
}(Browser));
var HTTPSBrowser = /** @class */ (function (_super) {
    __extends(HTTPSBrowser, _super);
    function HTTPSBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTTPSBrowser.prototype.createConnection = function () {
        return new HTTPSConnection();
    };
    return HTTPSBrowser;
}(Browser));
var FTPBrowser = /** @class */ (function (_super) {
    __extends(FTPBrowser, _super);
    function FTPBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FTPBrowser.prototype.createConnection = function () {
        return new FTPConnection();
    };
    return FTPBrowser;
}(Browser));
var conType = process.argv[2];
var browser;
switch (conType) {
    case "http":
        browser = new HTTPBrowser();
        break;
    case "https":
        browser = new HTTPSBrowser();
        break;
    case "ftp":
        browser = new FTPBrowser();
        break;
    default:
        console.log("Unsupported connection type");
        process.exit(1);
}
browser.connect();
