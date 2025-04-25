'use client'

import type { MouseEventHandler } from 'react'
import { H1 } from '../../atoms/h1'
import { P } from '../../atoms/p'

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
      className="p-2 flex flex-col items-center border-2 rounded-2xl max-h-96 max-w-96 cursor-pointer 2xl:max-h-[500px]"
      onClick={onClick}
    >
      <div className="w-full">
        <H1 text={title} />
        <div className="border-2 rounded-2xl w-full border-[#aa2cff] opacity-55 mt-4" />
      </div>
      <div className="pt-4 px-2">
        <P text={description} />
      </div>
    </button>
  )
}
