const container__car = document.querySelector(".container__car");

const productsmais= document.querySelector('.products')

const iteems = localStorage.getItem("imorale");
const prontItems = JSON.parse(iteems)

console.log(prontItems)
console.log(prontItems.image)



function atualizar() {

    let result=''

    const criarP = document.createElement('div')
    criarP.setAttribute('classe','products')
   
 result = ` <img src="${prontItems.image}" alt="" class="product__img">
 <h2 class="prece__product">${prontItems.precos}</h2>`;


criarP.innerHTML=result
container__car.appendChild(criarP)
    
}

atualizar()