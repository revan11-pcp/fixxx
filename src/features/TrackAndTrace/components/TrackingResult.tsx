
interface TrackingDetail {
  AwbNo: string;
  TrackingDate: string;
  OfficeName: string;
  StatusId: string;
  StatusName: string;
  ReceiverStatus: string;
  ReceiverName: string;
  RelatioanName: string;
  ReceiverDate: string;
  ReceiverTime: string;
  Location: string;
  CourierName: string;
}

interface TrackingHeader {
  ServiceName: string;
  ShipperAddress: string;
  ShipperName: string;
  ReceiverAddress: string;
  ReceiverName: string;
  TrackingNo: string;
}

interface TrackingData {
  status: boolean;
  list: {
    header: TrackingHeader;
    detail: TrackingDetail[];
  }[];
}

interface TrackingResultProps {
  data: TrackingData;
}

const TrackingResult = ({ data }: TrackingResultProps) => {
  if (!data || !data.list || data.list.length === 0) {
    return null;
  }

  const { header, detail } = data.list[0];

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#001F54] mb-4">Shipment Details</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="font-semibold">From:</p>
            <p>{header.ShipperName}</p>
            <p>{header.ShipperAddress}</p>
          </div>
          <div>
            <p className="font-semibold">To:</p>
            <p>{header.ReceiverName}</p>
            <p>{header.ReceiverAddress}</p>
          </div>
          <div>
            <p className="font-semibold">Service:</p>
            <p>{header.ServiceName}</p>
          </div>
          <div>
            <p className="font-semibold">Tracking Number:</p>
            <p>{header.TrackingNo}</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#001F54] mb-4">Tracking History</h3>
        <div className="relative border-l-2 border-gray-200">
          {detail.map((item, index) => (
            <div key={index} className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <svg className="w-3 h-3 text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
              </span>
              <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                {item.StatusName}
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                {new Date(item.TrackingDate).toLocaleString()}
              </time>
              <p className="text-base font-normal text-gray-500">
                {item.Location} - {item.OfficeName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackingResult;
