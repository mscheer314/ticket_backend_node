import express, { Express, Request, Response } from 'express'
import { connectDB } from './connectDB'
import { ticketRepository } from './TicketRepository'

connectDB()

const app = express()
app.use(express.json())

app.get('/tickets', async (req: Request, res: Response) => {
    // res.send('hey what up!')
    const tickets = await ticketRepository.find()
    res.json(tickets)
})

app.get('/tickets/:id', async (req: Request, res: Response) => {
    const ticket = await ticketRepository.findOneBy({ id: parseInt(req.params.id) })
    res.json(ticket)
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
}) 
