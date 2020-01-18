import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { Summoner } from './services/api/models';
import API from './services/api/API';

const App:FC = () => {

  const [summoners, setSummoners] = useState<Summoner[]>();

  useEffect(() => {
    API.Summoners.getAllPlayers()
      .then((summoners: Summoner[]) => {
        setSummoners(summoners);
        console.log('data', summoners);
      })
      .catch(console.warn);
  }, []);

  return (
    <div className="App">

    </div>
  );
};

export default App;
