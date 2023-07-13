const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.json({
        msg: 'hello mother fucker'
    })
})

app.listen(3000)