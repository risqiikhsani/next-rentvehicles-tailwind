import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='overflow-hidden p-5'>
      <h2>testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</h2>
      <Button size="sm">Kucing</Button>
      <Link href="/homepage" className={buttonVariants({ variant: "outline" })}>Click here</Link>
      <Badge variant="outline">Badge</Badge>

    </div>
  )
}
