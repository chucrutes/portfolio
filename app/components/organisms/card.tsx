type CardProps = {
  title: string
  description: string
}

export const Card = ({ title, description }: CardProps) => {
  return (
    <div
      id="card"
      className="p-2 flex flex-col items-center border-2 rounded-2xl"
    >
      <h1 className="font-bold">{title}</h1>
      <div className="border-2 rounded-2xl w-full" />
      <div className="pt-4 text-center">
        <p>{description}</p>
      </div>
    </div>
  )
}
