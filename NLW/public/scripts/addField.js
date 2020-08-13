// Procurar botao
document.querySelector("#add-time")
//clicar botao
.addEventListener('click', cloneField)
//executar acao
function cloneField(){
    //duplicar
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // clean
    const fields = document.querySelectorAll('input')
    fields.forEach(function(field){
        field.value = ""
    })
    // pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

