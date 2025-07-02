
interface FilterTabsProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterTabs = ({ filters, activeFilter, onFilterChange }: FilterTabsProps) => {
  return (
    <div className="animate-on-scroll mb-12">
      {/* Desktop Filter Tabs */}
      <div className="hidden md:flex justify-center">
        <div className="flex flex-wrap gap-4 bg-gray-100 p-2 rounded-full">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                filter === activeFilter 
                  ? "bg-black text-white" 
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Filter Cards */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-2 px-4 max-w-md mx-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`relative overflow-hidden rounded-lg p-3 text-center transition-all duration-300 transform hover:scale-105 ${
                filter === activeFilter 
                  ? "bg-black text-white shadow-lg" 
                  : "bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <div className={`text-xs font-semibold mb-1 ${filter === activeFilter ? 'text-white' : 'text-gray-800'}`}>
                {filter}
              </div>
              <div className={`text-xs ${filter === activeFilter ? 'text-gray-300' : 'text-gray-500'}`}>
                {filter === "All" && "View Everything"}
                {filter === "Web Development" && "Websites & Apps"}
                {filter === "AI Automation" && "Smart Solutions"}
                {filter === "Branding" && "Visual Identity"}
                {filter === "Digital Marketing" && "Online Growth"}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
