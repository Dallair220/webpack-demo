import myName from './myName.js';
import { functionOne } from './myModule.js';

function component() {
  const element = document.createElement('div');

  element.textContent = myName('paul');
  console.log(functionOne());
  return element;
}

document.body.appendChild(component());
