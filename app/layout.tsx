import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WAE',
  description: 'WAE leads transformative projects and develops cutting-edge purification systems, all aimed at ensuring a sustainable future.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="https://github.com/wae-corp/WAE-F-B/blob/main/public/favicon-32x32.png?raw=true" sizes="32x32" />
      </head>
      <body className='bg-black supressHydrationWarning'>{children}</body>
    </html>
  )
}
