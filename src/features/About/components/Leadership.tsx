import { useState } from "react";
import img from '../../../assets/cco.jpg';
import img2 from '../../../assets/trueck.jpg';
import img3 from '../../../assets/perahu-konteiner.jpg';

export default function Leadership() {
  const [active, setActive] = useState("ocean");

  const services = [
    {
      id: "truck",
      title: "Sales Director",
      desc: "End-to-end logistics planning to drive growth",
      icon: "📊",
      color: "#000053",
      image: img,
    },
    {
      id: "ocean",
      title: "Operations Lead",
      desc: "Ensuring reliable and consistent on-time delivery",
      icon: "⚙️",
      color: "#FFFFFF",
      image: img3,
    },
    {
      id: "heavy",
      title: "Technology Lead",
      desc: "Highly optimized tech drives performance",
      icon: "💻",
      color: "#000053",
      image: img2,
    },
  ];

  return (
    <section className="w-full bg-[#F5F8FF] py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-xl md:text-2xl font-bold text-[#001F54] mb-2">
          Leadership
        </h2>
        <p className="text-gray-600 mb-8">
          Experienced logistics operators and technologists committed to Indonesia's growth.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {services.map((s) => (
            <div key={s.id} className="relative">
              <button
                onClick={() => setActive(s.id)}
                className={`
                  w-full text-left border-2 rounded-xl p-6 transition-all
                  ${active === s.id 
                    ? s.id === "ocean"
                      ? "bg-white border-[#000053] shadow-lg"
                      : "bg-[#000053] text-white border-[#000053] shadow-lg"
                    : "bg-white border-gray-200 hover:border-gray-300"
                  }
                `}
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${
                  active === s.id && s.id !== "ocean" ? "text-white" : "text-[#001F54]"
                }`}>
                  {s.title}
                </h3>
                <p className={`text-sm ${
                  active === s.id && s.id !== "ocean" ? "text-gray-200" : "text-gray-600"
                }`}>
                  {s.desc}
                </p>
              </button>
              
              {active === s.id && (
                <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 
                  border-l-[16px] border-l-transparent 
                  border-r-[16px] border-r-transparent 
                  border-t-[16px] z-10
                  ${s.id === "ocean" ? "border-t-white" : "border-t-[#000053]"}
                `}></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={services.find((s) => s.id === active)?.image}
            alt="Leadership Team"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
}