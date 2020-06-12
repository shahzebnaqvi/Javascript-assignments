//USER INPUT & CONDITIONAL STATEMENT (Chapter 09 - 11) - Assignment # 09 - 11 - JavaScript Assignments

//  Task 01
var city_name = prompt('Enter a city name: ').toLowerCase();
if (city_name == "karachi") {
    alert('Welcome to city of lights');
}

// Task 02
var usr_gender = prompt('Please enter your gender').toLowerCase();
if (usr_gender == "male") {
    alert('Good Morning Sir');
}
else if (usr_gender == "female") {
    alert('Good Morning Ma’am');
}
else {
    alert('Invalid Gender Value');
}

// Task 03
var signal_color = prompt('Type a signal color (Red, Yellow , Green) to know its use').toLowerCase();
if (signal_color == 'red') {
    alert('Must Stop');
}
else if (signal_color == 'yellow') {
    alert('Ready to move');
}
else if (signal_color == 'green') {
    alert('Move now');
}
else {
    alert('Invalid Signal Color');
}

// Task 04
var car_fuel = parseInt(prompt("Enter Your Car's Remaining Fuel(in Litres): "));
if (car_fuel < 0.25) {
    alert('Please refill the fuel in your car');
}

// Task 05
if (++a === 5) {
    alert("given condition for variable a is true");
    // Condition is not true
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
    // Condition is not true
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
    // Condition is not true
}
if (c === 13) {
    alert("condition 2 is true");
    // Condition is true
}
if (++c < 14) {
    alert("condition 3 is true");
    // Condition is not true
}
if (c === 14) {
    alert("condition 4 is true");
    // Condition is true
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
    // Condition is true
}
if (true) {
    alert("True");
     // Condition is true
}
if (false) {
    alert("False");
     // Condition is not true
}
if ("car" < "cat") {
    alert("car is smaller than cat");
     // Condition is true
}

// Task 06
var subject_1 = prompt('Enter 1st Subject Name: ');
var subject_1_marks = parseInt(prompt('Enter 1st Subject Marks: '));
var subject_2 = prompt('Enter 2nd Subject Name: ');
var subject_2_marks = parseInt(prompt('Enter 2nd Subject Marks: '));
var subject_3 = prompt('Enter 3rd Subject Name: ');
var subject_3_marks = parseInt(prompt('Enter 3rd Subject Marks: '));
var total_marks = 300;
var obt_marks = subject_1_marks + subject_2_marks + subject_3_marks;
var percentage = (obt_marks / total_marks) * 100;
var grade;
var remarks;
if (percentage >= 80) {
    grade = 'A-one';
    remarks = 'Excellent';
}
else if (percentage >= 70) {
    grade = 'A';
    remarks = 'Good';
}
else if (percentage >= 60) {
    grade = 'B';
    remarks = 'You need to improve';
}
else {
    grade = 'Fail';
    remarks = 'Sorry';
}
document.write('<h2>Mark Sheet</h2> <br>');
document.write('Total Marks: ' + total_marks + '<br>');
document.write('Marks Obtained: ' + obt_marks + '<br>');
document.write('Percentage: ' + percentage + '<br>');
document.write('Grade: ' + grade + '<br>');
document.write('Remarks: ' + remarks + '<br>');

// Task 07
var secret_num = 7;
var Guessed_num = parseInt(prompt('Please Guess a Number Between 1 - 10'));
if(Guessed_num == secret_num){
    alert('Bingo! Correct answer');
}
else if(Guessed_num == secret_num + 1 || Guessed_num == secret_num - 1){
    alert('Close enough to the correct answer');
}
else{
    alert('You are too far from the correct answer');
}

// Task 08
var input_num = parseInt(prompt('Enter a number'));
if (input_num % 3 == 0){
    alert(input_num + ' is divisible by 3');
}
else{
    alert(input_num + ' is not divisible by 3');
}

// Task 09
var even_odd = parseInt(prompt('Enter a number to check if it is odd or even: '));
if(even_odd % 2 == 0){
    alert(even_odd + ' is an even number');
}
else{
    alert(even_odd+ ' is an odd number');
}

// Task 10
var tempr = parseInt(prompt('Enter Temperature: '));
if (tempr > 40){
    alert('It is too hot outside');
}
else if (tempr > 30){
    alert('The Weather today is Normal');
}
else if (tempr > 20){
    alert('Today’s Weather is cool');
}
else if (tempr > 10){
    alert('OMG! Today’s weather is so Cool');
}

// Task 11
var f_number = parseInt(prompt('Enter First Number: '));
var s_number = parseInt(prompt('Enter Second Number: '));
var opreation = prompt('Opreation to perform (- , + , * , /): ');
if (opreation == '-'){
    alert(f_number - s_number);
}
else if (opreation == '+'){
    alert(f_number + s_number);
}
else if (opreation == '*'){
    alert(f_number * s_number);
}
else if (opreation == '/'){
    alert(f_number / s_number);
}
else{
    alert('Please enter a valid opreation sign');
}