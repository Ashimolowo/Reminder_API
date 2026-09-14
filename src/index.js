import express from 'express'

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello Ridwan')
})

app.get('/reminders', (req, res) => {
    res.send('Get all reminders');
})

app.get('/reminders/:id', (req, res) => {
    res.send('Get single reminder by id')
})

app.post('/reminders', (req, res) => {
    res.send('Create a new reminder')
})

app.patch('/reminders/:id', (req, res) => {
    res.send('Update some fields for existing reminder')
})

app.delete('/reminders/:id', (req, res) => {
    res.send('Delete a reminder')
})

app.delete("/reminders", (req, res) => {
  res.send("Delete all reminder");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})