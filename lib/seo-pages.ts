export const siteUrl = 'https://thomaszanelli.co'

export const localSeoKeywords = [
  'creazione siti web La Spezia',
  'realizzazione siti web La Spezia',
  'web designer La Spezia',
  'siti web Sarzana',
  'realizzazione siti web Sarzana',
  'sito vetrina professionale',
  'landing page professionale',
  'restyling sito web',
  'restyling WordPress',
  'manutenzione siti web',
  'siti web per artigiani',
  'siti web per professionisti'
]

export type SeoFaq = {
  question: string
  answer: string
}

export type SeoPage = {
  slug: string
  focusKeyword: string
  title: string
  description: string
  h1: string
  eyebrow: string
  intro: string
  sections: Array<{
    h2: string
    body: string
    points?: string[]
    h3?: string
    h3Body?: string
  }>
  ctaTitle: string
  ctaText: string
  primaryCta: string
  primaryHref?: string
  secondaryCta?: string
  related: string[]
  faq: SeoFaq[]
  serviceType: string
  areaServed?: string[]
  keywords?: string[]
}

export const seoPages: SeoPage[] = [
  {
    slug: 'creazione-siti-web-la-spezia',
    focusKeyword: 'creazione siti web La Spezia',
    title: 'Creazione siti web La Spezia e Sarzana - Thomas Zanelli',
    description: 'Creazione siti web a La Spezia e Sarzana per aziende, freelance, artigiani e professionisti. Siti vetrina, landing page, restyling WordPress e manutenzione.',
    h1: "Siti web per la tua attività, a La Spezia.",
    eyebrow: 'Siti web locali',
    intro: "Progetto e sviluppo siti per imprese, artigiani e professionisti a La Spezia, Sarzana e nei dintorni. Organizzo servizi, lavori e contatti in un sito semplice da consultare, anche da telefono.",
    sections: [
      {
        "h2": "Le informazioni che cerca un cliente.",
        "body": "Chi cerca un servizio vuole capire cosa offri, dove lavori e come contattarti. Progetto le pagine attorno a queste domande, con testi leggibili, fotografie pertinenti e un percorso di contatto diretto.",
        "points": [
          "Servizi e zona di lavoro in evidenza",
          "Pagine leggibili da computer e telefono",
          "Lavori e informazioni sull’attività",
          "Contatti facili da trovare",
          "Struttura e contenuti per le ricerche locali"
        ]
      },
      {
        "h2": "La struttura dipende da ciò che ti serve.",
        "body": "Una pagina può bastare per presentare un servizio. Per un’attività con più esigenze, organizzo un sito con pagine dedicate. Se hai già un sito, valuto cosa mantenere e cosa rivedere.",
        "h3": "Una tecnologia adatta a te.",
        "h3Body": "Scelgo la soluzione in base ai contenuti, alle funzioni e a come vorrai aggiornare il sito."
      },
      {
        "h2": "Per chi lavora sul territorio.",
        "body": "Seguo progetti per studi, consulenti, artigiani, imprese e attività ricettive. Ogni sito parte dalle informazioni che servono ai loro clienti.",
        "points": [
          "Studi professionali e consulenti",
          "Artigiani e tecnici",
          "Imprese e attività locali",
          "Turismo e ospitalità",
          "Freelance e piccole aziende"
        ]
      }
    ],
    ctaTitle: "Partiamo dalla tua attività.",
    ctaText: "Dimmi cosa fai, a chi ti rivolgi e che cosa ti serve. Valutiamo insieme da dove partire.",
    primaryCta: "Parliamo del tuo sito",
    secondaryCta: "Fai valutare il sito",
    related: ['web-designer-la-spezia', 'realizzazione-siti-web', 'sito-vetrina', 'landing-page'],
    faq: [
      { question: 'Lavori solo a La Spezia?', answer: 'No. Lavoro anche da remoto, ma seguo volentieri progetti a La Spezia, Sarzana, Lerici, Portovenere, Lunigiana, Massa Carrara e provincia.' },
      { question: 'Quanto costa creare un sito web?', answer: 'Dipende da numero di pagine, contenuti, funzionalità e gestione futura. Una landing page parte da 490 €, un sito vetrina da 990 €.' },
      { question: 'Posso partire con una valutazione gratuita?', answer: 'Sì. Puoi raccontarmi il progetto o inviarmi il sito attuale per capire priorità, struttura e percorso più adatto.' }
    ],
    serviceType: 'Creazione siti web',
    areaServed: ['La Spezia', 'Sarzana', 'Lerici', 'Portovenere', 'Lunigiana', 'Massa Carrara', 'Provincia della Spezia'],
    keywords: ['creazione siti web La Spezia', 'realizzazione siti web La Spezia', 'siti web Sarzana', 'sito vetrina La Spezia', 'landing page La Spezia', 'restyling WordPress La Spezia']
  },
  {
    slug: 'realizzazione-siti-web',
    focusKeyword: 'realizzazione siti web',
    title: 'Realizzazione siti web professionali - Thomas Zanelli',
    description: 'Realizzo siti web professionali per aziende, freelance e professionisti. Landing page, siti vetrina, restyling, manutenzione e consulenza web.',
    h1: "Un sito costruito intorno al tuo lavoro.",
    eyebrow: 'Realizzazione siti web',
    intro: "Mi occupo di design e sviluppo web per imprese e professionisti. Parto da quello che vuoi comunicare e organizzo pagine, contenuti e funzioni per renderlo accessibile a chi ti cerca.",
    sections: [
      {
        "h2": "Ogni pagina ha uno scopo.",
        "body": "Presentare un servizio, mostrare un lavoro, rispondere a un dubbio o raccogliere una richiesta: definisco il ruolo di ogni pagina prima di disegnarla.",
        "points": [
          "Pagine e navigazione ordinate",
          "Testi e immagini organizzati",
          "Layout adatto anche al telefono",
          "Moduli di contatto essenziali",
          "Impostazioni SEO di base e messa online"
        ]
      },
      {
        "h2": "Dalla struttura alla messa online.",
        "body": "Seguo l’organizzazione dei contenuti, il design e lo sviluppo. Prima della pubblicazione verifico navigazione, leggibilità e funzionamento delle pagine.",
        "h3": "Lo spazio per crescere.",
        "h3Body": "Quando serve, prevedo contenuti aggiornabili e nuove funzioni da aggiungere nel tempo."
      }
    ],
    ctaTitle: "Hai un sito da creare?",
    ctaText: "Raccontami la tua attività e i tuoi tempi. Ti aiuto a definire pagine, contenuti e funzioni necessarie.",
    primaryCta: "Parliamo del progetto",
    secondaryCta: "Fai valutare il sito",
    related: ['creazione-siti-web-la-spezia', 'landing-page', 'sito-vetrina', 'manutenzione-siti-web'],
    faq: [
      { question: 'Che tipo di siti realizzi?', answer: 'Landing page, siti vetrina, siti per professionisti, siti per attività locali, restyling, manutenzione e progetti con blog o CMS quando serve.' },
      { question: 'Un sito nuovo include anche i testi?', answer: 'I pacchetti includono testi base e organizzazione dei contenuti. Per progetti più articolati si definisce un lavoro editoriale dedicato.' },
      { question: 'Posso chiedere prima un check-up?', answer: 'Sì. Se hai già un sito, il Check-up Sito aiuta a capire cosa funziona e cosa migliorare prima di investire.' }
    ],
    serviceType: 'Realizzazione siti web'
  },
  {
    slug: 'web-designer-la-spezia',
    focusKeyword: 'web designer La Spezia',
    title: 'Web designer La Spezia - Siti web per aziende e professionisti',
    description: 'Web designer freelance a La Spezia e Sarzana. Creo siti web moderni, chiari e professionali per aziende, freelance, artigiani e attività locali.',
    h1: "Web designer e sviluppatore a La Spezia.",
    eyebrow: 'Web design locale',
    intro: "Sono Thomas Zanelli. Progetto siti per imprese e professionisti che vogliono presentare il proprio lavoro online. Seguo design e sviluppo in prima persona, a La Spezia e da remoto.",
    sections: [
      {
        "h2": "Il design aiuta a orientarsi.",
        "body": "Lavoro su dimensioni dei testi, spazi, immagini e navigazione perché le informazioni siano facili da leggere e trovare. Il risultato deve funzionare nell’uso quotidiano, anche su uno schermo piccolo.",
        "points": [
          "Una gerarchia chiara delle informazioni",
          "Testi leggibili e immagini pertinenti",
          "Layout curato da telefono",
          "Contatti sempre raggiungibili",
          "Coerenza con l’identità della tua attività"
        ]
      },
      {
        "h2": "Design e sviluppo, con lo stesso referente.",
        "body": "Ti confronti direttamente con me per definire il sito e seguirne la realizzazione. Ti spiego le scelte e cosa comportano per l’utilizzo e la gestione delle pagine.",
        "h3": "Vicino al tuo lavoro.",
        "h3Body": "Seguo attività di La Spezia, Sarzana e dintorni, e collaboro da remoto con clienti in altre zone."
      }
    ],
    ctaTitle: "Conosciamoci.",
    ctaText: "Scrivimi cosa fai e cosa vorresti ottenere dal tuo sito. Da lì possiamo definire il progetto.",
    primaryCta: "Scrivimi del progetto",
    secondaryCta: "Fai valutare il sito",
    related: ['creazione-siti-web-la-spezia', 'realizzazione-siti-web', 'siti-web-per-professionisti', 'siti-web-per-artigiani'],
    faq: [
      { question: 'Segui anche progetti fuori La Spezia?', answer: 'Sì. Lavoro anche da remoto, ma questa pagina è pensata per chi cerca un web designer freelance a La Spezia e provincia.' },
      { question: 'Ti occupi sia del design sia dello sviluppo?', answer: 'Sì. Seguo struttura, interfaccia, sviluppo, pubblicazione e ottimizzazioni di base.' },
      { question: 'Posso chiedere un restyling invece di un sito nuovo?', answer: 'Sì. Se il sito attuale ha una base recuperabile, posso intervenire con restyling e miglioramenti mirati.' }
    ],
    serviceType: 'Web design',
    areaServed: ['La Spezia', 'Sarzana', 'Lerici', 'Portovenere', 'Lunigiana', 'Massa Carrara', 'Provincia della Spezia'],
    keywords: ['web designer La Spezia', 'web designer Sarzana', 'siti web per professionisti La Spezia', 'siti web per artigiani La Spezia', 'restyling sito web La Spezia']
  },
  {
    slug: 'landing-page',
    focusKeyword: 'landing page professionale',
    title: 'Landing page professionale - Creazione pagine per servizi e campagne',
    description: 'Creo landing page professionali per presentare servizi, promozioni e attività. Design responsive, testi chiari, modulo contatto e struttura orientata alla conversione.',
    h1: "Landing page per presentare la tua offerta.",
    eyebrow: 'Landing page',
    intro: "Progetto landing page per presentare un servizio, una campagna o un evento. Organizzo le informazioni attorno a un obiettivo preciso: aiutare chi legge a capire l’offerta e a contattarti.",
    sections: [
      {
        "h2": "Un percorso di lettura preciso.",
        "body": "Parto dalle informazioni che servono per valutare l’offerta: cosa comprende, a chi si rivolge e come fare il passo successivo. Organizzo la pagina in una sequenza leggibile.",
        "points": [
          "Offerta spiegata nella prima schermata",
          "Sezioni con un ordine riconoscibile",
          "Inviti al contatto nel punto giusto",
          "Modulo con i campi necessari",
          "Layout per computer e telefono"
        ]
      },
      {
        "h2": "Per un servizio, una campagna o un evento.",
        "body": "Una landing page è adatta quando vuoi dedicare uno spazio a una proposta specifica. Può affiancare un sito esistente o essere il primo passo di una nuova attività.",
        "h3": "Testi, design e contatto.",
        "h3Body": "Lavoro sui contenuti e sulla loro disposizione per rendere comprensibili offerta e modalità di contatto."
      }
    ],
    ctaTitle: "Cosa vuoi presentare?",
    ctaText: "Dimmi qual è l’offerta, a chi è rivolta e quale azione vuoi facilitare. Definiamo la pagina da lì.",
    primaryCta: "Parliamo della pagina",
    secondaryCta: "Fai valutare il sito",
    related: ['realizzazione-siti-web', 'sito-vetrina', 'assistente-ai-sito-web', 'manutenzione-siti-web'],
    faq: [
      { question: 'Quanto costa una landing page?', answer: 'Il pacchetto Landing Page parte da 490 €, con una pagina completa, design responsive, testi base, modulo contatto, SEO base e pubblicazione.' },
      { question: 'Una landing page è adatta alle campagne Google o social?', answer: 'Sì. La struttura è pensata per presentare un’offerta specifica e raccogliere richieste in modo più diretto rispetto a una pagina generica.' },
      { question: 'Posso aggiungere un assistente AI alla landing page?', answer: 'Sì, quando ha senso per rispondere a domande frequenti o raccogliere richieste più complete.' }
    ],
    serviceType: 'Creazione landing page'
  },
  {
    slug: 'sito-vetrina',
    focusKeyword: 'sito vetrina professionale',
    title: 'Sito vetrina professionale - Siti per aziende e freelance',
    description: 'Creo siti vetrina professionali per aziende, freelance e piccole attività. Struttura chiara, design responsive, pagine servizi e contatti ottimizzati.',
    h1: "Un sito vetrina per la tua attività.",
    eyebrow: 'Sito vetrina',
    intro: "Realizzo siti vetrina per spiegare chi sei, cosa offri e come lavori. Servizi, progetti e contatti trovano posto in pagine ordinate, pensate per chi vuole conoscerti prima di scriverti.",
    sections: [
      {
        "h2": "Le pagine che servono.",
        "body": "Definisco la struttura in base alla tua attività: una presentazione, i servizi, i lavori, il profilo o la storia dell’impresa e i contatti. Ogni pagina risponde a una domanda di chi ti cerca.",
        "points": [
          "Homepage di presentazione",
          "Pagine dedicate ai servizi",
          "Profilo o storia dell’attività",
          "Contatti e richiesta di preventivo",
          "Impostazioni SEO di base"
        ]
      },
      {
        "h2": "Una base da aggiornare nel tempo.",
        "body": "Un sito vetrina può accompagnare consulenti, studi, artigiani e imprese. Prevedo una struttura che possa accogliere nuovi lavori, servizi o informazioni quando ne avrai bisogno.",
        "h3": "Partire con il necessario.",
        "h3Body": "Definiamo prima i contenuti essenziali, poi valutiamo eventuali ampliamenti e integrazioni."
      }
    ],
    ctaTitle: "Quali informazioni servono ai tuoi clienti?",
    ctaText: "Raccontami la tua attività. Individuiamo le pagine e i contenuti da cui partire.",
    primaryCta: "Parliamo del tuo sito",
    secondaryCta: "Fai valutare il sito",
    related: ['realizzazione-siti-web', 'siti-web-per-professionisti', 'siti-web-per-artigiani', 'manutenzione-siti-web'],
    faq: [
      { question: 'Quante pagine include un sito vetrina?', answer: 'Il pacchetto parte da homepage, servizi, chi sono o azienda, contatti e modulo richiesta preventivo.' },
      { question: 'Il sito vetrina può essere ampliato?', answer: 'Sì. Può partire snello e crescere con nuove pagine, sezioni, contenuti o integrazioni.' },
      { question: 'È adatto a piccole attività locali?', answer: 'Sì. È spesso la soluzione più chiara per presentare servizi, zona di lavoro e modalità di contatto.' }
    ],
    serviceType: 'Sito vetrina professionale'
  },
  {
    slug: 'restyling-sito-web',
    focusKeyword: 'restyling sito web',
    title: 'Restyling sito web - Migliora struttura, UX e contatti',
    description: 'Restyling siti web per migliorare design, mobile, chiarezza, performance e richieste di contatto. Ideale per siti vecchi, confusi o poco efficaci.',
    h1: "Un sito che rappresenti il tuo lavoro di oggi.",
    eyebrow: 'Restyling sito web',
    intro: "Rivedo siti che non rispecchiano più l’attività o sono diventati difficili da usare. Analizzo pagine, testi, design e navigazione per capire dove intervenire.",
    sections: [
      {
        "h2": "Partire dai problemi che incontri.",
        "body": "Servizi cambiati, contenuti poco leggibili, pagine difficili da usare da telefono: individuo i problemi e li metto in ordine di priorità prima di proporre le modifiche.",
        "points": [
          "Revisione del design",
          "Layout più leggibile da telefono",
          "Servizi e contatti in evidenza",
          "Navigazione e pagine riorganizzate",
          "Moduli di contatto più semplici"
        ]
      },
      {
        "h2": "Capire cosa mantenere.",
        "body": "Valuto la struttura esistente, i contenuti e la piattaforma. In base allo stato del sito, posso proporre modifiche mirate o una riprogettazione più ampia.",
        "h3": "Una valutazione prima del progetto.",
        "h3Body": "L’analisi iniziale aiuta a distinguere le modifiche necessarie da quelle che possono aspettare."
      }
    ],
    ctaTitle: "Cosa vorresti cambiare?",
    ctaText: "Inviami il sito e raccontami cosa è cambiato nella tua attività. Valutiamo quali interventi hanno senso.",
    primaryCta: "Fai valutare il sito",
    primaryHref: "/richiedi-restyling",
    secondaryCta: "Vai ai contatti",
    related: ['restyling-wordpress', 'realizzazione-siti-web', 'sito-vetrina', 'manutenzione-siti-web'],
    faq: [
      { question: 'Restyling significa rifare tutto da zero?', answer: 'Non sempre. Dipende dallo stato del sito, dalla piattaforma usata e dagli obiettivi. A volte basta intervenire su struttura, design e contatti.' },
      { question: 'Quanto costa un restyling?', answer: 'Il Restyling Express parte da 590 €, ma il prezzo può variare in base a pagine, contenuti e complessità tecnica.' },
      { question: 'Posso prima ricevere un’analisi?', answer: 'Sì. Il Check-up Sito serve proprio a capire cosa non funziona prima di investire in modifiche più ampie.' }
    ],
    serviceType: 'Restyling sito web'
  },
  {
    slug: 'restyling-wordpress',
    focusKeyword: 'restyling WordPress',
    title: 'Restyling WordPress - Siti più moderni, chiari e professionali',
    description: 'Miglioro siti WordPress vecchi, lenti o confusi con interventi su design, struttura, mobile, CTA, SEO base e manutenzione.',
    h1: "Rimettiamo in ordine il tuo sito WordPress.",
    eyebrow: 'Restyling WordPress',
    intro: "Intervengo su design, contenuti e navigazione dei siti WordPress. Valuto anche temi, plugin e gestione delle pagine per individuare le modifiche più utili.",
    sections: [
      {
        "h2": "Valutare la base esistente.",
        "body": "Guardo come sono costruite le pagine e quali strumenti usa il sito. Questo permette di capire cosa si può recuperare e quali elementi rendono difficile la navigazione o gli aggiornamenti.",
        "points": [
          "Homepage e pagine principali",
          "Leggibilità da telefono",
          "Servizi e contatti",
          "Organizzazione dei contenuti",
          "Tema, plugin e aggiornamenti"
        ]
      },
      {
        "h2": "Pensare anche a chi lo aggiorna.",
        "body": "Il restyling riguarda anche la gestione quotidiana. Rivedo struttura e contenuti tenendo conto di come verranno modificati dopo la pubblicazione.",
        "h3": "Interventi con una priorità.",
        "h3Body": "Definisco le modifiche in base allo stato del sito e alle esigenze di chi lo usa e lo gestisce."
      }
    ],
    ctaTitle: "Da dove ripartire con WordPress?",
    ctaText: "Mandami il link e dimmi quali difficoltà incontri. Verifico la base del sito e i possibili interventi.",
    primaryCta: "Fai valutare il sito",
    primaryHref: "/richiedi-restyling",
    secondaryCta: "Vai ai contatti",
    related: ['restyling-sito-web', 'manutenzione-siti-web', 'sito-vetrina', 'assistente-ai-sito-web'],
    faq: [
      { question: 'Lavori su temi WordPress già esistenti?', answer: 'Sì, quando la base è recuperabile. Se tema o plugin creano troppi limiti, propongo una soluzione più solida.' },
      { question: 'Il restyling migliora anche la velocità?', answer: 'Può migliorare performance percepita e caricamento, soprattutto se si interviene su struttura, asset, plugin e pagine principali.' },
      { question: 'Offri anche manutenzione WordPress?', answer: 'Sì. Posso occuparmi di aggiornamenti, piccole modifiche, controlli periodici e supporto tecnico.' }
    ],
    serviceType: 'Restyling WordPress'
  },
  {
    slug: 'siti-web-per-professionisti',
    focusKeyword: 'siti web per professionisti',
    title: 'Siti web per professionisti - Presenza online chiara e autorevole',
    description: 'Creo siti web per professionisti che vogliono comunicare meglio, presentare servizi e ricevere richieste di contatto qualificate.',
    h1: "Siti web per presentare la tua professione.",
    eyebrow: 'Siti per professionisti',
    intro: "Progetto siti per consulenti, freelance e studi professionali. Organizzo competenze, servizi e modalità di lavoro per aiutare un possibile cliente a capire se puoi rispondere alla sua esigenza.",
    sections: [
      {
        "h2": "Rispondere alle prime domande.",
        "body": "Di cosa ti occupi? Per chi lavori? Come si svolge una collaborazione? Il sito deve offrire risposte comprensibili prima del primo contatto.",
        "points": [
          "Servizi spiegati nel dettaglio",
          "Profilo e competenze",
          "Modalità di lavoro",
          "Pagine leggibili da telefono",
          "Un modo semplice per contattarti"
        ]
      },
      {
        "h2": "Una struttura adatta alla tua professione.",
        "body": "Organizzo i contenuti in base ai servizi che offri e alle informazioni che i clienti cercano prima di scegliere un professionista.",
        "h3": "Lo spazio per approfondire.",
        "h3Body": "Se utile, il sito può includere articoli e risorse per spiegare meglio il tuo ambito di lavoro."
      }
    ],
    ctaTitle: "Come presenti il tuo lavoro?",
    ctaText: "Raccontami la tua professione e le persone a cui ti rivolgi. Definiamo i contenuti che servono per conoscerti.",
    primaryCta: "Parliamo del tuo sito",
    secondaryCta: "Fai valutare il sito",
    related: ['sito-vetrina', 'landing-page', 'realizzazione-siti-web', 'web-designer-la-spezia'],
    faq: [
      { question: 'Che pagine servono a un professionista?', answer: 'Di solito homepage, servizi, profilo, contatti e una pagina richiesta informazioni. In alcuni casi bastano una landing page o poche sezioni molto curate.' },
      { question: 'Puoi aiutarmi anche con i testi?', answer: 'Sì. Nei pacchetti sono previsti testi base e struttura dei contenuti; per testi più ampi si definisce il lavoro in base al progetto.' },
      { question: 'Il sito può essere molto sobrio?', answer: 'Sì. Per molti professionisti funziona meglio un design pulito, autorevole e diretto rispetto a un sito troppo decorativo.' }
    ],
    serviceType: 'Siti web per professionisti'
  },
  {
    slug: 'siti-web-per-artigiani',
    focusKeyword: 'siti web per artigiani',
    title: 'Siti web per artigiani - Siti professionali per attività locali',
    description: 'Creo siti web per artigiani, tecnici e attività locali. Siti chiari, moderni, mobile-friendly e pensati per ricevere richieste.',
    h1: "Siti web per artigiani e piccole imprese.",
    eyebrow: 'Siti per attività locali',
    intro: "Creo siti per artigiani, tecnici e piccole imprese. Metto in evidenza servizi, lavori realizzati e zona di attività, con contatti facili da usare anche da telefono.",
    sections: [
      {
        "h2": "Le informazioni prima di una chiamata.",
        "body": "Chi ti cerca vuole sapere se svolgi il lavoro di cui ha bisogno, se operi nella sua zona e come richiedere un preventivo. Organizzo il sito attorno a queste informazioni.",
        "points": [
          "Servizi offerti",
          "Zona di lavoro",
          "Fotografie dei lavori",
          "Telefono, email e WhatsApp",
          "Richiesta di informazioni o preventivo"
        ]
      },
      {
        "h2": "Dare spazio ai lavori realizzati.",
        "body": "Fotografie e descrizioni aiutano a capire di cosa ti occupi. Le organizzo per tipo di intervento, insieme alle informazioni necessarie per contattarti.",
        "h3": "Contenuti adatti all’attività.",
        "h3Body": "La struttura cambia secondo il lavoro: servizi e cantieri per un’impresa, interventi e zona di copertura per un tecnico."
      }
    ],
    ctaTitle: "Facciamo conoscere il tuo lavoro.",
    ctaText: "Dimmi di cosa ti occupi e dove lavori. Partiamo dai servizi e dai progetti che vuoi mostrare.",
    primaryCta: "Parliamo del tuo sito",
    secondaryCta: "Fai valutare il sito",
    related: ['sito-vetrina', 'landing-page', 'creazione-siti-web-la-spezia', 'web-designer-la-spezia'],
    faq: [
      { question: 'Un artigiano ha davvero bisogno di un sito?', answer: 'Se le persone cercano servizi online o vogliono verificare affidabilità prima di chiamare, un sito chiaro può fare molta differenza.' },
      { question: 'Serve un sito grande?', answer: 'No. Spesso bastano poche pagine ben organizzate o una landing page mirata.' },
      { question: 'Il sito può includere WhatsApp?', answer: 'Sì. Posso inserire contatti rapidi, modulo richiesta e collegamento WhatsApp quando è utile per il tipo di attività.' }
    ],
    serviceType: 'Siti web per artigiani'
  },
  {
    slug: 'manutenzione-siti-web',
    focusKeyword: 'manutenzione sito web',
    title: 'Manutenzione siti web - Aggiornamenti, modifiche e supporto',
    description: 'Servizio di manutenzione siti web per aggiornamenti, modifiche contenuti, controlli periodici e supporto tecnico per aziende e professionisti.',
    h1: "Manutenzione per il tuo sito, nel tempo.",
    eyebrow: 'Manutenzione',
    intro: "Mi occupo di aggiornamenti, modifiche ai contenuti e controlli tecnici. Un servizio per chi vuole tenere il sito al passo con l’attività e avere un referente a cui chiedere supporto.",
    sections: [
      {
        "h2": "Le modifiche della vita quotidiana.",
        "body": "Un nuovo servizio, un orario diverso, una pagina da correggere: la manutenzione permette di aggiornare il sito quando cambia l’attività e di gestire gli interventi tecnici necessari.",
        "points": [
          "Aggiornamento di testi e immagini",
          "Piccole modifiche al layout",
          "Controlli periodici",
          "Supporto tecnico",
          "Aggiornamenti WordPress, quando previsti"
        ]
      },
      {
        "h2": "Un supporto da definire insieme.",
        "body": "Posso seguire un sito appena pubblicato o valutare la manutenzione di uno esistente. Prima di iniziare verifico piattaforma, accessi e stato del progetto.",
        "h3": "Un servizio continuativo.",
        "h3Body": "Il servizio parte da 49 €/mese. Interventi e modalità di supporto vengono definiti in base al sito."
      }
    ],
    ctaTitle: "Di quale supporto hai bisogno?",
    ctaText: "Inviami il sito e indicami le modifiche o i controlli che ti servono. Valuto con te il tipo di assistenza.",
    primaryCta: "Parliamo della manutenzione",
    secondaryCta: "Fai valutare il sito",
    related: ['restyling-wordpress', 'restyling-sito-web', 'realizzazione-siti-web', 'assistente-ai-sito-web'],
    faq: [
      { question: 'Cosa include la manutenzione sito web?', answer: 'Può includere piccole modifiche contenuti, controlli periodici, supporto tecnico, aggiornamenti e interventi su WordPress quando necessari.' },
      { question: 'Posso chiedere manutenzione anche se il sito non lo hai creato tu?', answer: 'Sì, dopo una valutazione tecnica iniziale per capire piattaforma, accessi e stato del sito.' },
      { question: 'La manutenzione sostituisce un restyling?', answer: 'No. La manutenzione mantiene il sito in ordine; se il sito è datato o poco efficace può servire prima un restyling.' }
    ],
    serviceType: 'Manutenzione siti web'
  },
  {
    slug: 'assistente-ai-sito-web',
    focusKeyword: 'assistente AI per sito web',
    title: 'Assistente AI per sito web - Risposte automatiche e raccolta contatti',
    description: 'Integro assistenti AI nei siti web per rispondere ai visitatori, raccogliere richieste e inviare nuovi contatti via email.',
    h1: "Un assistente AI per chi visita il tuo sito.",
    eyebrow: 'Assistente AI',
    intro: "Integro assistenti AI per rispondere alle domande sui tuoi servizi e raccogliere richieste. Definiamo insieme quali informazioni possono fornire e quando indirizzare la persona al contatto diretto.",
    sections: [
      {
        "h2": "Un compito preciso.",
        "body": "L’assistente parte dalle informazioni della tua attività. Definisco domande, risposte e percorso di contatto, prevedendo anche i casi in cui serve il tuo intervento.",
        "points": [
          "Informazioni su attività e servizi",
          "Risposte alle domande frequenti",
          "Raccolta delle richieste",
          "Invio dei contatti via email",
          "Tono coerente con il sito"
        ]
      },
      {
        "h2": "Valutare l’integrazione.",
        "body": "Verifico la piattaforma, i contenuti disponibili e il tipo di richieste che ricevi. Da queste informazioni dipendono il lavoro iniziale e la gestione successiva.",
        "h3": "Su un sito nuovo o già online.",
        "h3Body": "L’integrazione viene definita in base alla struttura del sito e alle funzioni necessarie."
      }
    ],
    ctaTitle: "Quali domande ricevi più spesso?",
    ctaText: "Raccontami cosa chiedono i tuoi clienti. Valutiamo se un assistente può aiutarti e su quali informazioni basarlo.",
    primaryCta: "Parliamo dell’integrazione",
    secondaryCta: "Fai valutare il sito",
    related: ['landing-page', 'sito-vetrina', 'manutenzione-siti-web', 'restyling-wordpress'],
    faq: [
      { question: 'L’assistente AI sostituisce il modulo contatto?', answer: 'No. Lo integra. Può guidare l’utente e raccogliere informazioni, ma il modulo o il contatto diretto restano importanti.' },
      { question: 'Può inviare i contatti via email?', answer: 'Sì. Il flusso può essere configurato per raccogliere richieste e inviarle via email.' },
      { question: 'Serve rifare il sito?', answer: 'Non sempre. Dipende dalla piattaforma e dal modo in cui il sito è costruito. Si valuta prima l’integrazione più semplice e sicura.' }
    ],
    serviceType: 'Assistente AI per sito web'
  }
]

export const seoPageMap = new Map(seoPages.map((page) => [page.slug, page]))

export const getSeoPage = (slug: string) => {
  const page = seoPageMap.get(slug)

  if (!page) {
    throw new Error(`SEO page not found: ${slug}`)
  }

  return page
}

export const getPageUrl = (slug = '') => `${siteUrl}/${slug}`.replace(/\/$/, '')
