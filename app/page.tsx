import { Card } from './components/organisms/card'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="pb-2">Main content</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 px-4 gap-4">
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
          description="I've been contributing to Silver Bullet since 2021"
        />
      </div>
    </div>
  )
}
