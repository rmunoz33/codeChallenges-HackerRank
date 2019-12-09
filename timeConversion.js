// Go to https://www.hackerrank.com/challenges/time-conversion/problem for problem description

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
// set hour and second variables to zero
let hour = 0;
let sec = 0;

// see whether input says 'PM'
let PM = s.match('PM') ? true : false;

// split input into array
s = s.split(':');

// set minute variable
let min = s[1];

if (PM) {
    if (s[0] == 12) {
        hour = s[0];
        sec = s[2].replace('PM', '')
    } else 
    {
        hour = 12 + parseInt(s[0],10)
        sec = s[2].replace('PM', '')
    }
    } else {
        if (s[0] == '12') {
            hour = '00';

            sec = s[2].replace('AM', '')       
        } else 
    {hour = s[0]
    sec = s[2].replace('AM', '')       }
}

return (hour + ':' + min + ':' + sec);
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
