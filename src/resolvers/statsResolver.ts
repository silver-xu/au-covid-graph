import { getStatsByRegionCodeCached } from '../services/dynamo';
import { Stats } from '../types/stats';

export const resolvers = {
  Query: {
    global: async (): Promise<Stats> => await getStatsByRegionCodeCached('Global'),
  },
  GlobalStats: {
    Australia: async (): Promise<Stats> => await getStatsByRegionCodeCached('Australia'),
    China: async (): Promise<Stats> => await getStatsByRegionCodeCached('China'),
    Italy: async (): Promise<Stats> => await getStatsByRegionCodeCached('Italy'),
    Japan: async (): Promise<Stats> => await getStatsByRegionCodeCached('Japan'),
    SouthKorea: async (): Promise<Stats> => await getStatsByRegionCodeCached('SouthKorea'),
    US: async (): Promise<Stats> => await getStatsByRegionCodeCached('US'),
    UK: async (): Promise<Stats> => await getStatsByRegionCodeCached('UK'),
    France: async (): Promise<Stats> => await getStatsByRegionCodeCached('France'),
    Germany: async (): Promise<Stats> => await getStatsByRegionCodeCached('Germany'),
    Spain: async (): Promise<Stats> => await getStatsByRegionCodeCached('Spain'),
  },
  AUStats: {
    NewSouthWales: async (): Promise<Stats> => await getStatsByRegionCodeCached('NewSouthWales'),
    NothernTerritory: async (): Promise<Stats> => await getStatsByRegionCodeCached('NothernTerritory'),
    Queensland: async (): Promise<Stats> => await getStatsByRegionCodeCached('Queensland'),
    SouthAustralia: async (): Promise<Stats> => await getStatsByRegionCodeCached('SouthAustralia'),
    Tasmania: async (): Promise<Stats> => await getStatsByRegionCodeCached('Tasmania'),
    Victoria: async (): Promise<Stats> => await getStatsByRegionCodeCached('Victoria'),
    WesternAustralia: async (): Promise<Stats> => await getStatsByRegionCodeCached('WesternAustralia'),
    AustralianCapitalTerritory: async (): Promise<Stats> =>
      await getStatsByRegionCodeCached('AustralianCapitalTerritory'),
  },
};
