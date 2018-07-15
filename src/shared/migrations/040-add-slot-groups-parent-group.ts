import { DataTypes } from 'sequelize';

/**
 * Adds the requiredDLCs column to the MissionSlots table
 */
module.exports = {
    up: async (queryInterface: any): Promise<void> => {
        await queryInterface.addColumn('missionSlotGroups', 'parentGroup', {
            type: DataTypes.UUID,
            allowNull: true
        });
    },
    down: async (queryInterface: any): Promise<void> => {
        await queryInterface.removeColumn('missionSlotGroups', 'parentGroup');
    }
};
