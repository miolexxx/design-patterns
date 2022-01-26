/**
 * Connection interface
 */
interface Connection {
  sendData(data: string): void;
  receiveData(): string;
}

/**
 * HTTP connection class
 */
class HTTPConnection implements Connection {
  sendData(data: string): void {
    console.log(`HTTP get data: ${data}`);
  }
  receiveData(): string {
    return "Data from HTTP";
  }
}

/**
 * HTTPS connection class
 */
class HTTPSConnection implements Connection {
  sendData(data: string): void {
    console.log(`HTTPS get data: ${data}`);
  }
  receiveData(): string {
    return "Data from HTTPS";
  }
}

/**
 * FTP connection class
 */
class FTPConnection implements Connection {
  sendData(data: string): void {
    console.log(`FTP get data: ${data}`);
  }
  receiveData(): string {
    return "Data from FTP";
  }
}

/**
 * Abstract browser
 */
abstract class Browser {
  public connect() {
    const con = this.createConnection();
    con.sendData("data");
    console.log(con.receiveData());
  }

  public abstract createConnection(): Connection;
}

/**
 * HTTP browser class
 */
class HTTPBrowser extends Browser {
  public createConnection(): Connection {
    return new HTTPConnection();
  }
}

/**
 * HTTPS browser class
 */
class HTTPSBrowser extends Browser {
  public createConnection(): Connection {
    return new HTTPSConnection();
  }
}

/**
 *  FTP browser class
 */
class FTPBrowser extends Browser {
  public createConnection(): Connection {
    return new FTPConnection();
  }
}

let conType = process.argv[2];
let browser: Browser;

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

browser!.connect();
