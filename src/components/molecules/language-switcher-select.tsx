'use client'

import Image from 'next/image'
import { LOCALES } from '@/src/config/envs'
import { useRef, useTransition } from 'react'
import { setUserLocale } from '@/src/services/locale'

type Props = {
  chosenLanguage?: string
}

const languages = [
  {
    key: LOCALES[0],
    icon: <Image src="/usa.png" alt="USA flag" width={40} height={40} />
  },
  {
    key: LOCALES[1],
    icon: <Image src="/brazil.png" alt="USA flag" width={40} height={40} />
  },
  {
    key: LOCALES[2],
    icon: (
      <Image src="/thailand.png" alt="Thailand flag" width={40} height={40} />
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
    <div key="group-languages" className="flex md:mr-8">
      {languages.map((item, index) => {
        return (
          <div key={`flag-${index}`}>
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
