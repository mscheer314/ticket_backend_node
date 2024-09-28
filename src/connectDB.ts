import "reflect-metadata"
import { DataSource } from "typeorm";
import { Ticket } from "./entity/Ticket";

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'user123',
    password: 'password123',
    database: 'db123',
    entities: [Ticket],
    synchronize: true,
    logging: true,
})

export const connectDB = async (retries = 5) => {
    while (retries) {
        try {
            await AppDataSource.initialize()
            break
        } catch (e) {
            console.error('Failed to connect to DB', e)
            retries -= 1
            await new Promise(res => setTimeout(res, 5000))
        }
    }
}