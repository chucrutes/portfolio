type PProps = {
  text: string
}

export const P = ({ text }: PProps) => {
  return <p className="line-clamp-6 text-justify 2xl:text-2xl">{text}</p>
}
