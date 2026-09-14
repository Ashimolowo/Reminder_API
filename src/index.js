import express from 'express'

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello Ridwan')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})