// MATH EXPRESSIONS (Chapter 06) - Assignment # 6 - JavaScript Assignments

//  Task 01
var a = prompt('Enter a number: ');
document.write('Result:' + '<br>');
document.write('The value of a is: ' + a + '<br>');
document.write('-------------------------- <br>')
document.write('The value of ++a is: ' + ++a + '<br>');
document.write('Now the value of a is: ' + a + '<br>');

document.write('The value of a++ is: ' + a++ + '<br>');
document.write('Now the value of a is: ' + a + '<br>');

document.write('The value of --a is: ' + --a + '<br>');
document.write('The value of a is: ' + a + '<br>');

document.write('The value of a-- is: ' + a-- + '<br>');
document.write('The value of a is: ' + a + '<br><hr>');

// Task 02
var a = 2;
var b = 1;
var result;
document.write('a is ' + a + '<br>');
document.write('b is ' + b + '<br>');
result = --a;
document.write(result + '<br>')
result = --a - --b;
document.write(result + '<br>')
result = --a - --b + ++b;
document.write(result + '<br>')
result = --a - --b + ++b + b--;
document.write('Result is ' + result + '<br><hr>');

// Task 03
var usr_name = prompt('Enter Your Name');
alert('Welcome ' + usr_name);

// Task 05
var i = 0;
var table_num = prompt('Enter a Number: ');
if (table_num === ''){
    for(i=1;i<11;i++){
        document.write( `5 x ${i} = ${i * 5}<br>`);
    }
}
else{
    for(i=1;i<11;i++){
        document.write(`${table_num} x ${i} = ${i * table_num}<br>`);
    }
}

// Task 06
var subject_1 = prompt('Enter 1st Subject Name: ');
var subject_1_marks = parseInt(prompt('Enter 1st Subject Marks: '));
var subject_2 = prompt('Enter 2nd Subject Name: ');
var subject_2_marks = parseInt(prompt('Enter 2nd Subject Marks: '));
var subject_3 = prompt('Enter 3rd Subject Name: ');
var subject_3_marks = parseInt(prompt('Enter 3rd Subject Marks: '));
var total_marks = 100;
var markSheet = `<table border=1> 
<tr>
    <th>Subjects</th> 
    <th>Total Marks</th> 
    <th>Obtained Marks</th>
    <th>Percentage</th>
</tr>
<tr>
    <th>${subject_1}</th> 
    <td>${total_marks}</td> 
    <td>${subject_1_marks}</td>
    <td>${(subject_1_marks / total_marks) * total_marks}%</td>  
</tr>
<tr>
    <th>${subject_2}</th> 
    <td>${total_marks}</td> 
    <td>${subject_2_marks}</td>
    <td>${(subject_2_marks / total_marks) * total_marks}%</td>  
</tr>
<tr>
    <th>${subject_3}</th> 
    <td>${total_marks}</td> 
    <td>${subject_3_marks}</td>
    <td>${(subject_3_marks / total_marks) * total_marks}%</td>  
</tr>
<tr>
    <th>TOTAL</th> 
    <td>${total_marks * 3}</td> 
    <td>${subject_1_marks + subject_2_marks + subject_3_marks}</td> 
    <td>${(((subject_1_marks / total_marks) * total_marks) + ((subject_2_marks / total_marks) * total_marks) + ((subject_3_marks / total_marks) * total_marks)) / 3}%</td> 
</tr>
</table>`;
document.write(markSheet);