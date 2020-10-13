const db = require('./db/db');

const randomXToY =(minVal, maxVal) => ( Math.round(minVal + Math.random() * (maxVal-minVal)) )

const generateGender = gender => {
    if (gender === 'male' || gender === 'female')
        return gender

    return Math.random() > 0.5 ? 'male' : 'female'
}
const generateAge = age =>{
    if (!!age && 12 <= age && age <= 90)
        return age

    return randomXToY(12, 90)
}

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
}

const generateEmail = (email, gender) =>{
    if(validateEmail(email))
        return email

    gender = generateGender(gender)

    const names = gender === 'male' ? db.mNames.split(`\n`) : db.fNames.split(`\n`)
    return names[randomXToY(0,999)].toLowerCase() + (2020 - randomXToY(0, 90)) + '@gmail.com'
}

module.exports = {
    generateGender,
    generateAge,
    generateEmail
}