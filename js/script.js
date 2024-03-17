


  const swiper = new Swiper('.swiper', {
    direction: 'horizontal', // Direção do slider (horizontal)
    loop: true, // Loop infinito
    effect: 'carousel', // Efeito de carrossel
    grabCursor: true, // Cursor de agarrar ao passar os slides
    centeredSlides:true, // Centraliza os slides
    slidesPerView: 1,
     // Quantidade de slides visíveis por vez (ajuste conforme desejado)
     translateTo:{
      x:200,
      y:0
     },
    
    spaceBetween: 20, // Espaçamento entre os slides
    navigation: {
      nextEl: '.swiper-button-next', // Botão de próxima imagem
      prevEl: '.swiper-button-prev', // Botão de imagem anterior
    },

    breakpoints:{
      400:{
        slidesPerView:1,
        centeredSlides:'auto',
    },
        700:{
            slidesPerView:2,
            centeredSlides:'auto',
        },
        1120:{
           loop:true,
            slidesPerView:3,
            centeredSlides:'auto',
            // spaceBetween:-64,
        }
    }

  
 
  
  
  });


  const btnLinks= document.querySelectorAll('.btn__links')
  const menuvisu = document.querySelector('.logo__menu__resp')
  const menuHambu= document.querySelector('.hambu')
  const itemsmenu= document.querySelectorAll('.items')
  const toggle__menu= document.querySelector('.toogle__menu')
  let show=true

  toggle__menu.addEventListener('click',()=>{
    console.log('clicado toogle')
    
    document.body.style.overflow=show?'hidden':'initial'

    menuvisu.classList.toggle('on',show)
    show= !show
    
  })
 
  itemsmenu.forEach((e)=>{
   e.addEventListener('click',()=>{
    menuvisu.classList.remove('on')
    document.body.style.overflow='initial'
   })
  })

  

 
const btn__comprar = document.querySelectorAll('.btn__carrinho--comprar')

btn__comprar.forEach((elemento)=>{
elemento.addEventListener('click',()=>{
    alert('Em desenvolvimento ...')

  })


})


class Carrinho{
  principaldiv=null
  constructor(image,preco){
    this.imagen=image
    this.valor=preco
    this.divdestino = document.body
  }

  infor(){
    console.log("imagem" + this.imagen)
    console.log("valor" + this.valor)
  }
  
  Modelo(){
   

  }
}

const carro = new Carrinho('urltaltal',1200)

carro.infor()

function CarrinhoCompr(elemento, imagem , preco){
     elemento= new Carrinho(imagem,preco)
      elemento.infor()
    elemento.Modelo()
}


CarrinhoCompr('carro','','80')


const mainCard = document.querySelectorAll('.main_card')
const btn__carrinho = document.querySelectorAll('.btn__carrinho--adcionar')


let itemsCard=[
  // {imagem:imageCart, preco:precoCart, id:Math.floor(Math.random() * 100)}
]


btn__carrinho.forEach((elemento)=>{
  elemento.addEventListener('click',()=>{

    
  

    const imageCart = elemento.parentElement.parentElement.querySelector('img').src

    const precoCart =elemento.parentElement.parentElement.querySelector('p').innerText
    console.log(precoCart)
   
    
   
    
   
     itemsCard.push({imagem:imageCart, preco:precoCart, id:Math.floor(Math.random() * 100)})
     
     console.log(itemsCard)
    
    


   
   
    if(localStorage.hasOwnProperty('cards')){
      
      const elements = JSON.parse(localStorage.getItem('cards'))||[] 
        
      const elementosdif= elements.filter((ele)=>{
         return ele.id !==''
      })
      

  
      
        console.log(elements)
 
        elementosdif.push({imagem:imageCart, preco:precoCart, id:Math.floor(Math.random() * 100)})
       
         
      localStorage.setItem('cards',JSON.stringify(elementosdif))
  
 


    }
    else{ 
      console.log('não tem carrinho')
      console.log(itemsCard)
   
      localStorage.setItem('cards',JSON.stringify(itemsCard))


    }

    
 
     
  
  
    
    
  
  }) 
})

