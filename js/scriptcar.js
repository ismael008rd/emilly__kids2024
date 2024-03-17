 


const elements =JSON.parse(localStorage.getItem('cards')) || [];





let score =1
const minus= document.querySelectorAll('.products__quanti--minus')
const spanquanti= document.querySelector('.products__quanti--total')
const plusquanti=document.querySelectorAll('.products__quanti--plus')
const preco_product = document.querySelector('.prece__product')
const totalfinal = document.querySelector('.product__total--total')

const containe_card = document.querySelector('.cards__products')

console.log(elements)
  

       
const cardss= Array.from(elements)
console.log(cardss)



function DecreaseQuantity(span) {
  const quantitySpan = span.nextElementSibling;

  let valuecard=Number(span.parentElement.parentElement.parentElement.querySelector('.prece__product').innerText.replace('$',''))

  console.log(valuecard)
  let resultcard=span.parentElement.parentElement.parentElement.querySelector('.product__total--total')
  
  let quantity = parseInt(quantitySpan.textContent);

  if (quantity >= 1) {
      quantity--;
      quantitySpan.textContent = quantity<10?"0"+quantity: quantity;;
      resultcard.innerText=`$ ${quantity*valuecard}`
  }

  console.log('clicli')
}

function increaseQuantity(span) {
  const quantitySpan = span.previousElementSibling;
   let valuecard=Number(span.parentElement.parentElement.parentElement.querySelector('.prece__product').innerText.replace('$',''))
  let resultcard=span.parentElement.parentElement.parentElement.querySelector('.product__total--total')

  let quantity = parseInt(quantitySpan.textContent);
  quantity++;
  quantitySpan.textContent =quantity<10?"0"+quantity: quantity;
  resultcard.innerText=`$ ${quantity*valuecard}`
  
}

function DeletarCard(elementcard){
  const cardRemove=elementcard.parentElement.parentElement.parentElement
  const cardId=elementcard.parentElement.parentElement.parentElement.id
  console.log(cardId)
  

  const elementVazio = {imagem: 'img/204.jpg', preco: 'null', id: ''}

  const verele=elements.filter((element)=>{
    return element.id != cardId
  })
 

  cardRemove.remove()

  console.log(verele.length)

  if(verele ==''){
    console.log('fudeu')
    console.log(elementVazio)
    verele.push(elementVazio)
  

    location.reload()
    
    console.log(verele)
   }
   else {

    console.log('elemento já tem item adicionado')
    
    location.reload()
    
  
   }
  console.log(verele.length)
 
console.log(verele)
  
   
  localStorage.setItem('cards',JSON.stringify(verele))
 

  
}

  cardss.forEach((element)=>{

  
    console.log(element)

 

    const htmlcard= `
    <div class="products" id="${element.id}">
    <div class="products__item1">
      <img
        src="${element.imagem}"
        alt="imagens do produto"
        class="product__img"
      />
      <h2 class="prece__product"> ${element.preco}</h2>
    </div>

    <div class="products__items">
      <div class="products_quanti">
        <span class="products__quanti--minus" onclick="DecreaseQuantity(this)">-</span>
        <span class="products__quanti--total">01</span>
        <span class="products__quanti--plus" onclick="increaseQuantity(this)">+</span>

      </div>
      
      <div class="product__items--deletar">
          <span class='btn_delet' onclick='DeletarCard(this)'>X</span>
      </div>
    </div>
     
    <div class=".products__container--total">
      <div class="total">Total</div>
      <span class="product__total--total">${element.preco}</span>
    </div>
   
  </div>
    `

    containe_card.innerHTML+=htmlcard
   
    
   
})









