window.addEventListener('DOMContentLoaded', () => {
    const sounds = document.querySelectorAll('.sounds');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');

    const colors = [
        '#60d394',
        ' #d36060',
        '#c060d3',
        '#d3d160',
        ' #6860d3',
        'lightblue'
    ];


    //lets go sound 
    pads.forEach((pad, index) => {
       pad.addEventListener('click', () => {
           sounds[index].currentTime = 0;
           sounds[index].play();
           createBuble(index);
       })
    });


    const createBuble = (index) => {
        const buble = document.createElement('div');
        visual.append(buble);
        buble.style.backgroundColor = colors[index];
        buble.style.animation = 'jump 1s ';
        buble.classList.add('buble');
        buble.addEventListener('animationend',() => {
            visual.removeChild(buble);
        });
    }
});