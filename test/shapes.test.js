const fs = require('fs');
const Shape = require('../lib/shapes.js');


// circle.test.js
const Circle = require('../lib/shapes.js');

describe('Circle', () => {
  describe("renderLogo", () => {
    it("should take a user input and render a circle svg file", async () => {
      // Arrange
      const shapeColor = 'red';
      const text = 'WOO';
      const textColor = 'blue';
      const outputPath = 'shape.svg';

      // Act
      const circleInstance = new Circle(shapeColor, text, textColor);
      await circleInstance.renderLogo(outputPath);

      // Assert
      // Check if the SVG file was saved
      expect(fs.writeFile).toHaveBeenCalledWith(outputPath, circleInstance.svgContent, expect.any(Function));

      // Check if the console.log messages were called as expected
      expect(console.log).toHaveBeenCalledWith(`Rendering a 300x200 svg logo with shape:<circle cx="150" cy="100" r="100" />, letters:${text} and colors ${shapeColor} for the shape and ${textColor} for the letters`);
      expect(console.log).toHaveBeenCalledWith('SVG file has been saved.');
    });
  });
});