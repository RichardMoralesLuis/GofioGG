import { AxiosResponse } from 'axios';
import { Summoner } from './models';


export const parserSummoner = (data: AxiosResponse): Summoner => ({...data.data});