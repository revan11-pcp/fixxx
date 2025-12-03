import { useState } from "react";
import img from '../../../assets/ware.jpg';
import img2 from '../../../assets/trueck.jpg';
import img3 from '../../../assets/perahu-konteiner.jpg';

export default function IndustryServiceLine() {
  const [active, setActive] = useState("heavy");

  const industries = [
    {
      id: "automotive",
      title: "Automotive",
      icon: "🚗",
      images: [img2, img]
    },
    {
      id: "healthcare",
      title: "Healthcare",
      icon: "🏥",
      images: [img, img3]
    },
    {
      id: "tech",
      title: "Tech & Electronics",
      icon: "💻",
      images: [img3, img2]
    },
    {
      id: "retail",
      title: "Retail & Consumer",
      icon: "🛒",
      images: [img, img2]
    },
    {
      id: "financial",
      title: "Financial Services",
      icon: "💰",
      images: [img2, img3]
    },
    {
      id: "heavy",
      title: "Heavy Machinery",
      icon: "🏗️",
      images: [img, img3, img2, img]
    }
  ];

  const activeIndustry = industries.find((i) => i.id === active);

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6">

        <h2 className="text-xl md:text-2xl font-bold text-[#001F54]">
          Service Line That Move Your Supply Chain
        </h2>
        <p className="text-gray-600 mt-1">
          Domestic Trucking, Ocean Freight Full Container Load, and Bulk Parcel Distribution—
          Integrated Across First, Middle, and Last Mile.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-8">
          {industries.map((industry) => (
            <div key={industry.id} className="relative">
              <button
                onClick={() => setActive(industry.id)}
                className={`
                  w-full flex flex-col items-center justify-center gap-2 border rounded-xl p-4 transition
                  ${active === industry.id ? "bg-[#000053] text-white border-[#000053]" : "bg-white border-gray-300 text-[#001F54]"}
                  hover:shadow-md
                `}
              >
                <div className="text-2xl">{industry.icon}</div>
                <span className="text-xs md:text-sm font-medium text-center">
                  {industry.title}
                </span>
              </button>
              
              {active === industry.id && (
                <div 
                  className="absolute left-1/2 z-10"
                  style={{
                    bottom: '-16px',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '15px solid transparent',
                    borderRight: '15px solid transparent',
                    borderTop: '15px solid #000053'
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>

        {activeIndustry && (
          <div className="mt-10 border-4 border-[#000053] rounded-2xl overflow-hidden">
            <div className={`grid ${activeIndustry.images.length === 4 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2'} gap-0`}>
              {activeIndustry.images.map((img, idx) => (
                <div key={idx} className="relative aspect-video">
                  <img
                    src={img}
                    alt={`${activeIndustry.title} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}