const express = require('express')
const app = express()
const port = 3009
app.use(express.json())//middleware
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/users/:id", (req, res) => { // :/id is dynamic id
    const userId = req.params.id
    res.send(`User ID: ${userId}`)
  })
app.post("/data", (req, res) => {
    const{movie,actor} = req.body;
    res.send(`The ${movie} of the  ${actor} is good.`)
  })
app.get("/data", (req, res) => {   
    const{movie,actor} = req.body;
    res.send(`The ${movie} of the  ${actor} is good.`)
    console.log(req.body)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
