import Image from 'next/image'

type Props = {
  src: string
  alt: string
  width?: number
  height?: number
}

export const Icon = ({ width, height, ...props }: Props) => {
  return (
    <Image
      {...props}
      alt="Linkedin icon"
      width={width ?? 40}
      height={height ?? 40}
      objectFit="contain"
    />
  )
}
