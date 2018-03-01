import { Model, Table, Column, DataType, HasMany, DefaultScope, BelongsToMany } from 'sequelize-typescript';

import User from './User';
import UserRole from './UserRole';
import Right from './Right';
import RoleRight from './RoleRight';

@Table({ tableName:'role'} )
export default class Role extends Model<Role>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id: string;

    @Column({
        type:DataType.STRING
    })
    display_name: string;

    @BelongsToMany(() => Role, () => UserRole)
    users: User[];

    @BelongsToMany(() => Right, () => RoleRight)
    rights: Right[];
}