// ARRAYS (Chapter 14 - 16) - Assignment # 14 - 16 - JavaScript Assignments

//  Task 01
var std_names = {};

// Task 02
var std_names2 = {};

// Task 03
var str_arr = ['a'];

// Task 04
var int_arr = [1];

// Task 05
var bol_arr = [true];

// Task 06
var int_arr = ['a', 1, true];

// Task 07
var edu_qual = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
document.write('<h1>Qualification: </h1>')
document.write(edu_qual[0] + '<br>' + edu_qual[1] + '<br>' + edu_qual[2] + '<br>' + edu_qual[3] + '<br>' + edu_qual[4] + '<br>' + edu_qual[5] + '<br>' + edu_qual[6] + '<br>' + edu_qual[7] + '<br>');

// Task 08
var std_names1 = ['Maaz', 'Ahmed', 'Ali'];
var std_marks = [350, 449, 245];
var total_num = 500;
document.write('Score of ' + std_names1[0] + ' is ' + std_marks[0] + '. Percentage: ' + ((std_marks[0] / total_num) * 100) + '<br>');
document.write('Score of ' + std_names1[1] + ' is ' + std_marks[1] + '. Percentage: ' + ((std_marks[1] / total_num) * 100) + '<br>');
document.write('Score of ' + std_names1[2] + ' is ' + std_marks[2] + '. Percentage: ' + ((std_marks[2] / total_num) * 100) + '<br><hr>');

// Task 09
var color_names = ['Red', 'Green', 'Blue', 'Black', 'White'];
document.write('Initial Array: ' + color_names);
color_names.unshift(prompt('what color you want to add to the beginning: '));
document.write('<br>Array After Adding New Color In The Beginning: ' + color_names);
color_names.push(prompt('what color you want to add to the End: '));
document.write('<br>Array After Adding New Color In The End: ' + color_names);
color_names.unshift('Pink', 'Purple');
document.write('<br>Array After Adding Two New Color In The Beginning: ' + color_names);
color_names.shift();
document.write('<br>Array After Removing One Color From The Beginning: ' + color_names);
color_names.pop();
document.write('<br>Array After Removing One Color From The End: ' + color_names);
// Task 10

document.write('<hr><br>Scores of students: ' + std_marks + '<br>')
document.write('Ordered Scores of students: ' + std_marks.sort() + '<br>')

// Task 11
var cities = ['Karachi', 'Islamabad', 'Lahore', 'Peshawar', 'Quetta'];
var selectedCities = cities.slice(0, 3);
document.write('Cities List: ' + cities);
document.write('<br>Selected Cities List: ' + selectedCities + '<br>');

// Task 12
var arr = ['This', ' is', ' my', ' cat'];
document.write('Array: ' + arr)
var str1 = arr.join('');
document.write('<br>String: ' + str1);

// Task 13
var fifo_arr = [];
fifo_arr.push('Keyboard');
fifo_arr.push('Mouse');
fifo_arr.push('printer');
fifo_arr.push('Monitor');
document.write('<hr><br>Devices: ' + fifo_arr);
document.write('<br>Out: ' + fifo_arr[0]);
document.write('<br>Out: ' + fifo_arr[1]);
document.write('<br>Out: ' + fifo_arr[2]);
document.write('<br>Out: ' + fifo_arr[3]);

// Task 14
var filo_arr = [];
fifo_arr.push('Keyboard');
fifo_arr.push('Mouse');
fifo_arr.push('printer');
fifo_arr.push('Monitor');

document.write('<hr><br>Devices: ' + fifo_arr);
document.write('<br>Out: ' + fifo_arr.pop());
document.write('<br>Out: ' + fifo_arr.pop());
document.write('<br>Out: ' + fifo_arr.pop());
document.write('<br>Out: ' + fifo_arr.pop());

//  Task 15
var brands_arr = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write(`
<hr> <br>
<label for="brands">Choose a brand:</label>

<select name="brands" id="brands">
  <option value="${brands_arr[0]}">${brands_arr[0]}</option>
  <option value="${brands_arr[1]}">${brands_arr[1]}</option>
  <option value="${brands_arr[2]}">${brands_arr[2]}</option>
  <option value="${brands_arr[3]}">${brands_arr[3]}</option>
  <option value="${brands_arr[4]}">${brands_arr[4]}</option>
  <option value="${brands_arr[5]}">${brands_arr[5]}</option>
</select>
`);
