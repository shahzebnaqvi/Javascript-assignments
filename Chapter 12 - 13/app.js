// IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS  (Chapter 12 - 13) - Assignment # 12 - 13 - JavaScript Assignments

//  Task 01
var character = prompt('Enter a character or Number: ');
if(character.charCodeAt() >= 65 && character.charCodeAt() <= 90){
    alert( character + ' is a Uppercase Character');
}
else if(character.charCodeAt() >= 97 && character.charCodeAt() <= 122){
    alert( character + ' is a Lowercase Character');
}
else if(character.charCodeAt() >= 48 && character.charCodeAt() <= 57){
    alert( character + ' is a Number');
}
else{
    alert('Invalid Character');
}

// Task 02
var int_1 = parseInt(prompt('Enter first Intiger'));
var int_2 = parseInt(prompt('Enter second Intiger'));
if (int_1 > int_2){
    alert(int_1 + ' is the larger number');
}
else if (int_2 > int_1){
    alert(int_2 + ' is the larger number');
}
else if (int_1 == int_2){
    alert(int_1 + ' and ' + int_2 + ' are equal');
}
else{
    alert('Please Enter a Valid Number');
}

// Task 03
var pos_neg_z = parseInt(prompt('Please enter a number: '));
if (pos_neg_z > 0){
    alert(pos_neg_z + ' is a postive number');
}
else if (pos_neg_z < 0){
    alert(pos_neg_z + ' is a negative number');
}
else if (pos_neg_z == 0){
    alert(pos_neg_z + ' is Zero');
}
else{
    alert('Please enter a valid number');
}

// Task 04
var vowel_or_not = prompt('Enter a character to check if it is a vowel: ').toLowerCase();
if (vowel_or_not == "a" || vowel_or_not == "e" || vowel_or_not == "i" || vowel_or_not == "o" || vowel_or_not == "u"){
    alert(vowel_or_not + ' is a vowel');
}
else{
    alert(vowel_or_not + ' is not a vowel');
}

//  Task 05
var real_pwd = 'hello world';
var enter_pwd = prompt('Enter your Password: ');
if(enter_pwd == ''){
    alert('Please enter your password');
}
else if (enter_pwd == real_pwd){
    alert('Correct! The password you entered matches the original password');
}
else{
    alert('Incorrect password');
}

// Task 06
// Fixed
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

// Task 07
var time_24hour = parseInt(prompt('Please Enter time in 24 Hour Format: '));
var time_12hour;
if(time_24hour > 12){
    time_12hour = time_24hour - 12;
    
}
else if(time_24hour < 12){
    time_12hour = time_24hour;
}
else if (time_24hour == 0){
    time_12hour = 12;
}
alert(time_12hour);