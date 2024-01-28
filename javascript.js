
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
    let divSelector = document.querySelectorAll('.cells')
for (let i = 0; i < divSelector.length; i++){
divSelector[i].addEventListener('mouseover',function(e){
  e.target.style.backgroundColor = 'aqua';
});
function getRandomColor(){
  let letters = '0123456789F';
  let color = '#';
  for (let i = 0; i < 6;i++){
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

}

}

function getRandomColor(){
  let letters = '0123456789F';
  let color = '#';
  for (let i = 0; i < 6;i++){
    color += letters[Math.floor(Math.random() * 16)]
  }
  return
}


const header = document.querySelector('header');
header.setAttribute('class', 'header');
const buttonInp = document.createElement('button');
header.appendChild(buttonInp);
buttonInp.textContent = "CLEAR THE GRID AND SELECT TILES!";
buttonInp.setAttribute('class', 'btnAsk');
buttonInp.addEventListener('click', clearGrid);
const groupButtons = document.createElement('div');
header.appendChild(groupButtons)
groupButtons.setAttribute('class', 'btnGroup');
const btn30T = document.createElement('button');
groupButtons.appendChild(btn30T);
btn30T.textContent = "30 TILES!";
btn30T.setAttribute('class', 'btnTiles');
const btn50T = document.createElement('button');
groupButtons.appendChild(btn50T);
btn50T.textContent = "50 TILES!";
btn50T.setAttribute('class', 'btnTiles');
const btn70T = document.createElement('button');
groupButtons.appendChild(btn70T);
btn70T.textContent = "70 TILES!";
btn70T.setAttribute('class', 'btnTiles');

const rainbownTitle = document.querySelectorAll('span');
Array.from(getRandomColor)
const colorsTitle = ['red', 'blue', 'green', 'yellow', 'purple', 'indigo', 'purple', 'yellow', 'green', 'blue', 'red'];
rainbownTitle.forEach((item, index) => {
  item.style.color = colorsTitle[index];
});

btn50T.addEventListener('click', ()=>{
  let newGridSize = "50";
  
  if (newGridSize >= 1 && newGridSize <= 100){
    while(container.hasChildNodes()){
      container.removeChild(container.lastChild);
    }
    makeDivs(newGridSize);
  }  else
    return
})

btn30T.addEventListener('click', () => {
  let newGridSize = "30";
  
  if (newGridSize >= 1 && newGridSize <= 100){
    while(container.hasChildNodes()){
      container.removeChild(container.lastChild);
    }
    makeDivs(newGridSize);
  }  else
    return
})

btn70T.addEventListener('click', () => {
    let newGridSize = "70";
  
    if (newGridSize >= 1 && newGridSize <= 100){
      while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
      }
      makeDivs(newGridSize);
    }  else
      return
  
});

function clearGrid (){
  let newGridSize = prompt('How many tiles?');

  if (newGridSize >= 1 && newGridSize <= 120){
    while(container.hasChildNodes()){
      container.removeChild(container.lastChild);
    }
    makeDivs(newGridSize);
  }  else {
      alert ('Only a number between 1 and 100!')
      clearGrid();
  }
}


makeDivs(16);