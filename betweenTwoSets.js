// Go to https://www.hackerrank.com/challenges/between-two-sets/problem for problem description

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

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    // I KNOW THIS DOESN'T WORK YET. I'LL GET AROUND TO IT LATER.
    let a = [ 3, 4 ];
    let b = [ 24, 48 ];
    let x = [];
    
    a.sort(function(a, b){return a-b});
    b.sort(function(a, b){return a-b});
    
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < a.length; j++) {
            if (i%a[j] === 0 && i <= b[0] && x.indexOf(i) < 0) {
                console.log(i, a[j], (i%a[j] === 0));
                x.push(i);
            }
        }
    }
    
    let p = [];
    
    for (let j = 0; j < b.length; j++) {
        for (let m = 0; m < x.length; m++) {
            if (b[j]%x[m] === 0) {
                console.log(x[m]);
                p.push(x[m]);
            }
        }
    }
    
    p.sort(function(a, b){return a-b});
    
    let results = [];
    
    for (let i = 0; i < p.length - 1; i++) {
        if (p[i + 1] == p[i]) {
            results.push(p[i]);
        }
    }
    
    let fin = [];
    
    for (let i = 0; i < results.length; i++) {
        if (results[i] >= a[a.length - 1] && fin.indexOf(results[i]) < 0) {
            console.log(results[i]);
            fin.push(results[i]);
        }
    }
    
    let end = [];
    
    for (let i = 0; i < fin.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (fin[i]%a[j] === 0 && end.indexOf(fin[i]) < 0) {
                console.log(fin[i]);
                end.push(fin[i]);
            }
        }
    }
    
    let waste = [];
    
    for (let j = 0; j < a.length; j++) {
        for (let e = 0; e < end.length; e++) {
            // if (end[e]%a[j] === 0) {
    
                // waste = end.splice(e, 1); 
                // delete end[e];
                console.log(e, end[e], a[j], (end[e]%a[j] === 0));
            // } 
        }
    }
    
    console.log(fin.length);
    return fin.length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
