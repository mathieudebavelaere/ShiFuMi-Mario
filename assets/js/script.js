const pierre = document.getElementById('pierre');
const feuille = document.getElementById('feuille');
const ciseaux = document.getElementById('ciseaux');

const validation = document.querySelector('.valider');
const reset = document.querySelector('.reset');

console.log(pierre);
console.log(feuille);
console.log(ciseaux);
console.log(validation);
console.log(reset);
console.log('--------------------');

//------------------Selections----------------
pierre.addEventListener('click', () => {

    pierre.innerHTML = '0';
    feuille.innerHTML = '';
    ciseaux.innerHTML = '';
    pierre.classList.add('borderValide');
    pierre.classList.remove('border');
    feuille.classList.remove('borderValide');
    ciseaux.classList.remove('borderValide');
})

feuille.addEventListener('click', () => {
    feuille.innerHTML = '1';
    pierre.innerHTML = '';
    ciseaux.innerHTML = '';
    feuille.classList.add('borderValide');
    feuille.classList.remove('border');
    ciseaux.classList.remove('borderValide');
    pierre.classList.remove('borderValide');
})

ciseaux.addEventListener('click', () => {

    ciseaux.innerHTML = '2';
    feuille.innerHTML = '';
    pierre.innerHTML = '';
    ciseaux.classList.add('borderValide');
    ciseaux.classList.remove('border');
    pierre.classList.remove('borderValide');
    feuille.classList.remove('borderValide');
})

//---------------------Historique-------------------------------
let historique = document.getElementById('historique');
console.log(historique);

let resultP = document.querySelector('.resultP');
let resultF = document.querySelector('.resultF');
let resultC = document.querySelector('.resultC');

let resultP1 = document.querySelector('.resultP1');
let resultF1 = document.querySelector('.resultF1');
let resultC1 = document.querySelector('.resultC1');

//-----------------------ScoreGame-----------------------------
let player1 = 0;
let player2 = 0;
//----------------------TextWIN------------------------------
let win = document.getElementById('win');
//---------------------TextDawn------------------------------
let dawn = document.getElementById('dawn');
//--------------------TextLoose------------------------------
let loose = document.getElementById('loose');
//---------------------PeachWIN------------------------------
let peach = document.getElementById('peach');
//----------------------BrowerJrLoose------------------------
let browerJr = document.getElementById('browerJr');
//-----------------------Koopa--------------------------------
let koopa = document.getElementById('koopa');

//--------------------GAME'CLICK'-----------------------------

validation.addEventListener('click', () => {
    let computer = Math.floor(Math.random() * 3); // 0, 1 or 2

    console.log(computer);
    console.log(pierre.innerText);
    console.log(feuille.innerText);
    console.log(ciseaux.innerText);

    //pierre--------------------------

    if (pierre.innerText) {

        if ((pierre.innerText == 0 && computer == 2)) {
            setTimeout(() => {
                peach.style.bottom = "12vw";
            }, 0)
            setTimeout(() => {
                peach.style.bottom = "-35vw"
            }, 2500)
            setTimeout(() => {
                win.style.bottom = "12vw";
            }, 500)
            setTimeout(() => {
                win.style.bottom = "-35vw"
            }, 2500)

            //------------------Historique
            setTimeout(() => {
                resultP.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultC.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultF.style.opacity = "0%";
            }, 0)
            //------------------Historique
            //------------------HistoriqueIA
            setTimeout(() => {
                resultP1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultC1.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultF1.style.opacity = "0%";
            }, 0)
            //------------------HistoriqueIA
            player1 = player1 + 1;
            document.getElementById('player1').innerHTML = player1;

        } else if ((pierre.innerText == 0 && computer == 1)) {
            setTimeout(() => {
                browerJr.style.bottom = "20vw";
            }, 0)
            setTimeout(() => {
                browerJr.style.bottom = "-35vw"
            }, 2500)
            setTimeout(() => {
                loose.style.bottom = "10vw";
            }, 0)
            setTimeout(() => {
                loose.style.bottom = "-35vw"
            }, 2500)
            //------------------Historique
            setTimeout(() => {
                resultP.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultC.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultF.style.opacity = "0%";
            }, 0)
            //------------------Historique
            //------------------HistoriqueIA
            setTimeout(() => {
                resultP1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultC1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultF1.style.opacity = "100%";
            }, 0)
            //------------------HistoriqueIA
            player2 = player2 + 1;
            document.getElementById('player2').innerHTML = player2

        } else if ((pierre.innerText == 0 && computer == 0)) {
            setTimeout(() => {
                koopa.style.left = "40vw";
            }, 0)
            setTimeout(() => {
                koopa.style.left = "-40vw"
            }, 2500)
            setTimeout(() => {
                dawn.style.right = "29vw";
            }, 0)
            setTimeout(() => {
                dawn.style.right = "-50vw"
            }, 2500)
            //------------------Historique
            setTimeout(() => {
                resultP.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultC.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultF.style.opacity = "0%";
            }, 0)
            //------------------Historique
            //------------------HistoriqueIA
            setTimeout(() => {
                resultP1.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultC1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultF1.style.opacity = "0%";
            }, 0)
            //------------------HistoriqueIA
        }
        else alert('none P')
    }
})

//feuille--------------------------

validation.addEventListener('click', () => {
    var computer = Math.floor(Math.random() * 3); // 0, 1 or 2
    if (feuille.innerText) {

        if ((feuille.innerText == 1 && computer == 2)) {
            setTimeout(() => {
                browerJr.style.bottom = "20vw";
            }, 0)
            setTimeout(() => {
                browerJr.style.bottom = "-35vw"
            }, 2500)
            setTimeout(() => {
                loose.style.bottom = "10vw";
            }, 0)
            setTimeout(() => {
                loose.style.bottom = "-35vw"
            }, 2500)
            //------------------Historique
            setTimeout(() => {
                resultP.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultC.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultF.style.opacity = "100%";
            }, 0)
            //------------------Historique
            //------------------HistoriqueIA
            setTimeout(() => {
                resultP1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultC1.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultF1.style.opacity = "0%";
            }, 0)
            //------------------HistoriqueIA
            player2 = player2 + 1;
            document.getElementById('player2').innerHTML = player2
        } else if ((feuille.innerText == 1 && computer == 1)) {
            setTimeout(() => {
                koopa.style.left = "40vw";
            }, 0)
            setTimeout(() => {
                koopa.style.left = "-40vw"
            }, 2500)
            setTimeout(() => {
                dawn.style.right = "29vw";
            }, 0)
            setTimeout(() => {
                dawn.style.right = "-50vw"
            }, 2500)
            //------------------Historique
            setTimeout(() => {
                resultP.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultC.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultF.style.opacity = "100%";
            }, 0)
            //------------------Historique
            //------------------HistoriqueIA
            setTimeout(() => {
                resultP1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultC1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultF1.style.opacity = "100%";
            }, 0)
            //------------------HistoriqueIA
        } else if ((feuille.innerText == 1 && computer == 0)) {
            setTimeout(() => {
                peach.style.bottom = "12vw";
            }, 0)
            setTimeout(() => {
                peach.style.bottom = "-35vw"
            }, 2500)
            setTimeout(() => {
                win.style.bottom = "12vw";
            }, 500)
            setTimeout(() => {
                win.style.bottom = "-35vw"
            }, 2500)
            //------------------Historique
            setTimeout(() => {
                resultP.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultC.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultF.style.opacity = "100%";
            }, 0)
            //------------------Historique
            //------------------HistoriqueIA
            setTimeout(() => {
                resultP1.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultC1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultF1.style.opacity = "0%";
            }, 0)
            //------------------HistoriqueIA
            player1 = player1 + 1;
            document.getElementById('player1').innerHTML = player1
        }
        else alert('none P')
    }
})

//ciseaux--------------------------

validation.addEventListener('click', () => {
    var computer = Math.floor(Math.random() * 3); // 0, 1 or 2
    if (ciseaux.innerText) {

        if ((ciseaux.innerText == 2 && computer == 2)) {
            setTimeout(() => {
                koopa.style.left = "40vw";
            }, 0)
            setTimeout(() => {
                koopa.style.left = "-40vw"
            }, 2500)
            setTimeout(() => {
                dawn.style.right = "29vw";
            }, 0)
            setTimeout(() => {
                dawn.style.right = "-50vw"
            }, 2500)
            //------------------Historique
            setTimeout(() => {
                resultP.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultC.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultF.style.opacity = "0%";
            }, 0)
            //------------------Historique
            //------------------HistoriqueIA
            setTimeout(() => {
                resultP1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultC1.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultF1.style.opacity = "0%";
            }, 0)
            //------------------HistoriqueIA
        } else if ((ciseaux.innerText == 2 && computer == 1)) {
            setTimeout(() => {
                peach.style.bottom = "12vw";
            }, 0)
            setTimeout(() => {
                peach.style.bottom = "-35vw"
            }, 2500)
            setTimeout(() => {
                win.style.bottom = "12vw";
            }, 500)
            setTimeout(() => {
                win.style.bottom = "-35vw"
            }, 2500)
            //------------------Historique
            setTimeout(() => {
                resultP.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultC.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultF.style.opacity = "0%";
            }, 0)
            //------------------Historique
            //------------------HistoriqueIA
            setTimeout(() => {
                resultP1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultC1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultF1.style.opacity = "100%";
            }, 0)
            //------------------HistoriqueIA
            player1 = player1 + 1;
            document.getElementById('player1').innerHTML = player1
        } else if ((ciseaux.innerText == 2 && computer == 0)) {
            setTimeout(() => {
                browerJr.style.bottom = "20vw";
            }, 0)
            setTimeout(() => {
                browerJr.style.bottom = "-35vw"
            }, 2500)
            setTimeout(() => {
                loose.style.bottom = "10vw";
            }, 0)
            setTimeout(() => {
                loose.style.bottom = "-35vw"
            }, 2500)
            //------------------Historique
            setTimeout(() => {
                resultP.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultC.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultF.style.opacity = "0%";
            }, 0)
            //------------------Historique
            //------------------HistoriqueIA
            setTimeout(() => {
                resultP1.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultC1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultF1.style.opacity = "0%";
            }, 0)
            //------------------HistoriqueIA
            player2 = player2 + 1;
            document.getElementById('player2').innerHTML = player2
        }
        else alert('none P')
    }
})

//--------------------Historique--------


