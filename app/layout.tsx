import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Grow Vault',
  description: 'Created with superflex',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
