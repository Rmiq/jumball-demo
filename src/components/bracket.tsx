'use client';

import { useTournament } from '@/hooks/use-tournament';
import { useEffect, useState } from 'react';
import TournamentsHeader from './tournaments-header';


const EmptyBracket = () => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <p className='"mb-8 mt-2 text-center text-sm font-normal leading-6 text-muted-foreground"'>No bracket yet. Start the tournament</p>
      </div>
    </div>
  )
}

const Bracket = () => {

  const [tournament, setTournament] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  

  const onClick = () => {
    setTournament(!tournament);
  }

  const TournamentsHeader = () => {
    return (
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className='text-3xl font-bold'>Tournament info</h1>
          <p className="text-lg text-muted-foreground">Tournament bracket</p>
        </div>
        {/* <button
          onClick={onClick}
          className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
          disabled:opacity-50 disabled:pointer-events-none ring-offset-background
          bg-primary text-primary-foreground hover:bg-primary/90
          h-10 py-2 px-4`}
        // disabled={isLoading}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) :
            null
          }
          {tournament ? 'End tournament' : 'Start tournament'}
        </button> */}
      </div>
    )
  }

  const GeneratedBracket = () => {

    const teams = [
      { id: 1, name: 'Player Name/Player Name' },
      { id: 2, name: 'Player Name/Player Name' },
      { id: 3, name: 'Player Name/Player Name' },
      { id: 4, name: 'Player Name/Player Name' },
      { id: 5, name: 'Player Name/Player Name' },
      { id: 6, name: 'Player Name/Player Name' },
      { id: 7, name: 'Player Name/Player Name' },
      { id: 8, name: 'Player Name/Player Name' },
    ];


    const generateBracket = (teams) => {
      const rounds = Math.ceil(Math.log2(teams.length));
      let bracket = [];
      let matchCount = teams.length / 2;

      const getRoundName = (round, rounds) => {
        if (rounds - round === 1) return "Final"
        if (rounds - round === 2) return "Semi-final"
        return `1/${2 ** (rounds - round - 1)}`
      }

      for (let round = 0; round < rounds; round++) {
        let matches = [];

        for (let match = 0; match < matchCount; match++) {
          const team1 = teams[match * 2];
          const team2 = teams[match * 2 + 1];

          const matchElement = (
            <div className="flex mb-4 space-x-4 bg-gray-100 border border-gray-200 rounded p-2 justify-center" key={`round-${round}-match-${match}`}>
              <div className="font-bold">{team1.name}</div>
              <div className=''>
                2:0
              </div>
              <div className="">{team2.name}</div>
            </div>
          );

          matches.push(matchElement);
        }

        bracket.push(
          <div className="mb-8 space-y-2" key={`round-${round}`}>
            <div className='flex justify-center'>
              <span className='text-muted-foreground'>{getRoundName(round, rounds)}</span>
            </div>
            {matches}
          </div>
        );

        matchCount /= 2;
      }

      return bracket;
    };

    return (<div className="bracket">{generateBracket(teams)}</div>)
  }

  return (<div className='space-y-8'>
    <TournamentsHeader />
    {tournament ? <GeneratedBracket /> : <EmptyBracket />}
  </div>);
}

export default Bracket;
