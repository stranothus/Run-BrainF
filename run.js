const fs = require("fs");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
const { fromBrain } = require("./index.js");

const bfFiles = fs.readdirSync("./").filter(v => v.includes(".bf"));

readline.question("Which file should be run?\n" + bfFiles.join(",\n") + "\n\n>", async file => {
    if(bfFiles.indexOf(file) + 1) {
        let bf = fs.readFileSync("./" + file, "utf-8");

        if(bf) {
            console.log(await fromBrain(bf.replace(/\n/, "")));
        } else {
            console.error("\n\nFile empty");
        }
    } else {
        console.error("\n\nFile not found");
    }

    readline.close();
});