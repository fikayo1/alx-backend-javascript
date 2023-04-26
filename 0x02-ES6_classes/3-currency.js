export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    } else if (typeof name !== 'string') {
      throw new Error('Name must be string');
    }

    this._code = code;
    this._name = name;
  }

  // getter for code
  get code() {
    return this._code;
  }

  // setter for code
  set code(code) {
    this._code = code;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for code
  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
