"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogFactory = exports.Dog = void 0;
const sequelize_1 = require("sequelize");
class Dog extends sequelize_1.Model {
}
exports.Dog = Dog;
function DogFactory(sequelize) {
    Dog.init({
        dogId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            // unique: true
        },
        imgUrl: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        createdOn: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedOn: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        }
    }, {
        tableName: 'dog',
        freezeTableName: true,
        sequelize
    });
}
exports.DogFactory = DogFactory;
