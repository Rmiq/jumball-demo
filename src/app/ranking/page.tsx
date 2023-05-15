import { Icons } from "@/components/icons";

const Page = () => {

  const players = [
    {
      name: 'Player 1',
      tournamentsCount: 1,
      points: 80
    },
    {
      name: 'Player 2',
      tournamentsCount: 1,
      points: 60
    },
    {
      name: 'Player 3',
      tournamentsCount: 1,
      points: 40
    },
    {
      name: 'Player 5',
      tournamentsCount: 1,
      points: 20
    },
    {
      name: 'Player 6',
      tournamentsCount: 1,
      points: 0
    },
    {
      name: 'Player 7',
      tournamentsCount: 1,
      points: 0
    },
    {
      name: 'Player 8',
      tournamentsCount: 1,
      points: 0
    },
    {
      name: 'Player 9',
      tournamentsCount: 1,
      points: 0
    },
    {
      name: 'Player 12',
      tournamentsCount: 1,
      points: 0
    },
    {
      name: 'Player 11',
      tournamentsCount: 1,
      points: 0
    },

  ];

  const Icon = Icons["trophy"];

  const getTrophy = (index: number) => {
    if (index == 0) return <Icon color='gold' />
    if (index == 1) return <Icon color='silver' />
    if (index == 2) return <Icon color='brown' />
    return null
  }

  return (
    <div>
      <h1 className='text-3xl font-bold'>Ranking</h1>
      <p className="text-lg text-muted-foreground">List of players sorted by the total points gathered</p>
      <table className="table table-compact w-full my-8">
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Tournaments Played</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border rounded-md border my-4">
          {players.map((player, index) => {
            return (
              <tr>
                <th className="border-none">{index + 1}</th>
                <td className="border-none">{player.name}</td>
                <td className="border-none">{player.tournamentsCount}</td>
                <td className="border-none">{player.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div >
  );
}

export default Page;
