const fs = require("fs");

const parsedData = JSON.parse(fs.readFileSync("1-json.json").toString());

console.log(parsedData);

parsedData.name = "iheathers";
parsedData.age = 23;

const jsonData = JSON.stringify(parsedData);

fs.writeFileSync("1-json.json", jsonData);

console.log(jsonData);
