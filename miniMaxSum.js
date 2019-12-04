// Go to https://www.hackerrank.com/challenges/mini-max-sum/problem for problem description

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    arr.sort(function(a, b){return a-b});

    let arrMin = arr.slice(0);
    arrMin.pop();
    let min = arrMin.reduce((a, b) => a + b, 0);
    
    let arrMax = arr.slice(0);
    arrMax.shift();
    let max = arrMax.reduce((a, b) => a + b, 0);
    
    console.log(min, max);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
