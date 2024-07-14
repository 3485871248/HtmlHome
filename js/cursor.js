const cursor = document.getElementById('cursor');

function handleMouseMove(event) {
    let x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    let y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;

    let cursorWidth = cursor.offsetWidth / 2.2;
    let cursorHeight = cursor.offsetHeight / 2.2;

    let left = x - cursorWidth;
    let top = y - cursorHeight;

    cursor.style.left = `${left}px`;
    cursor.style.top = `${top}px`;
}

document.addEventListener('mousemove', handleMouseMove);
