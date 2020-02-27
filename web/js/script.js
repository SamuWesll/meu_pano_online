let inputCEP = document.getElementById('cepDetalhe');
let btnPesquisarCEP = document.getElementById('btnPesquisarCEP');

let config = {
    method: "GET"
}

/*function buscarCep(cep){
    alert('Buscando CEP');
    let config = {
        method:"get"
    }
    fetch(`http://viacep.com.br/ws/${cep}/json/`, config)
    .then(response => response.json())
    .then(dados =>{
        if(dados.erro){ 
            return inputCEP.setAttribute('class', 'form-control is-invalid')
        }
        inputCEP.setAttribute('class', 'form-control is-valid')
        
        
    })
}*/

inputCEP.addEventListener('keyup',  (event)=>{
        if(isNaN(inputCEP.value)){
            inputCEP.value = inputCEP.value.substring(0, (inputCEP.value.length -1))
        }
        if(inputCEP.value.length > 8){
            inputCEP.value = inputCEP.value.substring(0, 8)
        }
})
