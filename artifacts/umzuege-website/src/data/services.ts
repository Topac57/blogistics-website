import { Truck, Box, Trash2, Wrench, PackageOpen, HandHelping } from "lucide-react";
import React from "react";
import {
  StairsFurniture,
  SkipContainer,
  PalletLoad,
  AssemblyScene,
  EmptyRoom,
  PackingScene
} from "@/components/decor/Silhouettes";

export type Service = {
  id: string;
  title: string;
  /** Kurzzeile für Karten – ein Satz, konkret, ohne Floskel */
  shortDescription: string;
  /** Wer das typischerweise bucht – hilft Besuchern bei der Einordnung */
  audience: string;
  icon: React.ElementType;
  slug: string;
  hasDetailPage: boolean;
  introText?: string;
  details?: string[];
  benefits?: string[];
  /** Was den Preis in dieser Leistung wirklich bestimmt */
  priceFactors?: string[];
  /** Eigene Hintergrund-Silhouette im Seitenkopf – je Leistung eine andere */
  decor: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const services: Service[] = [
  {
    id: "umzuege",
    title: "Umzüge",
    shortDescription:
      "Wohnung oder Büro – wir packen, demontieren, transportieren und bauen am Zielort wieder auf.",
    audience: "Privat, Gewerbe & öffentliche Auftraggeber",
    icon: Truck,
    decor: StairsFurniture,
    slug: "umzuege",
    hasDetailPage: true,
    introText:
      "Ein Umzug scheitert selten am Transport, sondern an der Planung: Wer trägt das Sofa durchs enge Treppenhaus, wann steht der Wagen vor der Tür, wo parkt er überhaupt? Genau das nehmen wir Ihnen ab. Wir schauen uns Ihre Wohnung vorher an, planen Route, Team und Zeitfenster – und am Umzugstag läuft es nach Plan statt nach Zufall.",
    details: [
      "Privatumzüge von der Ein-Zimmer-Wohnung bis zum Einfamilienhaus",
      "Senioren- und Kleinumzüge mit zusätzlicher Ruhe und Sorgfalt",
      "Büro- und Gewerbeumzüge, auf Wunsch abends oder am Wochenende",
      "De- und Montage von Schränken, Betten und Küchen",
      "Umzugskartons und Verpackungsmaterial rechtzeitig vorab geliefert",
      "Halteverbotszone auf Wunsch beantragt und aufgestellt"
    ],
    benefits: [
      "Kostenlose Besichtigung vor Ort oder per Videoanruf",
      "Schriftliches Festpreisangebot vor Auftragsbeginn",
      "Eingespieltes Team statt wechselnder Aushilfen",
      "Transport- und Betriebshaftpflichtversicherung vorhanden"
    ],
    priceFactors: [
      "Wohnfläche und Anzahl der Zimmer",
      "Etage und ob ein Aufzug vorhanden ist",
      "Entfernung zwischen alter und neuer Adresse",
      "Zusatzleistungen wie Packen, Montage oder Halteverbot"
    ]
  },
  {
    id: "entruempelung",
    title: "Entrümpelung",
    shortDescription:
      "Keller, Dachboden, Garage oder ganze Wohnung – geräumt, sortiert und besenreich übergeben.",
    audience: "Mieter, Eigentümer & Hausverwaltungen",
    icon: Trash2,
    decor: SkipContainer,
    slug: "entruempelung",
    hasDetailPage: true,
    introText:
      "Entrümpeln ist vor allem eine Frage der Sortierung: Was bleibt, was wird verwertet, was muss fachgerecht entsorgt werden? Wir gehen das Objekt mit Ihnen durch, halten fest, was auf keinen Fall weg darf – und räumen den Rest. Sie müssen dabei nicht anwesend sein.",
    details: [
      "Wohnungen, Häuser, Keller, Dachböden, Garagen und Gartenhäuser",
      "Gewerbliche Räumungen und Büroauflösungen",
      "Sortierung nach Wertstoffen, Sperrmüll und Problemstoffen",
      "Entfernung von Teppichböden, Tapeten und Einbauten auf Wunsch",
      "Entsorgung über zugelassene Betriebe mit Nachweis"
    ],
    benefits: [
      "Diskrete Abwicklung, auch in sensiblen Situationen",
      "Besenreine Übergabe – bereit für die Wohnungsabnahme",
      "Verwertbares wird angerechnet und senkt Ihren Preis",
      "Festpreis nach Besichtigung, keine Nachforderung nach Kubikmetern"
    ],
    priceFactors: [
      "Menge und Art des Materials (Kubikmeter)",
      "Etage, Zugang und Tragewege",
      "Anteil an Sondermüll und Elektrogeräten",
      "Anrechenbarer Wert verwertbarer Gegenstände"
    ]
  },
  {
    id: "transporte",
    title: "Transporte",
    shortDescription:
      "Einzelstücke, Sperriges oder Eiliges – kurzfristig abgeholt und sicher ans Ziel gebracht.",
    audience: "Privatkunden, Händler & Handwerksbetriebe",
    icon: Box,
    decor: PalletLoad,
    slug: "transporte",
    hasDetailPage: true,
    introText:
      "Ein Sofa vom Kleinanzeigen-Fund, eine Küchenplatte vom Baumarkt, eine Palette zum Kunden: Nicht jeder Transport braucht einen ganzen Umzugstag. Für genau diese Fälle sind wir flexibel unterwegs – oft schon am nächsten Tag, im Raum Düsseldorf teils noch am selben.",
    details: [
      "Möbeltaxi für Einkäufe aus Möbelhaus, Baumarkt oder Kleinanzeigen",
      "Kleintransporte, Beiladungen und Einzelstücke",
      "Kurier- und Eilfahrten für Betriebe",
      "Schwere und sperrige Güter nach vorheriger Absprache",
      "Ladungssicherung mit Zurrgurten, Decken und Kantenschutz"
    ],
    benefits: [
      "Kurzfristige Termine, je nach Auslastung auch tagesgleich",
      "Abrechnung nach Aufwand oder als Festpreis – Sie entscheiden",
      "Ortskundige Fahrer im Rheinland",
      "Auch Abholung bei Dritten, ohne dass Sie dabei sein müssen"
    ],
    priceFactors: [
      "Strecke und Fahrzeit",
      "Größe, Gewicht und Empfindlichkeit der Ladung",
      "Tragewege und Etage an Abhol- und Zielort",
      "Terminwunsch (regulär oder kurzfristig)"
    ]
  },
  {
    id: "montage",
    title: "Möbelmontage",
    shortDescription:
      "Ab- und Aufbau von Schränken, Betten und Küchen – mit dem richtigen Werkzeug und ohne Kratzer.",
    audience: "Alle, denen Werkzeug, Zeit oder Lust fehlt",
    icon: Wrench,
    decor: AssemblyScene,
    slug: "montage",
    hasDetailPage: true,
    introText:
      "Der Kleiderschrank passt nicht durchs Treppenhaus, die Anleitung hat siebzehn Schritte und drei übrige Schrauben. Unser Team baut Möbel ab, transportiert sie und stellt sie am Zielort wieder passgenau auf – auch, wenn Sie gar nicht umziehen, sondern einfach neu gekauft haben.",
    details: [
      "Demontage von Schränken, Betten, Regalen und Tischen",
      "Fachgerechter, stabiler Wiederaufbau am Zielort",
      "Montage neuer Möbel (IKEA, XXXLutz, Poco und andere)",
      "Küchendemontage und -aufbau nach Absprache",
      "Lampen, Bilder, Regale und Gardinenstangen anbringen"
    ],
    benefits: [
      "Eigenes Werkzeug inklusive – auch für Dübel in schwierigen Wänden",
      "Schonender Umgang mit Böden, Türrahmen und Möbelkanten",
      "Ein Termin statt drei Wochenenden Eigenleistung",
      "Möbel stehen gerade, fest und dort, wo Sie sie haben wollen"
    ],
    priceFactors: [
      "Anzahl und Komplexität der Möbelstücke",
      "Ob nur Aufbau oder Ab- und Aufbau gebraucht wird",
      "Wandbeschaffenheit bei Befestigungen",
      "Anfahrt und gewünschter Termin"
    ]
  },
  {
    id: "haushaltsaufloesung",
    title: "Haushaltsauflösung",
    shortDescription:
      "Kompletter Haushalt geräumt, sortiert und entsorgt – diskret und zur Wohnungsabnahme bereit.",
    audience: "Angehörige, Erben & Betreuer",
    icon: PackageOpen,
    decor: EmptyRoom,
    slug: "haushaltsaufloesung",
    hasDetailPage: true,
    introText:
      "Eine Haushaltsauflösung steht meist nicht ohne Grund an. Häufig geht es um einen Trauerfall, einen Umzug ins Pflegeheim oder eine Frist des Vermieters – oft alles gleichzeitig. Wir nehmen Ihnen die Organisation ab, gehen mit Ihnen einmal durch, was aufbewahrt werden soll, und erledigen den Rest ruhig und zuverlässig.",
    details: [
      "Vollständige Auflösung von Wohnungen und Häusern",
      "Aussortieren und Sichern von Dokumenten und Erinnerungsstücken",
      "Anrechnung verwertbarer Möbel und Gegenstände",
      "Entsorgung von Sperrmüll, Elektrogeräten und Problemstoffen",
      "Endreinigung für die Übergabe an Vermieter oder Käufer"
    ],
    benefits: [
      "Ein fester Ansprechpartner von der Besichtigung bis zur Schlüsselübergabe",
      "Hohe Diskretion – gerade im Trauerfall",
      "Terminliche Abstimmung mit Vermieter oder Hausverwaltung",
      "Besenreine Übergabe, damit die Abnahme nicht scheitert"
    ],
    priceFactors: [
      "Größe des Haushalts und Füllgrad der Räume",
      "Etage, Aufzug und Zufahrt für das Fahrzeug",
      "Entsorgungsaufwand und Sondermüll",
      "Zusätzliche Endreinigung oder Rückbauarbeiten"
    ]
  },
  {
    id: "tragearbeiten",
    title: "Tragearbeiten & Umräumen",
    shortDescription:
      "Nur kräftige Hände nötig? Wir kommen zum Tragen, Umstellen und Umräumen – auch für ein paar Stunden.",
    audience: "Kurzfristiger Bedarf, stundenweise buchbar",
    icon: HandHelping,
    // ohne Detailseite: decor wird hier nie gerendert, das Feld ist nur Pflicht
    decor: PackingScene,
    slug: "kontakt",
    hasDetailPage: false // führt direkt zum Kontaktformular
  }
];
