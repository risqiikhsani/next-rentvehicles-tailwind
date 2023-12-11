import "yet-another-react-lightbox/styles.css";


import Sidebar from '@/components/sidebar'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

import { Toaster, toast } from 'sonner'
import { AuthHandler } from '@/context/Auth'
import { Locale, i18n } from '@/i18n.config'
import NavBar from './_page/navbar'
import Footer from './_page/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Rent',
  description: 'Rent vehicle any time!',
}
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <AuthHandler>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar lang={params.lang}/>
          <main className="mt-20 w-full">
            {children}
          </main>
          <Footer lang={params.lang}/>
          <Toaster position="top-center" richColors/>
        </ThemeProvider>
        </AuthHandler>
      </body>
    </html>
  )
}
