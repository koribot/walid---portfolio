import { states } from "../Kori/Kori.js"
import { Description } from "./Description.js"



export const Navbar = () => {


    return `
${states.mode.mode === 'cmd'
            ?

            `<div class='p-[50px] text-center'>
                    <h1 class='text-[50px] text-white'>
                    ✨Welcome✨
                    </h1>  
                    <h1 class='text-[15px] text-[gray]'>
                    ~~~This is only available for web not on mobile~~~
                    </h1>
                    ${Description()}   
            </div> `
            :
            `
     
            <nav class="bg-gray-800 p-4 flex justify-center">
                <div class="flex items-center justify-between">
                <button class="text-white focus:outline-none lg:hidden" id="mobile-menu-btn">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                
                <ul class="hidden lg:flex space-x-4 text-white">
                    
                    <li><a href="#" class="hover:text-gray-300">About</a></li>
                    
                    <li><a href="#" class="hover:text-gray-300">Projects</a></li>
                    
                    <li><a href="#" class="hover:text-gray-300">Contact</a></li>
                    
                </ul>
                
                </div>
            </nav>

            <div class="lg:hidden" id="mobile-menu">
                <ul class="bg-gray-800 p-2 space-y-2 flex flex-col justify-center items-center">
                <li><a href="#" class="block text-white">Home</a></li>
                <li><a href="#" class="block text-white">About</a></li>
                <li><a href="#" class="block text-white">Projects</a></li>
                <li><a href="#" class="block text-white">Contact</a></li>
                </ul>
            </div>
`
        }  
 `

}

export default Navbar