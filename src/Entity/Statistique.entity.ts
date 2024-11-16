import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'


@Entity('Statistique')
export class Statistique {


    @PrimaryGeneratedColumn()
    idStatistique: number;

    @Column()
    nbConsultation: number;

    @Column()
    nbCreation: number;

    @Column()
    nbFavoris: number;

    @Column()
    nbMisDeCote: number;

}