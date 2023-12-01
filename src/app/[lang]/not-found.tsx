import Title from '@/components/typography/Title'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <Title title='Not Found' text='Could not find requested resource.'/>
      <Link href="/">Return Home</Link>
    </div>
  )
}