'use client'

import { Icon } from '../atoms/icon'
import { LOCALES } from '@/src/config/envs'
import { useRef, useTransition } from 'react'
import { setUserLocale } from '@/src/services/locale'

type Props = {
  chosenLanguage?: string
}

const languages = [
  {
    key: LOCALES[0],
    icon: <Icon src="/usa.png" alt="USA flag" width={50} height={50} />
  },
  {
    key: LOCALES[1],
    icon: (
      <Icon src="/brazil.png" alt="Brazillian flag" width={50} height={50} />
    )
  }
]

export const LanguageSwitcherSelect = ({ chosenLanguage }: Props) => {
  const [isPending, startTransition] = useTransition()
  const lang = useRef(chosenLanguage ?? 'en')

  const onChange = (language: string) => {
    lang.current = language

    startTransition(() => {
      setUserLocale(language)
    })
  }

  return (
    <div className="flex items-center justify-center">
      {languages.map((item, index) => {
        return (
          <div key={`group-languages-${index}`} className="mr-4">
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
