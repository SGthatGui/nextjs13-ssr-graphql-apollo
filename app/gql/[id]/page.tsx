import React from 'react'
import { useQuery, gql } from '@apollo/client'

const getdata = gql`
  {
    character(id: 1) {
      name
      status
      species
      type
      gender
      origin {
        id
        name
        dimension
      }
      location {
        id
        name
        dimension
      }
      image
      episode {
        id
        name
      }
    }
  }
`

const page = async ({ params }: { params: { [key: string]: string } }) => {
  let pokename = params.id

  return (
    <div>
      <h1>gql single poke info component</h1>
      {/* <section>
        <h1>name: {poke.name}</h1>
        <img src={poke.sprites.front_default} alt='' />
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
        <img src={poke.sprites.back_default} alt='' />
      </section>
      <section>
        <h3>{poke.name} moves and attacks</h3>
        <img src={poke.sprites.front_shiny} alt='' />

        {poke.moves.map((el: any) => (
          <>
            <p key={el.move.name}>{el.move.name}</p>

            <p>{el.move.url}</p>
          </>
        ))}

        <img src={poke.sprites.back_shiny} alt='' />
      </section> */}
    </div>
  )
}

export default page
