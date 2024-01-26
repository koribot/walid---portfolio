import render from './Kori/render.js';
import mount from './Kori/mount.js';
import diff from './Kori/diff.js';
import processHTML from './Kori/processHTML.js';
import Kori, { router, setState } from './Kori/Kori.js';
import routes from './routes.js';
import './styles/Index.css'





const createVirtualApp = () => processHTML(
  routes()() // routes returns a component(function) that needs to be called '()' so processHTML(htmlString) can process it
)



let virtualApp = createVirtualApp(0); // A virtual App/DOM Tree
const realApp = render(virtualApp); // A real DOM Tree
let $rootEl = mount(realApp, document.getElementById('kori-root')); // Mount the Real DOM tree to root



// window.addEventListener('resize', function (e) {
//   if (window.innerWidth > 700) {
//     var currentMode = window.localStorage.getItem('mode');
//     if (currentMode) {
//       window.localStorage.setItem('mode', currentMode)
//       window.localStorage.setItem('window', 'pc')
//       setState(
//         'mode',
//         {
//           mode: currentMode,
//           windowSize: 'pc'
//         }
//       )
//     }



//   } else {
//     var currentMode = window.localStorage.getItem('mode');
//     if (currentMode) {
//       window.localStorage.setItem('mode', currentMode)
//       window.localStorage.setItem('window', 'phone')
//       setState(
//         'mode',
//         {
//           mode: "normal",
//           windowSize: 'phone'
//         }
//       )
//     }

//   }

// });


// Define a media query (e.g., for screens larger than 768px)
const mediaQuery = window.matchMedia('(min-width: 700px)');

// Function to handle the changes in screen size
export function handleScreenSizeChange(event) {
  if (event.matches) {
    const currentMode = window.localStorage.getItem('mode');
    if (currentMode) {
      window.localStorage.setItem('mode', currentMode)
      window.localStorage.setItem('window', 'pc')
      setState(
        'mode',
        {
          mode: currentMode,
          windowSize: 'pc'
        }
      )
    } else {
      window.localStorage.setItem('mode', 'cmd')
      window.localStorage.setItem('window', 'pc')
    }

  } else {
    window.localStorage.setItem('mode', 'normal')
    window.localStorage.setItem('window', 'phone')
    setState(
      'mode',
      {
        mode: "normal",
        windowSize: 'phone'
      }
    )

  }
}

mediaQuery.addEventListener('change', handleScreenSizeChange);

handleScreenSizeChange(mediaQuery);

// Acts as a renderer of the virtualApp when state changes, this is triggred everytime you use setState function or using router
Kori.track.start = async () => {
  const vNewApp = await createVirtualApp();
  const patch = diff(await virtualApp, await vNewApp);
  $rootEl = patch($rootEl);
  virtualApp = vNewApp;
}






