import { setScript, setState, states } from "../Kori/Kori.js"
import '../styles/mode.css'

setState(
  "mode",
  {
    mode: window.localStorage.getItem('mode') ? window.localStorage.getItem('mode') : 'cmd'
  }
)

setScript(
  "mode",
  {
    switchMode: () => {
      window.localStorage.setItem('mode', states.mode.mode === 'cmd' ? 'normal' : 'cmd')

      const currentMode = window.localStorage.getItem('mode')
      // window.localStorage.setItem()
      setState(
        "mode",
        {
          mode: currentMode ? currentMode : 'cmd'
        }
      )
    }
  }
)

export const mode = () => {
  return `
 <div class='switch-container'>
 <label class='switch-label flex flex-col p-2'>
   <input ${states.mode.mode === 'cmd' ? '' : 'checked'} type='checkbox' class='switch-input' if-click='mode-switchMode' />
   <div class='switch-slider'>
     <div class='slider-thumb'></div>
   </div>
   <span class='ml-2 text-white'>${states.mode.mode !== 'cmd' ? 'normal' : 'cmd'}</span>
 </label>
</div>
 `
}