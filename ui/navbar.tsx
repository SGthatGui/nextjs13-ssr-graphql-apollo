import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <div>
      <nav>
        <Link href='/'>Home</Link>
        <br />
        <Link href='rest'>Rest API call</Link>
        <br />
        <Link href='gql'>GraphQL API call</Link>
      </nav>
    </div>
  )
}

export default NavBar
