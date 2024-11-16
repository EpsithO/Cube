import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity('TypeRelation')
export class TypeRelation {


    @PrimaryGeneratedColumn()
    idTypeRelation: number;

    @Column()
    nom: string;
    
}