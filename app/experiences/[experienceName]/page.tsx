import { H1 } from '@/app/components/atoms/h1'

export default async function Experience({
  params
}: { params: Promise<{ experienceName: string }> }) {
  const { experienceName: _ } = await params

  return (
    <div className="grid grid-cols-[1fr_18em] gap-4">
      <div className="flex justify-center p-4">Fucking awesome project</div>
      <div
        id="sidebar"
        className="flex flex-col items-center border-white rounded-2xl border-2 p"
      >
        <H1 text="Top skills" />

        <div id="hard-skills" />
      </div>
    </div>
  )
}
