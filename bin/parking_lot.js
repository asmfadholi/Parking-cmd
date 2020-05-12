#!/usr/bin/env node

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(cmd) {
    const spliData = cmd.split(' ');
    if (spliData.length === 1) {
        console.log('The command is 1 argument ' + spliData);
    } else {
        console.log('The command more than 1 arguments ' + spliData);
    }
});