/**
 * represents allowed NATO tactical symbols. see https://community.bistudio.com/wiki/Military_Symbols
 */
export enum TacticalSymbol {
    inf = 'inf',
    motor_inf = 'motor_inf',
    mech_inf = 'mech_inf',
    armor = 'armor',
    recon = 'recon',
    air = 'air',
    plane = 'plane',
    uav = 'uav',
    med = 'med',
    art = 'art',
    mortar = 'mortar',
    hq = 'hq',
    service = 'service',
    support = 'support',
    maint = 'maint'
}

export const tacticalSymbols = Object.keys(TacticalSymbol);
