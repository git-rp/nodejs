const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data.name);
data.name = 'test';
data.age = 102;
const updatedData = JSON.stringify(data);
console.log(updatedData);

fs.writeFileSync('1-json.json', updatedData);
