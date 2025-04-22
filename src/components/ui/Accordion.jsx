import { Plus, Minus } from "lucide-react";

export default function Accordion({ item, isActive, onToggle }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-4 text-left ${
          isActive ? "bg-[#0056b3] text-white" : "bg-white text-[#0a2540]"
        }`}
      >
        <span className="font-medium">{item.question}</span>
        {isActive ? <Minus className="h-5 w-5 flex-shrink-0" /> : <Plus className="h-5 w-5 flex-shrink-0" />}
      </button>

      {isActive && (
        <div className="p-4 bg-[#0056b3] text-white">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}
