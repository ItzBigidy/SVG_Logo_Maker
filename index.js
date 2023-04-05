const inquirer = requier('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');

class Svg {
    constuctor(){
        this.textElement = '';
        this.shapeElement = '':
    }
    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${t}`
    }
    setTextElement(text, color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>` 
    }
    setShapeElement(shape){
        this.shapeElement = shape.render();
    }
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'TEXT: Enter up to 3 characters.',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'TEXT COLOR: Enter a color keyword (OR a hexadecimal number).',
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'SHAPE COLOR: Enter a color keyword (OR a hexadecimal number).',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a background logo shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
];

function writeToFile(fileName, data){
        console.log('Writing [" + data + "] to file [" + filename + "]')
    FileSystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Congratulations, you have created a logo.svg!')
    });
};

