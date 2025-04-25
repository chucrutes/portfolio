import cn from 'classnames'

type PProps = {
  text: string
  lineclamp?: number | 'none'
}

export const P = ({ text, lineclamp = 4 }: PProps) => {
  const lineClampClass = `line-clamp-${lineclamp}`
  return (
    <p
      className={cn([lineClampClass, ' text-justify md:text-2xl 2xl:text-2xl'])}
    >
      {text}
    </p>
  )
}
