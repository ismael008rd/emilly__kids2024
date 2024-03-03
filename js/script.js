


  const swiper = new Swiper('.swiper', {
    direction: 'horizontal', // Direção do slider (horizontal)
    loop: true, // Loop infinito
    effect: 'carousel', // Efeito de carrossel
    grabCursor: true, // Cursor de agarrar ao passar os slides
    centeredSlides:true, // Centraliza os slides
    slidesPerView: 3,
     // Quantidade de slides visíveis por vez (ajuste conforme desejado)
     translateTo:{
      x:200,
      y:0
     },
    
    spaceBetween: 10, // Espaçamento entre os slides
    navigation: {
      nextEl: '.swiper-button-next', // Botão de próxima imagem
      prevEl: '.swiper-button-prev', // Botão de imagem anterior
    },

    breakpoints:{
      400:{
        slidesPerView:1,
        centeredSlides:'auto',
    },
        768:{
            slidesPerView:2,
            centeredSlides:'auto',
        },
        1152:{
           loop:true,
            slidesPerView:3,
            centeredSlides:'auto',
            spaceBetween:-64,
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

  const produtosimgs= document.querySelectorAll('.main_imgs ')


  // produtosimgs.forEach((elemento)=>{
  //   elemento.addEventListener('click',()=>{
  //     console.log(elemento.id)
  //   })
  // })

  const btn_adcionarCar=document.querySelectorAll('.btn__carrinho')

  let arrayInfo = []
  

  btn_adcionarCar.forEach((elemento)=>{
  elemento.addEventListener('click',()=>{

     

    function AdcionarElement(){
      const elementpro=elemento.parentElement.parentElement
      const imgprodutc =elementpro.querySelectorAll('img')[0].src
      const precoprodutc =elementpro.querySelectorAll('p')[0].innerText
      console.log(precoprodutc)
      console.log(imgprodutc)

      const produto = {
        id: (Math.floor(Math.random() * 99)),
        img: imgprodutc,
        preco: precoprodutc
        
    };

    console.log(produto.id)
    
    // Verificar se já existe algum carrinho no localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Adicionar o novo produto ao carrinho
    carrinho.push(produto);
    
    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));


    }
      

    AdcionarElement()
 
    console.log(arrayInfo)
  


   
  })
 

  })

 
