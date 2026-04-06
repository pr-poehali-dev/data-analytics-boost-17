import { useState } from "react";
import ApplicationForm from "./ApplicationForm";

interface HeaderProps {
  className?: string;
  onNavigate?: (section: string) => void;
}

export default function Header({ className, onNavigate }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const handleNav = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              onClick={() => handleNav("mission")}
              className="text-white hover:text-black bg-transparent hover:bg-white transition-all duration-300 uppercase text-sm cursor-pointer px-3 py-1"
            >
              О нас
            </button>
            <button
              onClick={() => handleNav("projects")}
              className="text-white hover:text-black bg-transparent hover:bg-white transition-all duration-300 uppercase text-sm cursor-pointer px-3 py-1"
            >
              Наши проекты
            </button>
            <button
              onClick={() => handleNav("partners")}
              className="text-white hover:text-black bg-transparent hover:bg-white transition-all duration-300 uppercase text-sm cursor-pointer px-3 py-1"
            >
              Наши партнёры
            </button>
            <button
              onClick={() => handleNav("premium")}
              className="text-white hover:text-black bg-transparent hover:bg-white transition-all duration-300 uppercase text-sm cursor-pointer px-3 py-1"
            >
              Premium
            </button>
            <button
              onClick={() => setOpen(true)}
              className="text-white hover:text-black bg-transparent hover:bg-white transition-all duration-300 uppercase text-sm cursor-pointer px-3 py-1"
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