import Image from 'next/image'

import Ford from '/public/logo/icons8-ford.svg'
import Lamborghini from '/public/logo/icons8-lamborghini.svg'
import Mitsubishi from '/public/logo/icons8-mitsubishi.svg'
import Porsche from '/public/logo/icons8-porsche.svg'
import Tesla from '/public/logo/icons8-tesla.svg'
import Volkswagen from '/public/logo/icons8-volkswagen.svg'
import Honda from '/public/logo/icons8-honda.svg'
import Toyota from '/public/logo/icons8-toyota.svg'
import MercedesBenz from '/public/logo/icons8-mercedes-benz.svg'


export default function LogoCarousel() {

  const logos = [

    { src: Lamborghini, alt: 'lamborghini' },
    { src: Mitsubishi, alt: 'mitsubishi' },
    { src: Honda, alt: 'Honda' },
    { src: Toyota, alt: 'Toyota' },
    { src: MercedesBenz, alt: 'MercedesBenz' },
    { src: Ford, alt: 'Ford' },
    { src: Porsche, alt: 'Porsche' },
    { src: Tesla, alt: 'Tesla' },
    { src: Volkswagen, alt: 'Volkswagen' },

  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  )
}