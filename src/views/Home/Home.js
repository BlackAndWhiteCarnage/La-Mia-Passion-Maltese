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

const ContentWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 90%;
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
      <ContentWrapper>
        <Header className={'xl large'} text={['La Mia', 'Passione', 'Maltese']} />
        <Image src={homeImage} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Home;
