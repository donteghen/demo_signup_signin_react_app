import {isEmail, isAlpha, isMobilePhone, isStrongPassword} from 'validator'
export const signUpValidator = (data) => {
    
    const errors = {};
    if(data.full_name){
        if(!isAlpha(data.full_name) || data.full_name.length < 4){
            errors.full_name = 'Please enter a valide full name'
        }
    }
    if(!data.full_name){
        errors.full_name = 'Your full name is required !'
    }
    if(data.phone_number){
        if(!isMobilePhone(data.phone_number)){
            errors.phone_number = 'Please enter a valide phone number'
        }
    }
    if(!data.phone_number){
        errors.phone_number = 'Your phone number is required !'
    }

    if(data.email){
        if(!isEmail(data.email)){
            errors.email = 'Please enter a valide email address'
        }
    }
    if(!data.email){
        errors.email = 'Your email is required !'
    }

    if(data.password){
        if(!isStrongPassword(data.password)){
            errors.password = 'Please enter a strong password. symbol, lowercase, uppercase and number'
        }
    }
    if(!data.password){
        errors.password = 'A password is required !'
    }
    return errors
}
export const loginValidator = (data) => {
    
    const errors = {};

    if(data.email){
        if(!isEmail(data.email)){
            errors.email = 'Please enter a valide email address'
        }
    }
    if(!data.email){
        errors.email = 'Your email is required !'
    }

    if(data.password){
        if(!isStrongPassword(data.password)){
            errors.password = 'Please enter a strong password. include(1 symbol, 1 lowercase, 1 uppercase and 1 number)'
        }
    }
    if(!data.password){
        errors.password = 'A password is required !'
    }
    return errors
}

