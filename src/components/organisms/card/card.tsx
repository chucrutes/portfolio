'use client'

import type { MouseEventHandler } from 'react'
import { H1 } from '../../atoms/h1'

type CardProps = {
  title: string
  description: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Card = ({ title, description, onClick }: CardProps) => {
  return (
    <button
      type="button"
      id="card"
      className="p-2 flex flex-col items-center border-2 rounded-2xl h-[200px] cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full">
        <H1 text={title} />
        <div className="border-2 rounded-2xl w-full border-[#aa2cff] opacity-55" />
      </div>
      <div className="pt-4 px-2 text-justify">
        <p className="line-clamp-4">{description}</p>
      </div>
    </button>
  )
}
