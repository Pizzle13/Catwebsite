/* Four Tashkent Cats, adoption site */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "cream",
  "heroLayout": "split",
  "cardStyle": "editorial",
  "lang": "en"
}/*EDITMODE-END*/;

const CATS = [
  {
    id: "teddy",
    name: { en: "Teddy Bear", ru: "Тедди Беар" },
    ageMonths: 15,
    sex: { en: "Male, Neutered", ru: "Самец, Кастрирован" },
    tagline: {
      en: "The one who cried in the parking lot.",
      ru: "Тот, что плакал на парковке."
    },
    bio: {
      en: "A soft, gentle soul who found me first. Loves a warm lap and follows you from room to room.",
      ru: "Нежная, ласковая душа, которая сама меня нашла. Любит тёплые колени и ходит за тобой по пятам."
    },
    story: {
      en: "I found Teddy Bear in the parking lot, crying. The security guard pointed him out, alone, just walking around, hungry. I couldn't leave him there. He came home and never looked back. He has the same eyes and fur as the others, so I'm almost sure he's from his mom's previous litter. All four are brothers.",
      ru: "Я нашёл Тедди Беар на парковке, он плакал. Охранник показал на него: один, голодный, бродил вокруг. Я не мог оставить его там. Он пришёл домой и больше не оглядывался. У него те же глаза и шерсть, что и у остальных, поэтому я почти уверен: он из предыдущего помёта той же мамы. Все четверо, братья."
    },
    placeholder: { en: "Photo of Teddy Bear", ru: "Фото Тедди Беар" },
  },
  {
    id: "meatball",
    name: { en: "Meatball", ru: "Митболл" },
    ageMonths: 12,
    sex: { en: "Male, Neutered", ru: "Самец, Кастрирован" },
    tagline: {
      en: "Round, content, completely unbothered.",
      ru: "Кругленький, довольный, ничем не озабочен."
    },
    bio: {
      en: "The mellow one of the litter. Will accept all the affection you have to give and ask politely for more.",
      ru: "Самый спокойный из помёта. Примет всю ласку, что у тебя есть, и вежливо попросит ещё."
    },
    story: {
      en: "Meatball was born indoors, fifteen minutes after his mother walked through my door. He has never known a cold night.",
      ru: "Митболл родился в доме, через пятнадцать минут после того, как его мама вошла в мою дверь. Он никогда не знал холодной ночи."
    },
    placeholder: { en: "Photo of Meatball", ru: "Фото Митболл" },
  },
  {
    id: "nuts",
    name: { en: "Nuts", ru: "Натс" },
    ageMonths: 12,
    sex: { en: "Male, Neutered", ru: "Самец, Кастрирован" },
    tagline: {
      en: "Curious about absolutely everything.",
      ru: "Любопытен абсолютно ко всему."
    },
    bio: {
      en: "If a drawer opens, he's in it. If a bag rustles, he's on it. Playful, clever, and looking for someone to keep up.",
      ru: "Открылся ящик, он внутри. Шуршит пакет, он на нём. Игривый, сообразительный, ищет того, кто за ним угонится."
    },
    story: {
      en: "Born to the stray who'd been sleeping in my stairwell. Nuts came out of the gate already half a personality.",
      ru: "Родился у уличной кошки, что ночевала на моей лестнице. Натс с самого первого дня уже был половинкой характера."
    },
    placeholder: { en: "Photo of Nuts", ru: "Фото Натс" },
  },
  {
    id: "bolts",
    name: { en: "Bolts", ru: "Болтс" },
    ageMonths: 12,
    sex: { en: "Male, Neutered", ru: "Самец, Кастрирован" },
    tagline: {
      en: "All gas, no brakes, until naptime.",
      ru: "Полный газ, без тормозов, до тихого часа."
    },
    bio: {
      en: "The zoomer. Sprints, leaps, and somehow always lands on his feet. Then collapses in a sunbeam for hours.",
      ru: "Гонщик. Прыжки, забеги, и всегда приземляется на лапы. А потом часами тает в солнечном пятне."
    },
    story: {
      en: "Bolts and Nuts are littermates and opposite numbers: bonded but distinct. They'd love to stay together, but it isn't required.",
      ru: "Болтс и Натс из одного помёта, противоположности: связаны, но каждый сам по себе. Хотелось бы их вместе, но необязательно."
    },
    placeholder: { en: "Photo of Bolts", ru: "Фото Болтс" },
  },
];

const T = {
  nav: {
    meet: { en: "Meet the cats", ru: "Знакомьтесь" },
    story: { en: "Our story", ru: "Наша история" },
    process: { en: "Adoption", ru: "Усыновление" },
    contact: { en: "Contact", ru: "Контакты" },
  },
  hero: {
    eyebrow: { en: "Tashkent · Uzbekistan · 2026", ru: "Ташкент · Узбекистан · 2026" },
    title_a: { en: "Four cats", ru: "Четыре кота" },
    title_b: { en: "looking for", ru: "ищут своих" },
    title_c: { en: "their people.", ru: "людей." },
    lede: {
      en: "Teddy Bear, Meatball, Nuts and Bolts are healthy, neutered, and ready to leave the only home they've ever known, for the right one. Local, expat, or international: read on, and let's see if it's a fit.",
      ru: "Тедди Беар, Митболл, Натс и Болтс, здоровы, кастрированы и готовы покинуть единственный дом, что они знали, ради подходящего. Местные, экспаты или зарубежные семьи: читайте дальше и давайте посмотрим, подойдёте ли мы друг другу."
    },
    cta: { en: "Meet the cats", ru: "Знакомьтесь с котами" },
    cta2: { en: "Get in touch", ru: "Связаться" },
    meta1: { en: "4 cats", ru: "4 кота" },
    meta2: { en: "All neutered", ru: "Все кастрированы" },
    meta3: { en: "Free to good homes", ru: "Бесплатно в хорошие руки" },
    photoLabel: { en: "Hero photo · all four together if you have one", ru: "Главное фото · все четыре вместе, если есть" },
  },
  section: {
    catsIdx: { en: "01 · Residents", ru: "01 · Жильцы" },
    catsTitle: { en: "Meet the residents.", ru: "Знакомьтесь с жильцами." },
    catsSub: {
      en: "All four are brothers from the same mother, across two litters. Teddy Bear was rescued from the parking lot; Meatball, Nuts and Bolts were born indoors. Click any of them to read more.",
      ru: "Все четверо, родные братья от одной мамы из двух помётов. Тедди Беар спасён с парковки; Митболл, Натс и Болтс родились в доме. Нажмите на любого, чтобы узнать больше."
    },
    storyIdx: { en: "02 · How we got here", ru: "02 · Как мы здесь оказались" },
    processIdx: { en: "03 · Adoption", ru: "03 · Усыновление" },
    processTitle: { en: "How adoption works.", ru: "Как проходит усыновление." },
    processSub: {
      en: "There are scammers in this space. The steps below protect the cats and protect you. They apply equally to everyone.",
      ru: "В этой сфере встречаются мошенники. Эти шаги защищают котов и защищают вас. Они одинаковы для всех."
    },
    contactIdx: { en: "04 · Contact", ru: "04 · Контакты" },
    contactTitle_a: { en: "Think one of them", ru: "Думаете, один из них," },
    contactTitle_b: { en: "is yours?", ru: "ваш?" },
    contactLede: {
      en: "Tell me a little about yourself, your home, and which cat caught your eye. I read every message and respond personally, usually within a day.",
      ru: "Расскажите немного о себе, о своём доме и о том, какой кот вам приглянулся. Я читаю каждое сообщение и отвечаю лично, обычно в течение суток."
    },
  },
  process: [
    { t: { en: "Reach out", ru: "Свяжитесь" }, d: { en: "Tell me who you are and which cat you're interested in. A few sentences is fine.", ru: "Расскажите, кто вы и какой кот вам интересен. Достаточно нескольких предложений." } },
    { t: { en: "A short chat", ru: "Короткий разговор" }, d: { en: "We talk on Telegram or video about your home, other pets, plans, and the cat's needs.", ru: "Поговорим в Telegram или по видео про дом, других питомцев, планы и нужды кота." } },
    { t: { en: "Meet in person", ru: "Встреча вживую" }, d: { en: "For local adopters: come over and meet. Photos of your home help me feel confident.", ru: "Для местных: приходите познакомиться. Фото вашего дома помогают мне быть уверенным." } },
    { t: { en: "Stay in touch", ru: "Останемся на связи" }, d: { en: "I'll check in after a week, a month, six months. These cats stay part of my life.", ru: "Я напишу через неделю, через месяц, через полгода. Эти коты остаются частью моей жизни." } },
  ],
  warn: {
    h: { en: "A note on safety", ru: "Безопасность" },
    p: {
      en: "Free adoption brings out bad actors. Every local placement includes a home visit (or detailed photos), references where possible, and follow-up check-ins. I will refuse anyone whose plans don't add up. No offense intended.",
      ru: "Бесплатное усыновление привлекает недобросовестных. Каждое местное размещение включает визит на дом (или подробные фото), рекомендации по возможности и последующие проверки. Я откажу любому, чьи намерения не складываются. Без обид."
    }
  },
  meta: {
    age: { en: "1 yr 3 mo", ru: "1 год 3 мес" },
    age2: { en: "1 yr", ru: "1 год" },
    closeLabel: { en: "close", ru: "закрыть" },
    profileLabel: { en: "Profile", ru: "Профиль" },
    detailsName: { en: "Name", ru: "Имя" },
    detailsAge: { en: "Age", ru: "Возраст" },
    detailsSex: { en: "Sex", ru: "Пол" },
    detailsHealth: { en: "Health", ru: "Здоровье" },
    detailsHealthVal: { en: "Vaccinated · Neutered · Indoor-only", ru: "Привит · Кастрирован · Только в доме" },
    detailsFee: { en: "Fee", ru: "Взнос" },
    detailsFeeVal: { en: "Free to a vetted home", ru: "Бесплатно в проверенный дом" },
    apply: { en: "Get in touch about him", ru: "Связаться по поводу него" },
  },
  footer: {
    text: { en: "Made with", ru: "Сделано с" },
    text2: { en: "in Tashkent · 2026", ru: "в Ташкенте · 2026" },
  },
  story: {
    label: { en: "Our story", ru: "Наша история" },
    p1: {
      en: "I didn't plan on four cats. I found Teddy Bear alone in the parking lot, crying, with nowhere to go. So he came inside.",
      ru: "Я не планировал четырёх котов. Я нашёл Тедди Беар одного на парковке, он плакал, и ему некуда было идти. И он зашёл внутрь."
    },
    p2: {
      en: "Months earlier I'd been feeding a stray who slept in the stairwell. Not safe for her there. One night I let her in. Within fifteen minutes she gave birth to Meatball, Nuts and Bolts on my floor. Looking at Teddy Bear now, same eyes, same fur, I'm almost certain he's from her previous litter. All four are full brothers.",
      ru: "А несколькими месяцами раньше я подкармливал бродяжку, что ночевала на лестничной клетке. Небезопасно для неё. Однажды я пустил её внутрь. Через пятнадцать минут она родила прямо на полу: Митболл, Натс и Болтс. Глядя на Тедди Беар сейчас, те же глаза, та же шерсть, я почти уверен: он из её предыдущего помёта. Все четверо, родные братья."
    },
    p3: {
      en: { __html: "Now they're grown, neutered, vaccinated, and they need their own people. I want them in <em>real</em> homes, not back on the street." },
      ru: { __html: "Теперь они выросли, кастрированы, привиты, и им нужны свои люди. Я хочу их в <em>настоящие</em> дома, не обратно на улицу." }
    },
    sig: { en: "J.P.", ru: "Дж. П." }
  }
};

function pickAge(c, lang) {
  if (c.ageMonths >= 15) return lang === "en" ? "1 yr 3 mo" : "1 год 3 мес";
  return lang === "en" ? "1 yr" : "1 год";
}

function Slot({ id, label, lang }) {
  return (
    <image-slot
      id={`slot-${id}`}
      placeholder={label[lang]}
      shape="rect"
    />
  );
}

function TopNav({ lang, setLang }) {
  return (
    <nav className="top">
      <div className="brand">
        <div className="mark">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 9 C5 5, 8 4, 10 6 L 12 8 L 14 6 C 16 4, 19 5, 19 9 C 19 14, 14 18, 12 18 C 10 18, 5 14, 5 9 Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="name">{lang === "en" ? "Four Tashkent Cats" : "Четыре кота Ташкента"}</div>
      </div>
      <div className="links">
        <a href="#cats">{T.nav.meet[lang]}</a>
        <a href="#story">{T.nav.story[lang]}</a>
        <a href="#process">{T.nav.process[lang]}</a>
        <a href="#contact">{T.nav.contact[lang]}</a>
        <div className="lang">
          <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          <button className={lang === "ru" ? "on" : ""} onClick={() => setLang("ru")}>RU</button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ lang, layout }) {
  const eyebrow = T.hero.eyebrow[lang];
  const lede = T.hero.lede[lang];
  const title = (
    <h1>
      {T.hero.title_a[lang]}{" "}
      <em>{T.hero.title_b[lang]}</em>{" "}
      {T.hero.title_c[lang]}
    </h1>
  );
  const ctaRow = (
    <div className="hero-cta">
      <a href="#cats" className="btn btn-primary">
        {T.hero.cta[lang]} <span className="arr">→</span>
      </a>
      <a href="#contact" className="btn btn-ghost">{T.hero.cta2[lang]}</a>
    </div>
  );
  const meta = (
    <div className="hero-meta">
      <span><span className="dot"></span>{T.hero.meta1[lang]}</span>
      <span><span className="dot"></span>{T.hero.meta2[lang]}</span>
      <span><span className="dot"></span>{T.hero.meta3[lang]}</span>
    </div>
  );

  if (layout === "stack") {
    return (
      <header className="hero hero-stack" data-screen-label="01 Hero">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          {title}
          <p className="lede">{lede}</p>
          {ctaRow}
          {meta}
        </div>
        <div className="hero-photo">
          <Slot id="hero" label={T.hero.photoLabel} lang={lang} />
        </div>
      </header>
    );
  }
  if (layout === "overlay") {
    return (
      <header className="hero hero-overlay" data-screen-label="01 Hero">
        <div className="hero-photo">
          <Slot id="hero" label={T.hero.photoLabel} lang={lang} />
        </div>
        <div className="hero-text">
          <div className="eyebrow">{eyebrow}</div>
          {title}
          <p className="lede">{lede}</p>
          {ctaRow}
        </div>
      </header>
    );
  }
  return (
    <header className="hero hero-split" data-screen-label="01 Hero">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        {title}
        <p className="lede">{lede}</p>
        {ctaRow}
        {meta}
      </div>
      <div className="hero-photo">
        <Slot id="hero" label={T.hero.photoLabel} lang={lang} />
      </div>
    </header>
  );
}

function CatCard({ cat, style, lang, onOpen, idx }) {
  const age = pickAge(cat, lang);
  const slot = <Slot id={cat.id} label={cat.placeholder} lang={lang} />;

  if (style === "polaroid") {
    return (
      <div className="card-polaroid" onClick={onOpen} role="button" tabIndex={0}>
        <div className="ph">{slot}</div>
        <div className="meta">
          <h3>{cat.name[lang]}</h3>
          <div className="age">{age}</div>
        </div>
      </div>
    );
  }
  if (style === "stacked") {
    return (
      <div className="card-stacked" onClick={onOpen} role="button" tabIndex={0}>
        <div className="ph">
          {slot}
          <div className="label">
            <h3>{cat.name[lang]}</h3>
            <div className="age">{age}</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="card-editorial" onClick={onOpen} role="button" tabIndex={0}>
      <div className="ph">{slot}</div>
      <div className="meta">
        <h3>{cat.name[lang]}</h3>
        <div className="age">{String(idx + 1).padStart(2, "0")} · {age}</div>
      </div>
      <p className="bio">{cat.bio[lang]}</p>
    </div>
  );
}

function Profile({ cat, lang, onClose }) {
  React.useEffect(() => {
    const h = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  if (!cat) return <div className="profile-panel"></div>;
  const age = pickAge(cat, lang);
  return (
    <div className={`profile-panel ${cat ? "open" : ""}`} onClick={onClose}>
      <div className="profile" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="close">×</button>
        <div className="photo">
          <Slot id={`${cat.id}-big`} label={cat.placeholder} lang={lang} />
        </div>
        <div className="body">
          <div className="num">{T.meta.profileLabel[lang]} · 0{CATS.findIndex(c => c.id === cat.id) + 1} / 04</div>
          <h2>{cat.name[lang]}</h2>
          <div className="tagline">"{cat.tagline[lang]}"</div>
          <dl>
            <dt>{T.meta.detailsAge[lang]}</dt><dd>{age}</dd>
            <dt>{T.meta.detailsSex[lang]}</dt><dd>{cat.sex[lang]}</dd>
            <dt>{T.meta.detailsHealth[lang]}</dt><dd>{T.meta.detailsHealthVal[lang]}</dd>
            <dt>{T.meta.detailsFee[lang]}</dt><dd>{T.meta.detailsFeeVal[lang]}</dd>
          </dl>
          <p className="story">{cat.story[lang]}</p>
          <p className="story" style={{marginTop: "16px"}}>{cat.bio[lang]}</p>
          <div className="actions">
            <a href={`https://t.me/MrBhikarry?text=${encodeURIComponent("Hi, I'm interested in " + cat.name.en)}`} target="_blank" className="btn btn-primary">
              {T.meta.apply[lang]} <span className="arr">→</span>
            </a>
            <button className="btn btn-ghost" onClick={onClose}>{T.meta.closeLabel[lang]}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Story({ lang }) {
  return (
    <section className="story-section" id="story" data-screen-label="02 Story">
      <div className="inner">
        <div className="label">{T.section.storyIdx[lang]}</div>
        <div>
          <p>{T.story.p1[lang]}</p>
          <p>{T.story.p2[lang]}</p>
          <p dangerouslySetInnerHTML={{ __html: T.story.p3[lang].__html }} />
          <div className="sig">{T.story.sig[lang]}</div>
        </div>
      </div>
    </section>
  );
}

function Process({ lang }) {
  return (
    <section className="process" id="process" data-screen-label="03 Process">
      <div className="section-header" style={{padding: 0, margin: "0 0 8px"}}>
        <div>
          <div className="index">{T.section.processIdx[lang]}</div>
          <h2>{T.section.processTitle[lang]}</h2>
        </div>
        <div className="right">{T.section.processSub[lang]}</div>
      </div>
      <div className="process-grid">
        {T.process.map((s, i) => (
          <div className="step" key={i}>
            <div className="num">{String(i + 1).padStart(2, "0")}</div>
            <h4>{s.t[lang]}</h4>
            <p>{s.d[lang]}</p>
          </div>
        ))}
      </div>
      <div className="warning">
        <div className="ico">!</div>
        <div>
          <h4>{T.warn.h[lang]}</h4>
          <p>{T.warn.p[lang]}</p>
        </div>
      </div>
    </section>
  );
}

function Contact({ lang }) {
  const channels = [
    { label: "Telegram", value: "@MrBhikarry", href: "https://t.me/MrBhikarry" },
    { label: "Email", value: "jpbhikarry@gmail.com", href: "mailto:jpbhikarry@gmail.com" },
    { label: { en: "Phone / WhatsApp", ru: "Телефон / WhatsApp" }, value: "+998 90 063 5726", href: "https://wa.me/998900635726" },
  ];
  return (
    <section className="contact" id="contact" data-screen-label="04 Contact">
      <div className="contact-grid">
        <div>
          <div className="index" style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--ink-mute)", marginBottom: 14}}>{T.section.contactIdx[lang]}</div>
          <h2>
            {T.section.contactTitle_a[lang]} <em>{T.section.contactTitle_b[lang]}</em>
          </h2>
          <p className="lede">{T.section.contactLede[lang]}</p>
        </div>
        <div className="contact-list">
          {channels.map((c, i) => (
            <a key={i} href={c.href} target="_blank">
              <span className="ch-label">{typeof c.label === "string" ? c.label : c.label[lang]}</span>
              <span className="ch-value">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const { TweaksPanel, TweakSection, TweakRadio, TweakSelect } = window;
  const [open, setOpen] = React.useState(null);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-palette", tweaks.palette);
  }, [tweaks.palette]);

  const lang = tweaks.lang;
  const setLang = (l) => setTweak("lang", l);

  return (
    <>
      <TopNav lang={lang} setLang={setLang} />
      <Hero lang={lang} layout={tweaks.heroLayout} />
      <div className="section-header" id="cats">
        <div>
          <div className="index">{T.section.catsIdx[lang]}</div>
          <h2>{T.section.catsTitle[lang]}</h2>
        </div>
        <div className="right">{T.section.catsSub[lang]}</div>
      </div>
      <div className="cats-wrap">
        <div className={`cats-grid ${tweaks.cardStyle}`}>
          {CATS.map((cat, i) => (
            <CatCard key={cat.id} cat={cat} idx={i} style={tweaks.cardStyle} lang={lang} onOpen={() => setOpen(cat)} />
          ))}
        </div>
      </div>
      <Story lang={lang} />
      <Process lang={lang} />
      <Contact lang={lang} />
      <footer>
        {T.footer.text[lang]} <span className="heart">♡</span> {T.footer.text2[lang]}
      </footer>

      <Profile cat={open} lang={lang} onClose={() => setOpen(null)} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Language">
          <TweakRadio
            label="Site language"
            value={tweaks.lang}
            options={[
              { value: "en", label: "English" },
              { value: "ru", label: "Русский" },
            ]}
            onChange={(v) => setTweak("lang", v)}
          />
        </TweakSection>
        <TweakSection label="Palette">
          <TweakSelect
            label="Color theme"
            value={tweaks.palette}
            options={[
              { value: "cream", label: "Cream + terracotta (warm)" },
              { value: "sage", label: "Sage + cream (calm)" },
              { value: "dusk", label: "Dusk (dark warm)" },
              { value: "plum", label: "Plum + blush (soft)" },
            ]}
            onChange={(v) => setTweak("palette", v)}
          />
        </TweakSection>
        <TweakSection label="Hero">
          <TweakSelect
            label="Hero layout"
            value={tweaks.heroLayout}
            options={[
              { value: "split", label: "Split, text + portrait" },
              { value: "stack", label: "Stacked, wide photo below" },
              { value: "overlay", label: "Overlay, text on photo" },
            ]}
            onChange={(v) => setTweak("heroLayout", v)}
          />
        </TweakSection>
        <TweakSection label="Cat cards">
          <TweakSelect
            label="Card style"
            value={tweaks.cardStyle}
            options={[
              { value: "editorial", label: "Editorial, 2-up with bio" },
              { value: "polaroid", label: "Polaroid, 4-up tilted" },
              { value: "stacked", label: "Stacked, 4-up label overlay" },
            ]}
            onChange={(v) => setTweak("cardStyle", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
