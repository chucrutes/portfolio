import cn from 'classnames'

type PProps = {
  text: string
  lineclamp?: string
}

export const P = ({ text, lineclamp = 'line-clamp-none' }: PProps) => {
  return (
    <p className={cn([lineclamp, 'text-justify md:text-2xl 2xl:text-2xl'])}>
      {text}
    </p>
  )
}
