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
          <h1 class="text-sm lg:text-4xl  flex mb-5">
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

   <div>


   </div>
  </div>
 `
}

export default NormalDisplay