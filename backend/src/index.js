const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send('Oi bebe')
})

app.listen(3000)