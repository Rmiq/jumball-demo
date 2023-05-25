"use client"

import { useEffect, useState } from "react"
import { Icons } from "./icons"
import { createPortal } from "react-dom"
import { useForm } from "react-hook-form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const EmptyBracket = () => {
  return (
    <div className="animate-in fade-in-50 flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <p className='"mb-8 text-muted-foreground" mt-2 text-center text-sm font-normal leading-6'>
          No bracket yet. Start the tournament
        </p>
      </div>
    </div>
  )
}

const Bracket = () => {
  const [tournament, setTournament] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    unregister,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
  }

  const onOpenChange = (e: any) => {
    if (!e) {
      // Clear form data after modal close
      unregister("team1-set1")
      unregister("team1-set2")
      unregister("team1-set3")
      unregister("team2-set1")
      unregister("team2-set2")
      unregister("team2-set3")
      unregister("matchId")
    }
  }

  const onClick = () => {
    setTournament(!tournament)
  }

  const TournamentsHeader = () => {
    return (
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl font-bold">Tournament info</h1>
          <p className="text-lg text-muted-foreground">Tournament bracket</p>
        </div>
        <button
          onClick={onClick}
          className={`inline-flex h-10 items-center justify-center rounded-md bg-primary px-4
          py-2 text-sm font-medium text-primary-foreground
          ring-offset-background transition-colors hover:bg-primary/90
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
          focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`}
        >
          {isLoading ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : null}
          {tournament ? "End tournament" : "Start tournament"}
        </button>
      </div>
    )
  }

  const GeneratedBracket = () => {
    const teams = [
      { id: 1, name: "Player Name/Player Name", player1: "Player 1", player2: "Player 2" },
      { id: 2, name: "Player Name/Player Name", player1: "Player 3", player2: "Player 4" },
      { id: 3, name: "Player Name/Player Name", player1: "Player 5", player2: "Player 6" },
      { id: 4, name: "Player Name/Player Name", player1: "Player 7", player2: "Player 8" },
      { id: 5, name: "Player Name/Player Name", player1: "Player 9", player2: "Player 10" },
      { id: 6, name: "Player Name/Player Name", player1: "Player 11", player2: "Player 12" },
      { id: 7, name: "Player Name/Player Name", player1: "Player 13", player2: "Player 14" },
      { id: 8, name: "Player Name/Player Name", player1: "Player 15", player2: "Player 16" },
    ]

    const generateBracket = (teams: any) => {
      const rounds = Math.ceil(Math.log2(teams.length))
      let tournament = {
        id: "t_0",
        matches: [],
      } as any

      let matchCount = teams.length / 2
      let count = 0

      const getRoundName = (round: number, rounds: number) => {
        if (rounds - round === 1) return "Final"
        if (rounds - round === 2) return "Semi-final"
        return `1/${2 ** (rounds - round - 1)}`
      }

      for (let round = 0; round < rounds; round++) {
        let matches = []

        for (let match = 0; match < matchCount; match++) {
          const team1 = teams[match * 2]
          const team2 = teams[match * 2 + 1]

          // Increment match id
          count++
          tournament.matches.push({
            matchId: count,
            teams: {
              team1: {
                player1: team1.player1,
                player2: team1.player2,
              },
              team2: {
                player1: team2.player1,
                player2: team2.player2,
              },
            },
            results: {
              team1: {
                set1: 0,
                set2: 0,
                set3: 0,
              },
              team2: {
                set1: 0,
                set2: 0,
                set3: 0,
              },
            },
          })
        }
        matchCount /= 2
      }

      return tournament
    }

    const calculateSetResult = (results: any) => {
      let x = 0
      let y = 0

      for (let i = 0; i < 3; i++) {
        if (results.team1[`set${i + 1}`] > results.team2[`set${i + 1}`]) {
          x++
        }
        if (results.team1[`set${i + 1}`] < results.team2[`set${i + 1}`]) {
          y++
        }
      }

      return `${x} : ${y}`
    }

    const renderBracket = (tournament: any) => {
      let bracket = []

      for (let i = 0; i < tournament.matches.length; i++) {
        const match = tournament.matches[i]

        const getRoundName = (round: number, rounds: number) => {
          if (rounds - round === 1) return "Final"
          if (rounds - round === 2) return "Semi-final"
          return `1/${2 ** (rounds - round - 1)}`
        }

        const matchElement = (
          <Dialog onOpenChange={onOpenChange} key={i}>
            <DialogTrigger asChild>
              <div
                className="mb-4 flex cursor-pointer justify-center space-x-4 rounded border border-gray-200 bg-gray-100 p-2"
                key={`match-${i}`}
              >
                <div className="font-bold">
                  {match.teams.team1.player1}/{match.teams.team1.player2}
                </div>
                <div className="">{calculateSetResult(match.results)}</div>
                <div className="">
                  {match.teams.team2.player1}/{match.teams.team2.player2}
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <form onSubmit={handleSubmit(onSubmit)}>
                <DialogHeader>
                  <DialogTitle>Update score</DialogTitle>
                  <DialogDescription>Make changes to the game result. Click submit when you're done.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 pb-4">
                  <div className="mb-[-0.75rem] flex items-center justify-between">
                    <div></div>
                    <div className="flex gap-x-2">
                      <span className="w-10 text-center text-sm text-muted-foreground">Set 1</span>
                      <span className="w-10 text-center text-sm text-muted-foreground">Set 2</span>
                      <span className="w-10 text-center text-sm text-muted-foreground">Set 3</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="name" className="text-right">
                      {match.teams.team1.player1}/{match.teams.team1.player2}
                    </label>
                    <div className="flex gap-x-2">
                      <input
                        className="radius-0 input h-10 w-10 rounded-sm p-1"
                        defaultValue={match.results.team1.set1}
                        type="number"
                        max="99"
                        min="0"
                        {...register(`team1-set1`)}
                      />
                      <input
                        className="input h-10 w-10 rounded-sm p-1"
                        defaultValue={match.results.team1.set2}
                        type="number"
                        max="99"
                        min="0"
                        {...register("team1-set2")}
                      />
                      <input
                        className="input h-10 w-10 rounded-sm p-1"
                        defaultValue={match.results.team1.set3}
                        type="number"
                        max="99"
                        min="0"
                        {...register("team1-set3")}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="name" className="text-right">
                      {match.teams.team2.player1}/{match.teams.team2.player2}
                    </label>
                    <div className="flex gap-x-2">
                      <input
                        className="input h-10 w-10 rounded-sm p-1"
                        defaultValue={match.results.team2.set1}
                        type="number"
                        max="99"
                        min="0"
                        {...register("team2-set1")}
                      />
                      <input
                        className="input h-10 w-10 rounded-sm p-1"
                        defaultValue={match.results.team2.set1}
                        type="number"
                        max="99"
                        min="0"
                        {...register("team2-set2")}
                      />
                      <input
                        className="input h-10 w-10 rounded-sm p-1"
                        defaultValue={match.results.team2.set1}
                        type="number"
                        max="99"
                        min="0"
                        {...register("team2-set3")}
                      />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <input className="hidden" defaultValue={match.matchId} {...register("matchId")} />
                  <input
                    type="submit"
                    value="Submit"
                    className="disabled:opacity-50` inline-flex h-10 cursor-pointer items-center justify-center rounded-md
                      bg-primary px-4 py-2 text-sm
                      font-medium text-primary-foreground ring-offset-background
                      transition-colors hover:bg-primary/90 focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none"
                  />
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )

        // bracket.push(
        //   <div className="flex justify-center">
        //     <span className="text-muted-foreground">{getRoundName(i, tournament.matches.length)}</span>
        //   </div>
        // )
        bracket.push(matchElement)
      }

      return bracket
    }

    const tournament: any = generateBracket(teams)

    return <div className="bracket">{renderBracket(tournament)}</div>
  }

  return (
    <div className="space-y-8">
      <TournamentsHeader />
      {tournament ? <GeneratedBracket /> : <EmptyBracket />}
    </div>
  )
}

export default Bracket
