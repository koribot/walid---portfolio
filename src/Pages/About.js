import CmdDisplay from "../Components/CmdDisplay.js";
import { setScript, setState, states } from "../Kori/Kori.js";
import '../styles/About.css'

const path = import.meta.url.replace('file://', '').split('/');
path.pop(); // Remove the filename
const basePath = path.join('/');

// async function getData() {
//  const response = await fetch('https://ebextractor-v1.vercel.app/api/extract/using_keyword?q=slippers');
//  const data = await response.json();
//  return data;
// }
// setState('About', {
//   typeWriterValue: '',
// });

// const typeWriter = (callback) => {
//   const str = '|~Hello';
//   let i = 0;
//   const type = () => {
//     if (i < str.length) {
//       const currentChar = str.charAt(i);

//       callback(str.slice(2, i + 1) + '|');
//       i++;
//       if (i === str.length) {
//         setTimeout(() => {
//           i = 0
//           type()
//         }, 500);
//       } else {

//         setTimeout(type, 300);
//       }

//     }

//   };

//   type();
// };

// const updateState = (char) => {
//   setState('About', {
//     typeWriterValue: char,
//   });
// };


// typeWriter(updateState);




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
      <div class='flex mb-5'>
        <div class="typewriter">
            <span>H</span>
            <span>e</span>
            <span>l</span>
            <span>l</span>
            <span>o</span>
        </div>
      </div>

     <div class="mb-6">
       <h2 class="text-xl font-semibold mb-2 text-white">A Bit About Me</h2>
       <p class="text-gray-100">
        <ul class='flex flex-col text-white'>
          <li>- I am an aspiring web developer</li>
          <li>- I love to build stuffs</li>
        </ul>
       </p>
     </div>


     <div class="mb-6">
       <h2 class="text-xl font-semibold mb-2 text-white">Tech Stack</h2>
       <p class="text-gray-100">
        <ul class='flex  text-white gap-5 mt-5'>
          <li class='flex items-center'><img class='w-[50px] h-[50px]' src="public/html.png"/></li>
          <li class='flex items-center'><img class='w-[50px] h-[50px]' src="public/tailwind.png"/></li>
          <li class='flex items-center'><img class='w-[50px] ' src="public/css.png"/></li>
          <li class='flex items-center'><img class='rounded w-[50px] h-[50px]' src="public/jscript.png"/></li>
          <li class='flex items-center'><img class='rounded w-[50px] h-[50px]' src="public/react.png"/></li>
          <li class='flex items-center'><img class='rounded w-[50px] h-[50px]' src="public/nextjs.png"/></li>
        </ul>
       </p>
     </div>

     <div class="mb-6 text-white">
       <h2 class="text-xl font-semibold mb-2 text-white">Contacts</h2>
       <p class="text-gray-100">Email: w.cawasa@gmail.com</p>
       <p>
        Facebook: <a class='ml-1' href='prevReload-https://www.facebook.com/wcawasa' target='_blank'> @wcawasa</a>
       </p>
       <p>
        Github: <a class='ml-1' href='prevReload-https://github.com/koribot' target='_blank'> @koribot</a>
       </p>
     </div>

    
     ${states.mode.mode === 'cmd' ? CmdDisplay() : ''}
   </div>
 `;
};

export default About;
