import { useState } from "react";
import Icon from "@/components/ui/icon";

const PRODUCTS = [
  { id: 1, name: "Двусторонние шармы", icon: "Star", desc: "Уникальные подвески с гравировкой на заказ" },
  { id: 2, name: "Фотоальбомы", icon: "BookOpen", desc: "Персонализированные корпоративные альбомы" },
  { id: 3, name: "3D стикеры", icon: "Layers", desc: "Объёмные наклейки с логотипом компании" },
  { id: 4, name: "Футболки и ручки", icon: "Shirt", desc: "Брендированная одежда и канцелярия" },
  { id: 5, name: "Флешка-подвеска", icon: "Usb", desc: "Носители с гравировкой — функционально и стильно" },
  { id: 6, name: "Объёмные статуэтки", icon: "Trophy", desc: "3D-фигуры для наград и подарков" },
  { id: 7, name: "Стандартные статуэтки", icon: "Award", desc: "Классические корпоративные награды" },
  { id: 8, name: "Кубки", icon: "Medal", desc: "Наградные кубки с персональной гравировкой" },
  { id: 9, name: "Наградная продукция", icon: "BadgeCheck", desc: "Дипломы, грамоты, благодарности" },
  { id: 10, name: "Сувениры на заказ", icon: "Sparkles", desc: "Любые изделия по вашему желанию" },
];

const PACKAGES = [
  {
    id: "impulse",
    name: "ИМПУЛЬС",
    tag: "Годовой контракт",
    color: "from-orange-500 to-amber-400",
    accent: "#FF8C00",
    price: "от 154 950 ₽",
    minQty: "50 штук",
    duration: "4 линейки в год",
    highlight: true,
    desc: "Полный цикл каждый квартал: тематически связанные линейки подарков с единой годовой стратегией.",
    features: [
      "4 линейки (1–3 вида) в рамках одного заказа",
      "Гарантированное бронирование производственных слотов",
      "Сокращённые сроки для срочных запросов",
      "Единая годовая маркетинговая стратегия",
      "Доставка до места включена",
      "Глубина проработки бренда: 5 из 5",
      "Программа лояльности — возможность сокращать сроки",
    ],
    criteria: { brand: "5/5", client: "Все сегменты", partner: "Долгосрочный партнёр" },
  },
  {
    id: "moment",
    name: "МОМЕНТ",
    tag: "Бюджетный аналог",
    color: "from-blue-500 to-cyan-400",
    accent: "#3B82F6",
    price: "от 13 220 ₽",
    minQty: "от 10 штук",
    duration: "до 2 месяцев",
    highlight: false,
    desc: "Дизайнерские макеты с нанесением простого дизайна, полное управление циклом производства без персонализации.",
    features: [
      "Разработка дизайнерских макетов с нанесением",
      "Полное управление циклом производства",
      "Устранение производственных рисков",
      "Контроль качества сувенирной продукции",
      "Все основные циклы изготовления (кроме персонализации)",
      "Количество линеек по договорённости с заказчиком",
      "Глубина проработки бренда: 3 из 5",
    ],
    criteria: { brand: "3/5", client: "Все сегменты", partner: "Партнёр" },
  },
  {
    id: "spark",
    name: "ИСКРА",
    tag: "Финишная обработка",
    color: "from-violet-500 to-purple-400",
    accent: "#8B5CF6",
    price: "от 5 925 ₽",
    minQty: "от 30 штук",
    duration: "Зависит от объёма",
    highlight: false,
    desc: "Финишная обработка материалов клиента: лазерная гравировка, УФ-печать, маркировка на ваших заготовках.",
    features: [
      "Клиент предоставляет собственные материалы",
      "Металлические заготовки, дерево, пластик и др.",
      "Лазерная гравировка и УФ-печать",
      "Разработка и согласование дизайна",
      "Контроль качества и доставка готовых изделий",
      "Глубина проработки бренда: 3 из 5",
    ],
    criteria: { brand: "3/5", client: "Первый и второй сегмент", partner: "Услуга по производству" },
  },
  {
    id: "imprint",
    name: "ОТПЕЧАТОК",
    tag: "Штучный заказ",
    color: "from-emerald-500 to-green-400",
    accent: "#10B981",
    price: "от 500 ₽ за шт.",
    minQty: "от 1 штуки",
    duration: "1–5 рабочих дней",
    highlight: false,
    desc: "Штучная покупка сувениров для корпоративных и частных клиентов без оптовой закупки.",
    features: [
      "Шармы, стикеры, кружки, футболки и др.",
      "Нанесение логотипа, текста или изображения",
      "Готовые носители из стандартного ассортимента",
      "Без минимального тиража — от 1 штуки",
      "Доступно корпоративным и частным клиентам",
      "Глубина проработки бренда: 2 из 5",
    ],
    criteria: { brand: "2/5", client: "Все сегменты, B2C", partner: "Единичная продажа" },
  },
];

const PRICES = [
  { name: "Двусторонний шарм", price: "531 ₽" },
  { name: "Ручки пластмассовые", price: "109 ₽" },
  { name: "Ручки металлические", price: "171 ₽" },
  { name: "Ручки бумажные", price: "100 ₽" },
  { name: "Флешка 120 гб", price: "1 080 ₽" },
  { name: "Флешка 256 гб", price: "1 266 ₽" },
  { name: "Статуэтки 3D", price: "502 ₽" },
  { name: "Бутылки пластмассовые", price: "203 ₽" },
  { name: "Бутылки металлические", price: "554 ₽" },
  { name: "Фотоальбомы", price: "754 ₽" },
  { name: "3D стикеры (набор 5 шт.)", price: "415 ₽" },
  { name: "Картхолдеры", price: "629 ₽" },
  { name: "Бейджи", price: "889,5 ₽" },
  { name: "Кубки металлические", price: "1 138 ₽" },
  { name: "Кубки деревянные", price: "799 ₽" },
  { name: "Кубки пластиковые", price: "461 ₽" },
];

const FAQ = [
  {
    q: "Как формируется стоимость заказа?",
    a: "Стоимость складывается из: сырьё и материалы + расходники + добавленная стоимость + доставка. В пакетах «Импульс» и «Хроника» дополнительно включается дизайн-концепция. В «Импульсе» ещё и консалтинг. Точный расчёт — после согласования ТЗ.",
  },
  {
    q: "Что входит в пакет Импульс?",
    a: "Полный цикл каждый квартал: разработка уникальной дизайн-концепции с погружением в брендбук (уровень 5 из 5), производство тематически связанных линеек, бронирование производственных слотов, контроль качества и доставка. Оплата — поэтапная. Длительность контракта до 5 месяцев.",
  },
  {
    q: "Можно ли заказать 1 штуку?",
    a: "Да! Пакет «Отпечаток» — от 1 штуки. Срок от 2 недель до 2 месяцев. Подходит корпоративным и B2C клиентам. Доставка включена. Оплата — предоплата за партию.",
  },
  {
    q: "В чём разница между Момент и Импульс?",
    a: "«Момент» — разовый проект на до 3 месяцев с фиксированным тиражом. «Импульс» — стратегическое партнёрство: 4 линейки в год, бронирование слотов, программа лояльности с возможностью сокращать сроки, консалтинг и более глубокая проработка бренда (5 vs 3 из 5).",
  },
  {
    q: "Что такое пакет Искра?",
    a: "Пакет «Искра» — обработка ваших материалов. Клиент сам предоставляет заготовки (металл, дерево, пластик), мы делаем финишную обработку: лазерная гравировка, УФ-печать, маркировка. Минимум от 30 штук. Управление производственным циклом — частичное.",
  },
  {
    q: "Вы работаете с частными клиентами?",
    a: "Да, пакет «Отпечаток» доступен для всех сегментов, включая B2C. Для корпоративных клиентов рекомендуем пакеты «Момент» или «Импульс» в зависимости от объёма и стратегических задач.",
  },
  {
    q: "Какие условия оплаты?",
    a: "«Импульс» — поэтапная оплата по этапам проекта. «Хроника» — годовая подписка. «Момент» и «Искра» — предоплата за партию. «Отпечаток» — предоплата за партию. Реквизиты и договор предоставляются после согласования ТЗ.",
  },
  {
    q: "Есть ли программа лояльности?",
    a: "Да, программа лояльности действует только в пакете «Хроника» — она позволяет сокращать производственные сроки при регулярных заказах. В остальных пакетах программы лояльности нет.",
  },
  {
    q: "Можно ли вносить правки после запуска?",
    a: "В «Импульсе» — да, на определённых этапах. В «Хронике» и «Момент» — да. В «Искра» — да, только на этапе дизайн-макета. В «Отпечатке» — нет: работа ведётся по согласованному макету.",
  },
  {
    q: "Есть ли у вас собственное оборудование?",
    a: "Да, всё оборудование и сырьё — наша собственность. Это обеспечивает полный контроль качества, независимость от внешних поставщиков и возможность оперативно реагировать на изменения в заказе.",
  },
  {
    q: "Как долго длится контракт?",
    a: "«Импульс» — до 5 месяцев. «Хроника» — 1 год (с программой лояльности). «Момент» — до 3 месяцев. «Искра» — зависит от сложности обработки. «Отпечаток» — минимальный/срочный.",
  },
];

const CASES = [
  {
    id: 1,
    tag: "Пакет Импульс",
    tagColor: "#FF8C00",
    company: "IT-компания «ТехноСфера»",
    task: "Корпоративные подарки на Новый год и день рождения компании — две отдельные тематические линейки для 200 сотрудников.",
    solution: "Разработали единую дизайн-концепцию в корпоративных цветах с погружением в брендбук. Q1 — именные металлические флешки с гравировкой. Q3 — наборы: фотоальбом + картхолдер + 3D-стикеры. Бронирование слотов обеспечило соблюдение дедлайнов.",
    result: "Два тиража по 200 штук, доставка по офисам в 3 городах, срок — в рамках квартального цикла. Стоимость проекта — от 154 950 ₽ за линейку.",
    icon: "Building2",
    metrics: [
      { val: "400 шт.", label: "Изделий за год" },
      { val: "3 города", label: "Доставка" },
      { val: "5/5", label: "Глубина бренда" },
    ],
  },
  {
    id: 2,
    tag: "Пакет Момент",
    tagColor: "#3B82F6",
    company: "Агентство «Медиастарт»",
    task: "Брендированные сувениры для клиентского форума: 50 наборов (кубок + значок + ручка) с единым дизайном для вручения партнёрам.",
    solution: "Создали дизайн-макеты под брендбук агентства. Кубки металлические с гравировкой, бейджи с логотипом, металлические ручки в фирменной упаковке. Полный цикл под ключ — от концепции до доставки в зал.",
    result: "50 наборов готовы за 6 недель. Доставка в день форума. Контроль качества каждого изделия. Итоговая стоимость набора — около 1 900 ₽/шт.",
    icon: "Megaphone",
    metrics: [
      { val: "50 наборов", label: "Тираж" },
      { val: "6 недель", label: "Срок" },
      { val: "3 позиции", label: "В наборе" },
    ],
  },
];

const CHAT_REPLIES: Record<string, string> = {
  "Хочу узнать цены": "Цены зависят от пакета и продукции. Пакет «Отпечаток» — от 500 ₽/шт. «Момент» — от 13 220 ₽ за партию. «Искра» — от 5 925 ₽. «Импульс» — от 154 950 ₽/год. Могу рассчитать точнее — скажите, что нужно и в каком количестве?",
  "Какой пакет выбрать?": "Расскажите о задаче — и я подберу оптимальный вариант! Если нужно 1–30 штук быстро — «Отпечаток» или «Искра». Для разовой партии от 20 шт. — «Момент». Для годового сотрудничества с линейками — «Импульс» или «Хроника».",
  "Сроки изготовления": "«Отпечаток» — от 2 недель до 2 месяцев. «Момент» — до 3 месяцев. «Искра» — 1–4 месяца в зависимости от тиража. «Импульс» — производство по квартальному плану в течение года.",
  "Есть доставка?": "Да, доставка включена во все пакеты! Работаем по всей России. Адресная доставка по офисам и городам. Уточните ваш регион — я назову примерные сроки.",
  "Нужен 1 заказ": "Отлично! Для штучных заказов — пакет «Отпечаток». Минимум 1 штука, срок от 2 недель. Выберите продукцию (шармы, кубки, ручки, флешки и др.) и пришлите ваш логотип — мы сделаем расчёт за 24 часа.",
};

const STEPS = [
  { num: "01", title: "Заявка", desc: "Оставляете запрос — обсуждаем задачи и цели" },
  { num: "02", title: "ТЗ и концепция", desc: "Согласовываем техническое задание и концепцию дизайна" },
  { num: "03", title: "Макеты", desc: "Разрабатываем дизайн-макеты с нанесением" },
  { num: "04", title: "Производство", desc: "Запускаем производство на собственном оборудовании" },
  { num: "05", title: "Контроль качества", desc: "Проверяем каждое изделие перед отправкой" },
  { num: "06", title: "Доставка", desc: "Доставляем готовую продукцию до вашего места" },
];

export default function Index() {
  const [activePackage, setActivePackage] = useState("impulse");
  const [calcPackage, setCalcPackage] = useState("moment");
  const [calcProduct, setCalcProduct] = useState("Футболки и ручки");
  const [calcQty, setCalcQty] = useState(50);
  const [calcDesign, setCalcDesign] = useState("simple");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", company: "", phone: "", message: "" });
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<{role: "user"|"bot"; text: string}[]>([
    { role: "bot", text: "Привет! Я менеджер Мемори Продакшн. Чем могу помочь? Выберите вопрос ниже или напишите свой." },
  ]);

  const getEstimate = () => {
    const base: Record<string, number> = { impulse: 80000, moment: 15000, spark: 10000, imprint: 500 };
    const productMult: Record<string, number> = {
      "Двусторонние шармы": 1.2, "Фотоальбомы": 1.8, "3D стикеры": 0.9, "Футболки и ручки": 1.0,
      "Флешка-подвеска": 1.5, "Объёмные статуэтки": 2.2, "Стандартные статуэтки": 1.6,
      "Кубки": 1.7, "Наградная продукция": 1.4, "Сувениры на заказ": 2.0,
    };
    const designMult: Record<string, number> = { simple: 1, medium: 1.4, complex: 1.9 };
    const qtyFactor = calcPackage === "imprint" ? 1 : Math.max(0.5, 1 - calcQty / 1000);
    const result = base[calcPackage] * (productMult[calcProduct] || 1) * designMult[calcDesign] * qtyFactor;
    if (calcPackage === "imprint") return `от ${Math.round(result * calcQty).toLocaleString("ru")} ₽`;
    return `от ${Math.round(result).toLocaleString("ru")} ₽`;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display text-xl tracking-widest text-white">
            <span className="gradient-text">МЕМОРИ</span>
            <span className="text-white/50 text-sm ml-2 font-body">ПРОДАКШН</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-body text-white/60">
            <a href="#packages" className="hover:text-[#FF8C00] transition-colors">Пакеты</a>
            <a href="#catalog" className="hover:text-[#FF8C00] transition-colors">Каталог</a>
            <a href="#process" className="hover:text-[#FF8C00] transition-colors">Этапы</a>
            <a href="#faq" className="hover:text-[#FF8C00] transition-colors">FAQ</a>
          </div>
          <a href="#contact">
            <button className="btn-primary rounded-full px-5 py-2 text-sm font-body font-semibold text-white">
              <span>Получить расчёт</span>
            </button>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/05007de8-4e6a-4f62-86b2-48d35539af23/files/6a14e350-0d80-4cfb-bd75-c91f529686df.jpg"
            alt="Производство сувениров"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </div>

        <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 right-40 w-48 h-48 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-orange-400 text-xs font-body font-semibold tracking-widest uppercase">Собственное производство</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-none mb-6 uppercase tracking-tight">
              Корпоративные<br />
              <span className="gradient-text">сувениры</span><br />
              под&nbsp;ключ
            </h1>
            <p className="font-body text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              От штучного заказа до годовой линейки брендированных подарков.
              Полный производственный цикл, контроль качества, доставка.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#packages">
                <button className="btn-primary rounded-full px-8 py-4 font-body font-semibold text-white text-base">
                  <span>Выбрать пакет</span>
                </button>
              </a>
              <a href="#calculator">
                <button className="rounded-full px-8 py-4 font-body font-semibold text-white/80 text-base border border-white/20 hover:border-orange-500/50 hover:text-white transition-all">
                  Рассчитать стоимость →
                </button>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { val: "10+", label: "Видов продукции" },
                { val: "4", label: "Пакета услуг" },
                { val: "1–365", label: "Дней на проект" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl gradient-text">{s.val}</div>
                  <div className="font-body text-xs text-white/40 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block relative animate-float">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://cdn.poehali.dev/projects/05007de8-4e6a-4f62-86b2-48d35539af23/files/1e8ef9dd-7dbb-45a5-85ba-24e48aadbce4.jpg"
                alt="Корпоративные подарки"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#111] border border-[#222] rounded-2xl px-5 py-3">
              <div className="font-display text-orange-400 text-lg">от 1 шт.</div>
              <div className="font-body text-white/50 text-xs">Минимальный тираж</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-orange-500 rounded-2xl px-5 py-3">
              <div className="font-display text-white text-lg">1–5 дней</div>
              <div className="font-body text-white/80 text-xs">Срок изготовления</div>
            </div>
          </div>
        </div>

        {/* Бегущая строка */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#1f1f1f] py-3 overflow-hidden bg-[#0A0A0A]/80">
          <div className="marquee-track">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 shrink-0">
                <span className="font-display text-sm tracking-widest text-white/20 uppercase">Шармы</span>
                <span className="text-orange-500/40">◆</span>
                <span className="font-display text-sm tracking-widest text-white/20 uppercase">Статуэтки</span>
                <span className="text-orange-500/40">◆</span>
                <span className="font-display text-sm tracking-widest text-white/20 uppercase">Кубки</span>
                <span className="text-orange-500/40">◆</span>
                <span className="font-display text-sm tracking-widest text-white/20 uppercase">Футболки</span>
                <span className="text-orange-500/40">◆</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section id="advantages" className="py-20 px-6 bg-[#070707]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="section-line mb-4" />
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-4">Наше преимущество</h2>
            <p className="font-body text-white/50 text-lg max-w-2xl">
              Комплексный подход — от разработки дизайна с погружением в брендбук до адресной доставки
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-400/5 border border-orange-500/20 p-8">
              <div className="font-display text-2xl mb-4 gradient-text">Комплексное сопровождение</div>
              <p className="font-body text-white/60 leading-relaxed mb-6">
                В отличие от большинства российских компаний, мы предлагаем полноценное сопровождение проекта —
                от индивидуального дизайна с полным погружением в брендбук заказчика до финишной персонализации,
                контроля качества и адресной доставки.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "Palette", text: "Разработка дизайна под брендбук" },
                  { icon: "Shield", text: "Контроль качества каждого изделия" },
                  { icon: "Truck", text: "Адресная доставка" },
                  { icon: "Users", text: "HR-задачи и корпоративная идентичность" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                    <Icon name={item.icon} size={16} className="text-orange-400 mt-0.5 shrink-0" fallback="Check" />
                    <span className="font-body text-xs text-white/70 leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Target", title: "Рекламные задачи", desc: "Брендированная продукция усиливает присутствие компании" },
                { icon: "Heart", title: "HR-задачи", desc: "Повышение лояльности сотрудников и корпоративный дух" },
                { icon: "BookMarked", title: "Корпоративная история", desc: "Материальные носители ценностей и истории компании" },
                { icon: "Fingerprint", title: "Корпоративная идентичность", desc: "Формирование узнаваемого фирменного стиля" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-[#111] border border-[#222] p-5 card-hover">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-3">
                    <Icon name={item.icon} size={18} className="text-orange-400" fallback="Star" />
                  </div>
                  <div className="font-display text-sm tracking-wide mb-1">{item.title}</div>
                  <div className="font-body text-xs text-white/40 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ПАКЕТЫ */}
      <section id="packages" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="section-line mb-4" />
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-4">Пакеты услуг</h2>
            <p className="font-body text-white/50 text-lg max-w-xl">
              Выберите формат сотрудничества — от разовых заказов до годовых стратегических партнёрств
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setActivePackage(pkg.id)}
                className={`relative rounded-2xl p-6 border cursor-pointer card-hover transition-all duration-300 flex flex-col ${
                  activePackage === pkg.id
                    ? "border-orange-500/50 bg-[#161616]"
                    : "border-[#222] bg-[#111]"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full px-3 py-0.5 text-xs font-body font-bold text-black">
                    Популярный
                  </div>
                )}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pkg.color} mb-4 flex items-center justify-center shrink-0`}>
                  <Icon
                    name={pkg.id === "impulse" ? "Zap" : pkg.id === "moment" ? "Clock" : pkg.id === "spark" ? "Flame" : "Stamp"}
                    size={20}
                    className="text-white"
                    fallback="Star"
                  />
                </div>
                <div className="font-display text-2xl tracking-wider mb-1">{pkg.name}</div>
                <div className="font-body text-xs text-white/40 mb-3">{pkg.tag}</div>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-4">{pkg.desc}</p>
                <div className="space-y-2 mb-4 flex-1">
                  {pkg.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: pkg.accent }} />
                      <span className="font-body text-xs text-white/60 leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#222] pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-body text-xs text-white/30">Мин. тираж</span>
                    <span className="font-body text-xs text-white/70">{pkg.minQty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-xs text-white/30">Срок</span>
                    <span className="font-body text-xs text-white/70">{pkg.duration}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="font-body text-xs text-white/30">Цена</span>
                    <span className="font-display text-sm gradient-text">{pkg.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Таблица сравнения */}
          <div className="rounded-2xl bg-[#111] border border-[#1f1f1f] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#1f1f1f]">
              <div className="font-display text-lg tracking-wide">Сравнение пакетов</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1f1f1f]">
                    <th className="text-left px-6 py-3 font-body text-xs text-white/30 uppercase tracking-wider min-w-[180px]">Критерий</th>
                    <th className="text-center px-4 py-3 font-display text-sm tracking-wide text-orange-400 min-w-[120px]">ИМПУЛЬС</th>
                    <th className="text-center px-4 py-3 font-display text-sm tracking-wide text-purple-400 min-w-[120px]">ХРОНИКА</th>
                    <th className="text-center px-4 py-3 font-display text-sm tracking-wide text-blue-400 min-w-[120px]">МОМЕНТ</th>
                    <th className="text-center px-4 py-3 font-display text-sm tracking-wide text-violet-400 min-w-[120px]">ИСКРА</th>
                    <th className="text-center px-4 py-3 font-display text-sm tracking-wide text-emerald-400 min-w-[120px]">ОТПЕЧАТОК</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1a1a1a]">
                  {([
                    { label: "Глубина проработки бренда (1–5)", vals: ["5", "5", "3", "3", "2"] },
                    { label: "Интеграция эмоц. истории (1–5)", vals: ["5", "4", "3", "3", "2"] },
                    { label: "Уникальность дизайн-концепции", vals: ["да", "да", "учитывается", "учитывается", "только логотип и текст"] },
                    { label: "Кол-во продуктовых линеек", vals: ["1–3 вида / проект", "4 линейки / квартал", "по договор.", "по договор.", "1 тип товара"] },
                    { label: "Управление производственным циклом", vals: ["полное", "полное", "полное", "частичное", "полное"] },
                    { label: "Контроль качества", vals: ["да", "да", "да", "контроль обработки", "контроль нанесения"] },
                    { label: "Финишная обработка", vals: ["да", "да", "да", "да", "да"] },
                    { label: "Сырьё и материалы", vals: ["полная ответств.", "полная ответств.", "полная ответств.", "предоставляет клиент", "полная ответств."] },
                    { label: "Срок изготовления", vals: ["1–6 мес. от тиража", "в течение года", "1–6 мес. от тиража", "1–4 мес. от тиража", "2 нед. – 2 мес."] },
                    { label: "Длительность контракта", vals: ["до 5 мес.", "1 год", "до 3 мес.", "от сложности", "мин./срочный"] },
                    { label: "Работа с материалами клиента", vals: ["нет", "нет", "нет", "да", "нет"] },
                    { label: "Доставка", vals: ["да", "да", "да", "да", "да"] },
                    { label: "Управление рисками", vals: ["да", "да", "да", "да", "нет"] },
                    { label: "Бронирование производственных слотов", vals: ["нет", "да", "нет", "нет", "нет"] },
                    { label: "Сопровождение менеджера на всех этапах", vals: ["да", "да", "да", "да", "только на этапе заказа"] },
                    { label: "Возможность правок заказчиком", vals: ["да, на этапах", "да", "да", "да (только дизайн)", "нет"] },
                    { label: "Программа лояльности", vals: ["нет", "да — сокращение сроков", "нет", "нет", "нет"] },
                    { label: "Масштабируемость", vals: ["фикс. тираж", "договорный", "фикс. тираж", "фикс. тираж", "фикс. тираж"] },
                    { label: "Категория партнёра", vals: ["Стратегический", "Долгосрочный", "Партнёр", "Услуга по пр-ву", "Единичная продажа"] },
                    { label: "Стоимость включает", vals: ["сырьё+расходники+добавл.+доставка+дизайн+консалтинг", "сырьё+расходники+добавл.+доставка+дизайн+сотрудничество", "сырьё+расходники+добавл.+доставка+дизайн", "расходники+добавл.+дизайн+доставка", "сырьё+расходники+добавл.+доставка+простой дизайн"] },
                    { label: "Условия оплаты", vals: ["поэтапная оплата", "годовая подписка", "предоплата за партию", "предоплата за партию", "предоплата за партию"] },
                  ] as { label: string; vals: string[] }[]).map((row, ri) => (
                    <tr key={ri} className={`hover:bg-white/[0.02] transition-colors ${ri % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                      <td className="px-6 py-3 font-body text-xs text-white/50 whitespace-nowrap">{row.label}</td>
                      {row.vals.map((val, vi) => (
                        <td key={vi} className={`text-center px-4 py-3 font-body text-xs ${val === "да" ? "text-emerald-400" : val === "нет" ? "text-red-400/70" : "text-white/70"}`}>
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ЦЕНЫ ОТПЕЧАТОК */}
      <section className="py-16 px-6 bg-[#070707]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="section-line mb-4" />
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight mb-3">Цены пакета «Отпечаток»</h2>
            <p className="font-body text-white/50">Стоимость за одну штуку — от 1 единицы без оптовой накрутки</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PRICES.map((item) => (
              <div key={item.name} className="rounded-xl bg-[#111] border border-[#1f1f1f] px-4 py-3 flex justify-between items-center card-hover">
                <span className="font-body text-xs text-white/60">{item.name}</span>
                <span className="font-display text-sm text-emerald-400 ml-3 shrink-0">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КАТАЛОГ */}
      <section id="catalog" className="py-24 px-6 bg-[#070707]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="section-line mb-4" />
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-4">Каталог продукции</h2>
            <p className="font-body text-white/50 text-lg max-w-xl">
              10 видов сувениров, производимых на собственном оборудовании
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                className="group relative rounded-2xl p-5 bg-[#111] border border-[#1f1f1f] card-hover cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-400/10 flex items-center justify-center mb-3 group-hover:from-orange-500/40 transition-all">
                  <Icon name={p.icon} size={22} className="text-orange-400" fallback="Package" />
                </div>
                <div className="font-display text-sm tracking-wide mb-1">{p.name}</div>
                <div className="font-body text-xs text-white/40 leading-relaxed">{p.desc}</div>
                <div className="absolute top-4 right-4 font-display text-2xl font-bold text-white/5 select-none">
                  {p.id.toString().padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРОИЗВОДСТВО */}
      <section id="production" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-line mb-4" />
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-6">
                Собственное<br /><span className="gradient-text">производство</span>
              </h2>
              <p className="font-body text-white/60 leading-relaxed mb-8">
                Все материалы и оборудование — наша собственность. Это обеспечивает полный контроль качества на
                всех этапах и независимость от внешних поставщиков.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Shield", title: "Контроль качества", desc: "Каждое изделие проходит контроль перед отправкой" },
                  { icon: "Zap", title: "Быстрая реакция", desc: "Оперативные изменения в продукции по требованию" },
                  { icon: "Lock", title: "Независимость", desc: "Не зависим от сторонних поставщиков ресурсов" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-[#111] border border-[#1f1f1f]">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                      <Icon name={item.icon} size={18} className="text-orange-400" fallback="Check" />
                    </div>
                    <div>
                      <div className="font-display text-sm tracking-wide mb-1">{item.title}</div>
                      <div className="font-body text-xs text-white/50">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 p-8 flex flex-col justify-between min-h-40">
                  <Icon name="Settings" size={28} className="text-black/60" fallback="Settings" />
                  <div>
                    <div className="font-display text-3xl text-black">100%</div>
                    <div className="font-body text-sm text-black/60">Своё оборудование</div>
                  </div>
                </div>
                <div className="rounded-2xl bg-[#111] border border-[#222] p-8 flex flex-col justify-between min-h-40">
                  <Icon name="PackageCheck" size={28} className="text-orange-400" fallback="Package" />
                  <div>
                    <div className="font-display text-3xl">QC</div>
                    <div className="font-body text-sm text-white/40">Контроль качества</div>
                  </div>
                </div>
                <div className="rounded-2xl bg-[#111] border border-[#222] p-8 flex flex-col justify-between min-h-40">
                  <Icon name="Truck" size={28} className="text-orange-400" fallback="Truck" />
                  <div>
                    <div className="font-display text-3xl">🚚</div>
                    <div className="font-body text-sm text-white/40">Доставка включена</div>
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-orange-500/20 p-8 flex flex-col justify-between min-h-40">
                  <Icon name="Users" size={28} className="text-orange-400" fallback="Users" />
                  <div>
                    <div className="font-display text-3xl gradient-text">B2B</div>
                    <div className="font-body text-sm text-white/40">Корпоративным клиентам</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ЭТАПЫ */}
      <section id="process" className="py-24 px-6 bg-[#070707]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="section-line mb-4" />
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-4">Этапы работы</h2>
            <p className="font-body text-white/50 text-lg">От идеи до доставки готовой продукции</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
            {STEPS.map((step, i) => (
              <div key={i} className="relative group">
                <div className="rounded-2xl p-5 bg-[#111] border border-[#1f1f1f] card-hover h-full">
                  <div className="font-display text-5xl font-bold text-white/5 mb-3 leading-none">{step.num}</div>
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3 group-hover:bg-orange-500/20 transition-all">
                    <Icon
                      name={["MessageSquare", "FileText", "Paintbrush", "Cog", "CheckCircle", "Truck"][i]}
                      size={16}
                      className="text-orange-400"
                      fallback="Circle"
                    />
                  </div>
                  <div className="font-display text-sm tracking-wide mb-2">{step.title}</div>
                  <div className="font-body text-xs text-white/40 leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КАЛЬКУЛЯТОР */}
      <section id="calculator" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="section-line mb-4" />
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-4">Калькулятор</h2>
            <p className="font-body text-white/50 text-lg">Предварительный расчёт стоимости вашего заказа</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-[#111] border border-[#1f1f1f] p-8 space-y-6">
              <div>
                <label className="font-body text-sm text-white/60 block mb-3">Пакет услуг</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "imprint", label: "Отпечаток" },
                    { id: "moment", label: "Момент" },
                    { id: "spark", label: "Искра" },
                    { id: "impulse", label: "Импульс" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setCalcPackage(p.id)}
                      className={`rounded-xl px-4 py-2.5 font-body text-sm font-semibold transition-all ${
                        calcPackage === p.id
                          ? "bg-orange-500 text-white"
                          : "bg-[#1a1a1a] text-white/50 border border-[#2a2a2a] hover:border-orange-500/30"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-body text-sm text-white/60 block mb-3">Тип продукции</label>
                <select
                  value={calcProduct}
                  onChange={(e) => setCalcProduct(e.target.value)}
                  className="w-full rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white font-body text-sm px-4 py-3 focus:border-orange-500/50 focus:outline-none"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-body text-sm text-white/60 block mb-3">
                  Тираж: <span className="text-orange-400">{calcQty} шт.</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={500}
                  value={calcQty}
                  onChange={(e) => setCalcQty(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
                <div className="flex justify-between text-xs text-white/30 font-body mt-1">
                  <span>1 шт.</span>
                  <span>500 шт.</span>
                </div>
              </div>

              <div>
                <label className="font-body text-sm text-white/60 block mb-3">Сложность дизайна</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "simple", label: "Простой" },
                    { id: "medium", label: "Средний" },
                    { id: "complex", label: "Сложный" },
                  ].map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setCalcDesign(d.id)}
                      className={`rounded-xl px-3 py-2.5 font-body text-sm font-semibold transition-all ${
                        calcDesign === d.id
                          ? "bg-orange-500 text-white"
                          : "bg-[#1a1a1a] text-white/50 border border-[#2a2a2a] hover:border-orange-500/30"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-400/5 border border-orange-500/20 p-8 flex-1 flex flex-col items-center justify-center text-center">
                <div className="font-body text-sm text-white/40 mb-2 uppercase tracking-widest">Ориентировочная стоимость</div>
                <div className="font-display text-5xl md:text-6xl gradient-text mb-2">{getEstimate()}</div>
                <div className="font-body text-xs text-white/30 max-w-xs leading-relaxed">
                  Расчёт является ориентировочным. Точная стоимость определяется после согласования технического задания.
                </div>
              </div>

              <div className="rounded-2xl bg-[#111] border border-[#1f1f1f] p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shrink-0">
                  <Icon name="MessageCircle" size={22} className="text-white" fallback="Message" />
                </div>
                <div className="flex-1">
                  <div className="font-display text-sm mb-1">Получить точный расчёт</div>
                  <div className="font-body text-xs text-white/40">Отправьте заявку — рассчитаем за 24 часа</div>
                </div>
                <a href="#contact">
                  <button className="btn-primary rounded-xl px-5 py-2.5 font-body text-sm font-semibold text-white">
                    <span>Заявка →</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* КЕЙСЫ */}
      <section id="cases" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="section-line mb-4" />
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-4">Кейсы</h2>
            <p className="font-body text-white/50 text-lg max-w-xl">Реальные проекты — от постановки задачи до готовой продукции</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {CASES.map((c) => (
              <div key={c.id} className="rounded-2xl bg-[#111] border border-[#1f1f1f] overflow-hidden card-hover flex flex-col">
                <div className="p-7 flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: c.tagColor + "22" }}>
                      <Icon name={c.icon} size={20} fallback="Building2" style={{ color: c.tagColor }} />
                    </div>
                    <div>
                      <div className="font-display text-base tracking-wide">{c.company}</div>
                      <div className="inline-block font-body text-xs px-2 py-0.5 rounded-full mt-1" style={{ backgroundColor: c.tagColor + "22", color: c.tagColor }}>{c.tag}</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="font-body text-xs text-white/30 uppercase tracking-widest mb-1">Задача</div>
                      <p className="font-body text-sm text-white/70 leading-relaxed">{c.task}</p>
                    </div>
                    <div>
                      <div className="font-body text-xs text-white/30 uppercase tracking-widest mb-1">Решение</div>
                      <p className="font-body text-sm text-white/70 leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <div className="font-body text-xs text-white/30 uppercase tracking-widest mb-1">Результат</div>
                      <p className="font-body text-sm text-white/70 leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-[#1f1f1f] px-7 py-4 grid grid-cols-3 gap-4">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-lg gradient-text">{m.val}</div>
                      <div className="font-body text-xs text-white/30 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-[#070707]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <div className="section-line mb-4" />
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-4">Вопросы и ответы</h2>
          </div>

          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#111] border border-[#1f1f1f] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#161616] transition-colors"
                >
                  <span className="font-display text-base tracking-wide pr-4">{item.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className="text-orange-400 shrink-0"
                    fallback="ChevronDown"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 font-body text-sm text-white/60 leading-relaxed border-t border-[#1f1f1f] pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="section-line mb-4" />
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-6">
                Оставить<br /><span className="gradient-text">заявку</span>
              </h2>
              <p className="font-body text-white/50 leading-relaxed mb-8">
                Опишите задачу — перезвоним в течение рабочего дня и рассчитаем стоимость вашего проекта.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Phone", val: "+7 (XXX) XXX-XX-XX" },
                  { icon: "Mail", val: "info@memoryproduction.ru" },
                  { icon: "MapPin", val: "г. Москва, ул. Производственная" },
                ].map((c) => (
                  <div key={c.val} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                      <Icon name={c.icon} size={18} className="text-orange-400" fallback="Info" />
                    </div>
                    <span className="font-body text-white/60">{c.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#111] border border-[#1f1f1f] p-8">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-white/40 block mb-2">Имя</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white font-body text-sm px-4 py-3 focus:border-orange-500/50 focus:outline-none placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-white/40 block mb-2">Компания</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="ООО «Компания»"
                      className="w-full rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white font-body text-sm px-4 py-3 focus:border-orange-500/50 focus:outline-none placeholder:text-white/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs text-white/40 block mb-2">Телефон</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white font-body text-sm px-4 py-3 focus:border-orange-500/50 focus:outline-none placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-white/40 block mb-2">Сообщение</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите вашу задачу: пакет услуг, тип продукции, тираж..."
                    rows={4}
                    className="w-full rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white font-body text-sm px-4 py-3 focus:border-orange-500/50 focus:outline-none placeholder:text-white/20 resize-none"
                  />
                </div>
                <button className="w-full btn-primary rounded-xl py-4 font-body font-semibold text-white text-base">
                  <span>Отправить заявку</span>
                </button>
                <p className="font-body text-xs text-white/25 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ЧАТ С МЕНЕДЖЕРОМ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {chatOpen && (
          <div className="w-80 rounded-2xl bg-[#111] border border-[#222] shadow-2xl overflow-hidden flex flex-col" style={{ maxHeight: 480 }}>
            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-400">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Icon name="User" size={16} className="text-white" fallback="User" />
              </div>
              <div>
                <div className="font-display text-sm text-white tracking-wide">Менеджер</div>
                <div className="font-body text-xs text-white/70">Мемори Продакшн · онлайн</div>
              </div>
              <button onClick={() => setChatOpen(false)} className="ml-auto text-white/70 hover:text-white">
                <Icon name="X" size={16} fallback="X" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: 260 }}>
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`rounded-2xl px-3 py-2 max-w-[85%] font-body text-xs leading-relaxed ${msg.role === "user" ? "bg-orange-500 text-white rounded-br-sm" : "bg-[#1a1a1a] text-white/80 rounded-bl-sm"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-3 pb-3 space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {Object.keys(CHAT_REPLIES).map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      const reply = CHAT_REPLIES[q];
                      setChatMessages(prev => [...prev, { role: "user", text: q }, { role: "bot", text: reply }]);
                    }}
                    className="font-body text-xs px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-white/60 hover:border-orange-500/40 hover:text-white transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!chatInput.trim()) return;
                  setChatMessages(prev => [...prev,
                    { role: "user", text: chatInput },
                    { role: "bot", text: "Спасибо! Ваш вопрос принят. Менеджер ответит в ближайшее время. Для срочных вопросов — позвоните по номеру на сайте." }
                  ]);
                  setChatInput("");
                }}
                className="flex gap-2"
              >
                <input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ваш вопрос..."
                  className="flex-1 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white font-body text-xs px-3 py-2 focus:border-orange-500/50 focus:outline-none"
                />
                <button type="submit" className="btn-primary rounded-xl px-3 py-2">
                  <span><Icon name="Send" size={14} className="text-white" fallback="Send" /></span>
                </button>
              </form>
            </div>
          </div>
        )}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="btn-primary w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        >
          <span>
            <Icon name={chatOpen ? "X" : "MessageCircle"} size={22} className="text-white" fallback="MessageCircle" />
          </span>
        </button>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-[#1f1f1f] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg tracking-widest">
            <span className="gradient-text">МЕМОРИ</span>
            <span className="text-white/30 text-sm ml-2 font-body">ПРОДАКШН</span>
          </div>
          <div className="font-body text-xs text-white/25 text-center">
            © 2024 Корпоративная сувенирная продукция. Все права защищены.
          </div>
          <div className="flex gap-6 text-xs font-body text-white/30">
            <a href="#packages" className="hover:text-orange-400 transition-colors">Пакеты</a>
            <a href="#catalog" className="hover:text-orange-400 transition-colors">Каталог</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}