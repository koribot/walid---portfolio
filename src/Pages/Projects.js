import CmdDisplay from "../Components/CmdDisplay.js";
import { setScript, setState, states } from "../Kori/Kori.js";
import '../styles/Project.css'


const ProjectsLists = [
  {
    name: 'eBextractor', repo: '', live: 'https://chromewebstore.google.com/detail/ikfpolbfdnihjnadfodochmagdagpbik', desc: `
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
    name: 'eBex - API', repo: 'https://github.com/koribot/ebextractor-api-flask', live: 'https://ebextractor-v1.vercel.app/api/extract/using_keyword?q=shoes', desc: `
 API that is intended for my ebextractor but it is a free to use API
` },
  {
    name: 'koribotJS', repo: 'https://github.com/koribot/koribotJS', live: '#', desc: `
  koribotJS is a hobby project, it is unoptimized, messy Component Based 
  Javascript framework/library. 
  - It uses diffing, patching and rendering algorigthm
  - It has a globalize state manager that is persistent until reload of the browser
  - a simple routing
  

   This portfolio is powered by it. 
` },
  {
    name: 'eBex Web Scraper', repo: 'https://github.com/koribot/ebex-scraper-web', live: 'https://ebex-scraper-web.vercel.app', desc: `
    A nextjs web version of my chrome extension - UNDER 🚧. `
  },
  {
    name: 'Waan Trading - Ecommerce', repo: 'https://github.com/koribot/waantrading-react', live: 'https://waantrading-react.vercel.app', desc: `
    A simple ecommerce website using react - UNDER 🚧. `
  },
]


export const Projects = () => {

  return `
   <div class="bg-gradient-to-r min-h-[100vh] from-[#232b2b] to-[#232b2b] p-8 rounded-md shadow-md p-8 rounded-md shadow-md w-full animate__animated animate__fadeIn">
      <div class='flex mb-5'>
        <div class="typewriter">
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>
        </div>
      </div>

    ${ProjectsLists.map((project) => {
    return `
      <div class="mb-8">
          <div class="bg-black p-6 rounded-md shadow-md">
            <h2 class="text-xl font-semibold mb-2 text-white">${project.name}</h2>
            <pre class="text-gray-100 mb-4">${project.desc}</pre>
            <div class="flex">
              ${project.repo ? `<a class="text-blue-500 mr-4" href="prevReload-${project.repo}" target="_blank">Repository</a>` : ''}
              ${project.live ? `<a class="text-green-500" href="${project.live}" target="_blank">Live Demo</a>` : ''}
            </div>
          </div>
        </div>
      `
  })}
     ${states.mode.mode === 'cmd' ? CmdDisplay() : ''}
   </div>
 `;
};

export default Projects;
