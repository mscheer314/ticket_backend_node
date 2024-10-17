import express, { Express, Request, Response } from 'express'
import { connectDB } from './connectDB'

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('hey what up!')
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
}) 
