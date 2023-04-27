export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // getter for brand
  get brand() {
    return this._brand;
  }

  // setter for brand
  set brand(value) {
    this._brand = value;
  }

  // getter for motor
  get motor() {
    return this._motor;
  }

  // setter for motor
  set motor(value) {
    this._motor = value;
  }

  // getter for color
  get color() {
    return this._color;
  }

  // setter for colour
  set color(value) {
    this._color = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
