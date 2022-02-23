import { Wrapper, StyledLink } from './NavigationLinks.styles';
import { SectionType } from 'Root';
import { ToggleModalType } from 'components/Navigation/Navigation';

interface NavigationLinksProps {
  toggleModal: ToggleModalType["toggleModal"]
  toggleModalHandler: () => void
  currentSection: SectionType['currentSection'];
}

const NavigationLinks = ({ toggleModal, toggleModalHandler, currentSection }: NavigationLinksProps) => (
  <Wrapper className={`${toggleModal && 'toggle'}`} onClick={toggleModalHandler}>
    <StyledLink
      className={`${currentSection === 1 && 'isActive'}`}
      onClick={toggleModalHandler}
      to='home'
      duration={1500}
      smooth={'easeInOutQuart'}
      ignoreCancelEvents={true}
    >
      Strona Główna
    </StyledLink>
    <StyledLink
      className={`${currentSection === 2 && 'isActive'}`}
      onClick={toggleModalHandler}
      to='aboutUs'
      duration={1500}
      smooth={'easeInOutQuart'}
      ignoreCancelEvents={true}
    >
      O Hodowli
    </StyledLink>
    <StyledLink
      className={`${currentSection === 3 && 'isActive'}`}
      onClick={toggleModalHandler}
      to='ourDogs'
      duration={1500}
      smooth={'easeInOutQuart'}
      ignoreCancelEvents={true}
    >
      Nasze Psy
    </StyledLink>
    <StyledLink
      className={`${currentSection === 4 && 'isActive'}`}
      onClick={toggleModalHandler}
      to='exhibitions'
      duration={1500}
      smooth={'easeInOutQuart'}
      ignoreCancelEvents={true}
    >
      Wystawy
    </StyledLink>
    <StyledLink
      className={`${currentSection === 5 && 'isActive'}`}
      onClick={toggleModalHandler}
      to='buyingProcess'
      duration={1500}
      smooth={'easeInOutQuart'}
      ignoreCancelEvents={true}
    >
      Kupno Szczeniaka
    </StyledLink>
    <StyledLink
      className={`${currentSection === 6 && 'isActive'}`}
      onClick={toggleModalHandler}
      to='faq'
      duration={1500}
      smooth={'easeInOutQuart'}
      ignoreCancelEvents={true}
    >
      Faq
    </StyledLink>
    <StyledLink
      className={`${currentSection === 7 && 'isActive'}`}
      onClick={toggleModalHandler}
      to='contact'
      duration={1500}
      smooth={'easeInOutQuart'}
      ignoreCancelEvents={true}
    >
      Kontakt
    </StyledLink>
  </Wrapper>
);

export default NavigationLinks;
