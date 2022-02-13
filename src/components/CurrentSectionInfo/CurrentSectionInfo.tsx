import { Wrapper, InfoWrapper, CurrentSection } from './CurrentSectionInfo.styles';
import { SectionType } from 'Root'

interface CurrentSectionInfoProps {
  currentSection: SectionType["currentSection"]
}

const CurrentSectionInfo = ({ currentSection }: CurrentSectionInfoProps) => (
  <Wrapper>
    <InfoWrapper>
      <CurrentSection className={`${currentSection === 1 && 'show'}`}>Strona Główna</CurrentSection>
      <CurrentSection className={`${currentSection === 2 && 'show'}`}>O Hodowli</CurrentSection>
      <CurrentSection className={`${currentSection === 3 && 'show'}`}>Nasze Psy</CurrentSection>
      <CurrentSection className={`${currentSection === 4 && 'showWhite'}`}>Wystawy</CurrentSection>
      <CurrentSection className={`${currentSection === 5 && 'show'}`}>Kupno Szczeniaka</CurrentSection>
      <CurrentSection className={`${currentSection === 6 && 'showWhite'}`}>Faq</CurrentSection>
      <CurrentSection className={`${currentSection === 7 && 'show'}`}>Kontakt</CurrentSection>
    </InfoWrapper>
  </Wrapper>
);

export default CurrentSectionInfo;
