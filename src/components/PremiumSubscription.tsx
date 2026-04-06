const benefits = [
  {
    title: "Кураторство дизайнеров",
    description: "Личные дизайнеры интерьера полностью курируют строительный процесс от начала до сдачи объекта.",
  },
  {
    title: "Помощь с бригадой",
    description: "Подбираем и координируем проверенную строительную бригаду — вам не нужно искать мастеров самостоятельно.",
  },
  {
    title: "Эксклюзивные предложения",
    description: "Доступ к закрытым коллекциям материалов, мебели и декора от наших партнёров.",
  },
  {
    title: "Скидки на услуги",
    description: "Персональные скидки на весь спектр услуг Revival — декорацию, проектирование и обустройство.",
  },
];

export default function PremiumSubscription() {
  return (
    <section className="py-24 bg-neutral-900" id="premium">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Эксклюзивно</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-4xl font-light text-white leading-snug"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Premium Subscription
            </h2>
            <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
              Часть средств от подписки направляется на благотворительность — вы помогаете другим, улучшая своё пространство.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-700">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-8 hover:bg-neutral-800 transition-colors duration-300"
            >
              <span className="text-xs text-neutral-500 uppercase tracking-widest mb-4 block">
                0{index + 1}
              </span>
              <h3 className="text-white text-lg font-light mb-3">{benefit.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-neutral-700 pt-10">
          <p className="text-neutral-300 text-sm leading-relaxed max-w-md">
            Присоединяйтесь к Premium и получите полное сопровождение вашего проекта от лучших специалистов Revival.
          </p>
          <button className="border border-white text-white px-8 py-3 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap">
            Подключить
          </button>
        </div>
      </div>
    </section>
  );
}
