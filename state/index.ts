/**
 * Abstract phone state
 */
abstract class State {
  protected phone: Phone;

  constructor(phone: Phone) {
    this.phone = phone;
  }

  abstract lock(): void;
  abstract unlock(): void;
  abstract call(): void;
  abstract stopCall(): void;
}

/**
 * LockState
 */
class LockState extends State {
  lock(): void {
    return;
  }
  unlock(): void {
    this.phone.unlock();

    this.phone.changeState(new UnlockState(this.phone));
  }
  call(): void {
    return;
  }
  stopCall(): void {
    return;
  }
}

/**
 * UnlockState
 */
class UnlockState extends State {
  lock(): void {
    this.phone.lock();

    this.phone.changeState(new LockState(this.phone));
  }
  unlock(): void {
    return;
  }
  call(): void {
    this.phone.call();

    this.phone.changeState(new CallState(this.phone));
  }
  stopCall(): void {
    this.phone.stopCall();

    this.phone.changeState(new StopCallState(this.phone));
  }
}

/**
 * CallState
 */
class CallState extends State {
  lock(): void {
    return;
  }
  unlock(): void {
    return;
  }
  call(): void {
    return;
  }
  stopCall(): void {
    this.phone.stopCall();

    this.phone.changeState(new StopCallState(this.phone));
  }
}

/**
 * StopCallState
 */
class StopCallState extends State {
  lock(): void {
    this.phone.lock();

    this.phone.changeState(new LockState(this.phone));
  }
  unlock(): void {
    return;
  }
  call(): void {
    this.phone.call();
  }
  stopCall(): void {
    return;
  }
}

/**
 * Phone
 */
class Phone {
  private _state: State;

  constructor() {
    this._state = new LockState(this);
  }

  public changeState(state: State) {
    this._state = state;
  }

  // emulate UI input
  public onUnlock() {
    this._state.unlock();
  }

  public onLock() {
    this._state.lock();
  }

  public onCall() {
    this._state.call();
  }

  public onStopCall() {
    this._state.stopCall();
  }

  // lock
  public lock() {
    console.log("Phone locked");
  }

  // unlock
  public unlock() {
    console.log("Phone unlocked");
  }

  // call
  public call() {
    console.log("Calling...");
  }

  // stop call
  public stopCall() {
    console.log("Stop call");
  }
}

const p = new Phone();

p.onUnlock(); // uunloc
p.onCall(); // call
p.onStopCall(); // stop call
p.onLock(); // lock
p.onCall(); // do nothing because lock
