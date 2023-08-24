const { Shape, Square, Circle, Triangle } = require('../lib/shapes.js');


// describe('Shape', () => {
//   describe('renderLogo', () => {
//     test('should create an SVG file with the correct content', () => {
//       // Create an instance of Shape
//       const shape = new Shape('testShape', 'red', 'TXT', 'white');
      
//       // Define the expected SVG content
//       const expectedSvgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//             <testShape fill="red" />
//             <text x="50%" y="50%" font-family="Verdana" font-size="35" fill="white" text-anchor="middle" dominant-baseline="middle">TXT</text>
//         </svg>`;
     
//     });
//   });
// });

describe('Square', () => {
  describe('constructor', () => {
    test('should set the shape property to a rect element', () => {
      const square = new Square('blue', 'TXT', 'white');
      expect(square.shape).toBe('rect x="50" y="0" width="200" height="200"');
      expect(square.text).toBe('TXT');
    });
  });
});

describe('Circle', () => {
  describe('constructor', () => {
    test('should set the shape property to a circle element', () => {
      const circle = new Circle('green', 'TXT', 'white');
      expect(circle.shape).toBe('circle cx="150" cy="100" r="100"');
      expect(circle.text).toBe('TXT');
    });
  });
});

describe('Triangle', () => {
  describe('constructor', () => {
    test('should set the shape property to a polygon element', () => {
      const triangle = new Triangle('yellow', 'TXT', 'black');
      expect(triangle.shape).toBe('polygon points="150,0 260,150 40,150"');
      expect(triangle.text).toBe('TXT');
    });
  });
});