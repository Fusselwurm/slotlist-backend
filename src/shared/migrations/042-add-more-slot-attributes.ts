import { DataTypes } from 'sequelize';

/**
 * Adds optional minSlottedPlayerCount to slots
 */
module.exports = {
    up: async (queryInterface: any): Promise<void> => {
        await queryInterface.addColumn('missionSlots', 'minSlottedPlayerCount', {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        });
    },
    down: async (queryInterface: any): Promise<void> => {
        await queryInterface.removeColumn('missionSlots', 'minSlottedPlayerCount');
    }
};
