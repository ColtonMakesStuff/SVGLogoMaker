//List of neccesary resources 
const fs = require('fs');



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
return this.svgContent

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

module.exports = {
    Shape,
    Square,
    Circle,
    Triangle
  };