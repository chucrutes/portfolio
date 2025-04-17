'use client'

type ButtonProps = Omit<React.ComponentProps<'button'>, 'color'> & {
  color?: 'primary-btn' | 'secondary' | 'delete-btn'
}

export const Button = ({
  color = 'primary-btn',
  children,
  onClick,
  ...rest
}: ButtonProps) => {
  const _color = `bg-${color}`

  return (
    <button
      type="button"
      className={`${_color} rounded-2xl px-4 py-2 cursor-pointer hover:opacity-80 transition-opacity duration-200 ease-in-out`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
