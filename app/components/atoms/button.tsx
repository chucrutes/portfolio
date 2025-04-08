type ButtonProps = Omit<React.ComponentProps<'button'>, 'color'> & {
  color?: 'primary-btn' | 'secondary' | 'delete-btn'
}

export const Button = ({ color = 'primary-btn', children }: ButtonProps) => {
  return (
    <button type="button" className={`bg-${color}`}>
      {children}
    </button>
  )
}
