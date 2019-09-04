const headerimg = document.querySelector('header img');
const backcolor = document.querySelector('body');
const footercolor = document.querySelector('footer');
const largesubtitle = document.querySelector('header h2');
const header = document.querySelector('header');
const links = document.querySelectorAll('nav a');
const title = document.querySelector('h1');
const btn = document.querySelectorAll('.btn');
const changeColor = document.querySelectorAll('h4');
const images = document.querySelectorAll('img')



/*************************** EVENT 1: MOUSEENTER AND MOUSELEAVE ***************************/
headerimg.addEventListener('mouseenter', e => {
    headerimg.style.transform = 'rotate(180deg)';
})

headerimg.addEventListener('mouseleave', e => {
    headerimg.style.transform = 'rotate(360deg)';
})

/*************************** EVENT 2: WHEEL ***************************/
largesubtitle.addEventListener('wheel', e => {
    e.preventDefault();
    largesubtitle.style.transform = 'scale(2)';
})

/*************************** EVENT 3: RESIZE ***************************/
changeColor.forEach(item => {
    window.addEventListener('resize', e => {
        item.style.color = 'red';
    })
})

/*************************** EVENT 4: SCROLL ***************************/
window.addEventListener('scroll', e => {
    backcolor.style.background = '#FFEBCD';
    footercolor.style.background = 'white';
})

/*************************** EVENT 5: KEYDOWN ***************************/
window.addEventListener('keydown', e => {
    header.style.background = '#000';
    title.style.color = 'white';
})

links.forEach(items => {
    window.addEventListener('keydown', e => {
        items.style.color = 'white';
    })
    
})

/*************************** EVENT 6: DBLCLICK AND CLICK ***************************/
// INCLUDES STOP PROPAGATION AND PREVENT DEFAULT
btn.forEach(items => {
    items.addEventListener('dblclick', e => {
        items.style.color = 'red';
        items.style.background = 'white';
    })

    items.addEventListener('click', e =>{
        items.style.border = '2px solid black';
        e.stopPropagation();
    })
})

backcolor.addEventListener('click', e => {
    backcolor.style.background = 'grey';
    e.stopPropagation();
})

links.forEach(items => {
    items.addEventListener('click', e => {
        e.preventDefault();
    })
})

/*************************** EVENT 7: DRAG AND DRAGEND ***************************/
images.forEach(items => {
    items.addEventListener('drag', e => {
        items.style.border = '5px solid red';
    })
})

images.forEach(items => {
    items.addEventListener('dragend', e => {
        items.style.border = 'none';
    })
})

/*************************** EVENT 8: LOAD ***************************/
window.addEventListener('load', e => {
    window.alert('Loading...');
})

/*************************** EVENT 9: MOUSEOVER ***************************/
title.addEventListener('mouseover', e => {
    title.style.transform = 'scale(1.5)';
})

/*************************** EVENT 10: COPY ***************************/
const text = document.querySelectorAll('p');

text.forEach(items => {
    items.addEventListener('copy', e => {
        window.alert('Copied to Clipboard')
    })
})