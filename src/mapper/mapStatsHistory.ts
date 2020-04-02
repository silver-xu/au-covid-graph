import moment from 'moment-timezone';

import { StatsHistory } from '../types/stats';

export const mapStatsHistory = (history: string): StatsHistory[] => {
  return JSON.parse(history).map(historyItem => ({
    ...historyItem,
    date: moment.tz(historyItem.date, 'Australia/Sydney').format(),
    lastUpdatedDate: moment.tz(historyItem.lastUpdatedDate, 'Australia/Sydney').format(),
  }));
};
