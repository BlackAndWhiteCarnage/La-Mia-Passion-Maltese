import React, { useState, useRef } from 'react';
import Exhibition from './component/Exhibition';
import ContentWrapper from 'hoc/ContentWrapper';
import { year2015, year2016, year2017, year2020 } from 'data/exhibitionsData';
import { Wrapper, ButtonsWrapper, Button, ExhibitionsWrapper } from './Exhibitions.styles';

const Exhibitions = ({ setCurrentSection }) => {
  const [data, setData] = useState(year2015);
  const [toggle, setToggle] = useState(true);
  const ref = useRef(null);

  const changeDataHandler = (newData) => {
    setToggle(false);

    setTimeout(() => {
      setData(newData);
    }, 500);

    ref.current.scrollIntoView({
      behavior: 'smooth',
    });

    setTimeout(() => {
      setToggle(true);
    }, 500);
  };

  return (
    <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={4}>
      <Wrapper>
        <ButtonsWrapper ref={ref}>
          <Button onClick={() => changeDataHandler(year2015)}>2015</Button>
          <Button onClick={() => changeDataHandler(year2016)}>2016</Button>
          <Button onClick={() => changeDataHandler(year2017)}>2017</Button>
          <Button onClick={() => changeDataHandler(year2020)}>2020</Button>
        </ButtonsWrapper>
        <ExhibitionsWrapper className={toggle && 'toggle'}>
          {data.map((props, index) => (
            <Exhibition props={props} index={index} key={`${props.exhibitionName} ${index}`} />
          ))}
        </ExhibitionsWrapper>
      </Wrapper>
    </ContentWrapper>
  );
};

export default Exhibitions;
