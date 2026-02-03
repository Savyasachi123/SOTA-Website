// src/app/layout.tsx
import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SOTA – AI Community',
  description: 'Empowering high schoolers to lead the AI revolution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden antialiased">{children}</body>
    </html>
  )
}
