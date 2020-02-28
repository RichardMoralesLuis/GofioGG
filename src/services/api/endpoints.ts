import axios from 'axios';
import { Summoner } from './models';
import { parserSummoner } from './parsers';


const PLAYERS_NAME = ['v9El-p8UZFYiNEqD5Oc9RR9G_zsqenJJkjx2XS8YkJVIMzs', 'U7oadWNPLSRSnDJb3xxEb_o16PAH5F_kfoty6Qwn8RlmdqI'];
const baseURL = 'https://euw1.api.riotgames.com/lol';

const getAllPlayers = (): Promise<Summoner[]> => {
  const requests = PLAYERS_NAME.map(player => {
  const url = 'league/v4/entries/by-summoner';
    return axios.get(`${baseURL}/${url}/${player}`, {
      headers: {
        'X-Riot-Token': 'RGAPI-9677b094-ebc0-42e0-a37f-1e4de77cdfec'
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
