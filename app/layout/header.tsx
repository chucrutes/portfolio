import Image from 'next/image'
import { Linkedin } from '../assets/linkedin'
// header {
// 	padding: 1.5em .8em;
// 	background-color: #162456;
// 	top: 0
// }
// header,
// footer {
// 	height: 15vh;
// 	padding: 1em .8em;
// 	position: fixed;
// 	left: 0;
// 	width: 100%;
// 	z-index: 100;

// }
export const Header = () => {
  return (
    <header className="flex justify-between bg-primary items-center px-4">
      <div className="logo-container">
        <Image
          src={'/logo_without_background.png'}
          alt="Sloth logo"
          width={100}
          height={52}
        />
      </div>
      <div id="social-medias" className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/thiagocmaraujo/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/chucrutes/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={'/github.png'} width={25} height={25} alt="Github icon" />
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          <Image src={'/resume.png'} width={25} height={25} alt="Resume" />
        </a>
        <a href="mailto:tmelo387@gmail.com">
          <Image src={'/gmail.png'} width={25} height={25} alt="Gmail icon" />
        </a>
      </div>
    </header>
  )
}
