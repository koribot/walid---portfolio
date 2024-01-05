import CmdDisplay from "../src/Components/CmdDisplay.js";
import { setScript, setState, states } from "../src/Kori/Kori.js";


// async function getData() {
//  const response = await fetch('https://ebextractor-v1.vercel.app/api/extract/using_keyword?q=slippers');
//  const data = await response.json();
//  return data;
// }


// setState(
//  'About',
//  {
//   data: []
//  }

// )


// setScript(
//  'About',
//  {
//   getData: async () => {
//    const d = await getData()
//    console.log(d.analysis_result.other_word_counts)
//    if (d) {
//     setState(
//      'About',
//      {
//       data: d.analysis_result.other_word_counts
//      }

//     )
//    }

//    console.log(states.About.data)
//   }
//  }
// )


export const About = () => {

 return `
   <div class="bg-gradient-to-r min-h-[100vh] from-[#232b2b] to-[#232b2b] p-8 rounded-md shadow-md p-8 rounded-md shadow-md w-full animate__animated animate__fadeIn">
     <h1 class="text-3xl font-bold mb-4 text-white">Hello</h1>
     <a href='prevReload-https://www.facebook.com' target='_blank'>Hello</a>
    <button >Click</button>
     <div class="mb-6">
       <h2 class="text-xl font-semibold mb-2 text-white">A Bit About Me</h2>
       <p class="text-gray-100">

        <ul class='flex flex-col'>
        <li>- I am an aspiring web developer</li>
        <li>- I love to build stuffs</li>
        </ul>

       </p>
     </div>

     <div class="mb-6">
       <h2 class="text-xl font-semibold mb-2 text-white">Our Team</h2>
       <ul class="list-disc list-inside text-gray-100">
         <li>John Doe - CEO</li>
         <li>Jane Smith - CTO</li>
         <li>Mark Johnson - Lead Developer</li>
       </ul>
     </div>

     <div class="mb-6">
       <h2 class="text-xl font-semibold mb-2 text-white">Contact Us</h2>
       <p class="text-gray-100">Email: info@example.com</p>
       <p class="text-gray-100">Phone: (123) 456-7890</p>
     </div>

     <div>
       <h2 class="text-xl font-semibold mb-2 text-white">About Walid Cawasa</h2>
       <p class="text-gray-100">My name is Walid Cawasa. I am passionate about web development and creating awesome applications.</p>
     </div>
     ${states.mode.mode === 'cmd' ? CmdDisplay() : ''}
   </div>
 `;
};

export default About;
