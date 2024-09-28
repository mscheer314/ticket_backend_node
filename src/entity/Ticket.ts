import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity("tickets")
export class Ticket extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 100 }) 
    title: string
    
    @Column("varchar", { nullable: true })
    description: string | null

    @Column("varchar")
    status: string

    @Column("timestamp")
    created_on: Date

    @Column("timestamp", { nullable: true })
    resolved_on: Date | null
}