import cn from 'classnames'

type PProps = {
  text: string
  lineclamp?: number
}

export const P = ({ text, lineclamp = 4 }: PProps) => {
  return (
    <p
      className={cn(
        `line-clamp-${lineclamp} text-justify md:text-2xl 2xl:text-2xl`
      )}
    >
      {text}
    </p>
  )
}
