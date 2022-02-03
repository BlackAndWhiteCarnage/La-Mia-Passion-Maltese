import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { SectionType } from 'Root'

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 150px 0;
  &.white {
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const ThresholdWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 1px;
  height: 100%;
`;

const Threshold = styled.div`
  position: relative;
  height: 100%;
  div {
    position: sticky;
    width: 1px;
    top: 0;
    left: 0;
    height: 50vh;
  }
`;

interface ContentWrapperProps {
  children: React.ReactNode
  setCurrentSection: SectionType["setCurrentSection"]
  sectionIndex: number
  id: string
  className?: string
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children, setCurrentSection, sectionIndex, id, className }) => {
  const [elem, view] = useInView({ threshold: 1 });

  useEffect(() => {
    if (view) {
      setCurrentSection(sectionIndex);
    }
  }, [view, setCurrentSection, sectionIndex]);

  return (
    <Wrapper id={id} className={className}>
      <ThresholdWrapper>
        <Threshold>
          <div ref={elem} />
        </Threshold>
      </ThresholdWrapper>
      {children}
    </Wrapper>
  );
};

export default ContentWrapper;
