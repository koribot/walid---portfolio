import '../styles/NormalDisplay.css'
import { insert } from './../Kori/insert';
export const NormalDisplay = () => {


  return `
  <div>

   <div class='px-[60px] py-[50px] flex justify-center gap-[100px]'>
    
      <div class="text-white flex flex-col gap-5 font-Helvetica">
        <div class='block md:hidden flex justify-center'>
          <img class='w-[150px]' src='public/walid-cawasa-profile.png'/>
        </div>

        <div class="flex flex-col mb-5 gap-5">
          <h1 class="text-sm lg:text-4xl  flex">
          ${insert("<Hello>")}
          <span class="ml-2 wave">👋🏻</span>
          </h1>
          <h1 class="text-2xl font-bold ml-5">I am Walid Labawan Cawasa</h1>
          <p class="text-lg ml-5" >- I am an aspiring web developer</p>
          <p class="text-lg ml-5">- I like to build stuffs</p>
          <h1 class="text-sm lg:text-2xl flex mb-5">
          ${insert("</Hello>")}
          </h1>
        </div>

        <div>
          <h1 class="text-sm lg:text-2xl  flex mb-5">
            ${insert("<Tech Stack>")}
          </h1>
          <span class='grid grid-cols-3 grid-rows-2 gap-5 lg:flex'>
            <img class='w-[50px] h-[50px] rotate-horizontal-animation' src='public/css.png'/>
            <img class='w-[50px] h-[50px] rotate-horizontal-animation' src='public/tailwind.png'/>
            <img class='w-[50px] h-[50px] rotate-horizontal-animation' src='public/html.png'/>
            <img class='w-[50px] h-[50px] rotate-horizontal-animation' src='public/jscript.png'/>
            <img class='w-[50px] h-[50px] rotate-horizontal-animation' src='public/react.png'/>
            <img class='w-[50px] h-[50px] rotate-horizontal-animation' src='public/nextjs.png'/>
          </span>

          <h1 class="text-sm lg:text-2xl flex mt-5">
            ${insert("</Tech Stack>")}
          </h1>
        </div>
        <p class="mt-[15px] italic text-lg">"Not the brightest but resourceful"</p>
      </div>
 
      <div class='slide-in-from-right hidden md:block lg:block'>
        <img src='public/walid-cawasa-profile.png'/>
      </div>
      
   </div>
  
   <div class='px-[60px] py-[50px] flex flex-col text-center justify-center mt-[200px] gap-5'>
    <h1 class='text-white text-2xl'>${insert('<Projects>')}</h1>
    <div class='text-white grid lg:flex gap-5'>

      <div class='flex flex-col justify-start items-center'>
        <span class='hover:bg-gray-600 p-5 flex flex-col gap-[5px] rounded justify-center items-center'>
          <img class='object-contain w-[400px] h-[200px]' src='public/ebextractor.png'/>
        <p>eBextractor - chrome extension</p>
        <p class="italic text-lg">"eBay search data extractor: High, Low, Avg, </br>Mid prices + keyword count & price occurrence"</p>
        </span>
        <a class='mt-[15px] border px-[5px] hover:bg-gray-500' href='prevReload-https://chromewebstore.google.com/detail/ikfpolbfdnihjnadfodochmagdagpbik' target='_blank'>Live</a>
        <p class='mt-[15px]'>Repo is private :)</a>
      </div>
      
      <div class='flex flex-col justify-start items-center'>
        <span class='hover:bg-gray-600  p-5 flex flex-col gap-[5px] rounded justify-center items-center'>
          <img class='object-contain w-[400px] h-[200px]' src='public/ebex-api.png'/>
        <p>eBex API - Python + Flask</p>
        <p class="italic text-lg">"API that is intended for my </br> 
        ebextractor but it is a free to use API"
        </p>
        </span>
        <a class='mt-[15px] border px-[5px] hover:bg-gray-500' href='prevReload-https://ebextractor-v1.vercel.app/api/extract/using_keyword?q=shoes' target='_blank'>Live</a>
        <a class='mt-[15px] border px-[5px] hover:bg-gray-500' href='prevReload-https://github.com/koribot/ebextractor-api-flask' target='_blank'>Repo</a>
      </div>

      <div class='flex flex-col justify-start items-center'>
        <span class='hover:bg-gray-600 p-5 flex flex-col gap-[5px] rounded justify-center items-center'>
          <img class='object-contain w-[400px] h-[200px]' src='public/koribotjs.png'/>
        <p>🔥koribotJs🔥</p>
        <p class="italic text-lg">"An UN-OPTIMIZED MESSY Javascript front-end framework/library"
        </p>
        </span>
        <p class='mt-[15px] border px-[5px] hover:bg-gray-500'>NO WEBSITE YET</p>
        <a class='mt-[15px] border px-[5px] hover:bg-gray-500' href='prevReload-https://github.com/koribot/koribotJS' target='_blank'>Repo</a>
      </div>


      <div class='flex flex-col justify-start items-center'>
        <span class='hover:bg-gray-600 p-5 flex flex-col gap-[5px] rounded justify-center items-center'>
          <img class='object-contain w-[400px] h-[200px]' src='public/ebex-web.png'/>
        <p>eBex Web Scraper</p>
        <p class="italic text-lg">"A nextjs web version of my chrome extension - UNDER 🚧"
        </p>
        </span>
        <a class='mt-[15px] border px-[5px] hover:bg-gray-500' href='prevReload-https://ebex-scraper-web.vercel.app' target='_blank'>Live</a>
        <a class='mt-[15px] border px-[5px] hover:bg-gray-500' href='prevReload-https://github.com/koribot/ebex-scraper-web' target='_blank'>Repo</a>
      </div>

    </div>
    <h1 class='text-white text-2xl'>${insert('</Projects>')}</h1>
   </div>
  </div>
 `
}

export default NormalDisplay