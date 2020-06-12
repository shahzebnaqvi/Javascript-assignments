// ARRAYS AND LOOP (Chapter 17 - 20) - Assignment # 17 - 20 - JavaScript Assignments

//  Task 01
var multi_dim = [
    [1, 2, 3],
    [4, 5, 6]
];

//  Task 02
var multi_dim2 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

//  Task 03
var i;
for (i = 1; i < 11; i++) {
    document.write(i + '<br>');
}

// Task 04
var table_num = parseInt(prompt('Enter a number to show its multiplication table: '));
var table_lenght = parseInt(prompt('Enter lenght of multiplication table: '));
var i;
document.write(`<h2>Table of ${table_num} </h2>`);
document.write(`<h2>Lenght of table is ${table_lenght} </h2>`);
for (i = 1; i < table_lenght + 1; i++) {
    document.write(`${table_num} x ${i} = ${table_num * i} <br>`);
}

// Task 05
fruits = ['apple', 'mango', 'banana', 'orange', 'pineapple'];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + '<br>');
}
for (var i = 0; i < fruits.length; i++) {
    document.write(`Element at index ${fruits.indexOf(fruits[i])} is ${fruits[i]} <br>`);
}

// Task 06
arr_counts = [];
for (let i = 1; i < 16; i++) {
    arr_counts.push(i);
}
document.write(`Counting: ${arr_counts} <br>`);

arr_reverse = [];
for (let i = 1; i < 11; i++) {
    arr_reverse.push(i);
}
document.write(`Reverse Counting: ${arr_reverse} <br>`);

arr_even = [];
for (let i = 0; i < 21; i += 2) {
    arr_even.push(i);
}
document.write(`Even: ${arr_even} <br>`);

arr_odd = [];
for (let i = 1; i < 21; i += 2) {
    arr_odd.push(i);
}
document.write(`Odd: ${arr_odd} <br>`);

arr_series = [];
for (let i = 2; i < 21; i += 2) {
    arr_series.push(i + 'K');
}
document.write(`Series: ${arr_series} <br>`);

// Task 07
A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
user_search = prompt('Welcome to ABC Bakery. What do you want to order?');
for (let i = 0; i < A.length; i++) {
    if (user_search == A[i]) {
        alert(`${A[i]} is available at index ${A.indexOf(A[i])} in our bakery`);
        break;
    }
}