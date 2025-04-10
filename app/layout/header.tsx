import Image from 'next/image'
import { Linkedin } from '../assets/linkedin'
import { LanguageSwitcherSelect } from '../components/atoms/language-switcher-select'

export const Header = () => {
  return (
    <header className="flex justify-between bg-primary items-center px-4">
      <div className="logo-container">
        <Image
          src={'/logo_without_background.png'}
          alt="Sloth logo"
          width={100}
          height={52}
        />
      </div>
      <div className="flex items-center gap-16">
        <LanguageSwitcherSelect />
        <div id="social-medias" className="flex gap-4">
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
            <Image
              src={'/github.png'}
              width={25}
              height={25}
              alt="Github icon"
            />
          </a>
          <a href="/CV.pdf" target="_blank" rel="noreferrer">
            <Image src={'/resume.png'} width={25} height={25} alt="Resume" />
          </a>
          <a href="mailto:tmelo387@gmail.com">
            <Image src={'/gmail.png'} width={25} height={25} alt="Gmail icon" />
          </a>
        </div>
      </div>
    </header>
  )
}
