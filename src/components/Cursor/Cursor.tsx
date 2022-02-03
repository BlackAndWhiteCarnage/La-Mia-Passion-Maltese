import { useState, useRef, useEffect } from 'react';
import { Wrapper, InvertDiv } from './Cursor.styles';
import { SectionType } from 'Root'

interface CursorProps {
  currentSection: SectionType["currentSection"]
}

const Cursor: React.FC<CursorProps> = ({ currentSection }) => {
  const [isTouchscreen, setIsTouchscreen] = useState<null | boolean>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchscreen(true);
    } else {
      window.addEventListener('mousemove', mouseMoveHandler);
      setIsTouchscreen(false);
    }
  }, []);

  const mouseMoveHandler = (e: MouseEvent): void => {
    if(ref.current !== null){
      ref.current.style.top = e.clientY + 'px';
      ref.current.style.left = e.clientX + 'px';
    }
  };

  const checkCurrentSectionHandler = (): string => {
    return `section${currentSection}`;
  };

  return (
    <>
      {!isTouchscreen && (
        <Wrapper ref={ref}>
          <InvertDiv className={checkCurrentSectionHandler()} />
        </Wrapper>
      )}
    </>
  );
};

export default Cursor;
