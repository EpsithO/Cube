import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity('Roles')
export class Roles {

    @PrimaryGeneratedColumn()
    idRole: number;

    @Column()
    nomRole: string;

}
