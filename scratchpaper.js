let a = [ 3, 9, 6 ];
let b = [ 36, 72 ];
let x = [];

a.sort(function(a, b){return a-b});
b.sort(function(a, b){return a-b});

// get array 'x' of all multiples of elements in 'a'
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < 100; j++) {
        x.push(a[i] * j);
    }
}

let sortedA = x.slice().sort(function(a, b){return a-b});
let dup = [];

for (let i = 0; i < sortedA.length - 1; i++) {
    if (sortedA[i + 1] == sortedA[i]) {
      dup.push(sortedA[i]);
    }
}

dup.sort(function(a, b){return a-b});

dup = dup.filter(num => num <= b[0]);
let result = [];

for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < dup.length; j++) {
        b[i]%dup[j] === 0 ? result.push(dup[j]) : result = result ;
    }
}

let sortedY = result.slice().sort(function(a, b){return a-b});
let fin = [];

for (let i = 0; i < sortedY.length - 1; i++) {
    if (sortedY[i + 1] == sortedY[i]) {
      fin.push(sortedY[i]);
    }
}

let un = [];
for (let i = 0; i < fin.length; i++) {
    un.includes(fin[i]) === false ? un.push(fin[i]) : un = un ;
}

// return un.length;
console.log(un.length);