import { AxiosResponse } from 'axios';
import { Summoner } from './models';
import { calculateWinRate } from './utils';

export const parserSummoner = (data: AxiosResponse): Summoner => {
  const winRate = calculateWinRate(data.data['0'].wins, data.data['0'].losses);
  return { ...data.data['0'], winRate: winRate };
};
