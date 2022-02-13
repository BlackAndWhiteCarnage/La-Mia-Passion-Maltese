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
}

const Button = ({ text, className, onClick, type }: ButtonProps) =>
  <Wrapper className={className} onClick={onClick} type={type}>
    {text}
  </Wrapper>

export default Button;
