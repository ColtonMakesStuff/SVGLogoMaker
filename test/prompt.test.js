// const fs = require('fs');
// const { writeLogoToFile } = require('../lib/prompt.js');

// test('writeLogoToFile should save the logo file and log the details', async (done) => {
//     // Mock userLogo object
//     const userLogo = {
//       renderLogo: jest.fn().mockReturnValue('mockedLogo'),
//       text: 'TXT',
//       shape: 'Circle',
//       shapeColor: 'blue',
//       textColor: 'white',
//     };
  
//     // Spy on console.log
//     const consoleSpy = jest.spyOn(console, 'log');
  
//     // Call the function
//     await writeLogoToFile(userLogo);
  
//     // Check if fs.writeFile was called with the correct arguments
//     expect(fs.writeFile).toHaveBeenCalledWith(
//       './output/TXT.svg',
//       'mockedLogo',
//       expect.any(Function)
//     );
  
//     // Check if console.log was called with the correct message
//     expect(consoleSpy).toHaveBeenCalledWith(
//       'Rendering a 300x200 svg logo with shape: Circle, letters: TXT and colors blue for the shape and white for the letters'
//     );
  
//     // Restore the console.log spy
//     consoleSpy.mockRestore();
  
//     // Call done to indicate that the test has completed
//     done();
//   }, 10000); // Increase the timeout to 10 seconds
