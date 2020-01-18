import axios from 'axios';
import { Summoner } from './models';
import { parserSummoner } from './parsers';


const PLAYERS_NAME = ['sinsajo02', 'EleTanPancho'];
const baseURL = 'https://euw1.api.riotgames.com/lol';

const getAllPlayers = (): Summoner[] => {
  const url = 'summoner/v4/summoners/by-name';
  const requests = PLAYERS_NAME.map(player => {
    return axios.get(`${baseURL}/${url}/${player}`, {
      headers: {
        'X-Riot-Token': process.env.REACT_APP_API_KEY
      }
    })
      .then(summoner => parserSummoner(summoner))
      .catch(console.warn);
  });
  return (Promise.all(requests).then(responses => responses).catch(console.warn) as any);
};

export default {
  getAllPlayers: getAllPlayers
};