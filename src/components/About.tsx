export default function About() {
  return (
    <section className="py-24 bg-white" id="mission">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">О нас</p>
            <h2
              className="text-4xl font-light text-gray-900 leading-snug mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Revival
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Компания «Revival» специализируется на декорации, проектировании и обустройстве различных жилых объектов. Мы всегда достигаем высокого качества выполненной работы.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="text-sm uppercase tracking-widest text-gray-900 mb-2">Декорация</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Создаём уникальные интерьерные решения, отражающие характер и стиль каждого клиента.</p>
            </div>
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="text-sm uppercase tracking-widest text-gray-900 mb-2">Проектирование</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Разрабатываем детальные проекты с учётом пожеланий, бюджета и особенностей пространства.</p>
            </div>
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="text-sm uppercase tracking-widest text-gray-900 mb-2">Обустройство</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Реализуем проекты «под ключ» — от концепции до финальной отделки.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
