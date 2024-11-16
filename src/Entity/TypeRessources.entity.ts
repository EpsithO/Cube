import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'


@Entity('TypeRessource')
export class TypeRessource {

    @PrimaryGeneratedColumn()
    idTypeRessource: number;

    @Column()
    nom: string;
}