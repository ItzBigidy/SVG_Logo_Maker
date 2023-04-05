const inquirer = requier("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

class Svg {
  constuctor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${t}`;
  }
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

const questions = [
  {
    type: "input",
    name: "text",
    message: "TEXT: Enter up to 3 characters.",
  },
  {
    type: "input",
    name: "text-color",
    message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number).",
  },
  {
    type: "input",
    name: "shape-color",
    message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number).",
  },
  {
    type: "list",
    name: "shape",
    message: "Select a background logo shape",
    choices: ["Circle", "Square", "Triangle"],
  },
];

function writeToFile(fileName, data) {
  console.log('Writing [" + data + "] to file [" + filename + "]');
  FileSystem.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Congratulations, you have created a logo.svg!");
  });
}

async function init() {
  console.log("Starting init");
  var svgString = "";
  var svg_file = "logo.svg";

  const answers = await inquirer.prompt(questions);
  var user_text = "";
  if (answers.text.length > 0 && answers.text.length < 4) {
    user_text = answers.text;
  } else {
    console.log(
      "Invalid entry. Please enter a string of 1-3 characters in length"
    );
    return;
  }
  console.log('User text: [' + user_text + ']');
  
  user_font_color = answers['text-color']
  console.log('User font color: [' + user_font_color + ']')

  user_shape_color = answers.shape;
  console.log('User font color: [' + user_shape_color + ']')
  
  user_shape_type = answers['shape']
  console.log('User font color: [' + user_shape_type + ']')

  let user_shape;
  if (user_shape_type === "Square" || user_shape_type === "square") {
    user_shape = new Square();
    console.log('User selected square')
  }
  else if (user_shape_type === "Circle" || user_shape_type === "circle") {
    user_shape = new Circle();
    console.log('User selected circle')
  }
  else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
    user_shape = new Triangle();
    console.log('User selected triangle')
  }
  else {
    console.log('Invalid shape!')
  }
  user_shape.setColor(user_shape_color);

  var svg = new Svg();
  svg.setTextElement(user_text, user_font_color);
  svg.setShapeElement(user_shape);
  svgString = svg.render();

  console.log("SVG element string:\n\n" + svgString);

  console.log('Logo Generated!')
  console.log('Writing svg to file..');
  writeToFile(svg_file, svgString);
}

init();