
const ImpactNumbers: React.FC = () => {
  const data = [
    { value: "190+", label: "Branches" },
    { value: "1,120+", label: "Employees" },
    { value: "700+", label: "Corporate Clients" },
    { value: "6,980+", label: "Sub-Districts" },
  ];

  return (
    <section className="py-10 bg-[#f5f7ff] w-full">
      <h2 className="text-blue-900 font-bold mb-6 text-lg">Impact in Numbers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border-2 border-blue-900 rounded-xl p-6 text-center bg-white shadow-sm"
          >
            <h3 className="text-2xl font-bold text-blue-900">{item.value}</h3>
            <p className="text-gray-700 text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactNumbers;
