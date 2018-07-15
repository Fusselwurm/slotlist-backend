import { DataTypes } from 'sequelize';

/**
 * Adds the requiredDLCs column to the MissionSlots table
 */
module.exports = {
    up: async (queryInterface: any): Promise<void> => {
        await queryInterface.addColumn('missionSlotGroups', 'radioFrequency', {
            type: DataTypes.DOUBLE,
            allowNull: true
        });
        await queryInterface.addColumn('missionSlotGroups', 'tacticalSymbol', {
            type: DataTypes.ENUM,
            values: ['inf'],
            allowNull: true
        });
        await queryInterface.addColumn('missionSlotGroups', 'vehicle', {
            type: DataTypes.STRING,
            allowNull: true
        });
        await queryInterface.addColumn('missionSlotGroups', 'minSlottedPlayerCount', {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        });
    },
    down: async (queryInterface: any): Promise<void> => {
        await queryInterface.removeColumn('missionSlotGroups', 'minSlottedPlayerCount');
        await queryInterface.removeColumn('missionSlotGroups', 'vehicle');
        await queryInterface.removeColumn('missionSlotGroups', 'tacticalSymbol');
        await queryInterface.removeColumn('missionSlotGroups', 'radioFrequency');
    }
};
