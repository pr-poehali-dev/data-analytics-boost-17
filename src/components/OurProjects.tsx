const projects = [
  {
    id: 1,
    title: "Квартира в скандинавском стиле",
    area: "85 м²",
    location: "Москва, Пресненский район",
    description: "Светлое пространство с акцентом на натуральные материалы и минималистичный декор.",
  },
  {
    id: 2,
    title: "Лофт в индустриальном стиле",
    area: "120 м²",
    location: "Санкт-Петербург, Василеостровский район",
    description: "Открытая планировка с кирпичными стенами и металлическими акцентами.",
  },
  {
    id: 3,
    title: "Классический интерьер",
    area: "200 м²",
    location: "Москва, Хамовники",
    description: "Элегантное пространство с лепниной, паркетом и изысканной мебелью.",
  },
  {
    id: 4,
    title: "Современный минимализм",
    area: "65 м²",
    location: "Москва, Арбат",
    description: "Функциональное жилое пространство с чистыми линиями и нейтральной палитрой.",
  },
  {
    id: 5,
    title: "Эко-интерьер загородного дома",
    area: "350 м²",
    location: "Подмосковье, Рублёвка",
    description: "Органичное сочетание дерева, камня и живой зелени в загородном доме.",
  },
  {
    id: 6,
    title: "Арт-деко апартаменты",
    area: "95 м²",
    location: "Санкт-Петербург, Центральный район",
    description: "Богатые текстуры, геометрические узоры и золотые акценты в духе ар-деко.",
  },
];

export default function OurProjects() {
  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Портфолио</p>
          <h2 className="text-4xl font-light text-gray-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Наши проекты
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="aspect-[4/3] mb-4 bg-gray-100 border border-gray-200 flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest text-gray-300">Фото</span>
              </div>
              <div className="px-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-light text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-400 ml-4 whitespace-nowrap">{project.area}</span>
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{project.location}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}