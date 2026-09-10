import { Trash2, Flag, Calendar, Tag } from 'lucide-react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'text-red-500';
    case 'medium':
      return 'text-orange-500';
    case 'low':
      return 'text-green-500';
    default:
      return 'text-gray-500';
  }
};

const isOverdue = (dueDate?: string) => {
  if (!dueDate) return false;
  return new Date(dueDate) < new Date() && new Date(dueDate).toDateString() !== new Date().toDateString();
};

const formatDate = (dateString?: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === today.toDateString()) return 'Today';
  if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const isOverdueTask = isOverdue(todo.dueDate);

  return (
    <div
      className={`animate-slide-in flex items-start gap-3 p-4 rounded-lg border-2 transition-all ${
        todo.completed
          ? 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
          : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 mt-1 rounded cursor-pointer accent-blue-500"
      />

      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2 flex-wrap">
          <span
            className={`flex-1 text-base ${
              todo.completed
                ? 'line-through text-gray-500 dark:text-gray-400'
                : 'text-gray-800 dark:text-gray-100'
            }`}
          >
            {todo.text}
          </span>
          <Flag size={16} className={`${getPriorityColor(todo.priority)} flex-shrink-0 mt-0.5`} />
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
          {todo.category && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
              <Tag size={12} />
              {todo.category}
            </span>
          )}

          {todo.dueDate && (
            <span
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${
                isOverdueTask
                  ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
            >
              <Calendar size={12} />
              {formatDate(todo.dueDate)}
              {isOverdueTask && ' (Overdue)'}
            </span>
          )}
        </div>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 hover:bg-red-100 dark:hover:bg-red-900 text-red-600 dark:text-red-400 rounded-lg transition-colors flex-shrink-0"
        title="Delete todo"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
