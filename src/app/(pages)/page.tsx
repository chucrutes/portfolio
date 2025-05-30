'use client'

import { Card } from '../../components/organisms/card/card'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { H1 } from '@/src/components/atoms/h1'
import Image from 'next/image'
import { P } from '@/src/components/atoms/p'
import { Icon } from '@/src/components/atoms/icon'

export default function Home() {
  const t = useTranslations('HomePage')
  const silverBullet = useTranslations('silverbullet')
  const unipampa = useTranslations('unipampa')
  const teasy = useTranslations('teasy')
  const whoami = useTranslations('whoami')

  const router = useRouter()
  return (
    <div className="px-4 py-4">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center">
        <div className="flex justify-center items-center gap-3">
          <Image
            src={'/profile3.png'}
            width={180}
            height={180}
            alt="profile photo"
          />
          <div className="flex flex-col items-center">
            <H1 text={whoami('position')} />
            <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 pt-8 gap-3.5">
              <Icon src="/java.png" alt="Java icon" />
              <Icon src="/c.png" alt="C icon" />
              <Icon src="/haskell.png" alt="Haskell icon" />
              <Icon src="/typescript.png" alt="Typescript icon" />
              <Icon src="/dart.png" alt="Dart icon" />
              <Icon src="/php.png" alt="Php icon" />
            </div>
          </div>
        </div>
        <div className="pt-4">
          <H1 text={whoami('logo-title')} />
          <div className="pt-4">
            <P text={whoami('story')} lineclamp={'none'} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-8">
        <H1 text={t('title')} />
        <div className="flex flex-wrap justify-center w-full px-4 mt-4 gap-8">
          <Card
            title={silverBullet('title')}
            description={silverBullet('description')}
            onClick={() => router.push('/silverbullet')}
          />
          <Card
            title={unipampa('title')}
            description={unipampa('description')}
            onClick={() => router.push('/unipampa')}
          />
          <Card
            title={teasy('title')}
            description={teasy('description')}
            onClick={() => router.push('/teasy')}
          />
        </div>
      </div>
    </div>
  )
}
