import { useState } from "react";
import ApplicationForm from "./ApplicationForm";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
        <div className="flex justify-between items-center">
          <div className="text-white text-sm uppercase tracking-widest flex items-center gap-2">
            <span className="text-white text-lg">☘</span>
            <span>Revival</span>
          </div>
          <nav className="flex gap-8 items-center">
            <button
              onClick={() => setOpen(true)}
              className="text-white hover:text-green-400 transition-colors duration-300 uppercase text-sm cursor-pointer"
            >
              Анкета
            </button>
          </nav>
        </div>
      </header>
      <ApplicationForm open={open} onClose={() => setOpen(false)} />
    </>
  );
}