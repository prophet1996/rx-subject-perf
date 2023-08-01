import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { original,withUnsub,takeD,takeWithUnsub } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="original" type="button">Original</button>
      <button id="withUnsub" type="button">withUnsub</button>
      <button id="take" type="button">take</button>
      <button id="takeWithUnsub" type="button">takeWithUnsub</button>
    </div>
  </div>
`

original(document.querySelector('#original'))
withUnsub(document.querySelector('#withUnsub'))
takeD(document.querySelector('#take'))
takeWithUnsub(document.querySelector('#takeWithUnsub'))
