export default function capslock() { 
    const capsLock = document.querySelector('[data-capsLock]');

    document.addEventListener('keydown', function(event) { 
        if (event.code === "CapsLock") {
            capsLock.classList.add('key-bg')
        }
    })

    document.addEventListener('keyup', function(event) { 
        if (event.code === "CapsLock") {
            capsLock.classList.toggle('key-bg')
        }
    })
}