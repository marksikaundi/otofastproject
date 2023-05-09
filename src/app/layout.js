import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Otofast Projects',
  description: 'Otofast Projects Collections incoporated with DevCircle Africa, with great design and code available for free.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <Header />

        {/* NavBar */}

        {/* SearchBox */}
        {children}
        </body>
    </html>
  )
}
