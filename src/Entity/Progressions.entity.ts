import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'


@Entity('Progression')
export class Progression {

    @PrimaryGeneratedColumn()
    idProgression: number;

}