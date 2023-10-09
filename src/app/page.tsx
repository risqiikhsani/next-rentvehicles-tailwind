import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>kucing kucing kucing kucing kucing kucing kucing kucing kucing kucing kucing kucing kucing kucing kucing kucing kucing kucing 
      kucing kucing kucing kucing kucing kucing kucing kucing kucing kucing kucing 
      kucing kucing kucing kucing kucing kucing kucing kucing kucing kucing 
      </p>
      <Button size="sm">Kucing</Button>
      <Link href="/homepage" className={buttonVariants({ variant: "outline" })}>Click here</Link>
      <Badge variant="outline">Badge</Badge>

    </div>
  )
}
