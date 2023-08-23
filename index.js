//List of neccesary resources 
const fs = require('fs');
const inquirer = require('inquirer');
// const convert = require('color-convert');


// function colorKeywordToHex(colorKeyword) {
//     const rgbArray = convert.keyword.rgb(colorKeyword);
//     const hexValue = convert.rgb.hex(rgbArray);
//     return `#${hexValue}`;
//   }

//function that creates a svg file (300x200)
  
class Shape {
    constructor(shape, shapeColor, text, textColor) {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <${this.shape} fill="${this.shapeColor}" />
            <text x="50%" y="50%" font-family="Verdana" font-size="35" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
        </svg>`;       
    }
    renderLogo() {
        fs.writeFile('shape.svg', this.svgContent, (err) => {
            if (err) throw err;
            console.log('SVG file has been saved.');
        });
        console.log(`Rendering a 300x200 svg logo with shape:${this.shape}, letters:${this.text} and colors ${this.shapeColor} for the shape and ${this.textColor} for the letters`);
    }
}

// Create an instance of Shape and render the logo


class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        let shape = `rect x="50" y="0" width="200" height="200"`
        super(shape, shapeColor, text, textColor);
    }
}

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        let shape = `circle cx="150" cy="100" r="100"`
        super(shape, shapeColor, text, textColor);
    }
}

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        let shape = `polygon points="150,0 260,150 40,150"`
        super(shape, shapeColor, text, textColor);
        
    }
}
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
        // validate: function (input) {
        //     const isColor = (strColor) => {
        //         const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        //         return colorRegex.test(strColor);
        //       };
        //     if (!isColor(input)) {
        //       return 'must enter a valid color keyword or hexadecimal';
        //     }
        //     return true;
        //   },
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
const prompt = inquirer.createPromptModule();

prompt(questions).then(answers => {
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
      userLogo.renderLogo();
    }
  });


//function that handles creation of the file with the paramaters

  