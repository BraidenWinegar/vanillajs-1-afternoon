

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');
console.log('hit')

function setCard(){
    const card = document.getElementById(idInput.value)
    card.style.color = colorInput.value;
    console.log(card)
}