import { MdSchool, MdGroups, MdMenuBook, MdSports } from 'react-icons/md';

const StatisticsSection = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {[
          { 
            icon: <MdSchool className="w-12 h-12" />, 
            label: "Study"
          },
          { 
            icon: <MdGroups className="w-12 h-12" />, 
            label: "Unity"
          },
          { 
            icon: <MdMenuBook className="w-12 h-12" />, 
            label: "Diverse"
          },
          { 
            icon: <MdSports className="w-12 h-12" />, 
            label: "Sports"
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div className="flex justify-center text-indigo-700 mb-3">
              {item.icon}
            </div>
            <h3 className="font-bold text-lg text-indigo-700 mb-1">
              {item.label}
            </h3>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;