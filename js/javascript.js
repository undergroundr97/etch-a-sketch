const container = document.querySelector('.container')

function makeDivs(num){
    let box = num*num
    for(let i = 0; i < box; i++){
        let cells = document.createElement('div')
        cells.setAttribute('class', 'cells')
        container.appendChild(cells);
    }
}

makeDivs(15);

const divSelector = document.querySelectorAll('.cells')
divSelector.addEventListener('mouseenter', () => {
    divSelector.setAttribute('class', 'cellshover')
});