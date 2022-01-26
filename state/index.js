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
var State = /** @class */ (function () {
    function State(phone) {
        this.phone = phone;
    }
    return State;
}());
var LockState = /** @class */ (function (_super) {
    __extends(LockState, _super);
    function LockState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LockState.prototype.lock = function () {
        return;
    };
    LockState.prototype.unlock = function () {
        this.phone.unlock();
        this.phone.changeState(new UnlockState(this.phone));
    };
    LockState.prototype.call = function () {
        return;
    };
    LockState.prototype.stopCall = function () {
        return;
    };
    return LockState;
}(State));
var UnlockState = /** @class */ (function (_super) {
    __extends(UnlockState, _super);
    function UnlockState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnlockState.prototype.lock = function () {
        this.phone.lock();
        this.phone.changeState(new LockState(this.phone));
    };
    UnlockState.prototype.unlock = function () {
        return;
    };
    UnlockState.prototype.call = function () {
        this.phone.call();
        this.phone.changeState(new CallState(this.phone));
    };
    UnlockState.prototype.stopCall = function () {
        this.phone.stopCall();
        this.phone.changeState(new StopCallState(this.phone));
    };
    return UnlockState;
}(State));
var CallState = /** @class */ (function (_super) {
    __extends(CallState, _super);
    function CallState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallState.prototype.lock = function () {
        return;
    };
    CallState.prototype.unlock = function () {
        return;
    };
    CallState.prototype.call = function () {
        return;
    };
    CallState.prototype.stopCall = function () {
        this.phone.stopCall();
        this.phone.changeState(new StopCallState(this.phone));
    };
    return CallState;
}(State));
var StopCallState = /** @class */ (function (_super) {
    __extends(StopCallState, _super);
    function StopCallState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StopCallState.prototype.lock = function () {
        this.phone.lock();
        this.phone.changeState(new LockState(this.phone));
    };
    StopCallState.prototype.unlock = function () {
        return;
    };
    StopCallState.prototype.call = function () {
        this.phone.call();
    };
    StopCallState.prototype.stopCall = function () {
        return;
    };
    return StopCallState;
}(State));
var Phone = /** @class */ (function () {
    function Phone() {
        this._state = new LockState(this);
    }
    Phone.prototype.changeState = function (state) {
        this._state = state;
    };
    Phone.prototype.onUnlock = function () {
        this._state.unlock();
    };
    Phone.prototype.onLock = function () {
        this._state.lock();
    };
    Phone.prototype.onCall = function () {
        this._state.call();
    };
    Phone.prototype.onStopCall = function () {
        this._state.stopCall();
    };
    Phone.prototype.lock = function () {
        console.log("Phone locked");
    };
    Phone.prototype.unlock = function () {
        console.log("Phone unlocked");
    };
    Phone.prototype.call = function () {
        console.log("Calling...");
    };
    Phone.prototype.stopCall = function () {
        console.log("Stop call");
    };
    return Phone;
}());
var p = new Phone();
p.onUnlock(); // uunloc
p.onCall(); // call
p.onStopCall(); // stop call
p.onLock(); // lock
p.onCall(); // do nothing because lock
