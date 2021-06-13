import {
    Column,
    CreateDateColumn,
    Entity,
    ObjectID,
    ObjectIdColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('order')
class order {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    idClient: string;

    @Column()
    idUser: string;

    @Column()
    description: string;

    @Column()
    itens: Array<string>;

    @Column()
    price: string;

    @Column()
    adress: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default order;
