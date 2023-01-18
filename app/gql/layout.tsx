import React from 'react'
import Link from 'next/link'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
})

export default async function layout({
  children,
}: {
  children: React.ReactNode
}) {
  // section for await
  const pokelist = await client
    .query({
      query: gql`
        {
          gen3_species: pokemon_v2_pokemonspecies(
            limit: 69
            order_by: { name: asc }
          ) {
            name
            id
          }
        }
      `,
    })
    .then((res) => res.data.gen3_species)

  return (
    <div>
      <aside>
        <ul>
          {pokelist.map((el: any) => (
            <li key={el.id}>
              <Link href={`/gql/${el.id}`}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </aside>
      {/*  <ApolloProvider client={client}> */}
      <section>{children}</section>
      {/*  </ApolloProvider> */}
    </div>
  )
}
