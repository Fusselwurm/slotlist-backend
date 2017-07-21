import { DataTypes } from 'sequelize';

import slug from '../util/slug';

/**
 * Creates table for Community model
 */
module.exports = {
    up: async (queryInterface: any): Promise<void> => {
        await queryInterface.createTable('communities', {
            uid: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            tag: {
                type: DataTypes.STRING,
                allowNull: false
            },
            website: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null
            },
            slug: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                // tslint:disable
                set(val: string) {
                    (<any>this).setDataValue('slug', slug(val));
                }
                // tslint:enable
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            deletedAt: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: null
            }
        });
    },
    down: async (queryInterface: any): Promise<void> => {
        await queryInterface.dropTable('communities');
    }
};