/**
 * Mediator interface
 */
interface Mediator {
  notify(sender: UIComponent, event: string): void;
}

/**
 * Abstract UI component
 */
abstract class UIComponent {
  protected _mediator: Mediator;

  constructor(_mediator: Mediator) {
    this._mediator = _mediator;
  }

  onClick(): void {
    this._mediator.notify(this, "click");
  }
  onDrag(): void {
    this._mediator.notify(this, "drag");
  }
}

/**
 * Label component class
 */
class Label extends UIComponent {
  private _text: string;

  constructor(_mediator: Mediator, _text: string) {
    super(_mediator);
    this._text = _text;
  }

  print() {
    console.log(this._text);
  }
}

/**
 * Button component class
 */
class Button extends UIComponent {
  constructor(_mediator: Mediator) {
    super(_mediator);
  }

  foo() {
    console.log("button foo on drag");
  }
  bar() {
    console.log("button bar on click");
  }
}

/**
 * App class
 */
class App implements Mediator {
  public _label: Label;
  public _button: Button;

  constructor() {
    this._label = new Label(this, "Label text");
    this._button = new Button(this);
  }

  notify(sender: UIComponent, event: string): void {
    switch (event) {
      case "click":
        if (sender == this._label) {
          (sender as Label).print();
        }
        if (sender == this._button) {
          (sender as Button).bar();
        }
        break;
      case "drag":
        if (sender == this._label) {
          console.log("Label drag");
        }
        if (sender == this._button) {
          (sender as Button).foo();
        }
        break;
    }
  }
}

const app = new App();
app._button.onClick();
app._button.onDrag();
app._label.onDrag();
app._label.onClick();
