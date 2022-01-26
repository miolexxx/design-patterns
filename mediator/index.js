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
var UIComponent = /** @class */ (function () {
    function UIComponent(_mediator) {
        this._mediator = _mediator;
    }
    UIComponent.prototype.onClick = function () {
        this._mediator.notify(this, "click");
    };
    UIComponent.prototype.onDrag = function () {
        this._mediator.notify(this, "drag");
    };
    return UIComponent;
}());
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(_mediator, _text) {
        var _this = _super.call(this, _mediator) || this;
        _this._text = _text;
        return _this;
    }
    Label.prototype.print = function () {
        console.log(this._text);
    };
    return Label;
}(UIComponent));
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(_mediator) {
        return _super.call(this, _mediator) || this;
    }
    Button.prototype.foo = function () {
        console.log("button foo on drag");
    };
    Button.prototype.bar = function () {
        console.log("button bar on click");
    };
    return Button;
}(UIComponent));
var App = /** @class */ (function () {
    function App() {
        this._label = new Label(this, "Label text");
        this._button = new Button(this);
    }
    App.prototype.notify = function (sender, event) {
        switch (event) {
            case "click":
                if (sender == this._label) {
                    sender.print();
                }
                if (sender == this._button) {
                    sender.bar();
                }
                break;
            case "drag":
                if (sender == this._label) {
                    console.log("Label drag");
                }
                if (sender == this._button) {
                    sender.foo();
                }
                break;
        }
    };
    return App;
}());
var app = new App();
app._button.onClick();
app._button.onDrag();
app._label.onDrag();
app._label.onClick();
