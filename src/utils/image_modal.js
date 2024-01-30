import { setScript } from '../Kori/Kori.js'
import render from '../Kori/render.js'
import '../styles/image_modal.css'
import processHTML from './../Kori/processHTML';



setScript(
 "image_modal",
 {
  closeModal: () => {
   close_image_modal()
  }

 }
)




export function image_modal(src, w = 600, h = 500) {

 const check = document.getElementById('image_modal')

 if (check === null) {
  const modal = document.createElement('div')
  modal.id = 'image_modal'


  const modalUI = `
   <div class="modal-container p-[50px] lg:p-0">
     <div class="relative bg-white p-8 rounded shadow-md ">
       <p if-click='image_modal-closeModal' class='absolute top-0 right-5 text-[30px] cursor-pointer'>X</p>
         <div>
          <img class='w-full lg:w-[${w}px] lg:h-[${h}px] object-contain ' src=${src}/>
         </div>
     </div>
   </div>
  
  `

  modal.appendChild(render(processHTML(modalUI)))

  document.body.appendChild(modal)
 }



 // need to return something so it wont be undefined on the UI
 return ''
}

export function close_image_modal() {
 const image_modal = document.getElementById('image_modal')
 document.body.removeChild(image_modal)

 return ''
}