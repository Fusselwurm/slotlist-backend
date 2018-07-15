import { DataTypes } from 'sequelize';

/**
 * Adds the requiredDLCs column to the MissionSlots table
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
