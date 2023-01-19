import React from 'react'
import { rmclient } from '../../../lib/graphQLapi'
import { gql } from '@apollo/client'

const page = async ({ params }: { params: { [key: string]: string } }) => {
  // section for await
  const char = await rmclient
    .query({
      query: gql`
          {
            character(id: ${params.id}) {
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
        `,
    })
    .then((res) => res.data)

  return (
    <div>
      <section>
        <h1>name: {char.character.name}</h1>
        <img src={char.character.image} alt='character avatar ilustration' />
      </section>
      <section>
        <h2>know stats</h2>
        <p>species: {char.character.species}</p>
        <p>gender: {char.character.gender}</p>
        <p>type: {char.character.type}</p>
        <p>origin: {char.character.name}</p>
        <p>status: {char.character.status}</p>
        <p>last know location: {char.character.location.name}</p>
      </section>

      <section>
        <h3>episodes</h3>
        {char.character.episode.map((el: any) => (
          <>
            <p key={el.id}>{el.name}</p>
          </>
        ))}
      </section>
    </div>
  )
}

export default page
