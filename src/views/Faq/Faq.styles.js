import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 65%;
  height: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;
