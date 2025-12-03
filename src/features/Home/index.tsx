import About from './component/About'
import Service from './component/ServicesLine'
import img from '../../assets/laptop.png';
import DigitalInnovation from './component/DigitalInovation';
import HeroSection from '../../shared/components/HeroSection';
import WhyTransport from './component/WhyTransport';
import LogisticsExpertForm from './component/LogisticsExportForm';
import IndustryServiceLine from './component/IndustryLine';

const index = () => {
  return (
    <div>
      <HeroSection/>
        <About/>
        <Service/>
        <IndustryServiceLine/>
        <DigitalInnovation/>
        <img src={img} alt="" />
        <WhyTransport/>
        <LogisticsExpertForm/>
    </div>
  )
}

export default index