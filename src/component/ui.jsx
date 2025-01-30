// Button Component
export function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      {children}
    </button>
  );
}

// Input Component
export function Input({ type, value, onChange, placeholder }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

// Card Component
export function Card({ children }) {
  return <div className="bg-white shadow-md rounded-lg p-4">{children}</div>;
}

// CardContent Component
export function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}

// Switch Component
export function Switch({ isChecked, onToggle }) {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" checked={isChecked} onChange={onToggle} className="sr-only" />
        <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner"></div>
        <div
          className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform transform ${isChecked ? "translate-x-5" : "translate-x-0"}`}
        ></div>
      </div>
    </label>
  );
}

// Label Component
export function Label({ children }) {
  return <label className="text-gray-700 font-medium">{children}</label>;
}
