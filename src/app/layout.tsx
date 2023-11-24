import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

import { Toaster, toast } from 'sonner'
import { AuthHandler } from '@/context/Auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Rent',
  description: 'Rent vehicle any time!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthHandler>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="container mx-auto mt-20 flex">
            {children}
          </main>
          <Footer />
          <Toaster position="top-center" richColors/>
        </ThemeProvider>
        </AuthHandler>
      </body>
    </html>
  )
}
