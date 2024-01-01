import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import couch from '@/assets/couch.svg'
import Link from 'next/link'
import  Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Room GPT',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#7181c] flex flex-col min-h-screen"}>
        <header className='w-full'>
          <div><Link href={'/'} className='flex items-center gap-3'>
            <Image src={couch} width={100} height={100} ></Image>
          </Link></div>
        </header>
        
        {children}</body>
    </html>
  )
}