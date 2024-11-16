import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity('EspaceEchange')
export class EspaceEchange {


    @PrimaryGeneratedColumn()
    idEspaceEchange: number;

    @Column()
    titreEchange: string

    @Column()
    descriptionEchange: string;

    @CreateDateColumn()
    dateCreationEchange: Date;

}