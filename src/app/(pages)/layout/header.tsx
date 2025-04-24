import Image from 'next/image'
import { Linkedin } from '../../../assets/linkedin'
import { getLocale } from 'next-intl/server'
import { LanguageSwitcherSelect } from '@/src/components/molecules/language-switcher-select'

export const Header = async () => {
  const locale = await getLocale()
  return (
    <header className="flex justify-between bg-primary items-center px-4">
      <a href="/">
        <div className="logo-container">
          <Image
            src={'/logo_without_background.png'}
            alt="Sloth logo"
            width={100}
            height={52}
          />
        </div>
      </a>
      <div className="flex items-center gap-16">
        <LanguageSwitcherSelect chosenLanguage={locale} />
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
          <a
            href="https://github.com/chucrutes/leetcode"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={'/icon2.png'} width={25} height={25} alt="Gmail icon" />
          </a>
        </div>
      </div>
    </header>
  )
}
