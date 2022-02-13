import homeImage from 'assets/images/Home.png';
import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import { homePageImgAnim } from 'assets/animations/animation';
import { Wrapper, Image } from './Home.styles';
import ContentWrapper from 'hoc/ContentWrapper';
import { useScroll } from 'helpers/useScroll';
import { SectionType } from 'Root'

interface HomeProps {
  setCurrentSection: SectionType["setCurrentSection"]
}

const Home = ({ setCurrentSection }: HomeProps) => {
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

Home.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
};

export default Home;
