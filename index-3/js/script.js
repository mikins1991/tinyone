// document.getElementById("out").innerHTML = "hello";
// document.getElementById("out").innerHTML = 2019;
// document.getElementById("out").innerHTML = "<b>2020</d>";

// document.querySelector(".header").innerHTML = 5;
// document.querySelector('#loren').innerHTML = 777;

// let a = document.querySelector('#loren');
// a.innerHTML = 7678;
// let b;
// b = document.querySelector(".header");
// b.innerHTML = 7 + 5;
// document.querySelector('#one').innerHTML = 'Hello Word';
// document.getElementById('two').innerHTML = 5 * 6;
// document.querySelector('span').innerHTML = "world";
//document.querySelector('.three').innerHTML.
let leg = document.querySelector('.three').innerHTML = '<h3>jksjsjf</h3>';
// let y1 = 6;
// let y2 = 3;
// document.querySelector('.proiz').innerHTML = y1 * y2;

// let d1;
// d1 = document.querySelector('.test-2');
// console.log(d1);
// d1.innerHTML = 4;
// d1 = 5;

// console.log(d1);

// Событие мыши
let imputIn = document.querySelector('.imput-in');
let button = document.querySelector('button');

button.onclick = function () {
    console.log('Rabotaaet');
    // console.log(imputIn.value);
    let b = +imputIn.value;
    console.log(b + 2);
    imputIn.value = '';
}