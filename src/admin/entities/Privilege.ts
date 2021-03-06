import { Model, Table, Column, DataType, HasMany, DefaultScope, BelongsToMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import { Resource } from './Resource';
import { Right } from './Right';

@Table({ 
    tableName:'admin_privilege',    
    timestamps: true
})
export class Privilege extends Model<Privilege>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true,
        autoIncrement:true
    })
    id: number;

    @Column
    slug: string;

    @Column
    name: string;

    @HasMany(() => Right)
    rights: Right[];

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}