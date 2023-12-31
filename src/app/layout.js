import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

/**
 * Renders the root layout of the application.
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components to be rendered.
 * @returns {JSX.Element} - The JSX element representing the root layout.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}       
      </body>
    </html>
  )
}
