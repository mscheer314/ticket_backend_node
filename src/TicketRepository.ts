import { Ticket } from './entity/Ticket'
import { dataSource } from './connectDB'

export const ticketRepository = dataSource.getRepository(Ticket)
