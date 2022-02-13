import ContentWrapper from 'hoc/ContentWrapper';
import PropTypes from 'prop-types';
import SectionItemsWrapper from 'hoc/SectionItemsWrapper';
import Dog from './components/Dog';
import DogImage1 from 'assets/images/Dog1.png';
import DogImage2 from 'assets/images/Dog2.png';
import DogImage3 from 'assets/images/Dog3.png';
import DogImage4 from 'assets/images/Dog4.png';
import { SectionType } from 'Root'

interface OurDogsProps {
  setCurrentSection: SectionType["setCurrentSection"]
}

const OurDogs = ({ setCurrentSection }: OurDogsProps) => (
  <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={3} id='ourDogs'>
    <SectionItemsWrapper>
      <Dog
        className='xl large top'
        headerText={['Dilayla ', ' Tuches']}
        textMobile={['Dilayla', 'Tuches']}
        text='Emi była naszym pierwszym Maltanczykiem. Można ją opisać jednym słowem "Łobuz". Za młodu niezwykle energiczna i radosna. Zdejmowała papiloty
          przed wystawami, jadła WSZYSTKO co się tylko dało i zawsze musiała się w czymś wytarzać. Najwięcej zabawnych historii mamy właśnie z nią. To
          ona pokazała nam czym jest czysta radość na widok nieznanego gościa w domu. I to ona przeżyła nasze pierwsze wzloty i upadki na wystawach.
          Teraz Emi jest już emerytką, która spędza czas na kanapie obserwując to co robią domownicy.'
        image={DogImage1}
      />
      <Dog
        className='xl large top'
        headerText={['Oro ', ' Bianco']}
        textMobile={['Oro', 'Bianco']}
        text='Bianka, pojawiła się jako druga w naszym domu. To najbardziej niepowtarzalny charakter. Któregoś dnia ją obcięłam a Mąż zobaczywszy ją
          powiedział, że wygląda brzydko. Wierzcie lub nie, przez tydzień go omijała. Nasza indywidualistka nie lubi dzieci, a w dodatku jest
          rasistką, która szczeka tylko na psy innego koloru niż biały. Nie potrafi wskoczyć na kanapę, chyba że jej podłożysz czerwony dywan. Na co
          dzień dama, zdecydowanie żądząca stadem. Kiedy dostaje coś do jedzenia najpierw musi powąchać co to jest zanim zje.'
        image={DogImage2}
      />
      <Dog
        className='xl large top'
        headerText={['Piccolo ', ' Perla']}
        textMobile={['Piccolo', 'Perla']}
        text='Perełka to kolejny "charakterek", który się u nas pojawił. Ta niezwykła sunia podczas strzyżenia czy czesania włosów... zasypia. Można z
          nią wtedy zrobić wszystko. Uwielbia się bawić i śpi na posłaniu otoczona swoimi zabawkami. Gdy przyjeżdża inny pies w odwiedziny, to jego
          potencjalna zabawka z którą przyjechał, jest już zabawką Perełki. No chyba, że ta zabawka piszczy. Wtedy nie spocznie póki jej nie
          zepsuje.'
        image={DogImage3}
      />
      <Dog
        className='xl large top'
        headerText={['Bacio ', " D'Amore"]}
        textMobile={['Bacio', "D'Amore"]}
        text='Baby to nasza najmłodsza pociecha. Jaka jest z charakteru? To wykapana mama (Piccolo Perla) czyli radosna, energiczna i zawsze znajdująca
          czas na zabawę sunia. Mimo tego, że jest młodziutka, już jeździmy z nią na wystawy, na których osiąga same sukcesy. Jest niezwykle ułożona
          po mamie, po prostu ideał wśród Maltańczyków. Jej charakter jest idealny dla starszych dzieci, dorosłych jak i dla wymagającego hodowcy.
          Życzę każdemy psa z tak elastycznym usposobieniem.'
        image={DogImage4}
      />
    </SectionItemsWrapper>
  </ContentWrapper>
);

OurDogs.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
};

export default OurDogs;
