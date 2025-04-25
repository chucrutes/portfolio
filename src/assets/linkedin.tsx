import Image from 'next/image'

export const Linkedin = () => {
  return (
    <Image
      src={'/linkedin.svg'}
      alt="Linkedin icon"
      width={50}
      height={50}
      objectFit="contain"
    />
  )
}
