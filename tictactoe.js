const gameBoard = document.getElementById('game-board')
let turn = 1;
const current = document.getElementById('current')
function checkTurn(){
if (turn % 2 == 0) {
    current.innerHTML = 'O\'s turn'
}
if (turn % 2 !== 0) {
    current.innerHTML = 'X\'s turn'
}
}
let result = [
    [0,0,0],
    [0,0,0],
    [0,0,0]]
const first = document.getElementById('first')
first.addEventListener('click', addfirst)
function addfirst() {
    if (result[0][0] !== 0) {return}
const p = document.createElement('p')
if (turn % 2 !== 0)  {p.innerText = 'x'
result[0][0] = 'x'}
else {p.innerText = 'o'
result[0][0] = 'o'}
first.appendChild(p)
first.classList.add('text')
turn++
checkWin()
checkTurn()
}

const second = document.getElementById('second')
second.addEventListener('click', addsecond)
function addsecond() {
    if (result[0][1] !== 0) {return}
    const p = document.createElement('p')
    if (turn % 2 !== 0)  {p.innerText = 'x'
    result[0][1] = 'x'}
    else {p.innerText = 'o'
    result[0][1] = 'o'}
    second.appendChild(p)
    second.classList.add('text')
    turn++
    checkWin()
    checkTurn()
}

const third = document.getElementById('third')
third.addEventListener('click', addthird)
function addthird() {
    if (result[0][2] !== 0) {return}
    const p = document.createElement('p')
    if (turn % 2 !== 0)  {p.innerText = 'x'
    result[0][2] = 'x'}
    else {p.innerText = 'o'
    result[0][2] = 'o'}
    third.appendChild(p)
    third.classList.add('text')
    turn++
    checkWin()
    checkTurn()
}

const fourth = document.getElementById('fourth')
fourth.addEventListener('click', addfourth)
function addfourth() {
    if (result[1][0] !== 0) {return}
    const p = document.createElement('p')
    if (turn % 2 !== 0)  {p.innerText = 'x'
    result[1][0] = 'x'}
    else {p.innerText = 'o'
    result[1][0] = 'o'}
    fourth.appendChild(p)
    fourth.classList.add('text')
    turn++
    checkWin()
    checkTurn()
}

const fith = document.getElementById('fith')
fith.addEventListener('click', addfith)
function addfith() {
    if (result[1][1] !== 0) {return}
    const p = document.createElement('p')
    if (turn % 2 !== 0)  {p.innerText = 'x'
    result[1][1] = 'x'}
    else {p.innerText = 'o'
    result[1][1] = 'o'}
    fith.appendChild(p)
    fith.classList.add('text')
    turn++
    checkWin()
    checkTurn()
}

const sixth = document.getElementById('sixth')
sixth.addEventListener('click', addsixth)
function addsixth() {
    if (result[1][2] !== 0) {return}
    const p = document.createElement('p')
    if (turn % 2 !== 0)  {p.innerText = 'x'
    result[1][2] = 'x'}
    else {p.innerText = 'o'
    result[1][2] = 'o'}
    sixth.appendChild(p)
    sixth.classList.add('text')
    turn++
    checkWin()
    checkTurn()
}

const seventh = document.getElementById('seventh')
seventh.addEventListener('click', addseventh)
function addseventh() {
    if (result[2][0] !== 0) {return}
    const p = document.createElement('p')
    if (turn % 2 !== 0)  {p.innerText = 'x'
    result[2][0] = 'x'}
    else {p.innerText = 'o'
    result[2][0] = 'o'}
    seventh.appendChild(p)
    seventh.classList.add('text')
    turn++
    checkWin()
    checkTurn()
}
const eighth = document.getElementById('eighth')
eighth.addEventListener('click', addeighth)
function addeighth() {
    if (result[2][1] !== 0) {return}
    const p = document.createElement('p')
    if (turn % 2 !== 0)  {p.innerText = 'x'
    result[2][1] = 'x'}
    else {p.innerText = 'o'
    result[2][1] = 'o'}
    eighth.appendChild(p)
    eighth.classList.add('text')
    turn++
    checkWin()
    checkTurn()
}

const ninth = document.getElementById('ninth')
ninth.addEventListener('click', addninth)
function addninth() {
    if (result[2][2] !== 0) {return}
    const p = document.createElement('p')
    if (turn % 2 !== 0)  {p.innerText = 'x'
    result[2][2] = 'x'}
    else {p.innerText = 'o'
    result[2][2] = 'o'}
    ninth.appendChild(p)
    ninth.classList.add('text')
    turn++
    checkWin()
    checkTurn()
}
function checkWin() {
    if (result[0][0] == 'x' && result[0][1] == 'x' && result[0][2] == 'x' || result[1][0] == 'x' && result[1][1] == 'x' && result[1][2] == 'x' || result[2][0] == 'x' && result[2][1] == 'x' && result[2][2] == 'x' || result[0][0] == 'x' && result[1][0] == 'x' && result[2][0] == 'x' || result[0][1] == 'x' && result[1][1] == 'x' && result[2][1] == 'x' || result[0][2] == 'x' && result[1][2] == 'x' && result[2][2] == 'x' || result[0][0] == 'x' && result[1][1] == 'x' && result[2][2] == 'x' || result[0][2] == 'x' && result[1][1] == 'x' && result[2][0] == 'x') {
        if(confirm('X won! Click OK to play again.')){
            window.location.reload();  
        }
    }

if (result[0][0] !== 0 && result[0][1] !== 0 && result[0][2] !== 0 && result[1][0] !== 0 && result[1][1] !== 0 && result[1][2] !== 0 && result[2][0] !== 0 && result[2][1] !== 0 && result[2][2] !== 0) {
    if(confirm('Draw! Click OK to play again.')){
        window.location.reload();  
    }}

if (result[0][0] == 'o' && result[0][1] == 'o' && result[0][2] == 'o' || result[1][0] == 'o' && result[1][1] == 'o' && result[1][2] == 'o' || result[2][0] == 'o' && result[2][1] == 'o' && result[2][2] == 'o' || result[0][0] == 'o' && result[1][0] == 'o' && result[2][0] == 'o' || result[0][1] == 'o' && result[1][1] == 'o' && result[2][1] == 'o' || result[0][2] == 'o' && result[1][2] == 'o' && result[2][2] == 'o' || result[0][0] == 'o' && result[1][1] == 'o' && result[2][2] == 'o' || result[0][2] == 'o' && result[1][1] == 'o' && result[2][0] == 'o') {
    if(confirm('O won! Click OK to play again.')){
        window.location.reload();  
    }
}
}
