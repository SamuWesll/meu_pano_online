let inputCEPUsuario = document.getElementById('CEPUsuario')

inputCEPUsuario.addEventListener('keyup', (event)=>{
    if(isNaN(inputCEPUsuario.value)){
        inputCEPUsuario.value = inputCEPUsuario.value.substring(0, (inputCEPUsuario.value.length -1))
    }
    if(inputCEPUsuario.value.length >= 8){
        inputCEPUsuario.value = inputCEPUsuario.value.substring(0, 8)
        buscarCep(inputCEPUsuario.value)
    }
})

function AddCarrinho(produto, qtd, valor, posicao)
	{
		localStorage.setItem("produto" + posicao, produto);
		localStorage.setItem("qtd" + posicao, qtd);
		valor = valor * qtd;
		localStorage.setItem("valor" + posicao, valor);
		alert("Produto adicionado ao carrinho!");
	}