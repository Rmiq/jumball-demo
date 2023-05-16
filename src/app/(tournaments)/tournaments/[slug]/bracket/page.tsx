import Bracket from "@/components/bracket"

interface Params {
  params: {
    slug: string[]
  }
}

const tournaments = ({ params }: Params) => {
  const slug = params?.slug

  return (
    <>
      <Bracket />
    </>
  )
}

export default tournaments
