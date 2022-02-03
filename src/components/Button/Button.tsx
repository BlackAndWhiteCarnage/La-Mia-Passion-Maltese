import { Wrapper } from './Button.styles';

interface ButtonProps {
  text: string
  className: string
  onClick: () => void
  type?: 'submit'
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick, type }) =>
  <Wrapper className={className} onClick={onClick} type={type}>
    {text}
  </Wrapper>

export default Button;
