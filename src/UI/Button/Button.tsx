import { FC, HTMLAttributes } from 'react';
import './Button.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  view?: 'default' | 'light';
  className?: string;
  text: string;
  size?: 's' | 'm';
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  view = 'default',
  className,
  text,
  size = 'm',
  onClick,
  ...restProps
}) => {
  return (
    <button
      {...restProps}
      className={`button ${className} ${view === 'light' ? 'button-light' : 'button-default'} ${
        size === 's' ? 'button-s' : 'button-m'
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
