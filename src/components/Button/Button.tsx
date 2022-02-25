import { Wrapper } from './Button.styles';
import { SectionType } from 'Root'

export interface CurrentSectionInfoProps {
    currentSection: SectionType["currentSection"]
}

export interface ButtonProps {
  text: string
  className: string
  onClick: () => void
  type?: 'submit'
  title?: string
}

const Button = ({ text, className, onClick, type, title }: ButtonProps) =>
  <Wrapper className={className} onClick={onClick} type={type} title={title}>
    {text}
  </Wrapper>

export default Button;
