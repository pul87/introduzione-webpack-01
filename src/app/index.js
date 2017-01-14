const Person = require('./Person.js');

const pul = new Person('pul',29);

const element = document.createElement('div');

element.innerHTML = `name: ${pul.getName()}, age: ${pul.getAge()}`;

document.body.appendChild(element);
