const fs = require('fs');
const Shape = require('../lib/shapes.js');

class Circle extends Shape {
  constructor(shapeColor, text, textColor) {
    const shape = `<circle cx="150" cy="100" r="100" />`;
    super(shape, shapeColor, text, textColor);
  }
}

describe('Circle', () => {
  describe("renderLogo", () => {
    it("should take a user input and render a circle svg file", () => {
      // Arrange
      const shapeColor = 'red';
      const text = 'WOO';
      const textColor = 'blue';

      // Act
      const circleInstance = new Circle(shapeColor, text, textColor);
      circleInstance.renderLogo();

      // Assert
      // Check if the SVG file was saved
      expect(fs.writeFile).toHaveBeenCalledWith('shape.svg', circleInstance.svgContent, expect.any(Function));

      // Check if the console.log messages were called as expected
      expect(console.log).toHaveBeenCalledWith(`Rendering a 300x200 svg logo with shape:<circle cx="150" cy="100" r="100" />, letters:WOO and colors red for the shape and blue for the letters`);
      expect(console.log).toHaveBeenCalledWith('SVG file has been saved.');

      // Clean up
      fs.unlinkSync('shape.svg');
    });
  });
});