//смещение от левого края
let smesh = 0;
const slider = document.querySelector('.six_block__img');

document.querySelector('.six_block__images').addEventListener('click', function(){
    smesh = smesh + 1626;
    if (smesh > 4000){
        smesh = 0;
    }
    slider.style.left = -smesh + 'px';
})
