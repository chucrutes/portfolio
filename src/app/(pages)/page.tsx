'use client'

import { Card } from '../../components/organisms/card/card'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { H1 } from '@/src/components/atoms/h1'

export default function Home() {
  const t = useTranslations('HomePage')
  const silverBullet = useTranslations('silverbullet')

  const router = useRouter()
  return (
    <div className="flex flex-col items-center">
      <H1 text={t('title')} />
      <div className="flex flex-wrap justify-center w-full h-screen px-4 mt-4 gap-8">
        <Card
          title={silverBullet('title')}
          description={silverBullet('description')}
          onClick={() => router.push('/experiences/silverbullet')}
        />
      </div>
    </div>
  )
}
