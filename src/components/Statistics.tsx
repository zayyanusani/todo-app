import { CheckCircle, AlertCircle, Zap, Trophy } from 'lucide-react';

interface StatisticsProps {
  total: number;
  completed: number;
  active: number;
  highPriority: number;
}

export default function Statistics({
  total,
  completed,
  active,
  highPriority,
}: StatisticsProps) {
  const completionRate = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-3">
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Total</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{total}</p>
          </div>
          <Trophy size={24} className="text-blue-400" />
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Completed</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">{completed}</p>
          </div>
          <CheckCircle size={24} className="text-green-400" />
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border-l-4 border-orange-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Active</p>
            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{active}</p>
          </div>
          <AlertCircle size={24} className="text-orange-400" />
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">High Priority</p>
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">{highPriority}</p>
          </div>
          <Zap size={24} className="text-red-400" />
        </div>
      </div>

      {total > 0 && (
        <div className="col-span-2 md:col-span-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Completion Rate</p>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{completionRate}%</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center border-4 border-purple-500">
              <span className="text-lg font-bold text-purple-600 dark:text-purple-400">{completionRate}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
