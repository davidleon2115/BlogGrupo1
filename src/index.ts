import express from 'express'

const { usersRouter } = require('./routes/user.route')
const app = express()

app.use(express.json())

const PORT: number = 3000

app.use('/api/v1/users', usersRouter);

app.listen(PORT, ()=> {
    console.log(`server runinng in ${PORT}`)
})