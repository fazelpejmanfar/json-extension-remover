const fs = require('fs');
const path = require('path');

const inputFolder = './input_files'; 
const outputFolder = './new_files'; 

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }
  
  fs.readdir(inputFolder, (err, files) => {
    if (err) {
      console.error('Error reading input folder:', err);
      return;
    }
  
    files.forEach((file) => {
      if (path.extname(file) === '.json') {
        const fileNameWithoutExtension = path.basename(file, '.json');
        console.log(fileNameWithoutExtension)
  

        const newFilePath = path.join(outputFolder, fileNameWithoutExtension);
  

        fs.copyFile(path.join(inputFolder, file), `${newFilePath}`, (copyErr) => {
          if (copyErr) {
            console.error(`Error copying ${file} to the output folder:`, copyErr);
          } else {
            console.log(`Copied ${file} to ${newFilePath}.json`);
          }
        });
      }
    });
  });