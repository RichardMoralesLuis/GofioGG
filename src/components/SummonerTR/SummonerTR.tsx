import React, { FC } from 'react';
import { Summoner } from '../../services/api/models';
import './SummonerTR.css';

interface SummonerTRProps {
  summoner: Summoner;
}

export const SummonerTR: FC<SummonerTRProps> = ({ summoner }) => {
  return (
    <div className="SummonerRow">
      {summoner &&
      <div className="SummonerItem">
        <div>{summoner.summonerName}</div>
        <div>{summoner.tier}</div>
        <div>{summoner.rank}</div>
        <div>{summoner.leaguePoints}</div>
        <div>{summoner.wins}</div>
        <div>{summoner.losses}</div>
        <div>{summoner.winRate}%</div>
      </div>
      }
    </div>
  );
};
