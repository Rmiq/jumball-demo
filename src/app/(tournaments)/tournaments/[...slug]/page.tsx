interface Params {
  params: {
    slug: string[]
  }
}

const tournaments = ({ params } : Params) => {
  const slug = params?.slug;
  return (<div>test</div>);
}

export default tournaments;
