import Image from 'next/image'

type Props = {
  src: string
  alt: string
  width?: number
  height?: number
}

export const Icon = ({ width = 40, height = 40, ...props }: Props) => {
  return <Image {...props} alt="Linkedin icon" width={width} height={height} />
}
