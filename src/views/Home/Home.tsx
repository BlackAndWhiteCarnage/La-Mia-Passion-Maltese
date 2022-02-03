import homeImage from 'assets/images/Home.png';
import Header from 'components/Header/Header';
import { homePageImgAnim } from 'assets/animations/animation';
import { Wrapper, Image } from './Home.styles';
import ContentWrapper from 'hoc/ContentWrapper';
import { useScroll } from 'helpers/useScroll';
import { SectionType } from 'Root'

interface HomeProps {
  setCurrentSection: SectionType["setCurrentSection"]
}

const Home: React.FC<HomeProps> = ({ setCurrentSection }) => {
  const [element, controls] = useScroll();

  return (
    <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={1} id='home'>
      <Wrapper>
        <Header className='xl large' text={['La Mia ', ' Passione ', ' Maltese']} textMobile={['La Mia', 'Passione', 'Maltese']} />
        <Image src={homeImage} variants={homePageImgAnim} animate={controls as any} initial='hidden' ref={element as React.Ref<HTMLImageElement>} />
      </Wrapper>
    </ContentWrapper>
  );
};

export default Home;
