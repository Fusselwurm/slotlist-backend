import { DataTypes } from 'sequelize';

/**
 * Enables hierarchy to MissionSlotGroups
 */
module.exports = {
    up: async (queryInterface: any): Promise<void> => {
        await queryInterface.addColumn('missionSlotGroups', 'parentGroupUid', {
            type: DataTypes.UUID,
            allowNull: true,
            defaultValue: null,
            references: {
                model: 'missionSlotGroups',
                key: 'uid'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    },
    down: async (queryInterface: any): Promise<void> => {
        await queryInterface.removeColumn('missionSlotGroups', 'parentGroupUid');
    }
};
