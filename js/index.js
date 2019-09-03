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



/*************************** EVENT 1 ***************************/
headerimg.addEventListener('mouseenter', e => {
    // headerimg.style.transform = 'scale(1.5)';
    // headerimg.style.transition = 'transform 0.5s';
    headerimg.style.transform = 'rotate(180deg)';
})

headerimg.addEventListener('mouseleave', e => {
    // headerimg.style.transform = 'scale(1.0)';
    // headerimg.style.transition = 'transform 0.5s';
    headerimg.style.transform = 'rotate(360deg)';
})

/*************************** EVENT 2 ***************************/
largesubtitle.addEventListener('wheel', e => {
    e.preventDefault();
    largesubtitle.style.transform = 'scale(2)';
})

/*************************** EVENT 3 ***************************/
changeColor.forEach(item => {
    window.addEventListener('resize', e => {
        item.style.color = 'red';
    })
})

/*************************** EVENT 4 ***************************/
window.addEventListener('scroll', e => {
    backcolor.style.background = '#FFEBCD';
    footercolor.style.background = 'white';
})

/*************************** EVENT 5 ***************************/
window.addEventListener('keydown', e => {
    header.style.background = '#000';
    title.style.color = 'white';
})

links.forEach(items => {
    window.addEventListener('keydown', e => {
        items.style.color = 'white';
    })
    
})

/*************************** EVENT 6 ***************************/
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
    backcolor.style.background = 'black';
    e.stopPropagation();
})

links.forEach(items => {
    e.preventDefault();
})

// const top = document.querySelector('body');
// const loading = document.createElement('div');
// loading.textContent = 'Loaded';
// top.prepend(loading);
// loading.style.background = 'red';

/*************************** EVENT 7 ***************************/
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

/*************************** EVENT 8 ***************************/
// window.addEventListener('load', e => {
//     window.alert('Loading...');
// })

/*************************** EVENT 9 ***************************/
title.addEventListener('mouseover', e => {
    title.style.transform = 'scale(1.5)';
})

/*************************** EVENT 10 ***************************/
const text = document.querySelector('header p');

text.addEventListener('select', message());
function message (e){
    const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
    window.alert(`You have selected: ${selection}`)
}