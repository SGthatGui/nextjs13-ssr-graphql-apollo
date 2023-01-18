import React from 'react'
import { getsinglepoke } from '../../../lib/restapicalls'

const page = async ({ params }: { params: { [key: string]: string } }) => {
  let pokename = params.name
  const poke = await getsinglepoke(pokename)

  return (
    <div>
      <section>
        <h1>name: {poke.name}</h1>
        <img
          src={poke.sprites.front_default}
          alt='front default pixel ilustration of the pokemon'
        />
      </section>
      <section>
        <p>weight: {poke.weight}</p>
        <p>height: {poke.height}</p>
        <p>base_experience: {poke.base_experience}</p>
        {poke.stats.map((el: any) => (
          <>
            <p key={el.i}>
              {el.stat.name}: {el.base_stat}
            </p>
          </>
        ))}
        <img
          src={poke.sprites.back_default}
          alt='back default pixel ilustration of the pokemon'
        />
      </section>
      <section>
        <h3>{poke.name} moves and attacks</h3>
        <img
          src={poke.sprites.front_shiny}
          alt='front default pixel ilustration of the pokemon'
        />

        {/*  {poke.moves.map((el: any) => (
          <>
            <p key={el.move.name}>{el.move.name}</p>

            <p>{el.move.url}</p>
          </>
        ))} */}

        <img
          src={poke.sprites.back_shiny}
          alt='back default pixel ilustration of the pokemon'
        />
      </section>
    </div>
  )
}

export default page
