
let randomNumber1 = Math.floor(Math.random() * 6) + 1

let randomDiceImage = 'dice' + randomNumber1 + '.png' //dice2.png

let randomImageSource = 'img/' + randomDiceImage //img/dice2.png

let image1 = document.querySelectorAll('img')[0]

image1.setAttribute('src', randomImageSource)

let randomNumber2 = Math.floor(Math.random() * 6) +1

let randomImageSource2 = 'img/dice' + randomNumber2 +'.png'

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2)

if(randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🏆 Jogador 1 Ganhou'
}else if(randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = '🏆 Jogador 2 Gnahou'
} else {
    document.querySelector('h1').innerHTML = 'empate'
}

const btn = document.getElementById("btnJogar");

    btn.addEventListener("click", function () {
    location.reload(); // Atualiza a página
});
        

  
