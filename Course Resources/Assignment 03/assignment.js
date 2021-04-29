//change to arrow function

const sayHello = name => console.log('Hi ' + name);
const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Hi Adam');
const sayHello4 = name => 'Hi ' + name;

sayHello('Adam');
sayHello2('Adam', 'Hello');
sayHello3();
console.log(sayHello4('Adam'));

const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);
sayHello5('Manuel');
sayHello5('Manuel','Hello');

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  
  for (const text of strings){
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
    if (!hasEmptyText) {
      cb();
    }
}

checkInput(() => {
  console.log('All not empty!');},
   'One', 'Two', 'Three', 'Four', 'Five'
);