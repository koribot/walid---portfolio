




export const DisplayLists = (Display) => {
  const Pages = [
    { name: 'About', path: '/about', desc: 'About me page' },
    { name: 'Projects', path: '/projects', desc: 'Project Page' },
  ]
  const Games = [
    { name: 'Snake', path: '/games/snakes', desc: 'A Simple Snake Game' },
    { name: 'Projects', path: '/projects', desc: 'Project Page' },
  ]
  const Projects = [
    {
      name: 'eBextractor', path: '/projects/eBextractor', desc: `
  🔍 The eBay Search Data Extraction Extension offers data analysis 
      for single-page search results, providing valuable insights through the following features:

- 💰 Highest Price: Obtain the maximum price observed in the search results.
- 💵 Lowest Price: Identify the minimum price found among the listings.
- 📊 Average Price: Calculate the mean price across the search results.
- 🎯 Middle Price: Determine the median price, offering a representative value.
- 🔑 Keyword Occurrence: Track and quantify the frequency of each keyword throughout the listings.
- 💲 Price Occurrence: Gain an understanding of how often different price points appear in the search results.
  ` },
    {
      name: 'eBex - API', path: '/projects/ebex-api', desc: `
   API that is intended for my ebextractor but it is a free to use API
  ` },
    {
      name: 'koribotJS', path: '/projects/koribotjs', desc: `
    koribotJS is a hobby project, it is unoptimized, messy Component Based 
    Javascript framework/library. 
    - It uses diffing, patching and rendering algorigthm
    - It has a globalize state manager that is persistent until reload of the browser
    - a simple routing
    

     This portfolio is powered by it. 
  ` },
  ]
  const lists = { Pages: Pages, Games: Games, Projects: Projects }

  return `
  ${lists[Display] ? `<div class='wrapper'>
  <h1 class='text-white'>${Display}</h1>
    <table class='custom-table'>
       <thead>
         <tr>
           <th class='text-white'>Name</th>
           <th class='text-white'>Path</th>
           <th class='text-white'>Description</th>
         </tr>
       </thead>
       <tbody class='overflow-x-auto'>
         ${lists[Display].map((items) => `
           <tr>
             <td class='text-white'>${items.name}</td>
             <td class='text-white'>${items.path}</td>
             <td class='text-white'><pre>${items.desc}</pre></td>
           </tr>
         `).join('')}
       </tbody>
     </table>
  </div>`: ''}
 `
}

export default DisplayLists