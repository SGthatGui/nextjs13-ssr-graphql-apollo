import NavBar from '../ui/navbar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}
