#!/usr/bin/env node

const fs = require("fs");
const { fromBrain } = require("./index.js");
const file = process.argv[2];

console.log(file);

if(!file) throw new Error("Please specify a .bf file to run");

const bf = fs.readFileSync("./" + file, "utf-8");

fromBrain(bf.replace(/\n/, "")).then(console.log);