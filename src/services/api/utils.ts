export const  calculateWinRate = (wins: number, losses: number): number => {
  const totalGames = wins + losses;
  console.log('wins', wins, losses);
  const winRate = (wins * 100 ) / totalGames;
  return winRate;
};
