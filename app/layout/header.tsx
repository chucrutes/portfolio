import Image from 'next/image'
import { Linkedin } from '../assets/linkedin'

export const Header = () => {
  return (
    <header className="flex justify-between">
      <Image
        src={'/logo_without_background.png'}
        alt="My logo"
        width={100}
        height={52}
      />
      <div id="social-medias" className="flex items-center gap-2">
        <a
          href="https://www.linkedin.com/in/thiagocmaraujo/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/chucrutes/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={'/github.png'} width={25} height={25} alt="Github icon" />
        </a>
      </div>
    </header>
  )
}
