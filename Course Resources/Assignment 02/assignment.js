const task3Element = document.getElementById('task-3');
let message;

function hello(){
    alert('Hello there!')
}

function sayMyName(name){
    alert('Hello there, ' + name + '!')
}

function combine(string1, string2, string3){
    message = string1 + string2 + string3;
    alert(message);
}

task3Element.addEventListener('click', hello);

hello();
sayMyName('Adam');
combine('Adam ','is ','awesome!');



// Example explained
const task3Element = document.getElementById('task-3');

function greet() {
    alert('Hi there!');
}

function greetUser(userName) {
    alert('Hi ' + userName);
}

function combine(str1, str2, str3) {
    const combinedText = str1 + str2 + str3;
    return combinedText;
} 

greet();
greetUser('Adam');

task3Element.addEventListener('click', greet);

const combinedString = combine('Hi', 'there', '!');
alert(combine);