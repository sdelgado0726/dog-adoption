import { InferAttributes, InferCreationAttributes, Model, Sequelize, DataTypes } from "sequelize";

export class Dog extends Model<InferAttributes<Dog>, InferCreationAttributes<Dog>>{
    declare dogId: number; 
    declare name: string;
    declare imgUrl: string;
    declare description: string;
    declare createdOn?: Date;
    declare updatedOn?: Date;
}

export function DogFactory(sequelize: Sequelize) {
    Dog.init({
        dogId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdOn: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedOn: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }

    }, {
        tableName: 'dog',
        freezeTableName: true,
        sequelize
    });
}
