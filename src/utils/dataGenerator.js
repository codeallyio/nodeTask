import { validateGender, validateAge, validateEmail } from './dataValidator'
import names from './names'

const randomXToY = (minVal, maxVal) => (Math.round(minVal + Math.random() * (maxVal - minVal)))

export const generateGender = gender => {
    if (validateGender(gender)) {
        return gender
    }

    return Math.random() > 0.5 ? 'male' : 'female'
}

export const generateAge = age => {
    if (validateAge(age)) {
        return Number(age)
    }

    return randomXToY(12, 90)
}

export const generateEmail = (email, gender) => {
    if (validateEmail(email)) {
        return email
    }

    gender = generateGender(gender)

    const genderNames = gender === 'male' ? names.mNames.split(`\n`) : names.fNames.split(`\n`)
    return genderNames[randomXToY(0, 999)].toLowerCase() + (2020 - randomXToY(0, 90)) + '@gmail.com'
}
