import moment from 'moment-timezone';

import { StatsHistory } from '../types/stats';

export const mapStatsHistory = (history: string): StatsHistory[] => {
  return JSON.parse(history);
};
