import { useState } from "react";
import TrackingResult from "./components/TrackingResult";

const TrackAndTrace = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async () => {
    setIsLoading(true);
    setError("");
    setData(null);

    try {
      const response = await fetch("https://api.pcptransport.com/api/tracking/web", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Token": "YWRtaW4=",
        },
        body: JSON.stringify({ awb_no: trackingNumber }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.msg || "Network response was not ok");
      }
      
      if (result.status === false) {
          throw new Error(result.msg || "Tracking number not found.");
      }

      setData(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to fetch tracking data.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#001F54] leading-tight">
        Track 
      </h1>
      <p className="text-gray-600 mt-4 max-w-md">
        Track your shipment here.
      </p>

      <div className="mt-8">
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Enter your tracking number"
          className="border-2 border-gray-300 p-2 rounded-lg w-full max-w-md"
        />
        <button
          onClick={handleTrack}
          disabled={isLoading}
          className="bg-[#001F54] text-white px-6 py-2 rounded-lg ml-2 mt-2 md:mt-0"
        >
          {isLoading ? "Tracking..." : "Track"}
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {data && <TrackingResult data={data} />}
    </div>
  );
};

export default TrackAndTrace;
