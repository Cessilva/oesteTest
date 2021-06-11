import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'; 

@Entity()
class User {
    
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    nombre?: string;

    @Column({unique:true})
    edad?: string;

    @Column()
    sexo?: string;

    @Column()
    codigo?: string;
   
}

export default User;
