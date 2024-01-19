


export const NotFound = () => {
  const underConstruction = ['/projects/eBextractor', '/projects/ebex-api', '/projects/koribotjs']
  // console.log(underConstruction.find('/projects/koribotjs'))

  const location = window.location.pathname

  return `
 <div class='flex bg-[#232b2b] items-center justify-center h-screen'>
  <div class="text-white text-center flex flex-col items-center justify-center ">
    <h1 class="text-4xl font-bold mb-4">404 - Not Found</h1>
    <p class="text-lg flex">The page <span class="text-red-500 font-bold mx-2">${location.substring(1)}</span> doesn't exist.</p>
    <p class='mt-[5px] flex text=[15px] gap-[5px]'>Go<a class='text-[green]'href='/'>Home</a>Instead</p>
    
  </div>
 </div>
 `

}

export default NotFound