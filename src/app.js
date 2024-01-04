import CmdDisplay from "./Components/CmdDisplay.js";
import { mode } from "./Components/mode.js";
import Navbar from "./Components/Navbar.js";
import insert from "./Kori/insert.js";
import Kori, { setScript, setState, states } from "./Kori/Kori.js";




export const app = (count) => {
  return `
  <div class='bg-[#232b2b] min-h-[100vh] h-full'>
     ${mode()}
     ${Navbar()}
     ${states.mode.mode === 'cmd' ? CmdDisplay() : ''}
  </div>
`
}

export default app