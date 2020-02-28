import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { Summoner } from './services/api/models';
import API from './services/api/API';
import { SummonerTable } from './components/SummonerTable/SummonerTable';

const App:FC = () => {

  const [summoners, setSummoners] = useState<Summoner[]>([]);

  useEffect(() => {
    API.Summoners.getAllPlayers()
      .then((summoners: Summoner[]) => {
        setSummoners(summoners);
      })
      .catch(console.warn);
  }, []);

  console.log('🚀',summoners[0]);
  return (
    <div className="App">
      <div className="Main">
        <div className="Content">
          <SummonerTable summoners={summoners}/>
        </div>
      </div>


    </div>
  );
};

export default App;
