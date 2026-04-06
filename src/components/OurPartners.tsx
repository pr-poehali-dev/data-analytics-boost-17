const partners = [
  {
    id: 1,
    name: "Arketipo",
    category: "Итальянская мебель",
    description: "Эксклюзивная итальянская мебель ручной работы. Партнёрство с 2019 года.",
    logo: "A",
  },
  {
    id: 2,
    name: "Porcelanosa",
    category: "Испанская керамика",
    description: "Ведущий производитель керамической плитки и сантехники премиум-класса.",
    logo: "P",
  },
  {
    id: 3,
    name: "Poliform",
    category: "Системы хранения",
    description: "Итальянские системы хранения и корпусная мебель для жилых пространств.",
    logo: "Pl",
  },
  {
    id: 4,
    name: "Flos",
    category: "Дизайнерский свет",
    description: "Культовые световые решения от ведущих дизайнеров мира.",
    logo: "F",
  },
  {
    id: 5,
    name: "Minotti",
    category: "Мягкая мебель",
    description: "Итальянские диваны и кресла — символ современной роскоши.",
    logo: "M",
  },
  {
    id: 6,
    name: "Molteni&C",
    category: "Мебель и системы",
    description: "Итальянский дом с историей с 1934 года. Мебель для спальни и гостиной.",
    logo: "M&C",
  },
  {
    id: 7,
    name: "De Padova",
    category: "Концептуальный дизайн",
    description: "Легендарный итальянский бренд, открывший миру Vico Magistretti и Achille Castiglioni.",
    logo: "DP",
  },
  {
    id: 8,
    name: "Boffi",
    category: "Кухни и ванные",
    description: "Авторские кухни и ванные комнаты с безупречным качеством исполнения.",
    logo: "B",
  },
];

export default function OurPartners() {
  return (
    <section className="py-24 bg-gray-50" id="partners">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Экосистема</p>
          <h2 className="text-4xl font-light text-gray-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Наши партнёры
          </h2>
          <p className="mt-4 text-gray-500 text-sm max-w-xl mx-auto">
            Мы работаем только с проверенными поставщиками и брендами мирового уровня, чтобы каждый проект был безупречен
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white border border-gray-100 p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:border-gray-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-light mb-5 group-hover:bg-black transition-colors duration-300">
                {partner.logo}
              </div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">{partner.category}</p>
              <h3 className="text-lg font-light text-gray-900 mb-3">{partner.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
