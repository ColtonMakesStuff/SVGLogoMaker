//List of neccesary resources 
const inquirer = require('inquirer');
const fs = require('fs');

const { Shape, Square, Circle, Triangle } = require('./shapes.js');



//array that prompts user to enter paramaters for the logo that is to be generated
const questions = [
    {
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 characters:',
    validate: function (input) {
        if (input.length > 3) {
          return 'text cannot be longer than 3 characters';
        }
        return true;
      },
    },
    {
        type: 'input',
        name: 'userTextColor',
        message: 'Enter a color for the text:',
       
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose the shape type:',
      choices: [
        { name: 'Circle', value: 'Circle' },
        { name: 'Square', value: 'Square' },
        { name: 'Triangle', value: 'Triangle' }
      ],
    },
    {
        type: 'input',
        name: 'userShapeColor',
        message: 'Enter a color for the shape:',
   
    }

]

class Prompt {
  constructor() {}
  run() {
    return inquirer
    .prompt(questions)
    .then(answers => {
console.log('User answers:', answers);
let userLogo;

switch (answers.shapeType) {
  case 'Circle':
    userLogo = new Circle(answers.userShapeColor, answers.text, answers.userTextColor);
    break;
  case 'Triangle':
    userLogo = new Triangle(answers.userShapeColor, answers.text, answers.userTextColor);
    break;
  case 'Square':
    userLogo = new Square(answers.userShapeColor, answers.text, answers.userTextColor);
    break;
  default:
    console.log('Invalid shape type');
}

if (userLogo) {
  const theLogo = userLogo.renderLogo();
  const outputPath = `./output/${userLogo.text}.svg`;
        
  fs.writeFile(outputPath, theLogo, (err) => {
      if (err) throw err;
      console.log('SVG file has been saved.');
  });
  console.log(`Rendering a 300x200 svg logo with shape:${userLogo.shape}, letters:${userLogo.text} and colors ${userLogo.shapeColor} for the shape and ${userLogo.textColor} for the letters`);
}
});
  }}

module.exports = Prompt;


