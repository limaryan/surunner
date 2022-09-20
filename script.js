const estevao = document.querySelector('.estevao');
const pipe = document.querySelector('.pipe');

const jump = () =>{
    estevao.classList.add('jump');

    setTimeout(()=>{

        estevao.classList.remove('jump');
         
    }, 500)
}

const loop = setInterval(() =>{
    console.log('loop');
    
    const pipeposi = pipe.offsetLeft;
    const estevaoposi = +window.getComputedStyle(estevao).bottom.replace('px','');

    console.log(estevaoposi);

    if (pipeposi < 131 && pipeposi > 0 && estevaoposi < 71) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposi}px`;

        estevao.style.animation = 'none';
        estevao.style.left = `${estevaoposi}px`;

        estevao.src = './img/sufalling.gif';
        clearInterval(loop);
    }

}, 10);


document.addEventListener('keydown',jump);