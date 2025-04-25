import { H1 } from '@/src/components/atoms/h1'
import { Skills } from '@/src/components/molecules/skills'
import { getTranslations } from 'next-intl/server'

export default async function Silverbullet() {
  const project = await getTranslations('teasy')

  return (
    <div className="grid grid-cols-[1fr_256px] justify-evenly gap-4">
      <div className="flex flex-col p-4 items-center">
        <H1 text={project('title')} />

        <p className="max-w-96 text-justify">{project('description')}</p>
      </div>
      <Skills />
    </div>
  )
}
