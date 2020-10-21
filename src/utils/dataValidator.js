const validateGender = gender => {
    if (gender === 'male' || gender === 'female') {
        return true
    }
    return false
}

const validateAge = age => {
    if (!!age && 12 <= age && age <= 90) {
        return true
    }
    return false
}

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email))
}

module.exports = {
    validateGender,
    validateAge,
    validateEmail
}