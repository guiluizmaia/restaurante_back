import {
    Column,
    CreateDateColumn,
    Entity,
    ObjectID,
    ObjectIdColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('user')
class user {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    tel?: string;

    @Column()
    cel: string;

    @Column()
    rg: string;

    @Column()
    cpf: string;

    @Column()
    adress: string;

    @Column()
    date: string;

    @Column()
    manager: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default user;
