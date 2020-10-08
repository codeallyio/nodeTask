const express = require('express')
const app = express()
const port = 3000

app.get('/randomUser', (req, res) => {
    const params = req.query
    res.send(params)
    console.log(params)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
   