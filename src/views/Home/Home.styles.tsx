import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: absolute;
  width: 80%;
  height: 90%;
  max-width: 1920px;
  @media screen and (max-width: 1400px) {
    width: 90%;
  }
`;

export const Image = styled(motion.img)`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
`;
