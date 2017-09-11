var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
    return fs.readFileSync(file).toString();
}

function formatData(data){
    var lines = data.toString().split("\n");
    return lines.filter(each=>(each)).reduce((tally, line)=>{
        lineSplit = line.split("  ");
        if(Array.isArray(lineSplit[1].match(/\d/g))){
            let syllables = lineSplit[1].match(/\d/g).length;
            let word = lineSplit[0];
            if (tally[syllables]) tally[syllables].push(word);
            else tally[syllables] = [word];
            return tally;
        }
        else return tally
    },{});
}

module.exports = {
    wordsBySyllNo: formatData(cmudictFile)
};