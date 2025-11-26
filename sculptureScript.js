const sculptureList = require('./data.js');

const sculptureListLengths = {};

for (let i = 0; i < sculptureList.length; i++) {
    const item = sculptureList[i];
    sculptureListLengths[i] = {};
    for (const key in item) {
        sculptureListLengths[i][key] = item[key].length;
    }
}

console.log(sculptureListLengths);