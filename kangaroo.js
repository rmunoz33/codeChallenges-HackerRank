// Go to https://www.hackerrank.com/challenges/kangaroo/problem for problem description

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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    let arr1 = [];
    let y1 = x1;
    
    for ( let i = 0; i < 10000; i++ ) {
        y1 = y1 + v1;
        arr1.push( parseInt( y1 ) );
    }
    
    let arr2 = [];
    let y2 = x2;
    
    for ( let i = 0; i < 10000; i++ ) {
        y2 = y2 + v2;
        arr2.push( parseInt( y2 ) );
    }
    
    let newArray = []
    
    for ( let i = 0; i < arr1.length; i++ ) {
        if ( arr1[i] === arr2[i] ) {
            newArray.push(true)
        } else {
    
        }
    }
    
    if ( newArray.includes(true) ) {
        return "YES";
    } else {
        return "NO";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x1V1X2V2 = readLine().split(' ');

    const x1 = parseInt(x1V1X2V2[0], 10);

    const v1 = parseInt(x1V1X2V2[1], 10);

    const x2 = parseInt(x1V1X2V2[2], 10);

    const v2 = parseInt(x1V1X2V2[3], 10);

    let result = kangaroo(x1, v1, x2, v2);

    ws.write(result + "\n");

    ws.end();
}
