
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal', // Direção do slider (horizontal)
    loop: true, // Loop infinito
    effect: 'carousel', // Efeito de carrossel
    grabCursor: true, // Cursor de agarrar ao passar os slides
    centeredSlides: true, // Centraliza os slides
    slidesPerView: 'auto', // Quantidade de slides visíveis por vez (ajuste conforme desejado)
    spaceBetween: 5, // Espaçamento entre os slides
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


  const btnLinks= document.querySelector('.btn__links')
  const menuvisu = document.querySelector('.logo__menu__resp')
  const menuHambu= document.querySelector('.hambu')
  const items = document.querySelectorAll('.items')
  menuHambu.addEventListener('click',()=>{
    console.log('clicado')
    btnLinks.style.display='flex'
    menuvisu.style.display='none'
  })


  
items.forEach((elemento)=>{
  elemento.addEventListener('click',()=>{
    btnLinks.style.display='none'
    menuvisu.style.display='flex'
  })
})