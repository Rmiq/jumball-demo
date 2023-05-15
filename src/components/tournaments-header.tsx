'use client'

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Icons } from "./icons";
import { useTournament } from "@/hooks/use-tournament";

const TournamentsHeader = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tournament, setTournament] = useTournament();
  const onClick = () => {
    setTournament(true);
  }

  useEffect(() => {
    console.log(tournament);
  },[tournament])
  
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className='text-3xl font-bold'>Tournament info</h1>
        <p className="text-lg text-muted-foreground">Tournament bracket</p>
      </div>
      <button
        onClick={onClick}
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
          disabled:opacity-50 disabled:pointer-events-none ring-offset-background
          bg-primary text-primary-foreground hover:bg-primary/90
          h-10 py-2 px-4`}
        disabled={isLoading}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) :
          null
        }
        Start tournament
      </button>
    </div>
  )
}

export default TournamentsHeader;
