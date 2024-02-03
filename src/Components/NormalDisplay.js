import { setScript } from '../Kori/Kori.js';
import '../styles/NormalDisplay.css'
import scrollToTop from '../utils/scrollTop.js';
import { insert } from './../Kori/insert';
import { image_modal } from './../utils/image_modal';


setScript(
  "normalDisplay",
  {
    scrollToTop: () => {
      scrollToTop()
    },
    openModal: () => {
      image_modal("public/ADUKASYON-CERTIFICATE.png")
    }
  }

)


export const NormalDisplay = () => {


  return `
  <div>
  <div class='separator-nav'>
  </div>
   <div class='px-[20px] lg:px-[60px] flex justify-center gap-[100px]'>
      <div class='border rounded border-gray-600 text-white flex p-[10px] lg:p-[50px]'>
        <div ref='about' class="text-white flex flex-col gap-5 font-Helvetica">
          <div class='block md:hidden flex justify-center'>
            <img class='w-[150px]' src='public/walid-cawasa-profile.png'/>
          </div>

          <div class="flex flex-col mb-5 gap-5">
            <h1 class="text-sm lg:text-4xl  flex">
            ${insert("<Hello>")}
            <span class="ml-2 wave">👋🏻</span>
            </h1>
            <h1 class="text-sm lg:text-2xl font-bold ml-5">I am Walid Labawan Cawasa</h1>
            <p class="lg:text-lg ml-5" >- I am an aspiring web developer</p>
            <p class="lg:text-lg ml-5">- I like to build stuffs</p>
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
            <img class='w-[50px] h-[50px] rotate-horizontal-animation' src='public/python.png'/>
            </span>

            <h1 class="text-sm lg:text-2xl flex mt-5">
              ${insert("</Tech Stack>")}
            </h1>
          </div>
          <p class="mt-[15px] italic text-lg">"Not the brightest but resourceful"</p>
        </div>
  
        <div class='overflow-hidden hidden md:block lg:block'>
          <img class='slide-in-from-right ' src='public/walid-cawasa-profile2.png'/>
        </div>
      </div>
   </div>
   <div class='separator'> 
   </div>
   <div ref='projects' class='px-[20px] lg:px-[60px] flex flex-col text-center justify-center items-center gap-5'>
    <div class='border border-gray-600 rounded p-[15px]'>
          <h1 class='text-white lg:text-2xl'>${insert('<Projects>')}</h1>
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

            <div class='flex flex-col justify-start items-center'>
              <span class='hover:bg-gray-600 p-5 flex flex-col gap-[5px] rounded justify-center items-center'>
                <img class='object-contain w-[400px] h-[200px]' src='public/waan-trading.png'/>
              <p>Waan Trading - Ecommerce</p>
              <p class="italic text-lg">“A simple ecommerce website using react - Frontend” - UNDER 🚧"
              </p>
              </span>
              <a class='mt-[15px] border px-[5px] hover:bg-gray-500' href='prevReload-https://waantrading-react.vercel.app' target='_blank'>Live</a>
              <a class='mt-[15px] border px-[5px] hover:bg-gray-500' href='prevReload-https://github.com/koribot/waantrading-react' target='_blank'>Repo</a>
            </div>

            <div class='flex flex-col justify-start items-center'>
              <span class='hover:bg-gray-600 p-5 flex flex-col gap-[5px] rounded justify-center items-center'>
                <img class='object-contain w-[400px] h-[200px]' src='public/internship.png'/>
              <p>Internship Project - ACS-MEDISKIN-WEB</p>
              <p class="italic text-lg">“My Intership Project - React, TypeScript"
              </p>
              </span>
            </div>

          </div>
          <h1 class='text-white mt-[20px] lg:text-2xl'>${insert('</Projects>')}</h1>
      </div>
   </div>

   <div class='separator'>
   </div>

   <div ref='certificates' class='px-[20px] lg:px-[60px] flex flex-col text-center justify-center items-center gap-5'>
    <div class='border border-gray-600 rounded p-[15px]'>
          <h1 class='mb-[10px] text-white lg:text-2xl'>${insert('<Certificates>')}</h1>
          <div class='text-white grid lg:flex gap-5'>
              <div class='flex flex-col justify-start items-center'>
                  <span class='hover:bg-gray-600 px-5 flex flex-col gap-[5px] rounded justify-center items-center'>
                    <img class='object-contain w-[400px] h-[200px]' src='public/ADUKASYON-CERTIFICATE.png'/>
                    <p>September 2023 - January 2024</p>
                    <p class="italic text-lg">"ADUKASYON PH CERTIFICATE"</p>
                  </span>
                  <button if-click='normalDisplay-openModal' class=' mt-[15px] border px-[5px] hover:bg-gray-500'>View</button>
              </div>
          </div>
          <h1 class='text-white mt-[20px] lg:text-2xl'>${insert('</Certificates>')}</h1>
      </div>
   </div>


   <div class='separator'>
   </div>


   <div ref='contact' class='flex justify-center'>
      <div class="container mx-auto px-8 flex justify-center">
        <div class="three-d-container flex justify-center gap-8">
            <div class="bg-gray-800 text-white p-6 rounded-md shadow-md flex flex-col">
              <h1 class="lg:text-2xl text-center mb-5">
                ${insert("<Contact>")}
              </h1>
                <h2 class="text-xl font-semibold mb-4">Let's Connect!</h2>
                <p class="mb-4">Feel free to reach out. I'd love to hear from you!</p>
                <p class="mb-2">Contact me at:</p>
                <ul class="list-disc pl-5">
                    <li>Email: w.cawasa@gmail.com</li>
                    <li>
                      Facebook: <a class='ml-1 cursor-pointer underline' href='prevReload-https://www.facebook.com/wcawasa' target='_blank'> @wcawasa</a>
                    </li>
                    <li>
                      Github: <a class='ml-1 cursor-pointer underline' href='prevReload-https://github.com/koribot' target='_blank'> @koribot</a>
                     </li>
                </ul>
              <h1 class="lg:text-2xl mt-5 text-center">
                ${insert("</Contact>")}
              </h1>
            </div>
        </div>

      </div>
   </div>
   <div class='separator'> 
   </div>
   <div if-click='normalDisplay-scrollToTop' class='cursor-pointer text-white fixed bottom-5 right-0 lg:right-2'><img class='w-[50px] h-[50px]' src='public/arrow-up.png'/></div>
  </div>
 `
}

export default NormalDisplay