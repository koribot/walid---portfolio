import Kori, { router } from "./Kori.js"


function isValidTagName(tagName) {
  const tagPattern = /^[a-zA-Z][a-zA-Z0-9-]*$/;

  return tagPattern.test(tagName);
}

function render_element({ tagName, attribs, children }) {
  if (isValidTagName(tagName)) {
    const element = document.createElement(tagName)
    if (attribs) {
      for (const [key, value] of Object.entries(attribs)) {
        if (key === 'if-click') {
          element.addEventListener('click', Kori.scripts[value.split('-')[0]][value.split('-')[1]])
        }
        if (key === 'if-change') {
          element.addEventListener('input', (event) => {
            const scriptFunction = Kori.scripts[value.split('-')[0]][value.split('-')[1]];

            if (event.target.value !== '<img src=x onerror=alert("Malicious Script")>') {
              if (typeof scriptFunction === 'function') {
                scriptFunction(event);
              } else {
                console.error('Invalid script function:', scriptFunction);
              }
            } else {
              scriptFunction("");
            }

          });

        }
        if (key === 'href') {
          element.addEventListener('click', (event) => {

            const hrefValue = element.getAttribute('href');
            if (hrefValue) {
              event.preventDefault(); // Prevent the default behavior of the link

              if (hrefValue.split("-")[0] === 'prevReload' && hrefValue.split("-")[1].length > 0) {
                if (event.target.target === '_blank') {
                  window.open(hrefValue.split('-')[1], "_blank");
                } else {

                  window.location.assign(hrefValue.split('-')[1]);
                }
              } else {

                router(event, hrefValue)
              }
            }
          })
        }
        if (key === 'if-focus') {
          element.addEventListener('focus', Kori.scripts[value.split('-')[0]][value.split('-')[1]])
        }
        if (key === 'if-blur') {
          element.addEventListener('blur', Kori.scripts[value.split('-')[0]][value.split('-')[1]])
        }
        if (key === 'if-submit') {
          element.addEventListener('submit', Kori.scripts[value.split('-')[0]][value.split('-')[1]])
        }


        element.setAttribute(key, value)
      }
    }

    if (children) {
      for (const child of children) {
        const ch = render(child)
        element.appendChild(ch)
      }

    }

    return element
  }
}




const render = (vNode) => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  return render_element(vNode);
}


export default render;
