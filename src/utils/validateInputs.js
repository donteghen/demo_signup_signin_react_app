import {isEmail, isAlpha, isMobilePhone, isStrongPassword} from 'validator'
const ValidatorSignUp = (data) => {
    const errors = {};
    if(data.fullName){
        if(!isAlpha(data.fullName)){
            errors.fullName = 'Please enter a valide full name'
        }
    }
    if(!data.fullName){
        errors.fullName = 'Your full name is required !'
    }
    if(data.phoneNumber){
        if(!isMobilePhone(data.phoneNumber)){
            errors.phoneNumber = 'Please enter a valide phone number'
        }
    }
    if(!data.phoneNumber){
        errors.phoneNumber = 'Your phone number is required !'
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
            errors.password = 'Please enter a strong password. ie. 8 characters, 1 uppercaseletter, 1 lowercase, 1 num and 1 symbol'
        }
    }
    if(!data.password){
        errors.password = 'A password is required !'
    }
    
}