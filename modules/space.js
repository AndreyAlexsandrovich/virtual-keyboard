export default function spaceElement() {
    const spaceElement = document.querySelector('[data-space]')
    document.addEventListener('keydown', function (event) {
        if (event.code === "Space") {
            spaceElement.classList.add('key-bg')
        }
    })

    document.addEventListener('keyup', function (event) {
        if (event.code === "Space") {
            spaceElement.classList.toggle('key-bg')

        }
    })
}