import { DataTypes } from 'sequelize';
import {tacticalSymbols} from '../types/tacticalSymbol';

/**
 * Adds optional radioFrequency, tacticalSymbol, vehicle, minSlottedPlayerCount attributes to MissionSlotGroup
 */
module.exports = {
    up: async (queryInterface: any): Promise<void> => {
        await queryInterface.addColumn('missionSlotGroups', 'radioFrequency', {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        });
        await queryInterface.addColumn('missionSlotGroups', 'tacticalSymbol', {
            type: DataTypes.ENUM,
            values: tacticalSymbols,
            allowNull: true,
            defaultValue: null
        });
        await queryInterface.addColumn('missionSlotGroups', 'vehicle', {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
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
