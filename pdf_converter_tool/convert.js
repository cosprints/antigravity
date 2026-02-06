const fs = require('fs');
const pdf = require('pdf-parse');

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!inputFile || !outputFile) {
    console.error("Usage: node convert.js <inputPdf> <outputText>");
    process.exit(1);
}

let dataBuffer = fs.readFileSync(inputFile);

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync(outputFile, data.text);
    console.log("Done");
}).catch(function(error){
    console.error(error);
    process.exit(1);
});
