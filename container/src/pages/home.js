import { html, css } from "../../../core"

let counter = 0;

export async function script() {
  const btn = document.querySelector('#btn-1');
  btn.addEventListener('click', () => {
    counter++;
    btn.innerHTML = `click me ${counter}`
  });
}

export default function render(){

  return html`
  <div>
    <h1>Home</h1>
    <button id="btn-1">click me ${counter}</button>
  </div>`;
}

export function style(){
  css`
  h1 {
    color: red;
    }
  `;
}
