const explosionSound = new Audio('explosion.mp3')
const burningSound = new Audio('burning.mp3')
const showExplosion = () => document.querySelector('.explosion.mp3')
const bomba = document.querySelector('.bomb-image')
const explosion = document.querySelector('.rope-div')
const ropeDiv = document.querySelector('.rope-div')
bomba.addEventListener('click', function(){
    ropeDiv.classList.add('active')
    setTimeout(() => {
       showExplosion()
       burningSound.play()
       explosionSound.play() 
    }, 1000);
})
