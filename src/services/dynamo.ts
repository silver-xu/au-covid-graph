import AWS from 'aws-sdk';
import NodeCache from 'node-cache';
import moment from 'moment-timezone';

import { Stats } from '../types/stats';
import { mapStatsHistory } from '../mapper/mapStatsHistory';

const STATS_TABLE_NAME = 'au-covid-spider-prod';
const CACHE_TTL = 3600;

AWS.config.update({ region: 'ap-southeast-2' });
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

const statsCache = new NodeCache();

const getStatsByRegionCode = async (regionCode: string): Promise<Stats | undefined> => {
  const params = {
    TableName: STATS_TABLE_NAME,
    Key: {
      regionCode: regionCode,
    },
  };

  try {
    const response = await docClient.get(params).promise();

    if (response && response.Item) {
      const statsResponse = response.Item;
      statsResponse.lastUpdatedDate = moment.tz(response.Item.lastUpdatedDate, 'Australia/Sydney').format();
      statsResponse.history = mapStatsHistory(statsResponse.history);

      return statsResponse as Stats;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getStatsByRegionCodeCached = async (regionCode: string): Promise<Stats | undefined> => {
  if (!statsCache.get(regionCode)) {
    const stats = await getStatsByRegionCode(regionCode);
    statsCache.set(regionCode, stats, CACHE_TTL);
  }

  return statsCache.get(regionCode);
};
