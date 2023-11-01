const validation = (data) => {

    let errors= [];

    if(!data.email){
        errors.email = 'El mail es requerido';
    }else if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)){
        errors.email = 'No tiene formato mail';
    }else if(data.email.length > 35){
        errors.email = 'El mail es demasiado largo';
    }

    
    if(!data.password){
        errors.password = 'La contraseña es requerida';
    }else if(!/\d/.test(data.password)){
        errors.password = 'La contraseña debe tener al menos un numero';
    }else if (data.password.length < 6 || data.password.length >18){
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    }

    return errors;
};




export default validation;