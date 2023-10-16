const addButton = document.querySelectorAll('.add-amm');
const reduceButton = document.querySelectorAll('.reduce-amm');

const addAmm = (event) => {
    // Get Val 
    const boxElement = event.target.parentElement;
    var ammVal = parseInt(boxElement.querySelector('.item-amm').textContent, 10);
    ammVal += 1;
    boxElement.querySelector('.item-amm').textContent = ammVal;

}

const reduceAmm = (event) => {
    // Get Val 
    const boxElement = event.target.parentElement;
    var ammVal = parseInt(boxElement.querySelector('.item-amm').textContent, 10);
    ammVal -= 1;
    if(ammVal <= 0){
        ammVal = 0;
    }
    boxElement.querySelector('.item-amm').textContent = ammVal;

}

addButton.forEach( em =>{
    em.addEventListener('click', addAmm);
} )

reduceButton.forEach( em =>{
    em.addEventListener('click', reduceAmm);
} )