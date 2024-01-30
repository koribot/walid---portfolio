import app from "./app.js"
import About from "./Pages/About.js"
import NotFound from "./Pages/404.js";
import { states } from "./Kori/Kori.js";
import Projects from "./Pages/Projects.js";
import Certificates from "./Pages/Certificates.js";


export const routes = () => {
 const currentLocation = window.location.pathname
 let routes = {}
 if (states.mode.mode === 'cmd') {
  routes = {
   "/": app,
   "/about": About,
   "/projects": Projects,
   "/certificates": Certificates
  }
 } else {
  routes = {
   "/": app,
  }
 }

 return routes[currentLocation] ? routes[currentLocation] : NotFound

}

export default routes