import './Button.scss';

type ButtonProps = {
  id?: string;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean,
  children?: React.ReactNode;
}

const Button = ({ id, className, onClick, disabled, children}: ButtonProps) => {
    
  return (
      <button id={id} className={className} onClick={onClick} disabled={disabled}>
        {children}
      </button>
  )
}

export default Button;