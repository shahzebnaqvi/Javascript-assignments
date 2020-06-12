// MATH EXPRESSIONS (Chapter 05) - Assignment # 5 - JavaScript Assignments

//  Task 01
num1 = parseInt(prompt('Enter first number: '));
num2 = parseInt(prompt('Enter second number: '));
sum = num1 + num2;
document.write('Sum of ' + num1 + ' and ' + num2 + ' is ' + sum + '<br>');

//  Task 02
subt = num1 - num2;
document.write('Subtraction of ' + num1 + ' and ' + num2 + ' is ' + subt + '<br>');

multiple = num1 * num2;
document.write('Multiple of ' + num1 + ' and ' + num2 + ' is ' + multiple + '<br>');

division = num1 / num2;
document.write('division of ' + num1 + ' and ' + num2 + ' is ' + division + '<br><hr>');

// Task 03
var num_var;
document.write('Value after variable declaration is: ' + num_var + '<br>');
num_var = 5;
document.write('Initial value: ' + num_var + '<br>');
num_var = ++num_var;
document.write('Value after increment is: ' + num_var + '<br>');
num_var += 7;
document.write('Value after addition is: ' + num_var + '<br>');
num_var = --num_var;
document.write('Value after decrement is: ' + num_var + '<br>');
num_var = num_var % 3;
document.write('The remainder is: ' + num_var + '<br><hr>');

// Task 04
ticket_price = 600;
total_tickets = 5;
total_price = ticket_price * total_tickets;
document.write('Total cost to buy ' + total_tickets + ' tickets to a movie is ' + total_price + 'PKR');

// Task 05
document.write('<hr><br> <h2>Table of 5</h2> <br>');
var i;
for (i = 1; i < 11; i++) {
    document.write(`2 x ${i} = ${i * 2}<br>`);
}

// Task 06
tempInC = 25;
document.write(tempInC + ' °C is ' + ((tempInC * 9 / 5) + 32) + ' °F <br>');
tempInF = 70;
document.write(tempInF + ' °F is ' + ((tempInF - 32) * 5 / 9) + ' °C <br> <hr>');

// Task 07
var item1_price = 650;
var item2_price = 100;
var item1_quantity = 3;
var item2_quantity = 7;
var shipping_charges = 100;
var total_cost = (item1_price * item1_quantity) + (item2_price * item2_quantity) + shipping_charges;
document.write('Price of item 1 is ' + item1_price + '<br>');
document.write('Quantity of item 1 is ' + item1_quantity + '<br>');
document.write('Price of item 2 is ' + item2_price + '<br>');
document.write('Quantity of item 2 is ' + item2_quantity + '<br>');
document.write('Shipping Charges ' + shipping_charges + '<br>');
document.write('Total cost of order is ' + total_cost);

// Task 08
document.write('<hr><br> <h2> Mark Sheet </h2>');
total_marks = 980;
obt_marks = 804;
percentage = (804 / 980) * 100;
document.write('Total Marks: ' + total_cost + '<br>' + 'Obtained Marks: ' + obt_marks + '<br>' + 'Percentage: ' + percentage + '% <br> <hr>');

// Task 09
document.write('<h2>Currency in PKR</h2>' + '<br>');
var us_dollars = 10;
var saudi_riyal = 25;
document.write('US Dollars: ' + us_dollars + '<br>');
document.write('Saudi Riyal: ' + saudi_riyal + '<br>');
document.write('Total currency in PKR: ' + ((us_dollars * 104.80) + (saudi_riyal * 28)) + '<br><hr>');

// Task 10
var num = 10;
var arth_exp = ((num + 5) * 10) / 2;
document.write(arth_exp + '<br> <hr>');

// Task 11
document.write('<h2>Age Calculator</h2>')
var current_year = 2020;
var birth_year = 2002;
var age = 'They are either ' + (current_year - birth_year) + ' or ' + ((current_year - birth_year) - 1) + ' years old';
document.write(age);

// Task 12
document.write('<hr><h2>The Geometrizer</h2>' + '<br>');
var circle_radius = 20;
var cirf_cirlce = 2 * 3.142 * circle_radius;
var circle_area = 3.142 * (circle_radius ** 2);
document.write('The Radius of circle is ' + circle_radius + '<br>');
document.write('The circumference is ' + cirf_cirlce + '<br>');
document.write('The circumference is ' + circle_area + '<br><hr>');

// Task 13
document.write('<h2>The Lifetime Supply Calculator</h2>');
var snack_name = "cookies";
var current_age = 18;
var est_max_age = 60;
var amount_perday = 3;
document.write('Snack Name: ' + snack_name + '<br>');
document.write('Current Age: ' + current_age + '<br>');
document.write('Estimated Maximum Age: ' + est_max_age + '<br>');
document.write('Amount of snacks per day: ' + current_age + '<br>');
total_snacks = ((est_max_age - 18) * 365) * amount_perday;
document.write('You will need ' + total_snacks + ' ' + snack_name + ' to last you until the ripe old age of ' + est_max_age);