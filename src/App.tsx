import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import Statistics from './components/Statistics';
import { useTodos } from './hooks/useTodos';
import { CheckCircle } from 'lucide-react';

function App() {
  const {
    todos,
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    darkMode,
    setDarkMode,
    addTodo,
    deleteTodo,
    toggleTodo,
    clearCompleted,
    getFilteredTodos,
    getStats,
  } = useTodos();

  const filteredTodos = getFilteredTodos();
  const stats = getStats();

  return (
    <div className={`min-h-screen transition-colors ${
      darkMode
        ? 'bg-gray-900 text-white'
        : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <CheckCircle size={32} className="text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Todo List</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Organize your tasks with priority, categories, and due dates</p>
        </div>

        {/* Statistics */}
        <Statistics
          total={stats.total}
          completed={stats.completed}
          active={stats.active}
          highPriority={stats.highPriority}
        />

        {/* Todo Form */}
        <TodoForm onAdd={addTodo} />

        {/* Filter and Search */}
        <Filter
          filter={filter}
          onFilterChange={setFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
          completedCount={stats.completed}
          onClearCompleted={clearCompleted}
        />

        {/* Todo List */}
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
