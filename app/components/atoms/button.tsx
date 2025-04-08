type ButtonProps = Omit<React.ComponentProps<'button'>, 'color'> & {
  color?: 'primary-btn' | 'secondary' | 'delete-btn'
}

export const Button = ({ color = 'primary-btn', children }: ButtonProps) => {
  const _color = `bg-${color}`

  return (
    <button type="button" className={`${_color} `}>
      {children}
    </button>
  )
}
