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
      <div className="flex flex-wrap justify-center w-full px-4 mt-4 gap-8">
        <Card
          title="Silver Bullet"
          description="I've been contributing to Silver Bullet since 2021"
          onClick={() => router.push('/experiences/teste')}
        />
        <Card
          title="Silver Bullet"
          description="I've been contributing to Silver Bullet since 2021"
          onClick={() => router.push('/experiences/teste')}
        />
        <Card
          title="Silver Bullet"
          description="I've been contributing to Silver Bullet since 2021"
          onClick={() => router.push('/experiences/teste')}
        />
        <Card
          title="Silver Bullet"
          description="I've been contributing to Silver Bullet since 2021"
          onClick={() => router.push('/experiences/teste')}
        />
        <Card
          title="Silver Bullet"
          description="I've been contributing to Silver Bullet since 2021"
          onClick={() => router.push('/experiences/teste')}
        />
      </div>
    </div>
  )
}
