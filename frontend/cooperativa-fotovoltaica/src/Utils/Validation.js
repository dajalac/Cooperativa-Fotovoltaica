export const validateName=(name)=>{
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