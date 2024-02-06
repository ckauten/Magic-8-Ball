document.querySelector('.shake').addEventListener('click', shake)
document.querySelector('.reset').addEventListener('click', reset)

function reset(){
    location.reload()
}


const responses = [
    'Most Certainly',
    'H-H-HELL NAH',
    'Indubitably',
    'Quite Possibly Not',
    'Nope',
    'Unlikley',
    "Absolutely",
    "It Could Happen",
    'Don\'t ask me',
    'YES',
    '1000 TIMES OVER YES QUEEN',
    'Potentially'
]


function generateResponse(){
    let random = responses[(Math.floor(Math.random()*responses.length))];
    return random
}
let randomResponse = generateResponse()

function shake(){
    document.querySelector('#placeholder').style.display = 'none'
    document.querySelector('#textFill').style.display = 'flex'
    document.querySelector('#textFill').innerText = randomResponse
}