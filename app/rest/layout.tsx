import React from 'react'
import Link from 'next/link'
import { getpoke, getcharacters } from '../../lib/restapicalls'

export default async function layout({
  children,
}: {
  children: React.ReactNode
}) {
  //const pokelist = await getpoke()
  const characterlist = await getcharacters()

  return (
    <div>
      <aside>
        {/*  <ul>
          {pokelist.results.map((el: any) => (
            <li key={el.url}>
              <Link href={`/rest/${el.name}`}>{el.name}</Link>
            </li>
          ))}
        </ul> */}
        <ul>
          {characterlist.results.map((el: any) => (
            <li key={el.id}>
              <Link href={`/rest/${el.id}`}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <section>{children}</section>
    </div>
  )
}
