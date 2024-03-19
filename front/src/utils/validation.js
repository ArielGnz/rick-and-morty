
const validation = (inputs) =>{
 const errors = {};
 const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
 const regexNumber = /^(?:[0-9]+[a-z]|[a-z]+[[0-9]])[a-z0-9]*$/i;
 const regexPassword = /^(?=\w*\d)\S{6,10}$/;

 if(!regexEmail.test(inputs.email)){
    errors.email = 'Email invalido';
 }

 if(!inputs.email){
    errors.email = 'Email vacio';
 }

 if(inputs.email.length > 35){
    errors.email = 'Debe tener menos de 35 caracteres';
 }

 if(!regexNumber.test(inputs.password)){
    errors.password = 'La contraseña debe tener un numero';
 }

 if(!regexPassword.test(inputs.password)){
    errors.password = 'Debe tener entre 6 y 10 caracteres';
 }

 return errors;
}

export default validation;