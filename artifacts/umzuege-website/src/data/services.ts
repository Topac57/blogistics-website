import { Truck, Box, Trash2, Wrench, PackageOpen, ClipboardList } from "lucide-react";
import React from "react";

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  icon: React.ElementType;
  slug: string;
  hasDetailPage: boolean;
  introText?: string;
  details?: string[];
  benefits?: string[];
};

export const services: Service[] = [
  {
    id: "umzuege",
    title: "Umzüge",
    shortDescription: "Stressfreie Privatumzüge und Firmenumzüge. Wir verpacken, transportieren und packen wieder aus.",
    icon: Truck,
    slug: "umzuege",
    hasDetailPage: true,
    introText: "Ein Umzug bedeutet oft Stress und viel Organisation. Mit uns als Ihrem zuverlässigen Partner im Raum Düsseldorf können Sie sich entspannt zurücklehnen. Wir kümmern uns um alles – von der ersten Kiste bis zum Aufbau am neuen Wohnort.",
    details: [
      "Privatumzüge (Singles, Paare, Familien)",
      "Seniorenumzüge mit besonderer Sorgfalt",
      "Firmen- und Büroumzüge",
      "Klavier- und Spezialtransporte auf Anfrage",
      "Bereitstellung von Umzugskartons und Verpackungsmaterial"
    ],
    benefits: [
      "Kostenlose Vor-Ort-Besichtigung & Festpreisangebot",
      "Geschultes und freundliches Fachpersonal",
      "Vollständiger Versicherungsschutz",
      "Pünktliche und termingerechte Ausführung"
    ]
  },
  {
    id: "entruempelung",
    title: "Entrümpelung",
    shortDescription: "Fachgerechte und besenreine Entrümpelung von Wohnungen, Kellern, Dachböden und Garagen.",
    icon: Trash2,
    slug: "entruempelung",
    hasDetailPage: true,
    introText: "Ob Keller, Dachboden oder die komplette Wohnung – wir räumen auf und schaffen Platz. Diskret, schnell und mit fachgerechter Entsorgung nach höchsten Umweltstandards.",
    details: [
      "Wohnungs- und Hausentrümpelungen",
      "Keller-, Garagen- und Dachbodenräumung",
      "Gewerbliche Räumungen und Büroauflösungen",
      "Fachgerechte Entsorgung und Mülltrennung",
      "Entfernen von Bodenbelägen und Tapeten (auf Wunsch)"
    ],
    benefits: [
      "Diskrete und respektvolle Abwicklung",
      "Besenreine Übergabe der Räumlichkeiten",
      "Transparente Kosten ohne versteckte Gebühren",
      "Umweltgerechte Entsorgung mit Nachweis"
    ]
  },
  {
    id: "transporte",
    title: "Transporte",
    shortDescription: "Schnelle und sichere Transporte von A nach B. Ob Einzelstücke, Möbel oder Kurierfahrten.",
    icon: Box,
    slug: "transporte",
    hasDetailPage: true,
    introText: "Sie haben etwas Sperriges gekauft oder müssen eilige Güter versenden? Unser flexibler Transportservice bringt Ihre Fracht sicher ans Ziel. Wir sind für Privatleute und Unternehmen gleichermaßen im Einsatz.",
    details: [
      "Möbeltaxi (z.B. für Einkäufe aus dem Baumarkt oder Möbelhaus)",
      "Kleintransporte und Beiladungen",
      "Kurierfahrten und Eiltransporte",
      "Verpackungsservice für empfindliche Güter",
      "Sicherer Transport mit Zurrgurten und Decken"
    ],
    benefits: [
      "Kurzfristige Terminvereinbarung möglich",
      "Sicherer und schonender Transport",
      "Erfahrene Fahrer mit regionalen Kenntnissen",
      "Faire Abrechnung nach Aufwand oder Festpreis"
    ]
  },
  {
    id: "montage",
    title: "Möbelmontage",
    shortDescription: "Fachmännische Demontage und sicherer Aufbau Ihrer Möbel durch erfahrenes Personal.",
    icon: Wrench,
    slug: "montage",
    hasDetailPage: true,
    introText: "Der Schrank passt nicht durchs Treppenhaus? Kein Problem. Unser erfahrenes Team übernimmt den fachmännischen Ab- und Aufbau Ihrer Möbel, egal ob beim Umzug oder bei Neuanschaffungen.",
    details: [
      "Demontage von Schränken, Betten und Regalen",
      "Fachgerechter und stabiler Wiederaufbau",
      "Montage von Neumöbeln (IKEA, Poco, XXXLutz, etc.)",
      "Küchendemontage und Aufbau (nach Absprache)",
      "Anbringen von Lampen, Bildern und Gardinenstangen"
    ],
    benefits: [
      "Handwerkliches Know-how und richtiges Werkzeug",
      "Schonende Behandlung Ihrer Einrichtung",
      "Zeitersparnis und weniger Stress für Sie",
      "Passgenaue Ausrichtung der Möbel"
    ]
  },
  {
    id: "haushaltsaufloesung",
    title: "Haushaltsauflösung",
    shortDescription: "Diskrete und komplette Auflösung von Haushalten inkl. fachgerechter Entsorgung.",
    icon: PackageOpen,
    slug: "haushaltsaufloesung",
    hasDetailPage: true,
    introText: "Eine Haushaltsauflösung ist oft mit vielen Emotionen und organisatorischem Aufwand verbunden. Wir übernehmen diese schwere Aufgabe für Sie – respektvoll, zügig und absolut zuverlässig.",
    details: [
      "Komplette Auflösung von Wohnungen und Häusern",
      "Sortierung und Trennung von Wertstoffen",
      "Anrechnung von verwertbaren Gegenständen möglich",
      "Entsorgung von Sperrmüll und Problemstoffen",
      "Endreinigung für die Wohnungsübergabe"
    ],
    benefits: [
      "Ein Ansprechpartner für alle Arbeiten",
      "Hohe Diskretion, besonders im Trauerfall",
      "Kostenlose Besichtigung zur Aufwandsabschätzung",
      "Garantierte besenreine Übergabe an den Vermieter/Käufer"
    ]
  },
  {
    id: "tragearbeiten",
    title: "Tragearbeiten & Sonstiges",
    shortDescription: "Hilfe beim Tragen schwerer Gegenstände im Haus oder bei internen Umräumarbeiten.",
    icon: ClipboardList,
    slug: "kontakt",
    hasDetailPage: false, // Links to contact
  }
];
