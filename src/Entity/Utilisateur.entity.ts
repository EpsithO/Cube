import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity('Utilisateur')
export class Utilisateur {


    @PrimaryGeneratedColumn()
    idUser: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    mail: string;

    @Column()
    password: string;

    @CreateDateColumn()
    dateInscription: Date;
}
