import CmdDisplay from "../Components/CmdDisplay.js";
import { states } from "../Kori/Kori.js";




export const Certificates = () => {

 return `
 <div class='bg-gradient-to-r min-h-[100vh] from-[#232b2b] to-[#232b2b] p-8 rounded-md shadow-md p-8 rounded-md shadow-md w-full animate__animated animate__fadeIn'>
   <div>
    <p class='text-white text-[20px] mb-[15px] italic'>Certificates</p>
   </div>
   <div>
    <div class='border border-gray-600 rounded p-[15px]'>
          <div class='text-white grid lg:flex gap-5'>
              <div class='flex flex-col justify-start items-center'>
                  <span class='hover:bg-gray-600 px-5 flex flex-col gap-[5px] rounded justify-center items-center'>
                    <img class='object-contain w-[400px] h-[200px]' src='public/ADUKASYON-CERTIFICATE.png'/>
                    <p>September 19, 2023</p>
                    <p class="italic text-lg">"ADUKASYON PH CERTIFICATE"</p>
                  </span>
                  <button if-click='normalDisplay-openModal' class=' mt-[15px] border px-[5px] hover:bg-gray-500'>View</button>
              </div>
          </div>
    </div>

     ${states.mode.mode === 'cmd' ? CmdDisplay() : ''}
   </div>
 </div>
 `;
};

export default Certificates;
