import './Button.scss';

type ButtonProps = {
  id: string;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode;
}

const Button = ({ id, className, onClick, children}: ButtonProps) => {
    
  return (
      <button id={id} className={className} onClick={onClick}>
        {children}
      </button>
  )
}

export default Button;