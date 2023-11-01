import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '▷ Développement de sites vitrines à Bordeaux | Pixilab',
  description: 'Création de sites internets et sites vitrines à Bordeaux et partout en France.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
