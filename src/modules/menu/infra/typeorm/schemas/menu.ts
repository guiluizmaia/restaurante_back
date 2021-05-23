import {
    Column,
    CreateDateColumn,
    Entity,
    ObjectID,
    ObjectIdColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('menu')
class menu {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    categoryId: ObjectID;

    @Column()
    categoryName: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    image?: Buffer;

    @Column()
    price: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default menu;
