
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal', // Direção do slider (horizontal)
    loop: true, // Loop infinito
    effect: 'carousel', // Efeito de carrossel
    grabCursor: true, // Cursor de agarrar ao passar os slides
    centeredSlides: true, // Centraliza os slides
    slidesPerView: 'auto', // Quantidade de slides visíveis por vez (ajuste conforme desejado)
    spaceBetween: 50, // Espaçamento entre os slides
    navigation: {
      nextEl: '.swiper-button-next', // Botão de próxima imagem
      prevEl: '.swiper-button-prev', // Botão de imagem anterior
    },

    breakpoints:{
      300:{
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