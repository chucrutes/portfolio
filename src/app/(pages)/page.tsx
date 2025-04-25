'use client'

import { Card } from '../../components/organisms/card/card'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { H1 } from '@/src/components/atoms/h1'
import Image from 'next/image'

export default function Home() {
  const t = useTranslations('HomePage')
  const silverBullet = useTranslations('silverbullet')
  const unipampa = useTranslations('unipampa')
  const teasy = useTranslations('teasy')
  const whoami = useTranslations('whoami')

  const router = useRouter()
  return (
    <div className="px-4">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex justify-center items-center gap-3">
          <Image
            src={'/profile3.png'}
            width={180}
            height={180}
            alt="profile photo"
          />
          <div className="flex flex-col items-center">
            <H1 text={whoami('position')} />
            <div className="flex gap-4 pt-8">
              <Image src={'/java.png'} width={25} height={25} alt="Java icon" />
              <Image src={'/c.png'} width={25} height={25} alt="C icon" />
              <Image
                src={'/haskell.png'}
                width={25}
                height={25}
                alt="Haskell icon"
              />
              <Image
                src={'/typescript.png'}
                width={25}
                height={25}
                alt="Typescript icon"
              />
              <Image src={'/php.png'} width={25} height={25} alt="Php icon" />
            </div>
          </div>
        </div>
        <div className="pt-4">
          <H1 text={whoami('logo-title')} />
          <p>{whoami('story')}</p>
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
            onClick={() => router.push('/unipampa')}
          />
        </div>
      </div>
    </div>
  )
}
