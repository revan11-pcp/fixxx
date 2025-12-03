
const LogisticsExpertForm: React.FC = () => {
  return (
    <section className="flex justify-center py-10 bg-[#f5f7ff] w-full">
      <div className="w-full max-w-4xl border-2 border-blue-900 rounded-xl p-6 bg-white shadow-sm">
        <h2 className="text-center text-xl font-bold text-blue-900">Talk to Logistics Expert</h2>
        <p className="text-center text-gray-600 text-sm mt-1 mb-5">
          Tell us about your routes, volumes, and timelines. We’ll propose a tailored transport plan.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-blue-900 rounded-md p-2 w-full"
          />

          <input
            type="text"
            placeholder="Email or Phone"
            className="border border-blue-900 rounded-md p-2 w-full"
          />

          <input
            type="text"
            placeholder="What do you want to ship?"
            className="border border-blue-900 rounded-md p-2 w-full"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-3">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input type="checkbox" className="w-4 h-4" />
            I’m available for a quick call
          </label>

          <button className="bg-green-500 text-white px-5 py-2 rounded-md font-semibold w-full md:w-auto">
            Ask an Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogisticsExpertForm;
