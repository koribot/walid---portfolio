import { setState, states } from "../Kori/Kori"

setState(
 "Help",
 {
  commandLists: [
   { command: 'Go to', desc: 'Go to pages', eg: 'Go to /home' },
   { command: 'Display *', desc: 'Display lists of Options', eg: 'Display * Pages' },
   { command: 'Play', desc: 'Play a game', eg: 'Go to /home' },
   { command: 'Go to', desc: 'Go to pages', eg: 'Go to /home' },
   { command: 'Go to', desc: 'Go to pages', eg: 'Go to /home' },
   { command: 'Go to', desc: 'Go to pages', eg: 'Go to /home' },
  ]
 }

)


export const Help = () => {


 return `
   <div class='wrapper'>
     <h1 class='text-white'>List of All Commands</h1>
   <table class='custom-table'>
      <thead>
        <tr>
          <th class='text-white'>Command</th>
          <th class='text-white'>Description</th>
          <th class='text-white'>Example</th>
        </tr>
      </thead>
      <tbody>
        ${states.Help.commandLists.map((items) => `
          <tr>
            <td class='text-white'>${items.command}</td>
            <td class='text-white'>${items.desc}</td>
            <td class='text-white'>${items.eg}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
 `
}


export default Help