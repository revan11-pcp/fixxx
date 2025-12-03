import ContactForm from './components/ContactForm'
import CTASection from '../../shared/components/CTASection'
import img from '../../assets/view-cargo.jpg';
import CoverageStats from './components/CoverageStats';

const index = () => {
  return (
    <>
      <div className=''>
        <ContactForm />
      </div>
      <CTASection/>
      <CoverageStats />
      <div className="flex justify-center">
  <img src={img} className="rounded-xl shadow-lg w-3/4 mx-auto object-cover" alt="View of Cargo" />
</div>
    </>

  )
}

export default index