'use client'

import { useCard } from './@hooks'

type CardProps = {
  title: string
  description: string
}

export const Card = ({ title, description }: CardProps) => {
  const { onClick } = useCard()

  return (
    <button
      type="button"
      id="card"
      className="p-2 flex flex-col items-center border-2 rounded-2xl h-[200px] cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
      onClick={() => {
        onClick()
      }}
    >
      <div className="w-full">
        <h1 className="font-bold text-center">{title}</h1>
        <div className="border-2 rounded-2xl w-full" />
      </div>
      <div className="pt-4 px-2 text-justify">
        <p className="line-clamp-4">{description}</p>
      </div>
    </button>
  )
}
