       
    
    const cards__products = document.querySelector(".cards__products");
   let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

          
   let totalP= document.querySelector('.container__total')
        

   console.log(totalP)


 function Atualizar() {
           
   

    // const productsmais= document.querySelector('.products')
  

    

    // Exibir os produtos do carrinho na página
    carrinho.forEach(produto => {

        
        console.log(produto.id,produto.img, produto.preco);
        const result = ` <div class="products " id ='${produto.id}'>
            <img src="${produto.img}" alt="imagem do produto" class="product__img"/>

            <span class='valor_prdut items'>${produto.preco}</span>
            
            <input type="number" class="input_card items " />
            <button class="btn_remove items">Deletar</button>
            <h2 class="prece__product items" >${produto.preco}</h2>
             
            </div>`
   

        cards__products.innerHTML+=result

    
          
    });

    


}



Atualizar()

const produtos = document.querySelectorAll('.products')

const btn_deletar = document.querySelectorAll('.btn_remove')



btn_deletar.forEach((element) => {
    // Adicionando um ouvinte de evento de clique a cada elemento
    

    element.addEventListener('click', () => {

   
        
        const idDoProdutoClicado = element.parentElement.id;
        console.log(idDoProdutoClicado)

      
       
        element.parentElement.remove()
        carrinho = carrinho.filter(produto => produto.id != idDoProdutoClicado);
           console.log(carrinho)
        
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
            
        Total()
        
    });
   

  
   
});




const btn_compar=document.querySelector('.btn__comprar')




        const input_card = document.querySelectorAll('.input_card')

        input_card.forEach((elemento)=>{
           
            Total()


            elemento.value='1'
            
            elemento.addEventListener('change',()=>{

             
              const valorProduto = elemento.parentElement.lastElementChild.innerText
                
              const varloSpand=elemento.parentElement.querySelector('span').innerText
             
              
              const valorCorr=Number(varloSpand.replace('$',''))
              
                 

                const somar =  valorCorr * parseFloat(elemento.value)
                    
                elemento.parentElement.lastElementChild.innerText=`${somar} $`
                
                console.log(somar)
             
               
           })

         
          
        })
        
    
      
    
        function Total(){
            const valor_produtc= document.querySelectorAll('.prece__product')

            valor_produtc.forEach((preco,a,b)=>{
                const result =parseFloat(preco.innerText)
              
               
               const itee= Array.from(b)
                    
               console.log(itee)

              const total= itee.map((elemento)=>{
                return Number(elemento.innerText.replace("$",""))
               })


          const somar=total.reduce((a,b)=>{
                return a+b})
               
         
             
           totalP.innerText = somar + "$"

        console.log(somar)
        console.log(totalP)

        if(totalP.innerText===''){
            console.log('total está vazio')
        }
    

       
        
        })
    
            
        }

       
     