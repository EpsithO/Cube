import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity('Categorie')
export class Categorie {

    @PrimaryGeneratedColumn()
    idCategorie: number;

    @Column()
    nom: string;
    
}