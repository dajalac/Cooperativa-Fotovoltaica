export const validarNome=(name)=>{
    let validator={error:false, msg:''}
 
   
     if(!name){
         validator.error=true
         validator.msg='Campo de busca não pode ser vazio'
     }
     if(!name.match(/^[a-zA-Z\s]*$/)){
         validator.error=true
         validator.msg = 'Digite somente letras'
     }
 
     return validator
 }

 export const validarEmail = (email)=>{
    let validator={error:false, msg:''}
    if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        validator.error=true
        validator.msg='Digite um e-mail válido'
    }
    return validator
}

export const validarEndereco =(endereco)=>{
    let validator={error:false, msg:''}

    if(!endereco.match(/^[a-zA-Z\s\d]*$/)){
        validator.error=true
        validator.msg='Insira somente números e letras'
    }
    return validator
}


