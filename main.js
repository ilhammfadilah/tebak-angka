var point           = document.getElementById('point');
var inputNumber     = document.querySelector('.inputNumber');
var hp              = document.getElementById('hp');
var alert           = document.querySelector('.alert');
var btn             = document.querySelector('.btnTebak');
const statusList    = [
    'Masukan Angka:',
    'Yahh Nomornya Kegedean, coba lagi!',
    'Yahh Nomornya Kekecilan, coba lagi!',
    'Yahh Nomornya Kegedean, GAME OVER',
    'Yahh Nomornya Kekecilan, GAME OVER',
];

var randomNumber = 0;
var playerScore = 0;
var tries = 0;

function init() {
    randomNumber = Math.floor(Math.random() * 10);
    point.innerHTML = playerScore;
    tries = 5;
    hp.innerHTML = tries;
    alert.style.display = 'none';
}


function check() {
    tries--;
    hp.innerHTML = tries;
    var playerInput = inputNumber.value;
    alert.style.display = 'block';
    if (playerInput == randomNumber) {
        if (tries > 0) {
            playerScore++;
        } else {
            alert.innerHTML = 'Game Over';
            btn.style.display = 'none';
        }
        init();
    } else if (playerInput < randomNumber) {
        if (tries > 0) {
            alert.innerHTML = statusList[2];
        } else {
            alert.innerHTML = statusList[4];
            btn.style.display = 'none';
        }
    } else if (playerInput > randomNumber) {
        if (tries > 0) {
            alert.innerHTML = statusList[1];
        } else {
            alert.innerHTML = statusList[3];
            btn.style.display = 'none';
        }
    }
}
