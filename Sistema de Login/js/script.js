let form = document.querySelector('form')

form.addEventListener('submit', (e) =>{
    console.log('enviar o formulário')
    e.preventDefault()
})


const fields = document.querySelectorAll('[required]')

function customValidation(event){

    //Eliminar o bubble
    event.preventDefault()



    const field = event.target

    //Lógica para verificar se existem erros

    function verifyErrors(){
        let foundError = false

        for(let error in field.validity){

            if(field.validity[error] && !field.validity.valid){
            //if(error != 'customError' && field.validity[error]){

                foundError = true
            }
        }

        return foundError
    }

    const error = verifyErrors()
    console.log('Error Exists:', error)
   

    const spanError = field.parentNode.querySelector('span.error')

    if(error){
        spanError.classList.add('active')
        spanError.innerHTML = 'Campo obrigatório'
        spanError.style = 'font-weight: bold'
    }else{
        spanError.classList.remove('active')
        spanError.innerHTML = ''
    }

//Caso eu não queira trocar a bubble do html, usar a lógica a baixo para disparar a mensagem personalizada
/*if(error){
         
    field.setCustomValidity('Esse campo é obrigatório')
    }else{
        field.setCustomValidity('')
        //|Deixando vazio, a api reconhece que o campo está resetado.
    }*/
}

for (let campo of fields){
   campo.addEventListener('invalid', customValidation)
   campo.addEventListener('blur', customValidation)
}

