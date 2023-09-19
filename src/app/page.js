import Button from "./components/button"

/**
 * Renders the Home page component.
 * @returns {JSX.Element} The Home page component.
 */
export default function Home() {  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Página Inicial (via App Router)</h1>
      <Button />
    </main>
  )
}
