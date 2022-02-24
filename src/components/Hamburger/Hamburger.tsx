import { Wrapper, AccualHamburger, Line } from './Hamburger.styles';
import { SectionType } from 'Root'
import { ToggleModalType } from 'components/Navigation/Navigation'

interface HamburgerProps {
  toggleModalHandler: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
  toggleModal: ToggleModalType["toggleModal"]
  currentSection: SectionType["currentSection"]
}

const Hamburger = ({ toggleModalHandler, toggleModal, currentSection }: HamburgerProps) => (
  <Wrapper onClick={toggleModalHandler} className={`${toggleModal && 'toggle'}`}>
    <AccualHamburger onClick={toggleModalHandler} title='Rozwiń/Zamknij menu'>
      <Line className={`${toggleModal && 'toggle'} ${currentSection === 4 ? 'white' : currentSection === 6 && 'white'} top`}>
        <div />
        <div />
      </Line>
      <Line className={`${toggleModal && 'toggle'} ${currentSection === 4 ? 'white' : currentSection === 6 && 'white'} mid`}>
        <div />
        <div />
        <div />
      </Line>
      <Line className={`${toggleModal && 'toggle'} ${currentSection === 4 ? 'white' : currentSection === 6 && 'white'} bot`}>
        <div />
        <div />
        <div />
      </Line>
    </AccualHamburger>
  </Wrapper>
);

export default Hamburger;
