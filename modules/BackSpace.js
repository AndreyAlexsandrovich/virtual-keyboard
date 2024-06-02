export default function backSpace() { 
    const backSpaceKey = document.querySelector('[data-backspace]')

   document.addEventListener('keydown', function (event) { 
     if (event.code === "Backspace") {
        backSpaceKey.classList.add('key-bg')
     }
   })
   document.addEventListener('keyup', function (event) { 
    if (event.code === "Backspace") {
       backSpaceKey.classList.toggle('key-bg')
    }
  })
}