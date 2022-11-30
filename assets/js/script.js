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


//---------------------MainSound-------------------------------


//----------------------------------------------------
let player = 0;
let ia = 0;

let score = document.querySelector('.score');

score.innerHTML = (player + ' - ' + ia);
//----------------------TextWIN------------------------------
let win = document.getElementById('win');
//----------------------TextDawn------------------------------
let dawn = document.getElementById('dawn');
//----------------------TextLoose------------------------------
let loose = document.getElementById('loose');
//----------------------PeachWIN------------------------------
let peach = document.getElementById('peach');
console.log(peach);
//----------------------BrowerJrLoose------------------------
let browerJr = document.getElementById('browerJr');
console.log(browerJr);
//-----------------------Koopa--------------------------------
let koopa = document.getElementById('koopa');
console.log(koopa);

validation.addEventListener('click', () => {
    let computer = Math.floor(Math.random() * 3); // 0, 1 or 2
    
    console.log(computer);
    console.log(pierre.innerText);
    console.log(feuille.innerText);
    console.log(ciseaux.innerText);

    //pierre--------------------------
    if (pierre.innerText) {

        if ((pierre.innerText == 0 && computer == 2)) {
            setTimeout(()=>{
            peach.style.bottom="12vw";},0)
            setTimeout(()=>{
                peach.style.bottom="-35vw"},2500)
                setTimeout(()=>{
                    win.style.bottom="12vw";},500)
                    setTimeout(()=>{
                        win.style.bottom="-35vw"},2500)
        } else if ((pierre.innerText == 0 && computer == 1)) {
            setTimeout(()=>{
                browerJr.style.bottom="20vw";},0)
                setTimeout(()=>{
                    browerJr.style.bottom="-35vw"},2500)
                    setTimeout(()=>{
                        loose.style.bottom="10vw";},0)
                        setTimeout(()=>{
                            loose.style.bottom="-35vw"},2500)
        } else if ((pierre.innerText == 0 && computer == 0)) {
            setTimeout(()=>{
                koopa.style.left="40vw";},0)
                setTimeout(()=>{
                    koopa.style.left="-40vw"},2500)
                    setTimeout(()=>{
                        dawn.style.right="29vw";},0)
                        setTimeout(()=>{
                            dawn.style.right="-50vw"},2500)
        }
        else alert('none P')
    }
})

validation.addEventListener('click', () => {
    var computer = Math.floor(Math.random() * 3); // 0, 1 or 2
    //feuille--------------------------
    if (feuille.innerText) {

        if ((feuille.innerText == 1 && computer == 2)) {
            setTimeout(()=>{
                browerJr.style.bottom="20vw";},0)
                setTimeout(()=>{
                    browerJr.style.bottom="-35vw"},2500)
                    setTimeout(()=>{
                        loose.style.bottom="10vw";},0)
                        setTimeout(()=>{
                            loose.style.bottom="-35vw"},2500)
        } else if ((feuille.innerText == 1 && computer == 1)) {
            setTimeout(()=>{
                koopa.style.left="40vw";},0)
                setTimeout(()=>{
                    koopa.style.left="-40vw"},2500)
                    setTimeout(()=>{
                        dawn.style.right="29vw";},0)
                        setTimeout(()=>{
                            dawn.style.right="-50vw"},2500)
        } else if ((feuille.innerText == 1 && computer == 0)) {
            setTimeout(()=>{
                peach.style.bottom="12vw";},0)
                setTimeout(()=>{
                    peach.style.bottom="-35vw"},2500)
                    setTimeout(()=>{
                        win.style.bottom="12vw";},500)
                        setTimeout(()=>{
                            win.style.bottom="-35vw"},2500)
        }
        else alert('none P')
    }
})

validation.addEventListener('click', () => {
    var computer = Math.floor(Math.random() * 3); // 0, 1 or 2
    //ciseaux--------------------------
    if (ciseaux.innerText) {

        if ((ciseaux.innerText == 2 && computer == 2)) {
            setTimeout(()=>{
                koopa.style.left="40vw";},0)
                setTimeout(()=>{
                    koopa.style.left="-40vw"},2500)
                    setTimeout(()=>{
                        dawn.style.right="29vw";},0)
                        setTimeout(()=>{
                            dawn.style.right="-50vw"},2500)
        } else if ((ciseaux.innerText == 2 && computer == 1)) {
            setTimeout(()=>{
                peach.style.bottom="12vw";},0)
                setTimeout(()=>{
                    peach.style.bottom="-35vw"},2500)
                    setTimeout(()=>{
                        win.style.bottom="12vw";},500)
                        setTimeout(()=>{
                            win.style.bottom="-35vw"},2500)
        } else if ((ciseaux.innerText == 2 && computer == 0)) {
            setTimeout(()=>{
                browerJr.style.bottom="20vw";},0)
                setTimeout(()=>{
                    browerJr.style.bottom="-35vw"},2500)
                    setTimeout(()=>{
                        loose.style.bottom="10vw";},0)
                        setTimeout(()=>{
                            loose.style.bottom="-35vw"},2500)
        }
        else alert('none P')
    }
})

    //--------------------Score
