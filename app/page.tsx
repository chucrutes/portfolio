import { getTranslations } from 'next-intl/server'
import { Card } from './components/organisms/card/card'

export default async function Home() {
  const t = await getTranslations('HomePage')
  return (
    <div className="flex flex-col items-center">
      <h1 className="pb-2 text-2xl">{t('title')}</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 px-4 mt-2 gap-4">
        <Card
          title="Silver Bullet"
          description="I've been contributing to Silver Bullet since 2021"
        />
        <Card
          title="Silver Bullet"
          description="I've been contributing to Silver Bullet since 2021"
        />
        <Card
          title="Silver Bullet"
          description="I've been contributing to Silver Bullet since 2021"
        />
        <Card
          title="Silver Bullet"
          description="I've been contributing to Silver Bullet since 2021"
        />
        <Card
          title="Silver Bullet"
          description="I've been contributing to Silver Bullet since 2021I've been contributing to Silver Bullet since 2021I've been contributing to Silver Bullet since 2021I've been contributing to Silver Bullet since 2021I've been contributing to Silver Bullet since 2021I've been contributing to Silver Bullet since 2021I've been contributing to Silver Bullet since 2021I've been contributing to Silver Bullet since 2021I've been contributing to Silver Bullet since 2021"
        />
      </div>
    </div>
  )
}
