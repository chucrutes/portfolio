'use client'

import { Card } from './components/organisms/card/card'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('HomePage')

  const router = useRouter()
  return (
    <div className="flex flex-col items-center">
      <h1 className="pb-2 text-2xl">{t('title')}</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 px-4 mt-2 gap-4">
        <Card
          title="Silver Bullet"
          description="I've been contributing to Silver Bullet since 2021"
          onClick={() => router.push('/experiences/teste')}
          // onClick={() => console.log('clicked')}
        />
      </div>
    </div>
  )
}
