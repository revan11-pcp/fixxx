import React, { useState } from 'react';

interface FormData {
  name: string;
  emailOrPhone: string;
  shipmentDetails: string;
  quickCallAvailable: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    emailOrPhone: '',
    shipmentDetails: '',
    quickCallAvailable: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';

    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 sm:p-8">
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#000053] mb-2">
          Contact & Sales
        </h1>
        <p className="text-base text-[#000053] max-w-xl mx-auto">
          Corporate inquiries, branch collaboration, and RFP's. Our team will reply within 1 business day.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1">
            <label htmlFor="name" className="block text-sm font-medium text-[#000053] mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nama..."
              className="w-full px-4 py-3 border-2 border-[#000053] rounded-md bg-white text-[#000053] placeholder-gray-400 focus:outline-none focus:border-[#000053] focus:ring-2 focus:ring-[#000053] transition duration-150"
              required
            />
          </div>

          <div className="flex-1">
            <label htmlFor="emailOrPhone" className="block text-sm font-medium text-[#000053] mb-2">
              Email or Phone
            </label>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleInputChange}
              placeholder="Nama@company.com / +62***********"
              className="w-full px-4 py-3 border-2 border-[#000053] rounded-md bg-white text-[#000053] placeholder-gray-400 focus:outline-none focus:border-[#000053] focus:ring-2 focus:ring-[#000053] transition duration-150"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="shipmentDetails" className="block text-sm font-medium text-[#000053] mb-2">
            What do you want to ship?
          </label>
          <textarea
            id="shipmentDetails"
            name="shipmentDetails"
            value={formData.shipmentDetails}
            onChange={handleInputChange}
            rows={6}
            placeholder="Routes, Volumes, Constraints, Target Go-Live..."
            className="w-full px-4 py-3 border-2 border-[#000053] rounded-md bg-white text-[#000053] placeholder-gray-400 focus:outline-none focus:border-[#000053] focus:ring-2 focus:ring-[#000053] transition duration-150 resize-none"
            required
          ></textarea>
        </div>

        <div className="mb-8">
          <label htmlFor="quickCall" className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              id="quickCall"
              name="quickCallAvailable"
              checked={formData.quickCallAvailable}
              onChange={handleInputChange}
              className="h-4 w-4 text-[#000053] border-[#000053] rounded focus:ring-[#000053]"
            />
            <span className="text-sm font-medium text-[#000053]">
              I'm available for a quick call
            </span>
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full md:w-auto px-10 py-3 bg-[#000053] text-white font-semibold rounded-md hover:bg-[#000066] focus:outline-none focus:ring-4 focus:ring-[#000053]/30 transition duration-150"
          >
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;