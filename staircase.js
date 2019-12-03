// Go to https://www.hackerrank.com/challenges/staircase/problem for problem description

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

// Complete the staircase function below.
function staircase(n) {
    let arr = ['#'];

    for (let i = 0; i < (n - 1); i++) {
        arr.unshift(' ');
    }
    
    let lst = ((arr.filter((x) => x != '#').length) - 1);
    
    console.log(arr.join(''));
    
    for (let i = 0; i < (n - 1); i++) {
        arr[lst] = '#';
        --lst;
        console.log(arr.join(''));
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
