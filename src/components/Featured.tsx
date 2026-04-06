export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/89b6f1d6-21ef-4feb-8a5c-fdf3a4c7581f/files/9ac84d39-4cde-41e1-beee-380f2445b94f.jpg"
          alt="Architectural project"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-neutral-800 text-xl">☘</span>
          <h3 className="uppercase text-sm tracking-widest text-neutral-500">ИИ на вашей стороне</h3>
        </div>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Мы анализируем ваш участок, предлагаем концепции и воплощаем их в жизнь — всё это быстрее и точнее, чем традиционный подход.
        </p>
        <div className="flex flex-col gap-3 mb-8 text-neutral-600 text-base">
          <div className="flex items-center gap-2"><span className="text-neutral-800">☘</span> ИИ-визуализация результата до начала работ</div>
          <div className="flex items-center gap-2"><span className="text-neutral-800">☘</span> Реставрация фасадов, садов и интерьеров</div>
          <div className="flex items-center gap-2"><span className="text-neutral-800">☘</span> Персональный проект за 48 часов</div>
        </div>
        <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-widest">
          Получить проект
        </button>
      </div>
    </div>
  );
}