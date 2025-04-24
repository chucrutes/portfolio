import { H1 } from '@/src/components/atoms/h1'
import { getTranslations } from 'next-intl/server'

export default async function Silverbullet() {
  const project = await getTranslations('silverbullet')

  return (
    <div className="grid grid-cols-2 justify-evenly gap-4">
      <div className="flex flex-col p-4 items-center">
        <H1 text={project('title')} />

        <p className="max-w-96 text-justify">{project('description')}</p>
      </div>
      <div
        id="sidebar"
        className="flex flex-col items-center border-white rounded-2xl border-2 mr-4"
      >
        <H1 text="Top skills" />

        <div id="hard-skills" />
      </div>
    </div>
  )
}
