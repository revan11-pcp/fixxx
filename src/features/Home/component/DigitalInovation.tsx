import { FaCode, FaBarcode, FaFileSignature } from "react-icons/fa";

export default function DigitalInnovation() {
  return (
    <section className="w-full bg-[#F5F7FF] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-[#0A1A3A]">
          Digital Innovation That Reduces Friction
        </h2>
        <p className="text-sm text-[#4A5578] mt-1 max-w-2xl">
          TRACK-ID unique tracking, return hardcopy POD, electronic POD, and secure API integrations that fit your ERP/WMS.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="rounded-xl border border-[#D7DBEC] bg-white shadow-sm p-5 flex gap-3">
            <FaCode className="w-6 h-6 text-[#0A1A3A]" />
            <div>
              <h3 className="font-semibold text-[#0A1A3A] text-sm">Seamless API</h3>
              <p className="text-xs text-[#4A5578]">
                Connect to your ERP, WMS, or eCommerce with robust, well-documented end point.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#D7DBEC] bg-white shadow-sm p-5 flex gap-3">
            <FaBarcode className="w-6 h-6 text-[#0A1A3A]" />
            <div>
              <h3 className="font-semibold text-[#0A1A3A] text-sm">Track ID</h3>
              <p className="text-xs text-[#4A5578]">
                End-to-end visibility with unique ID's and live status updates.
              </p>
            </div>
          </div>

          {/* POD Options */}
          <div className="rounded-xl border border-[#D7DBEC] bg-white shadow-sm p-5 flex gap-3">
            <FaFileSignature className="w-6 h-6 text-[#0A1A3A]" />
            <div>
              <h3 className="font-semibold text-[#0A1A3A] text-sm">POD Options</h3>
              <p className="text-xs text-[#4A5578]">
                Electronic POD and return hardcopy POD built for regulatory assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
