export const getpoke = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=69')
  return res.json()
}

export const getsinglepoke = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return res.json()
}

export const getcharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  return res.json()
}

export const singlecharater = async (id: string) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  return res.json()
}
