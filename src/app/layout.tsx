"use client"
import { FakeAuthProvider } from '@/context/FakeAuthContext'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <FakeAuthProvider>
            {children}
        </FakeAuthProvider>
      </body>
    </html>
  )
}
