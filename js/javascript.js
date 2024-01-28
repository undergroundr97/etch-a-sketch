const container = document.querySelector('.container')

function makeDivs(num){
    let gridCell = ((600/num) - 2).toFixed(2);
    let box = num*num;

    while (box > 0) {
        let cells = document.createElement('div')
        cells.setAttribute('class', 'cells');
        cells.style.height = gridCell + 'px';
        cells.style.width = gridCell + 'px';
        cells.style.border = '1px solid black';
        container.appendChild(cells);
        box--;
    }
}

makeDivs(16);



let divSelector = document.querySelectorAll('.cells')
for (let i = 0; i < divSelector.length; i++){
divSelector[i].addEventListener('mouseover', function(e){
  e.target.setAttribute('class', 'cells1');
});
}
