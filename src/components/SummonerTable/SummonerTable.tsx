import * as React from 'react';
import { FC } from 'react';
import { Summoner } from '../../services/api/models';
import { SummonerTR } from '../SummonerTR/SummonerTR';
import './summonerTable.css'

interface SummonerTableProps {
  summoners: Summoner[];
}

export const SummonerTable: FC<SummonerTableProps> = ({summoners}) => {
  return (
    <div className="summonerTable">
      <div className="summonerTableHeader">
        <h3><strong>Nombre</strong></h3>
        <h3><strong>División</strong></h3>
        <h3><strong>liga</strong></h3>
        <h3><strong>Puntos</strong></h3>
        <h3><strong>Victorias</strong></h3>
        <h3><strong>Derrotas</strong></h3>
        <h3><strong>Ratio de victoria</strong></h3>
      </div>

      {summoners.map(summoner => <SummonerTR summoner={summoner}/>)}
  </div>)
};
