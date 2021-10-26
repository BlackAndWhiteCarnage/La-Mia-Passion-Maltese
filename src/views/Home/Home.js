import React from 'react';
import styled from 'styled-components';
import homeImage from 'assets/images/Home.png';
import Header from 'components/Header/Header';

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navigation = styled.div`
  position: fixed;
  width: 90%;
  height: 100%;
  /* border: 1px solid yellow; */
  max-width: 2200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavigationWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  border: 1px solid blue;
`;

const Hamburger = styled.div`
  position: absolute;
  width: 45px;
  height: 35px;
  border: 1px solid red;
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 90%;
  /* border: 1px solid white; */
  max-width: 1920px;
  @media screen and (max-width: 1400px) {
    width: 90%;
  }
`;

const Image = styled.img`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const Home = () => {
  return (
    <Wrapper>
      {/* <Navigation>
        <NavigationWrapper>
        <Hamburger></Hamburger>
        </NavigationWrapper>
    </Navigation> */}
      <ContentWrapper>
        <Header className={'xl large'} text={['La Mia', 'Passione', 'Maltese']} />
        <Image src={homeImage} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Home;
