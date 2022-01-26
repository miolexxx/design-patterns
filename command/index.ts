/**
 * Abstract command
 */
abstract class Command {
  protected bot: Bot;

  constructor(bot: Bot) {
    this.bot = bot;
  }

  abstract execute(): void;
}

/**
 * Bot class
 */
class Bot {
  public start(): void {
    console.log("bot started");
  }

  public say(text: string): void {
    console.log(text);
  }

  public end(): void {
    console.log("bot exit");
  }
}

/**
 * Start command class
 */
class StartCommand extends Command {
  constructor(bot: Bot) {
    super(bot);
  }
  execute(): void {
    this.bot.start();
  }
}

/**
 * Exit command class
 */
class ExitCommand extends Command {
  constructor(bot: Bot) {
    super(bot);
  }
  execute(): void {
    this.bot.end();
  }
}

/**
 * Say command class
 */
class SayCommand extends Command {
  private text: string;
  constructor(bot: Bot, text: string) {
    super(bot);
    this.text = text;
  }
  execute(): void {
    this.bot.say(this.text);
  }
}

/**
 *
 * @param command Execute command function
 */
const executeCommand = (command: Command) => {
  command.execute();
};

const bot = new Bot();

let command = process.argv[2];
let text = process.argv.slice(3).join(" ");

switch (command) {
  case "/start":
    executeCommand(new StartCommand(bot));
    break;
  case "/say":
    executeCommand(new SayCommand(bot, text));
    break;
  case "/exit":
    executeCommand(new ExitCommand(bot));
    break;
  default:
    console.log("Unsupported command");
    process.exit(1);
}
