const { Circle, Square, Triangle } = require("./shapes");

describe("Circle", () => {
  test("render successful", () => {
    const shape = new Circle();
    var color = "red";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
    );
  });
});

describe("Square", () => {
  test("render successful", () => {
    const shape = new Square();
    var color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
    );
  });
});

describe("Triangle", () => {
  test("render successful", () => {
    const shape = new Triangle();
    var color = "yellow";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
    );
  });
});
