export type FaqCategory = "Ablauf & Termine" | "Preise & Angebot" | "Leistungen" | "Sicherheit & Haftung";

export type Faq = {
  question: string;
  answer: string;
  category: FaqCategory;
};

export const faqCategories: FaqCategory[] = [
  "Ablauf & Termine",
  "Preise & Angebot",
  "Leistungen",
  "Sicherheit & Haftung"
];

export const faqs: Faq[] = [
  {
    category: "Ablauf & Termine",
    question: "Wie läuft eine Anfrage bei Ihnen ab?",
    answer:
      "Sie melden sich telefonisch, per E-Mail oder über das Formular. Wir rufen in der Regel am selben Werktag zurück und vereinbaren eine kostenlose Besichtigung – vor Ort oder per Videoanruf, wenn es schnell gehen soll. Danach erhalten Sie ein schriftliches Festpreisangebot. Erst wenn Sie zusagen, planen wir Team und Fahrzeug fest ein."
  },
  {
    category: "Ablauf & Termine",
    question: "Wie viel Vorlauf brauchen Sie?",
    answer:
      "Für einen kompletten Umzug empfehlen wir zwei bis vier Wochen Vorlauf, besonders zum Monatsende und zum Quartalswechsel – das sind die gefragtesten Termine. Kleinere Transporte und Tragearbeiten lassen sich oft innerhalb weniger Tage einschieben, je nach Auslastung auch kurzfristiger."
  },
  {
    category: "Ablauf & Termine",
    question: "Sind auch kurzfristige oder eilige Aufträge möglich?",
    answer:
      "Ja. Wenn es schnell gehen muss, rufen Sie am besten direkt an statt zu schreiben – dann sehen wir sofort im Kalender nach, was sich einrichten lässt. Eiltransporte im Raum Düsseldorf sind je nach Tag auch tagesgleich machbar."
  },
  {
    category: "Ablauf & Termine",
    question: "Wie lange dauert ein durchschnittlicher Umzug?",
    answer:
      "Eine Zwei-Zimmer-Wohnung innerhalb der Stadt ist meist an einem halben bis ganzen Tag erledigt. Ein Einfamilienhaus braucht oft ein bis zwei Tage. Entscheidend sind weniger die Quadratmeter als Etage, Aufzug und Tragewege – deshalb schätzen wir die Dauer erst nach der Besichtigung verbindlich ein."
  },
  {
    category: "Ablauf & Termine",
    question: "Muss ich bei der Entrümpelung vor Ort sein?",
    answer:
      "Nein. Wir gehen das Objekt vorher gemeinsam durch und halten fest, was bleiben soll und was entsorgt wird. Danach können wir eigenständig arbeiten. Zur Übergabe treffen wir uns wieder, wenn die Räume besenrein sind."
  },
  {
    category: "Preise & Angebot",
    question: "Bieten Sie Festpreise an?",
    answer:
      "Ja. Nach der Besichtigung – vor Ort oder anhand aussagekräftiger Fotos und Videos – erhalten Sie ein schriftliches Festpreisangebot. Was darin steht, gilt. Nachforderungen gibt es nur, wenn Sie selbst den Umfang ändern, etwa wenn zusätzlich der Keller mit raus soll."
  },
  {
    category: "Preise & Angebot",
    question: "Was bestimmt den Preis eines Umzugs?",
    answer:
      "Vor allem vier Dinge: das zu transportierende Volumen, die Etagen und ob es einen Aufzug gibt, die Entfernung zwischen den Adressen sowie die Zusatzleistungen wie Packen, Möbelmontage oder eine Halteverbotszone. Deshalb sind seriöse Pauschalpreise ohne Besichtigung kaum möglich."
  },
  {
    category: "Preise & Angebot",
    question: "Was kostet eine Entrümpelung?",
    answer:
      "Das hängt von der Menge, der Etage, den Tragewegen und den Entsorgungsgebühren ab. Verwertbare Möbel und Gegenstände rechnen wir an – das senkt den Preis spürbar. Die Besichtigung ist kostenlos und unverbindlich, auch wenn Sie sich danach gegen uns entscheiden."
  },
  {
    category: "Preise & Angebot",
    question: "Kann ich den Umzug steuerlich absetzen?",
    answer:
      "In vielen Fällen ja – bei einem beruflich veranlassten Umzug als Werbungskosten, sonst häufig anteilig als haushaltsnahe Dienstleistung. Wir stellen Ihnen dafür eine ordentliche Rechnung aus; bitte begleichen Sie diese per Überweisung, da das Finanzamt einen Zahlungsnachweis verlangt. Die steuerliche Bewertung im Einzelfall klärt Ihr Steuerberater."
  },
  {
    category: "Leistungen",
    question: "In welchem Gebiet sind Sie tätig?",
    answer:
      "Unser Schwerpunkt ist Düsseldorf und das direkte Umland: Neuss, Ratingen, Monheim am Rhein, Langenfeld, Hilden, Mettmann, Erkrath, Leverkusen, Dormagen, Meerbusch und Kaarst. Unsere Geschäftsadresse ist Monheim am Rhein. Fernumzüge innerhalb Deutschlands übernehmen wir auf Anfrage."
  },
  {
    category: "Leistungen",
    question: "Stellen Sie Umzugskartons und Verpackungsmaterial?",
    answer:
      "Ja. Auf Wunsch liefern wir rechtzeitig vor dem Umzugstag Kartons, Kleiderboxen, Luftpolsterfolie, Seidenpapier und Klebeband an. Sagen Sie einfach bei der Besichtigung, wie viel Sie selbst packen möchten – danach richtet sich die Menge."
  },
  {
    category: "Leistungen",
    question: "Übernehmen Sie auch Firmen- und Büroumzüge?",
    answer:
      "Ja. Büroumzüge legen wir so, dass Ihr Betrieb möglichst wenig stillsteht – auf Wunsch abends, am Wochenende oder in Etappen. Arbeitsplätze werden beschriftet und am neuen Standort in der abgesprochenen Ordnung wieder aufgebaut."
  },
  {
    category: "Leistungen",
    question: "Beantragen Sie auch die Halteverbotszone?",
    answer:
      "Ja, auf Wunsch kümmern wir uns um Beantragung und Aufstellung der Halteverbotsschilder an beiden Adressen. Das braucht je nach Stadt etwas Vorlauf, deshalb sprechen Sie uns am besten früh darauf an. Die Amtsgebühren weisen wir transparent im Angebot aus."
  },
  {
    category: "Leistungen",
    question: "Transportieren Sie auch Klavier, Tresor oder andere schwere Stücke?",
    answer:
      "Schwere und sperrige Einzelstücke sind möglich, müssen aber vorher angemeldet werden – wir planen dann zusätzliches Personal und passendes Equipment ein. Bitte geben Sie solche Gegenstände unbedingt schon bei der Anfrage an, sonst fehlt am Umzugstag genau das, was gebraucht wird."
  },
  {
    category: "Sicherheit & Haftung",
    question: "Sind meine Möbel beim Transport abgesichert?",
    answer:
      "Wir verfügen über eine Transport- und Betriebshaftpflichtversicherung. Für Umzüge gilt zusätzlich die gesetzliche Haftung des Spediteurs nach § 451e HGB, die auf einen Betrag je Kubikmeter Laderaum begrenzt ist. Wenn Sie besonders wertvolle Stücke transportieren lassen, sprechen Sie uns vorher an – dann klären wir gemeinsam, ob eine zusätzliche Absicherung sinnvoll ist."
  },
  {
    category: "Sicherheit & Haftung",
    question: "Was passiert, wenn doch einmal etwas beschädigt wird?",
    answer:
      "Melden Sie den Schaden bitte direkt bei der Übergabe oder unverzüglich danach, am besten mit Foto. Äußerlich erkennbare Schäden müssen aus rechtlichen Gründen zeitnah angezeigt werden. Wir nehmen den Fall auf und klären die Regulierung über unsere Versicherung – ohne dass Sie hinterhertelefonieren müssen."
  },
  {
    category: "Sicherheit & Haftung",
    question: "Wie gehen Sie mit persönlichen Unterlagen und Wertsachen um?",
    answer:
      "Bargeld, Schmuck, Ausweise und wichtige Dokumente sollten Sie grundsätzlich selbst transportieren – das ist branchenüblich und in Ihrem Interesse. Bei Haushaltsauflösungen sichern wir gefundene Dokumente und Erinnerungsstücke und übergeben sie Ihnen, statt sie zu entsorgen."
  },
  {
    category: "Sicherheit & Haftung",
    question: "Wird der Abfall ordnungsgemäß entsorgt?",
    answer:
      "Ja. Wir trennen Wertstoffe, Sperrmüll, Elektrogeräte und Problemstoffe und geben sie bei zugelassenen Entsorgungsbetrieben ab. Auf Wunsch erhalten Sie den Entsorgungsnachweis – für Hausverwaltungen und Erbengemeinschaften ist das oft wichtig."
  }
];
