// Go to https://www.hackerrank.com/challenges/two-characters/problem for problem description

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the alternate function below.
function alternate(s) {
    // convert string to array
    let sArray = s.split("");

    // find unique elements

    let unique = [];

    for (let i = 0; i < sArray.length; i++) {
        if (unique.includes(sArray[i])) {
            unique = unique;
        } else {
            unique.push(sArray[i]);
        }
    }

    // set default result to zero
    let result = 0;


    for (let i = 0; i < unique.length; i++) {
        
        for (let j = 0; j < unique.length; j++) {
            // set default validation to true
            let valid = true;
            // find all variations of each unique pair of elements
            let tempArray = sArray.filter(person => person == unique[i] || person == unique[j]);
        
            for (let k = 0; k < tempArray.length; k++) {
                
                if (tempArray[k] == tempArray[k + 1]) {
                    // if two consecutive elements are the same, change validation to false
                    valid = false;
                } else {
                    valid = valid;
                }
            }
            // if the array is still valid AND it is longer than result, make it the new result
            if (valid && tempArray.length > result) {
                result = tempArray.length;
            } else {
                result = result;
            }
        }
}

// accounting for when input string is only one or two characters long
if (s.length < 3) {
    if (s.length == 1) {
        return 0;
    } else {
        return s.length;
    }
} else {
    return result;
}
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
