import Link from 'next/link';

interface Params {
  params: {
    slug: string[];
  };
}

const tournaments = ({ params }: Params) => {
  const slug = params?.slug;

  const tournaments = [{ name: 'tournament 1' }, { name: 'tournament 2' }, { name: 'tournament 3' }];

  return (
    <div className="container mx-auto pt-6">
      <h1 className="text-4xl font-bold">Tournament list</h1>
      <p className="text-lg text-muted-foreground">Find tournament near you</p>
      <div className="grid grid-cols-1 gap-4 pt-12 xl:grid-cols-3">
        {tournaments.map((tournament, index) => {
          return (
            <Link
              className="rounded-lg border bg-card text-card-foreground shadow-sm w-full cursor-pointer xl:w-[380px]"
              key={index}
              href={'/tournaments/1/about'}
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold leading-none tracking-tight">{tournament.name}</h3>
                <p className="text-sm text-muted-foreground">Tournament description</p>
                <div className="p-6 pt-0"></div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default tournaments;
