var dictionary = require("./dictionary");
var wordsBySyllNo = dictionary.wordsBySyllNo;

const createHaiku = structure =>{
    let haiku = '';
    for (let i = 0; i < structure.length; i++) {
        for (let j = 0; j < structure[i].length; j++) {
            let n = structure[i][j];
            let nextWord = wordsBySyllNo[n][Math.floor(Math.random() * wordsBySyllNo[n].length)];
            if (/\(\d+\)$/g.test(nextWord)) nextWord = nextWord.slice(0,-3);
            haiku += nextWord + ' ';
        }
        haiku += '\n'
    }
    return haiku
};

module.exports = {
    createHaiku: createHaiku,
};
