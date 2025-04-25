import { getLocale } from 'next-intl/server'
import { LanguageSwitcherSelect } from '@/src/components/molecules/language-switcher-select'
import { Icon } from '@/src/components/atoms/icon'

export const Header = async () => {
  const locale = await getLocale()
  return (
    <header className="flex justify-between bg-primary items-center px-4 fixed top-0 w-full h-20 z-10 2xl:h-32">
      <a href="/">
        <div className="logo-container">
          <Icon
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
            <Icon src="/linkedin.svg" alt="Linkedin icon" />
          </a>
          <a
            href="https://github.com/chucrutes/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src="/github.png" alt="Github icon" />
          </a>
          <a href="/CV.pdf" target="_blank" rel="noreferrer">
            <Icon src="/resume.png" alt="Resume" />
          </a>
          <a href="mailto:tmelo387@gmail.com">
            <Icon src="/gmail.png" alt="Gmail icon" />
          </a>
          <a
            href="https://github.com/chucrutes/leetcode"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src="/icon2.png" alt="Leetcode icon" />
          </a>
        </div>
      </div>
    </header>
  )
}
