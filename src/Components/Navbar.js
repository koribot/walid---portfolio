import { Description } from "./Description.js"



export const Navbar = () => {


    return `
     <div class='p-[50px] text-center'>
      <h1 class='text-[50px] text-white'>
      ✨Welcome✨
      </h1>  
      <h1 class='text-[15px] text-[gray]'>
      ~~~This is only available for web not on mobile~~~
      </h1>
      ${Description()}   
     </div> 
 `

}

export default Navbar