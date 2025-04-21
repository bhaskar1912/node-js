const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

const filePath = path.join(dataFolder, "example.txt");
//sync way of creating the file
fs.writeFileSync(filePath, "Hello from Bhaskar");
console.log("file create successfully");

const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("File content :", readContentFromFile);

fs.appendFileSync(filePath, "\n this is new file");
