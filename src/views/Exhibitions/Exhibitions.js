import React, { useState, useRef } from 'react';
import Exhibition from './component/Exhibition';
import ContentWrapper from 'hoc/ContentWrapper';
import { year2015, year2016, year2017, year2020 } from 'data/exhibitionsData';
import { Wrapper, ButtonsWrapper, ExhibitionsWrapper } from './Exhibitions.styles';
import Button from 'components/Button/Button';

const Exhibitions = ({ setCurrentSection }) => {
  const [data, setData] = useState(year2015);
  const [toggle, setToggle] = useState(true);
  const ref2 = useRef(null);

  const changeDataHandler = (newData) => {
    setToggle(false);

    setTimeout(() => {
      setData(newData);
    }, 500);

    ref2.current.scrollIntoView({
      behavior: 'smooth',
    });

    setTimeout(() => {
      setToggle(true);
    }, 500);
  };

  return (
    <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={4} id='exhibitions' className='white'>
      <Wrapper>
        <ButtonsWrapper ref={ref2}>
          <Button onClick={() => changeDataHandler(year2015)} className={`${data === year2015 && 'active'} white`} text='2015' />
          <Button onClick={() => changeDataHandler(year2016)} className={`${data === year2016 && 'active'} white`} text='2016' />
          <Button onClick={() => changeDataHandler(year2017)} className={`${data === year2017 && 'active'} white`} text='2017' />
          <Button onClick={() => changeDataHandler(year2020)} className={`${data === year2020 && 'active'} white`} text='2020' />
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
