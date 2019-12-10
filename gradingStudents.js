// Go to https://www.hackerrank.com/challenges/grading/problem for problem description

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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    let roundedGrades = [];

    for ( let i = 0; i < grades.length; i++ ) {
        if ( Math.ceil(grades[i]/5)*5 < 40 ) {
            roundedGrades.push(grades[i]);
        } else {
            let nextFive = Math.ceil(grades[i]/5)*5;
            if ( (nextFive - grades[i]) > 2 ) {
                roundedGrades.push(grades[i]);
            } else {
                roundedGrades.push(nextFive);
            }
        }
    }
    
    return roundedGrades;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}