'use client'

import Image from 'next/image'
import { LOCALES } from '@/app/config/envs'
import { setUserLocale } from '@/app/services/locale'
import { useRef, useTransition } from 'react'

type Props = {
  chosenLanguage?: string
}

const languages = [
  {
    key: LOCALES[0],
    icon: <Image src="/usa.png" width={25} height={25} alt="brazillian flag" />
  },
  {
    key: LOCALES[1],
    icon: (
      <Image src="/brazil.png" width={25} height={25} alt="brazillian flag" />
    )
  }
]

export const LanguageSwitcherSelect = (_props: Props) => {
  const [isPending, startTransition] = useTransition()
  const lang = useRef('en')

  const onChange = (language: string) => {
    lang.current = language
    startTransition(() => {
      setUserLocale(language)
    })
  }

  return (
    <div className="flex items-center">
      {languages.map((item, index) => {
        return (
          <div key={`group-languages-${index}`} className="m-2">
            <button
              type="button"
              disabled={isPending}
              className={`text-black m-2 ${lang.current === item.key ? 'opacity-70 border-primary-btn' : ''}`}
              key={item.key}
              onClick={() => onChange(item.key)}
            >
              {item.icon}
            </button>
            {lang.current === item.key && (
              <div
                key={`divider-${index}`}
                className="border-2 rounded-2xl mx-2 border-primary-btn"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
