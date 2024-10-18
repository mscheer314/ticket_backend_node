import express, { Express, Request, Response } from 'express'
import { connectDB } from './connectDB'
import { ticketRepository } from './TicketRepository'

connectDB()

const app = express()
app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
    // res.send('hey what up!')
    const tickets = await ticketRepository.find() 
    res.json(tickets)
    // const response = ticketRepository.find().then((data) => {
        // console.log('in the promise response@!!!!!!')
        // res.send(data)
    // })
    // res.send(ticketRepository.find())
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
}) 
