"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { i18n } from '@/i18n.config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LanguageIcon } from "@heroicons/react/24/solid"

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const convertLocaleName = (locale: string) => {
    switch (locale) {
      case 'en':
        return 'English'
      case 'id':
        return 'Indonesia'
      default:
        return locale
    }
  }

  return (

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LanguageIcon className="w-4 h-4"/>
          <span className="sr-only">Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => {
          return (
            <DropdownMenuItem asChild key={locale}>
              <Link href={redirectedPathName(locale)}>{convertLocaleName(locale)}</Link>
            </DropdownMenuItem>
          )
        })}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}