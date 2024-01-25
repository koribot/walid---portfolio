import CmdDisplay from "./Components/CmdDisplay.js";
import Footer from "./Components/Footer.js";
import { mode } from "./Components/mode.js";
import Navbar from "./Components/Navbar.js";
import NormalDisplay from "./Components/NormalDisplay.js";
import insert from "./Kori/insert.js";
import Kori, { setScript, setState, states } from "./Kori/Kori.js";

if (window.localStorage.getItem('window') === null) {
  window.localStorage.setItem('window', 'pc')
}

//  ${states.mode.mode === 'normal' ? NormalNavbar() : Navbar()}
export const app = () => {
  return `
  <div class='${states.mode.mode === 'cmd' ? 'bg-[#232b2b]' : 'bg-[#121313]'} min-h-[100vh] h-full'>
     ${window.localStorage.getItem('window') ? window.localStorage.getItem('window') === 'pc' ? mode() : '' : window.localStorage.setItem('window', 'pc')}
     ${Navbar()}
     ${states.mode.mode === 'cmd' ? CmdDisplay() : ''}
     ${states.mode.mode === 'normal' ? NormalDisplay() : ''}
     ${Footer()}
  </div>
`
}

export default app