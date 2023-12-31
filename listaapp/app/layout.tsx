import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lista de paises',
  description: 'Uma lista de paises criada com next 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={nunitoSans.className}>
        <main className='bg-gray-100 min-h-screen flex flex-col items-center'>
          <nav className='w-full bg-white h-16 flex items-center justify-center'>
            <section className='container flex items-center gap-3'>
              <img width={48} height={48} src='/Logo.png' alt='emoji globo'/>
              <h1 className='font-bold text-2xl'>Lista de países</h1>
            </section>
          </nav>
        {children}
        </main>
        
        </body>
    </html>
  )
}
