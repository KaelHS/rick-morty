"use client"
import { CharactersProvider } from '@/context/CharactersContext'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CharactersProvider>
          {children}
    </CharactersProvider>
  )
}
