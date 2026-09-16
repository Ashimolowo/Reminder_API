import express from 'express'
import reminderRoutes from './routes/remindersRoutes.js'
import errorHandler from './middlewares/errorHandlerMiddleware.js'

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello Ridwan')
})

app.use(express.json())
app.use('/reminders', reminderRoutes)

app.use(errorHandler)
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})