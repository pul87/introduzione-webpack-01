// importa il modulo Person dal file Person.js
import Person from './Person';

// crea un'istanza di Person passando al costruttore name=pul e age=29
const pul = new Person('pul',29);

// crea un div
const element = document.createElement('div');

// inserisce del testo usando l'interpolazione di stringhe di es6 nel div appena creato
element.innerHTML = `name: ${pul.getName()}, age: ${pul.getAge()}`;

// appende il div al body
document.body.appendChild(element);
