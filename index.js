/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'
inquirer.prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter the URL to generate a QR code:'
    }
]).then((answers) => {
    fs.writeFile('output.txt', answers.url, () => {});
    console.log(`url entered: ${answers.url}`);
    // qr.image('generated qr', [ec_level | options])

    var qr_svg = qr.image(answers.url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('generatedQR.png'));

}).catch((errors) => {
    console.error('Error:', errors);
});