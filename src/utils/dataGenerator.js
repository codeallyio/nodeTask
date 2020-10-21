const { validateGender, validateAge, validateEmail } = require('./dataValidator')

const names = require('./names');

const randomXToY = (minVal, maxVal) => (Math.round(minVal + Math.random() * (maxVal - minVal)))

const generateGender = gender => {
    if (validateGender(gender)) {
        return gender
    }

    return Math.random() > 0.5 ? 'male' : 'female'
}
const generateAge = age => {
    if (validateAge(age)) {
        return Number(age)
    }

    return randomXToY(12, 90)
}

const generateEmail = (email, gender) => {
    if (validateEmail(email)) {
        return email
    }

    gender = generateGender(gender)

    const genderNames = gender === 'male' ? names.mNames.split(`\n`) : names.fNames.split(`\n`)
    return genderNames[randomXToY(0, 999)].toLowerCase() + (2020 - randomXToY(0, 90)) + '@gmail.com'
}

module.exports = {
    generateGender,
    generateAge,
    generateEmail
}