const Page = () => {
  const teams = [
    { id: 1, name: "Player Name/Player Name" },
    { id: 2, name: "Player Name/Player Name" },
    { id: 3, name: "Player Name/Player Name" },
    { id: 4, name: "Player Name/Player Name" },
    { id: 5, name: "Player Name/Player Name" },
    { id: 6, name: "Player Name/Player Name" },
    { id: 7, name: "Player Name/Player Name" },
    { id: 8, name: "Player Name/Player Name" },
  ]

  return (
    <div className="grid gap-1">
      <h1 className="text-3xl font-bold">Participants</h1>
      <p className="text-lg text-muted-foreground">List of participants in the tournaments</p>
      <div className="my-4 divide-y divide-border rounded-md border">
        {teams.map((team, index) => {
          return (
            <div className="flex items-center justify-between p-4" key={index}>
              <div className="flex gap-2">
                <span className="mr-2">{index + 1}</span>
                <p>{team.name}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Page
