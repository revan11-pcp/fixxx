
interface TimelineItemsProps {
  year: string;
  text: string;
  isLast?: boolean; 
}

const TimelineItems: React.FC<TimelineItemsProps> = ({ year, text, isLast }) => {
  return (
    <div className="flex relative items-start">
      <div className={`absolute left-1 top-0 w-0.5 bg-gray-300 ${!isLast ? 'bottom-0' : 'h-2'}`}></div>
      
      <div className="w-4 h-4 bg-green-600 rounded-full z-10 -ml-1 mr-4"></div>
      
      <div className="flex-grow pb-8"> 
        <p className="font-bold text-blue-900">{year}</p>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default TimelineItems;
