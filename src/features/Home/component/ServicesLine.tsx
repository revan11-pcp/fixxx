import { useState } from "react";
import img from '../../../assets/ware.jpg';
import img2 from '../../../assets/trueck.jpg';
import img3 from '../../../assets/perahu-konteiner.jpg';

export default function ServiceLine() {
  const [active, setActive] = useState("ocean");

  const services = [
    {
      id: "truck",
      title: "Domestic Trucking",
      desc: "Dedicated truck capacity for your cargo with flexible scheduling and route optimization.",
      icon: "🚚",
      color: "#000053",
      image: img,
    },
    {
      id: "ocean",
      title: "Ocean Freight",
      desc: "Complete container solutions for large shipments with dedicated space and maximum security.",
      icon: "🛳️",
      color: "#00C300",
      image:img3
    },
    {
      id: "heavy",
      title: "Heavy Machinery Transport",
      desc: "Dedicated truck capacity for your cargo with flexible scheduling and route optimization.",
      icon: "🏗️",
      color: "#000053",
      image: img2,
    },
  ];

  return (
    <section className="w-full bg-[#F5F8FF] py-16">
      <div className="container mx-auto px-6">

        <h2 className="text-xl md:text-2xl font-bold text-[#001F54]">
          Service Line That Move Your Supply Chain
        </h2>
        <p className="text-gray-600 mt-1">
          Domestic Trucking, Ocean Freight Full Container Load, and Bulk Parcel Distribution—
          Integrated Across First, Middle, and Last Mile.
        </p>

<div className="grid md:grid-cols-3 gap-6 mt-8">
          {services.map((s) => (
            <div key={s.id} className="relative">
              <button
                onClick={() => setActive(s.id)}
                className={`
                  w-full text-left border rounded-xl p-6 shadow-sm transition
                  ${active === s.id ? "bg-[#000053] text-white border-[#000053]" : "bg-white border-gray-300"}
                  hover:shadow-md
                `}
              > 
                <div className="text-3xl">{s.icon}</div>
                <h3
                  className={`font-bold text-lg mt-2 ${
                    active === s.id ? "text-white" : "text-[#001F54]"
                  }`}
                >
                  {s.title}
                </h3>
                <p className="text-sm mt-1 opacity-80">{s.desc}</p>
              </button>
              
              {active === s.id && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#000053]"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 w-full">
          {active && (
            <img
              src={services.find((s) => s.id === active)?.image}
              alt="Service Illustration"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          )}
        </div>

      </div>
    </section>
  );
}
