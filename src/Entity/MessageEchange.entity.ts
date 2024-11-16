import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'


@Entity('MessageEchange')
export class MessageEchange {


    @PrimaryGeneratedColumn()
    idMessage: number;

    @Column()
    contenuMessage: string;

}