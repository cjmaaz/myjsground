import './style.css'
import { greeting as greetingFromClosure } from './closure';
import { getSearchInput } from './debounce';

document.querySelector('#intro').innerHTML = `
  <h1>JS Playground!</h1>
  <p>Created by @<a href="https://github.com/cjmaaz" target="_blank">Maaz Rahman</a> for exploring different Basic/Intermediate/Advanced JS topics.</p>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Repository Link</a>
`;


let closure = document.querySelector('#closure');
closure.innerHTML = `<h1>Closure</h1>`;

closure.addEventListener('click', e => {
  e.stopImmediatePropagation();
  if (closure.lastChild.tagName !== 'DIV') {
    if (closure.lastChild.tagName === 'H1') {
      let div = document.createElement('div');
      div.innerHTML = `
    <p>A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical envirnoment).</p>
    <img src="/assets/closure_ex1.svg" alt="code sample"/>
    <p id="output">Output: </p>
    <button>greeting();</button>
    `;
      closure.append(div);
    } else if (e.target.tagName === 'H1') {
      closure.innerHTML = `<h1>Closure</h1>`;
    }
  } else if (e.target.tagName === 'BUTTON') {
    let returnVal = greetingFromClosure();
    closure.querySelector('#output').textContent += `${returnVal} `;
    let img = document.createElement('img');
    img.setAttribute('src', '/assets/closure_ex2.svg');
    img.setAttribute('alt', 'code sample');
    closure.append(img);
  } else if (e.target.tagName === 'H1') {
    closure.innerHTML = `<h1>Closure</h1>`;
  }
});


let debounce = document.querySelector('#debounce');
debounce.innerHTML = `<h1>Debounce</h1>`;

debounce.addEventListener('click', e => {
  e.stopImmediatePropagation();
  if (debounce.lastChild.tagName === 'H1' && debounce.lastChild.textContent === 'Debounce') {
    let div = document.createElement('div');
    div.innerHTML = `<p>A JavaScript practice to improve browser performance.<br/><br/>It delays the callback fired on every keyup or click to reduce the work load primarily in the case of consequtive network request or calling time/cpu consuming/intensive task.</p>`;
    div.innerHTML += `<p>This could be also a good example of Closure. We'll talk about it after looking into the code:</p><br/>`;
    div.innerHTML += `
        <label for="Search">Search:</label>
        <input type="text" placeholder="Type..."/>
        <span class="default">Your every keypress: </span>
        <span class="debounced">Debunced: </span>
      `;
    debounce.append(div);
    getSearchInput();
  } else if (e.target.tagName === 'H1') {
    debounce.innerHTML = `<h1>Debounce</h1>`;
  }
});
