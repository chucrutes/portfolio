import Image from 'next/image'

export const Header = () => {
  return (
    <header className="flex justify-between">
      <Image
        src={'/logo_without_background.png'}
        alt="My logo"
        width={100}
        height={100}
      />
      <div id="social-medias">teste</div>
    </header>
  )
}
