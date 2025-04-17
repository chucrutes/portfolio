type H1Props = {
  text: string
}

export const H1 = ({ text }: H1Props) => {
  return <h1 className="font-bold text-center text-2xl">{text}</h1>
}
