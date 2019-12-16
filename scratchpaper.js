let a = [ 2, 4 ];
let b = [ 16, 32, 96 ];
let x = [];

a.sort(function(a, b){return a-b});
b.sort(function(a, b){return a-b});

for (let j = 0; j < a.length; j++) {
    for (let i = 0; i < 100; i++) {
        if (i%a[j] == 0) {
            x.push(i)
        }
    }
}

let un = x.filter(num => num <= b[0]);
un.sort(function(a, b){return a-b});






// get multiples of elements in 'a'
// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < 100; j++) {
//         if (x.indexOf(j) < 0 && a[i]%j === 0) {
//             x.push(j);
//         }
//     }
// }

let y = [];

for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < un.length; j++) {
        if (y.indexOf(un[j]) < 0 && b[i]%un[j] === 0 ) {
            y.push(un[j]);
        }
    }
}

let fin = [];
????????????????????
for (let i = 0; i < y.length; i++) {
    for (let j = 0; j < a.length; j++) {
        if ( fin.indexOf(y[i]) < 0 && a[j]%y[i] === 0 ) {
            fin.push(y[i]);
        }
    }
}

b.sort(function(a, b){return a-b});
