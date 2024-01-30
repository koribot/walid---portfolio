import { states } from '../Kori/Kori'
import '../styles/Description.css'






export const Description = () => {


  return `
   <div class='flex justify-center mt-[50px] w-[100%]'>
   <div class='wrapper'>
     <h1 class='text-white'>Options (not case-sensitive)</h1>
     <table class='custom-table'>
        <thead>
          <tr>
            <th class='text-white'>Command</th>
            <th class='text-white'>Description</th>
            <th class='text-white'>Usage</th>
          </tr>
        </thead>
        <tbody>
          ${states.CmdDisplay.commandLists.map((items) => `
            <tr>
              <td class='text-white'>${items.command}</td>
              <td class='text-white'>${items.desc}</td>
              <td class='text-white'>${items.eg}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
   </div>
 `
}