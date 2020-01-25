
export type TeamGofioPlayers = 'sinsajo02' | 'EleTanPancho';

export interface Summoner {
  profileIconId: number;
  name: TeamGofioPlayers;
  puuid: string;
  summonerLevel: number;
  id: string;
  accountId: string;
}


export interface SummonerData {
  queueType: string;
  summonerName: string;
  hotStreak: boolean;
  wins: number;
  losses: number;
  rank: string;
  tier: string;
  leagueId: string;
  leaguePoints: number;
}



