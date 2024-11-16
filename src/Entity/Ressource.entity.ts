import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity('Ressource')
export class Ressource {


    @PrimaryGeneratedColumn()
    idRessource: number;

    @Column()
    titre: string;

    @Column()
    description: string;

    @Column()
    contenu: string;

    @Column()
    visibilite: boolean;

    @CreateDateColumn()
    dateCreation: Date;

}