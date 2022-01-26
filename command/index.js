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
var Command = /** @class */ (function () {
    function Command(bot) {
        this.bot = bot;
    }
    return Command;
}());
var Bot = /** @class */ (function () {
    function Bot() {
    }
    Bot.prototype.start = function () {
        console.log("bot started");
    };
    Bot.prototype.say = function (text) {
        console.log(text);
    };
    Bot.prototype.end = function () {
        console.log("bot exit");
    };
    return Bot;
}());
var StartCommand = /** @class */ (function (_super) {
    __extends(StartCommand, _super);
    function StartCommand(bot) {
        return _super.call(this, bot) || this;
    }
    StartCommand.prototype.execute = function () {
        this.bot.start();
    };
    return StartCommand;
}(Command));
var ExitCommand = /** @class */ (function (_super) {
    __extends(ExitCommand, _super);
    function ExitCommand(bot) {
        return _super.call(this, bot) || this;
    }
    ExitCommand.prototype.execute = function () {
        this.bot.end();
    };
    return ExitCommand;
}(Command));
var SayCommand = /** @class */ (function (_super) {
    __extends(SayCommand, _super);
    function SayCommand(bot, text) {
        var _this = _super.call(this, bot) || this;
        _this.text = text;
        return _this;
    }
    SayCommand.prototype.execute = function () {
        this.bot.say(this.text);
    };
    return SayCommand;
}(Command));
var executeCommand = function (command) {
    command.execute();
};
var bot = new Bot();
var command = process.argv[2];
var text = process.argv.slice(3).join(" ");
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
