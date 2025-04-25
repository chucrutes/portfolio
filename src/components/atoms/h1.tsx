type H1Props = {
  text: string
}

export const H1 = ({ text }: H1Props) => {
  return (
    <h1 className="font-bold text-center text-2xl md:text-3xl 2xl:text-4xl">
      {text}
    </h1>
  )
}
