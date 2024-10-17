import express, { Express, Request, Response } from 'express'
import { connectDB } from './connectDB'
import { Ticket } from './entity/Ticket'
import { ticketRepository } from './TicketRepository'

connectDB()

const app = express()

app.get('/', (req, res) => {
    // res.send('hey what up!')
    res.send(ticketRepository.find())
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
}) 
