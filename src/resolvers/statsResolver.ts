import { getStatsByRegionCodeCached } from '../services/dynamo';
import { Stats } from '../types/stats';

export const resolvers = {
  Query: {
    global: async (): Promise<Stats> => await getStatsByRegionCodeCached('global'),
  },
  GlobalStats: {
    AU: async (): Promise<Stats> => await getStatsByRegionCodeCached('AU'),
    CN: async (): Promise<Stats> => await getStatsByRegionCodeCached('CN'),
    IT: async (): Promise<Stats> => await getStatsByRegionCodeCached('IT'),
    JP: async (): Promise<Stats> => await getStatsByRegionCodeCached('JP'),
    KR: async (): Promise<Stats> => await getStatsByRegionCodeCached('KR'),
    US: async (): Promise<Stats> => await getStatsByRegionCodeCached('US'),
    UK: async (): Promise<Stats> => await getStatsByRegionCodeCached('UK'),
    FR: async (): Promise<Stats> => await getStatsByRegionCodeCached('FR'),
    DE: async (): Promise<Stats> => await getStatsByRegionCodeCached('DE'),
    ES: async (): Promise<Stats> => await getStatsByRegionCodeCached('ES'),
  },
  AUStats: {
    NSW: async (): Promise<Stats> => await getStatsByRegionCodeCached('NSW'),
    NT: async (): Promise<Stats> => await getStatsByRegionCodeCached('NT'),
    QLD: async (): Promise<Stats> => await getStatsByRegionCodeCached('QLD'),
    SA: async (): Promise<Stats> => await getStatsByRegionCodeCached('SA'),
    TAS: async (): Promise<Stats> => await getStatsByRegionCodeCached('TAS'),
    VIC: async (): Promise<Stats> => await getStatsByRegionCodeCached('VIC'),
    WA: async (): Promise<Stats> => await getStatsByRegionCodeCached('WA'),
  },
};
