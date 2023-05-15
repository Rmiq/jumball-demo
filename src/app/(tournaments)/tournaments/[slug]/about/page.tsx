import Bracket from '@/components/bracket';

interface Params {
  params: {
    slug: string[]
  }
}

const tournaments = ({ params }: Params) => {
  const slug = params?.slug;

  return (
    <div>
      <h1 className='text-3xl font-bold'>Example tournament</h1>
      <p className="text-lg text-muted-foreground">Main information about tournament</p>
    </div>
  );
}

export default tournaments;
