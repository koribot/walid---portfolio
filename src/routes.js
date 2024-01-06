import app from "./app.js"
import About from "./Pages/About.js"
import NotFound from "./Pages/404.js";


export const routes = () => {
 const currentLocation = window.location.pathname
 const routes = {
  "/": app,
  "/about": About
 }
 return routes[currentLocation] ? routes[currentLocation] : NotFound

}

export default routes