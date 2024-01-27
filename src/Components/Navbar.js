import { setScript, setState, states } from "../Kori/Kori.js"
import smoothScroll from "../utils/smoothScroll.js"
import { Description } from "./Description.js"



setState(
    "navbar",

    {
        open: false
    }

)


setScript(
    "navbar",
    {
        openMenu: () => {
            const current = states.navbar.open
            setState(
                "navbar",

                {
                    open: current ? false : true
                }

            )
        },
        aboutClick: () => {
            const aboutElement = document.querySelector('div[ref="about"]');
            if (aboutElement) {
                smoothScroll(aboutElement, 80, 200)
            }
        },
        projectsClick: () => {
            const projectsElement = document.querySelector('div[ref="projects"]');
            if (projectsElement) {
                smoothScroll(projectsElement, 160, 300)
            }
        },
        contactClick: () => {
            const contactElement = document.querySelector('div[ref="contact"]');
            if (contactElement) {
                smoothScroll(contactElement, 160, 400)
            }
        }

    }
)


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
                    <li if-click='navbar-aboutClick' class="cursor-pointer hover:text-gray-300">About</li>
                    <li if-click='navbar-projectsClick' class="cursor-pointer hover:text-gray-300">Projects</li>
                    <li if-click='navbar-contactClick' class="cursor-pointer hover:text-gray-300">Contact</li>
                    <a 
                    href='prevReload-https://drive.google.com/file/d/1LCpzMEJshy-41bDaE8685Vd10mphbTui/view?usp=sharing' 
                    class="cursor-pointer hover:text-gray-300"
                    target='_blank'
                    >
                    Resume
                    </a>
                </ul>
                </div>
            </nav>

            <div class="lg:hidden" id="mobile-menu">
                <button if-click='navbar-openMenu' id="burger-icon" class="absolute top-[0px] left-1 text-[50px] text-white focus:outline-none">
                 ${states.navbar.open ? `<p class='ml-[5px] absolute top-[0px] left-1 text-[30px]'>X</p>` : `<img class='object-contain w-[60px] h-[50px]' src='public/burger-icon.png'/>`}
                </button>
            
                <ul id="mobile-menu-items" class="${states.navbar.open ? "block" : "hidden"} bg-gray-800 p-2 space-y-2 flex flex-col justify-center items-center">
                <li if-click='navbar-aboutClick' class="cursor-pointer block text-white">About</li>
                <li if-click='navbar-projectsClick' class="cursor-pointer block text-white">Projects</li>
                <li if-click='navbar-contactClick' class="cursor-pointer block text-white">Contact</li>
                <a 
                    href='prevReload-https://drive.google.com/file/d/1LCpzMEJshy-41bDaE8685Vd10mphbTui/view?usp=sharing' 
                    class="cursor-pointer block text-white"
                    target='_blank'
                    >
                    Resume
                </a>
                </ul>
            </div>
`
        }  
 `

}

export default Navbar