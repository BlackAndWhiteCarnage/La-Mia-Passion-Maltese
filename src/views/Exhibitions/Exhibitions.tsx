import { useState, useRef } from 'react';
import PropTypes from 'prop-types'
import ContentWrapper from 'hoc/ContentWrapper';
import SectionItemsWrapper from 'hoc/SectionItemsWrapper';
import Exhibition from './component/Exhibition';
import Button from 'components/Button/Button';
import { year2015, year2016, year2017, year2020 } from 'data/exhibitionsData';
import { ButtonsWrapper, ExhibitionsWrapper } from './Exhibitions.styles';
import { SectionType } from 'Root'

interface ExhibitionsProps {
  setCurrentSection: SectionType["setCurrentSection"]
}

export interface DataTypes {
  data: {
      dogName: string
      year: string
      localization: string
      exhibitionName: string
      arbiter: string | null
      grade: string
      place: string
  }[]
  setData: React.Dispatch<React.SetStateAction<[
    DataTypes["data"]
  ]>>
}

interface ToggleTypes {
  toggle: boolean
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const Exhibitions = ({ setCurrentSection }: ExhibitionsProps) => {
  const [data, setData] = useState<DataTypes["data"]>(year2015);
  const [toggle, setToggle] = useState<ToggleTypes["toggle"]>(true);
  const ref2 = useRef<HTMLDivElement>(null);

  const changeDataHandler = (newData: DataTypes["data"]): void => {
    setToggle(false);

    setTimeout(() => {
      setData(newData);
    }, 500);

    if(ref2.current){
      ref2.current.scrollIntoView({
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      setToggle(true);
    }, 500);
  };

  return (
    <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={4} id='exhibitions' className='white'>
      <SectionItemsWrapper>
        <ButtonsWrapper ref={ref2}>
          <Button onClick={() => changeDataHandler(year2015)} className={`${data === year2015 && 'active'} white`} text='2015' />
          <Button onClick={() => changeDataHandler(year2016)} className={`${data === year2016 && 'active'} white`} text='2016' />
          <Button onClick={() => changeDataHandler(year2017)} className={`${data === year2017 && 'active'} white`} text='2017' />
          <Button onClick={() => changeDataHandler(year2020)} className={`${data === year2020 && 'active'} white`} text='2020' />
        </ButtonsWrapper>
        <ExhibitionsWrapper className={`${toggle && 'toggle'}`}>
          {data.map((props, index) => (
            <Exhibition props={props} index={index} key={`${props.exhibitionName} ${index}`} />
          ))}
        </ExhibitionsWrapper>
      </SectionItemsWrapper>
    </ContentWrapper>
  );
};

Exhibitions.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
};

export default Exhibitions;
