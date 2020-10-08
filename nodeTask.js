const express = require('express')
const app = express()
const port = 3000

const randomXToY =(minVal,maxVal) => {
    return Math.round(minVal+(Math.random()*(maxVal-minVal)));
}
const makeGender = gender => {
    if(gender === 'f' || gender ===  'm')
        return gender    
    else return Math.random() > 0.5 ? 'm' : 'f'
}
const makeAge = age =>{
    if(age >= 0 && age <= 90)
        return age
    else return randomXToY(0,90)
}
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const makeEmail = (email) =>{
    if(validateEmail(email))
        return email
    else
    {
        const db = require('./db/db');
        const Names = Math.random() > 0.5 ? db.fNames.split(`\n`) : db.mNames.split(`\n`)
        return Names[randomXToY(0,999)] + (2020 - randomXToY(0, 90)) + '@gmail.com'
    } 
}

app.get('/randomUser', (req, res) => {
    const params = req.query
    var results = [];
    for(var i in params)
        results.push([i.toString().toLowerCase(), params[i].toString().toLowerCase()]);
    if(results[0][0].toLowerCase() === 'age')
    {
        console.log('age')
        results[0][1] = makeAge(parseInt(results[0][1]))
    }
    else if(results[0][0] === 'gender')
    {
        console.log('gender')
        results[0][1] = makeGender(results[0][1])
    }
    else if(results[0][0] === 'email' || results[0][0] === 'e-mail')
    {
        console.log('email')
        results[0][1] = makeEmail(results[0][1])
    }
    res.send(results[0][0].toString() + " : " + results[0][1].toString())
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
   