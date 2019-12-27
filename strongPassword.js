// Go to https://www.hackerrank.com/challenges/strong-password/problem for problem description

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

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";
    
    // It contains at least one digit.
    
    let num_cnt = 0;
    
    for (let i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) {
            num_cnt++;
        } else {
            num_cnt = num_cnt;
        };
    }
    
    // It contains at least one lowercase English character.
    
    let lower_case_cnt = 0;
    
    for (let i = 0; i < password.length; i++) {
        if (lower_case.includes(password[i])) {
            lower_case_cnt++;
        } else {
            lower_case_cnt = lower_case_cnt;
        };
    }
    
    // It contains at least one uppercase English character.
    
    let upper_case_cnt = 0;
    
    for (let i = 0; i < password.length; i++) {
        if (upper_case.includes(password[i])) {
            upper_case_cnt++;
        } else {
            upper_case_cnt = upper_case_cnt;
        };
    }
    
    // It contains at least one special character. The special characters are: !@#$%^&*()-+
    
    let special_characters_cnt = 0;
    
    for (let i = 0; i < password.length; i++) {
        if (special_characters.includes(password[i])) {
            special_characters_cnt++;
        } else {
            special_characters_cnt = special_characters_cnt;
        };
    }
    
    // Its length is at least 6.
    
    let required_cnt = (num_cnt + lower_case_cnt + upper_case_cnt + special_characters_cnt);
    let missing = (num_cnt === 0 ? 1 : 0) + (lower_case_cnt === 0 ? 1 : 0) + (upper_case_cnt === 0 ? 1 : 0) + (special_characters_cnt === 0 ? 1 : 0);
    
    if (missing === 0 && n >= 6) {
        return (0);
    } else if (missing === 0 && n < 6) {
        return (6 - n);
    } else if (missing !== 0 && n >= 6) {
        return (missing);
    } else if (missing !== 0 && n < 6) {
        return (missing > (6 - n) ? missing : (6 - n));
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}
