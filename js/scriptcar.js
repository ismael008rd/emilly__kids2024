       
    
    const cards__products = document.querySelector(".cards__products");
   let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];


export function Atualizar() {


    // const productsmais= document.querySelector('.products')
    


    

    // Exibir os produtos do carrinho na página
    carrinho.forEach(produto => {
        
        console.log(produto.id,produto.img, produto.preco);
        const result = ` <div class="products " id =${produto.id}>
            <img src="${produto.img}" alt="" class="product__img">
            <h2 class="prece__product">${produto.preco}</h2>
            
        </div>`
   

        cards__products.innerHTML+=result
        
    });
    
}



Atualizar()

const produtos = document.querySelectorAll('.products')

produtos.forEach((element) => {
    // Adicionando um ouvinte de evento de clique a cada elemento
    element.addEventListener('click', () => {
        // Obtendo o ID do produto clicado
        const idDoProdutoClicado = element.id;
        console.log(idDoProdutoClicado)

        // Removendo o elemento do DOM
        element.remove();

        // Removendo o produto correspondente do localStorage pelo ID
        carrinho = carrinho.filter(produto => produto.id != idDoProdutoClicado);
           console.log(carrinho)
        // Atualizando o carrinho no localStorage
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    });
});




const btn_compar=document.querySelector('.btn__comprar')


