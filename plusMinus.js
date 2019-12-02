// Go to https://www.hackerrank.com/challenges/plus-minus/problem for problem description

'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    let pos = arr.filter((positives) => positives > 0);
    let neg = arr.filter((negatives) => negatives < 0);
    let z = arr.filter((zeros) => zeros === 0);
    
    console.log((pos.length / arr.length).toFixed(6));
    console.log((neg.length / arr.length).toFixed(6));
    console.log((z.length / arr.length).toFixed(6));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
