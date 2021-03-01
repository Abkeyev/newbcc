import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ru: {
    translation: {
        "bcct": "Банк ЦентрКредит",
        "bcc": "АО Банк ЦентрКредит",
        "search": "Поиск",
        "ib": "Интернет–банк",
        "signin": "Войти",
        "free": "Бесплатно с мобильного",
        "available": "Доступно в",
        "best": "Лучшее от банка",
        "calcred": "Кредитный калькулятор",
        "calc": "Калькулятор",
        "calculation": "Расчёт",
        "weekpay": "Ежемесячный платёж",
        "bet": "Ставка",
        "credit": "Оформить кредит",
        "zp": "Получаю ЗП на карту БЦК",
        "chsum": "Выберите сумму",
        "chper": "Выберите срок",
        "prime": "Данные предварительные",
        "currs": "Валюты",
        "curr": "Валюта",
        "gold": "Золото",
        "pay": "Покупка",
        "sell": "Продажа",
        "weight": "Вес",
        "gr": "грамм",
        "cv": "Курсы валют",
        "allcurr": "Все валюты",
        "useful": "Полезное",
        "mb": "Мобильный банкинг",
        "mbt": "Управляй банковскими счетами онлайн через браузер или приложение",
        "title": "Банк ЦентрКредит — Кредиты, депозиты и карты",
        "btitle": "Бизнес клиентам",
        "ctitle": "Подобрать и заказать карту онлайн - Банк ЦентрКредит",
        "cdesc": "Сравнить и выбрать карту  ✓ Тарифы, условия обслуживания ✓ Бесплатно заказать карту",
        "ckeywords": "карты, оформить карту, банковская карта, онлайн доставка карты, карткарта, заказать карту",
        "crtitle": "Оформить кредит онлайн - Банк ЦентрКредит",
        "crkeywords": "кредит, кредит онлайн, калькулятор кредита, кредит без справок, кредит без подтверждения дохода, кредит без поручителей, оформить кредит, получить кредит, взять кредит",
        "dcdesc": "Депозит сочетает в себе максимально удобные и выгодные условия для Вас. Условия депозита. Сроки",
        "ddesc": "Открыть депозит на любую сумму онлайн. Казахстанский фонд гарантирования депозитов – государственная гарантия банковских сбережений",
        "dedesc": "Депозит «Эталон» — калькулятор доходности, условия, сроки и процентные ставки",
        "depdesc": "Депозит «Эталон+» — калькулятор доходности, условия, сроки и процентные ставки",
        "72025mortdesc": "Преимущества: 7% ставка, 20% первоначальный взнос, до 25 млн. тенге. Калькулятор ипотеки, онлайн заявка",
        "77025mortkeywords": "ипотека, оформить ипотеку, ипотека 7-20-25, 7-20-25 оформить, ипотека 72025, ипотека 7 20, онлайн 7 20 25",
        "bhmortdesc": "Преимущества программы Ипотека «Баспана Хит»: Быстрое рассмотрение заявки; Возможность приобретения жилья в любом городе Казахстана",
        "bhmortkeywords": "ипотека, оформить ипотеку, ипотека баспана хит, баспана хит оформить",
        "dkeywords": "депозиты, онлайн депозит, открыт депозиты, депозиты застрахованные, открыть депозит, выгодные ставки по депозитам",
        "desc": "Оставить онлайн заявку на кредит, карты, ипотеку, открытие депозита и другие услуги для физических лиц",
        "keywords": "Бцк, bcc, онлайн банк, лучший банк, кредит, оформить кредит, кредит онлайн, кредитная карта, оформить кредитную карту, кредитная карта по интернету, кредитная карта онлайн, кредит наличными, кредит наличными онлайн, дебетовая карта, перевод с карты на карту",
        "credits": "Кредиты",
        "deposits": "Депозиты",
        "chdeposit": "Депозит «Чемпион»",
        "etdeposit": "Депозит «Эталон»",
        "etpdeposit": "Депозит «Эталон+»",
        "radeposit": "Депозит «Рахмет»",
        "radepositp": "Депозит «Рахмет+»",
        "mortgage": "Ипотека",
        "72025mort": "Ипотека «7-20-25»",
        "bhmort": "Ипотека «Баспана Хит»",
        "bimort": "Потреб.займы BI Group",
        "mimort": "Ипотека для военных",
        "ordamort": "Ипотека «Орда»",
        "refcredits": "Рефинансирование кредитов",
        "autocredit": "Автокредитование",
        "chl": "Частным лицам",
        "chlcredit": "Кредитование частных лиц",
        "houseprice": "Стоимость жилья",
        "firstpay": "Первоначальный взнос",
        "periodcredit": "Срок займа",
        "applymorg": "Оформить ипотеку",
        "ref": "Рефинансирование кредитных займов",
        "refmort": "Рефинансирование ипотечных займов",
        "refcond": "Смягчим условия кредитов любых банков",
        "more": "Подробнее",
        "news": "Новости банка",
        "allnews": "Все новости",
        "sendsms": "Отправить сообщение",
        "mobapp": "Мобильное приложение",
        "lic": "Лицензия на проведение банковских и иных операций и деятельности на рынке ценных бумаг №1.2.25/195/34 от 28.01.2015 выданная НБ РК.",
        "curpay": "Курс покупки",
        "cursell": "Курс продажи",
        "programs": "Программы",

    }
  },
  kz: {
    translation: {
        "bcc": "Банк ЦентрКредит АҚ",
        "search": "Іздеу",
        "ib": "Интернет–банк",
        "signin": "Кіру",
        "free": "Ұялы телефоннан тегін",
        "available": "Қол жетімді",
        "best": "Банктің үздіктері",
        "calcred": "Несиелік калькулятор",
        "calc": "Калькулятор",
        "calculation": "Төлем",
        "weekpay": "Ай сайынғы төлем",
        "bet": "Ставка",
        "credit": "Өтініш беру",
        "zp": "Мен БЦК карточкасында жалақы аламын",
        "chsum": "Соманы таңдаңыз",
        "chper": "Кезеңді таңдаңыз",
        "prime": "Алдын ала мәліметтер",
        "currs": "Валюталар",
        "curr": "Валюта",
        "gold": "Алтын",
        "pay": "Сатып алу",
        "sell": "Сату",
        "weight": "Салмақ",
        "gr": "грамм",
        "cv": "Валюта бағамдары",
        "allcurr": "Барлық валюталар",
        "useful": "Пайдалы",
        "mb": "Мобильді банкинг",
        "mbt": "Браузеріңіз немесе қолданбаңыз арқылы банктік шоттарыңызды желіде басқарыңыз",
        "title": "Банк ЦентрКредит — несиелер, депозиттер және карталар",
        "btitle": "Іскери клиенттер",
        "ctitle": "Онлайн картаны таңдап, тапсырыс беріңіз - Банк ЦентрКредит",
        "cdesc": "Картаны салыстырыңыз және таңдаңыз ✓ Тарифтер, қызмет көрсету шарттары card Карточкаға тапсырыс беру тегін",
        "ckeywords": "карточкалар, карточка шығару, банктік карта, картаны, карточканы онлайн жеткізу, картаға тапсырыс беру",
        "crtitle": "Онлайн несие алуға өтініш - Банк ЦентрКредит",
        "crkeywords": "несие, онлайн несие, несие калькуляторы, анықтамасыз несие, кірісті растаусыз несие, кепілгерсіз несие, несие алу, несие алу, несие алу",
        "dcdesc": "Салым сізге ыңғайлы және қолайлы жағдайларды біріктіреді. Салым шарттары. Шарттары",
        "ddesc": "Кез-келген сомаға салымды онлайн режимінде ашыңыз. Қазақстандық депозиттерге кепілдік беру қоры - банктік жинақтаудың мемлекеттік кепілдігі",
        "dedesc": "Эталон депозиті - кірістілік калькуляторы, мерзімі, шарттары және пайыздық мөлшерлемелер",
        "depdesc": "Эталон+ депозиті - кірістілік калькуляторы, шарттары, мерзімдері және пайыздық мөлшерлемелері",
        "72025mortdesc": "Артықшылықтары: 7% ставка, 20% бастапқы жарна, 25 млн. Теңгеге дейін. Ипотека калькуляторы, онлайн-өтінім",
        "77025mortkeywords": "ипотека, ипотека, ипотека 7-20-25, ипотека 7-20-25, ипотека 72025, ипотека 7 20, онлайн 7 20 25",
        "bhmortdesc": "«Баспана Хит» ипотека бағдарламасының артықшылықтары: өтінімді жылдам қарау; Қазақстанның кез-келген қаласында тұрғын үй сатып алу мүмкіндігі",
        "bhmortkeywords": "ипотека, ипотека беру, ипотекалық баспана хит, baspana хит шығару",
        "dkeywords": "депозиттер, желілік депозиттер, ашық депозиттер, сақтандырылған депозиттер, депозиттерді ашу, депозиттердің тиімді ставкалары",
        "desc": "Жеке тұлғаларға несие, карталар, ипотека, депозит ашу және басқа қызметтерге онлайн өтінім қалдыру",
        "keywords": "ЖК, ЖК, онлайн-банк, ең жақсы банк, несие, несие алуға өтініш беріңіз, несие онлайн, несиелік карта, несиелік карта беріңіз, несиелік карта онлайн, несиелік карта онлайн, қолма-қол несие, қолма-қол несие, дебеттік карта , картадан картаға аудару",
        "credits": "Несиелер",
        "deposits": "Депозиттер",
        "chdeposit": "«Чемпион» депозиті",
        "etdeposit": "«Эталон» депозиті",
        "etpdeposit": "«Эталон+» депозиті",
        "radeposit": "«Рахмет» депозиті",
        "radepositp": "«Рахмет+» депозиті",
        "mortgage": "Ипотека",
        "72025mort": "«7-20-25» ипотекасы",
        "bhmort": "«Баспана Хит» ипотекасы",
        "bimort": "BI Group тұтынылатын несиелері",
        "mimort": "Әскерге арналған ипотека",
        "ordamort": "«Орда» ипотекасы",
        "refcredits": "Несиені қайта қаржыландыру",
        "autocredit": "Автокредиттер",
        "chl": "Жеке тұлғаларға арналған",
        "chlcredit": "Жеке тұлғаларға несие беру",
        "houseprice": "Тұрғын үй құны",
        "firstpay": "Алғашқы жарна",
        "periodcredit": "Несие мерзімі",
        "applymorg": "Ипотекаға өтініш беру",
        "ref": "Қарызды қайта қаржыландыру",
        "refmort": "Ипотекалық несиелерді қайта қаржыландыру",
        "refcond": "Біз кез келген банктердің несие шарттарын жұмсартамыз",
        "more": "Көбірек",
        "news": "Банк жаңалықтары",
        "allnews": "Барлық жаңалықтар",
        "sendsms": "Хабарлама жіберу",
        "mobapp": "Мобильді қосымша",
        "lic": "Бағалы қағаздар нарығында банктік және өзге де операциялар мен қызметтерді жүргізуге арналған лицензия. Қазақстан Республикасының Ұлттық Банкі берген 28.01.2015 ж. № 1.2.25 / 195/34.",
        "curpay": "Сатып алу бағасы",
        "cursell": "Сатылым бағасы",
        "programs": "Бағдарламалар"
    }
  },
  en: {
    translation: {
        "bcc": "Bank CenterCredit JSC",
        "search": "Search",
        "ib": "Internet bank",
        "signin": "Sign in",
        "free": "Free from mobile",
        "available": "Available in",
        "best": "The Best of the Bank",
        "calcred": "Credit calculator",
        "calc": "Calculator",
        "calculation": "Payment",
        "weekpay": "Monthly payment",
        "bet": "Rate",
        "credit": "Apply",
        "zp": "I receive a salary on the BCC card",
        "chsum": "Choose the amount",
        "chper": "Choose a term",
        "prime": "Preliminary data",
        "currs": "Currencies",
        "curr": "Currency",
        "gold": "Gold",
        "pay": "Purchase",
        "sell": "Sale",
        "weight": "Weight",
        "gr": "gram",
        "cv": "Currency rates",
        "allcurr": "All currencies",
        "useful": "Useful",
        "mb": "Mobile banking",
        "mbt": "Manage your bank accounts online through your browser or app",
        "title": "Bank CenterCredit - Loans, Deposits and Cards",
        "btitle": "Business Clients",
        "ctitle": "Select and order a card online - Bank CenterCredit",
        "cdesc": "Compare and choose a card ✓ Tariffs, terms of service ✓ Free order a card",
        "ckeywords": "cards, issue a card, bank card, online delivery of a card, cardcard, order a card",
        "crtitle": "Apply for a loan online - Bank CenterCredit",
        "crkeywords": "loan, online loan, loan calculator, loan without references, loan without income confirmation, loan without guarantors, get a loan, get a loan, take a loan",
        "dcdesc": "The deposit combines the most convenient and favorable conditions for you. Terms of the deposit. Terms",
        "ddesc": "Open a deposit for any amount online. Kazakhstan Deposit Insurance Fund - a government guarantee of bank savings",
        "dedesc": "Etalon deposit - yield calculator, terms, conditions and interest rates",
        "depdesc": "Etalon+ deposit - yield calculator, conditions, terms and interest rates",
        "72025mortdesc": "Advantages: 7% rate, 20% down payment, up to 25 million tenge. Mortgage calculator, online application",
        "77025mortkeywords": "mortgage, mortgage, mortgage 7-20-25, mortgage 7-20-25, mortgage 72025, mortgage 7 20, online 7 20 25",
        "bhmortdesc": "Benefits of the Baspana Hit Mortgage program: Quick consideration of the application; Possibility of purchasing housing in any city of Kazakhstan",
        "bhmortkeywords": "mortgage, issue a mortgage, mortgage baspana hit, baspana hit issue",
        "dkeywords": "deposits, online deposit, open deposits, insured deposits, open a deposit, favorable deposit rates",
        "desc": "Leave an online application for a loan, cards, mortgage, opening a deposit and other services for individuals",
        "keywords": "Bcc, bcc, online bank, best bank, loan, apply for a loan, loan online, credit card, issue a credit card, credit card on the Internet, credit card online, cash loan, cash loan online, debit card, transfer from card to card",
        "credits": "Credits",
        "deposits": "Deposits",
        "chdeposit": "Champion deposit",
        "etdeposit": "Etalon deposit",
        "etpdeposit": "Etalon+ deposit",
        "radeposit": "Rakhmet deposit",
        "radepositp": "Rakhmet+ deposit",
        "mortgage": "Mortgage",
        "72025mort": "7-20-25 Mortgage",
        "bhmort": "Baspana Hit Mortgage",
        "bimort": "BI Group Consumer Loans",
        "mimort": "Mortgage for the military",
        "ordamort": "Horde mortgage",
        "refcredits": "Credit refinancing",
        "autocredit": "Car loans",
        "chl": "For individuals",
        "chlcredit": "Lending to individuals",
        "houseprice": "Cost of housing",
        "firstpay": "Down payment",
        "periodcredit": "Loan term",
        "applymorg": "Apply",
        "ref": "Loan refinancing",
        "refmort": "Refinancing Mortgage Loans",
        "refcond": "We will soften the terms of loans of any banks",
        "more": "More",
        "news": "Bank news",
        "allnews": "All news",
        "sendsms": "Send message",
        "mobapp": "Mobile application",
        "lic": "License for banking and other operations and activities in the securities market No. 1.2.25 / 195/34 dated 28.01.2015 issued by the National Bank of the Republic of Kazakhstan.",
        "curpay": "Purchase rate",
        "cursell": "Sell rate",
        "programs": "Programs"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru",
    supportedLngs: ["ru", "kz", "en"],
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;