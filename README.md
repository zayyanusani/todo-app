# Todo List App

A modern, feature-rich to-do list application built with React, TypeScript, and Tailwind CSS. All data is stored locally in your browser using LocalStorage.

## Features

✅ **Add & Delete Todos** - Create new tasks and remove them when done  
✅ **Mark Complete** - Click to toggle task completion status  
✅ **Local Storage** - All todos persist automatically to your browser  
✅ **Search & Filter** - Find todos and filter by status (All, Active, Completed)  
✅ **Due Dates** - Add optional due dates to tasks  
✅ **Categories** - Organize todos with custom categories  
✅ **Priority Levels** - Set task priority (Low, Medium, High)  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Dark Mode** - Toggle between light and dark themes  
✅ **Statistics** - View task completion statistics

## Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Storage:** Browser LocalStorage API
- **Build Tool:** Vite
- **Icons:** Lucide React

## Installation

```bash
# Clone the repository
git clone https://github.com/zayyanusani/todo-app.git
cd todo-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

## Usage

1. **Add a Todo:** Type in the input field and press Enter or click the Add button
2. **Complete a Todo:** Click the checkbox next to the task
3. **Delete a Todo:** Click the delete button (trash icon)
4. **Set Priority:** Select priority level when creating or editing a task
5. **Add Due Date:** Click to add an optional due date
6. **Filter:** Use the filter buttons to show All, Active, or Completed todos
7. **Search:** Use the search bar to find specific tasks
8. **Dark Mode:** Toggle the theme with the moon/sun icon

## Data Storage

All todos are automatically saved to your browser's LocalStorage. Your data persists even after closing the browser.

### Todo Object Structure

```typescript
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  category?: string;
  dueDate?: string;
  createdAt: string;
}
```

## Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoForm.tsx
│   │   ├── TodoList.tsx
│   │   ├── TodoItem.tsx
│   │   ├── Filter.tsx
│   │   └── Statistics.tsx
│   ├── hooks/
│   │   └── useTodos.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Features Explained

### Local Storage
The app uses the browser's LocalStorage API to persist all todos. Data is automatically saved when you:
- Add a new todo
- Mark a todo as complete/incomplete
- Delete a todo
- Update todo properties

### Priority System
- **High:** Urgent tasks (shown in red)
- **Medium:** Normal priority (shown in orange)
- **Low:** Can wait (shown in green)

### Categories
Organize your todos into custom categories like Work, Personal, Shopping, etc.

### Due Dates
Add optional due dates to track task deadlines. Overdue tasks are highlighted.

## Keyboard Shortcuts

- `Enter` - Add new todo
- `Escape` - Clear input field
- `Click` - Toggle completion
- `Delete/Trash Icon` - Remove todo

## Browser Support

Works in all modern browsers that support:
- ES6+ JavaScript
- LocalStorage API
- CSS Grid & Flexbox

## License

MIT

## Contributing

Feel free to fork and submit pull requests for any improvements!

## Author

Created by [@zayyanusani](https://github.com/zayyanusani)
