import express from 'express'
import reminderRoutes from './routes/remindersRoutes.js'

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello Ridwan')
})

app.use(express.json())
app.use('/reminders', reminderRoutes)
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})