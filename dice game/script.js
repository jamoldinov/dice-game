const roll = document.getElementById("btn--roll")
const diceEl = document.querySelector(".dice")
const current0 = document.querySelector('#current-0')
const current1 = document.querySelector('#current-1')
const holdBtn = document.querySelector('.btn--hold')
const newBtn = document.querySelector('.btn--new')


let curentScore = 0
let activeplayer = 0
let totalScore = [0,0]
let gameOver = true

diceEl.style.display = "none"





roll.addEventListener("click", (e) => {
   if(gameOver) {
    diceEl.style.display = "block"
    const randomImg = Math.floor(Math.random()*6 + 1)
    // console.log(randomImg);
    diceEl.src = `dice-${randomImg}.png`
    curentScore += randomImg
    if(randomImg > 1){
        document.getElementById(`current--${activeplayer}`).textContent = curentScore
    }else {
        document.getElementById(`current--${activeplayer}`).textContent = 0
        activeplayer = activeplayer == 0 ? 1 : 0
        curentScore = 0
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')
    }
   }

})

holdBtn.addEventListener('click', (e) => {
if(gameOver){
    totalScore[activeplayer] += curentScore
document.querySelector(`#score--${activeplayer}`).textContent = totalScore[activeplayer]
if(totalScore[activeplayer] >=20) {
document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
gameOver = false
    // document.getElementById(`${activeplayer}`).textContent = curentScore
}else {
    document.getElementById(`current--${activeplayer}`).textContent = 0
        activeplayer = activeplayer == 0 ? 1 : 0
        curentScore = 0
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')
}
}
})
// newBtn.addEventListener('click', ()=> {
//     document.getElementById(`current--${activeplayer}`).textContent = 0
//     document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner')
//     document.querySelector(`#score--${activeplayer}`).textContent = 0
//     curentScore = 0
// activeplayer = 0
// totalScore = [0,0]
// gameOver = true
// })


newBtn.addEventListener('click', () => {
    window.location.reload()
})