import React from 'react'
import { getsinglepoke, singlecharater } from '../../../lib/restapicalls'

const page = async ({ params }: { params: { [key: string]: string } }) => {
  let pokename = params.id
  // const poke = await getsinglepoke(pokename)
  const char = await singlecharater(pokename)

  return (
    <div>
      <section>
        <h1>name: {char.name}</h1>
        <img src={char.image} alt='character avatar ilustration' />
      </section>
      <section>
        <p>species: {char.species}</p>
        <p>gender: {char.gender}</p>
        <p>type: {char.type}</p>
        <p>origin: {char.origin.name}</p>
        <p>status: {char.status}</p>
      </section>
      <section>
        <p>last know location: {char.location.name}</p>
      </section>

      <section>
        <h3>episodes</h3>

        {char.episode.map((el: any) => (
          <>
            <p key={el.i}>{el}</p>
          </>
        ))}
      </section>
    </div>
  )
}

export default page
