export default function shiftKey(){ 
    const shiftRElement = document.querySelector('[data-shift-right]')
    const shiftLElement = document.querySelector('[data-shift-left]')
    
    document.addEventListener('keydown', function(event) {
        if (event.code === 'ShiftRight') {
            shiftRElement.classList.add('key-bg');
        } 
    });
    
    document.addEventListener('keyup', function(event) {
        if (event.code === 'ShiftRight') {
            shiftRElement.classList.toggle('key-bg');
        } 
    });

    document.addEventListener('keydown', function(event) {
        if (event.code === 'ShiftLeft') {
            shiftLElement.classList.add('key-bg');
        } 
    });
    
    document.addEventListener('keyup', function(event) {
        if (event.code === 'ShiftLeft') {
            shiftLElement.classList.toggle('key-bg');
        } 
    });
}


