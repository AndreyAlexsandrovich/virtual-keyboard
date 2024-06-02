export default function altElement() {
    const altRElement = document.querySelector('[data-alt-right]')
    document.addEventListener('keydown', function (event) {
        if (event.code === "AltRight") {
            altRElement.classList.add('key-bg')
        }
    })

    document.addEventListener('keyup', function (event) {
        if (event.code === "AltRight") {
            altRElement.classList.toggle('key-bg')

        }
    })
}