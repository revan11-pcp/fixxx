const CTASection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 bg-gray-50 rounded-xl border-2 border-[#000053] flex flex-col md:flex-row justify-between items-center p-6">
      <div>
        <h2 className="text-xl font-bold mb-2 text-[#000053]">Ready to move cargo with confidence?</h2>
        <p className="text-[#000053]">Get a tailored quote for FTL / LTL routes.</p>
      </div>
      <button className="mt-4 md:mt-0 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-green-600 transition">
        Get Pricing & Availability
      </button>
    </section>
  )
}

export default CTASection