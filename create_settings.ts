export {};

const fs = require("fs");
const path = require("path");

const [variable, value] = process.argv.slice(2);

let data = {};

//@ts-ignore
data[variable] = value;

const jsonData = JSON.stringify(data, null, 2);
const filePath = path.resolve(__dirname, "settings.json");

//@ts-ignore
fs.writeFile(filePath, jsonData, (err) => {
  if (err) {
    console.error("Error writing JSON file:", err);
  } else {
    console.log("JSON file written successfully.");
  }
});
