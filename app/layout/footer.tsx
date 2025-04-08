import Image from 'next/image'
import { Linkedin } from '../assets/linkedin'

export const Footer = () => {
  return (
    <footer className="flex justify-between">
      <Image
        src={'/logo_without_background.png'}
        alt="My logo"
        width={100}
        height={52}
      />
      <div id="social-medias" className="flex items-center">
        <a
          href="https://www.linkedin.com/in/thiagocmaraujo/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
      </div>
    </footer>
  )
}
