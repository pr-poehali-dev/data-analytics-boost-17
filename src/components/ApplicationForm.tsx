import { useState } from "react";
import Icon from "@/components/ui/icon";

interface ApplicationFormProps {
  open: boolean;
  onClose: () => void;
}

const roomTypes = [
  "Гостиная",
  "Спальня",
  "Кухня",
  "Детская",
  "Ванная",
  "Прихожая",
  "Кабинет",
  "Фасад дома",
  "Сад / участок",
  "Несколько помещений",
];

const budgets = [
  "До 50 000 ₽",
  "50 000 — 150 000 ₽",
  "150 000 — 300 000 ₽",
  "300 000 — 500 000 ₽",
  "Более 500 000 ₽",
];

export default function ApplicationForm({ open, onClose }: ApplicationFormProps) {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    roomType: "",
    budget: "",
    consultationType: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('https://functions.poehali.dev/2d1d0700-4ae4-44b8-b90c-086432b1d9ab', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: "", contact: "", roomType: "", budget: "", consultationType: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="bg-neutral-900 px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-white text-lg">☘</span>
            <h2 className="text-white uppercase tracking-widest text-sm">Revival — Анкета</h2>
          </div>
          <button onClick={handleClose} className="text-neutral-400 hover:text-white transition-colors cursor-pointer">
            <Icon name="X" size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="px-8 py-16 text-center">
            <div className="text-4xl mb-4">☘</div>
            <h3 className="text-2xl font-light text-neutral-900 mb-3">Спасибо!</h3>
            <p className="text-neutral-500 leading-relaxed">
              Мы получили вашу анкету и свяжемся с вами в ближайшее время.
            </p>
            <button
              onClick={handleClose}
              className="mt-8 border border-neutral-900 text-neutral-900 px-8 py-3 uppercase text-sm tracking-widest hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-pointer"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 py-8 flex flex-col gap-6">
            <p className="text-neutral-500 text-sm leading-relaxed border-l-2 border-neutral-200 pl-4">
              Заполните анкету — и мы подберём решение, идеально подходящее вашему пространству.
            </p>

            <div className="flex flex-col gap-2">
              <label className="uppercase text-xs tracking-widest text-neutral-400">Ваше имя</label>
              <input
                required
                type="text"
                placeholder="Как вас зовут?"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border-b border-neutral-200 py-2 text-neutral-900 placeholder:text-neutral-300 outline-none focus:border-neutral-900 transition-colors text-base bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="uppercase text-xs tracking-widest text-neutral-400">Контакт для связи</label>
              <input
                required
                type="text"
                placeholder="Телефон, email или Telegram"
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                className="border-b border-neutral-200 py-2 text-neutral-900 placeholder:text-neutral-300 outline-none focus:border-neutral-900 transition-colors text-base bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="uppercase text-xs tracking-widest text-neutral-400">Тип помещения</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {roomTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setForm({ ...form, roomType: type })}
                    className={`px-3 py-1.5 text-sm border transition-all duration-200 cursor-pointer ${
                      form.roomType === type
                        ? "bg-neutral-900 text-white border-neutral-900"
                        : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="uppercase text-xs tracking-widest text-neutral-400">Бюджет</label>
              <div className="flex flex-col gap-2 mt-1">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setForm({ ...form, budget: b })}
                    className={`px-4 py-2.5 text-sm border text-left transition-all duration-200 cursor-pointer ${
                      form.budget === b
                        ? "bg-neutral-900 text-white border-neutral-900"
                        : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="uppercase text-xs tracking-widest text-neutral-400">Формат консультации</label>
              <div className="flex gap-3 mt-1">
                {["Очная", "Онлайн"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setForm({ ...form, consultationType: type })}
                    className={`flex-1 py-3 text-sm border transition-all duration-200 cursor-pointer ${
                      form.consultationType === type
                        ? "bg-neutral-900 text-white border-neutral-900"
                        : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
                    }`}
                  >
                    {type === "Очная" ? "☘ Очная встреча" : "◎ Онлайн"}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-neutral-900 text-white py-4 uppercase text-sm tracking-widest hover:bg-neutral-700 transition-all duration-300 cursor-pointer disabled:opacity-50"
            >
              {loading ? 'Отправляем...' : 'Отправить анкету'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}