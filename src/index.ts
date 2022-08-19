import express from 'express'
const { client } = require('./config/db.js')
const { usersRouter } = require('./routes/user.route')
const app = express()
app.use(express.json())

const PORT: number = 3000

app.use('/api/v1/users', usersRouter);

client.on('error', (err: string) => {
    console.log('Error ' + err);
});

app.listen(PORT, ()=> {
    console.log(`server runinng in ${PORT}`)
})