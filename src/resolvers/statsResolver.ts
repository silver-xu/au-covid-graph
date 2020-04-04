import { getStatsByRegionCodeCached } from '../services/dynamo';
import { Stats } from '../types/stats';

import { default as countries } from '../config/countries.json';

export const resolvers = {
  Query: {
    global: async (): Promise<Stats> => await getStatsByRegionCodeCached('Global'),
  },
  GlobalStats: {},
  AustraliaStats: {},
  ChinaStats: {},
  USStats: {},
  CanadaStats: {},
};

Object.values(countries).forEach((country) => {
  if (country.code !== 'Global') {
    resolvers.GlobalStats[`${country.code}`] = async (): Promise<Stats> =>
      await getStatsByRegionCodeCached(country.code);
  }
});

Object.values(countries.Australia.states).forEach((state) => {
  resolvers.AustraliaStats[`${state.code}`] = async (): Promise<Stats> => await getStatsByRegionCodeCached(state.code);
});

Object.values(countries.China.states).forEach((state) => {
  resolvers.ChinaStats[`${state.code}`] = async (): Promise<Stats> => await getStatsByRegionCodeCached(state.code);
});

Object.values(countries.Canada.states).forEach((state) => {
  resolvers.CanadaStats[`${state.code}`] = async (): Promise<Stats> => await getStatsByRegionCodeCached(state.code);
});

Object.values(countries.US.states).forEach((state) => {
  resolvers.USStats[`${state.code}`] = async (): Promise<Stats> => await getStatsByRegionCodeCached(state.code);
});
