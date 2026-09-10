import { FilterType } from '../types';
import { Search, Moon, Sun } from 'lucide-react';

interface FilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  searchTerm: string;
  onSearchChange: (search: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  completedCount: number;
  onClearCompleted: () => void;
}

export default function Filter({
  filter,
  onFilterChange,
  searchTerm,
  onSearchChange,
  darkMode,
  onToggleDarkMode,
  completedCount,
  onClearCompleted,
}: FilterProps) {
  return (
    <div className="mb-6 space-y-3">
      <div className="flex gap-2 items-center">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search todos..."
          className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
        />
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          title="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-between">
        <div className="flex gap-2">
          {(['all', 'active', 'completed'] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => onFilterChange(f)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === f
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="px-4 py-2 rounded-lg font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            Clear Completed ({completedCount})
          </button>
        )}
      </div>
    </div>
  );
}
