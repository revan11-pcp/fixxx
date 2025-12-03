import CTASection from "../../shared/components/CTASection"
import ServiceLine from "../Home/component/ServicesLine"
import NationalSection from "./components/NationalSection"

const index = () => {
  return (
    <div>
      <div className="mt-5">
      <ServiceLine/>
      </div>
        <NationalSection />
        <CTASection />
    </div>
  )
}

export default index