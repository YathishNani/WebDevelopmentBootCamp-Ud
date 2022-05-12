const buttonP1 = document.querySelector('#p1B');
const buttonP2 = document.querySelector('#p2B');
const re = document.querySelector('#Reset');
const p1S = document.querySelector('#p1S');
const p2S = document.querySelector('#p2S');
const winningScoreSelect = document.querySelector("#playto");


let p1score = 0;
let p2score = 0;
let winningScore = 0;
let isGameOver = false;

    
buttonP1.addEventListener('click', function () {
    if (!isGameOver) {
        p1score += 1;
        if (p1score === winningScore) {
            isGameOver = true;
            p1S.classList.add('has-text-success');
            p2S.classList.add('has-text-danger');
            buttonP1.disabled = true;
            buttonP2.disabled = true;
        }
        p1S.textContent = p1score;
    }  
})
buttonP2.addEventListener('click', function () {
    if (!isGameOver) {
        p2score += 1;
        if (p2score === winningScore) {
            isGameOver = true;
            p2S.classList.add('has-text-success');
            p1S.classList.add('has-text-danger');
            buttonP1.disabled = true;
            buttonP2.disabled = true;
        
        }
        p2S.textContent = p2score;
    }  
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
    
})

re.addEventListener('click',reset)

function reset() {
        isGameOver = false;
        p1score = 0;
        p2score = 0;
        p1S.textContent = 0;
        p2S.textContent = 0;
        p1S.classList.remove('has-text-success','has-text-danger');
        p2S.classList.remove('has-text-danger','has-text-success');
        buttonP1.disabled = false;
        buttonP2.disabled = false;
}

