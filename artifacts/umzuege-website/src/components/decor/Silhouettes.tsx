import type { SVGProps } from 'react';

/**
 * Dekorative Silhouetten für Sektions-Hintergründe.
 * Alle Formen nutzen `currentColor`, die Farbe kommt also über text-* von außen.
 * Aussparungen (Radnaben, Fenster) sind als evenodd-Löcher gelöst, nicht als
 * hintergrundfarbene Flächen – so funktionieren sie über jedem Untergrund.
 *
 * Gliedmaßen sitzen in <g transform="rotate(winkel gelenkX gelenkY)">, wobei das
 * Gelenk immer der obere Mittelpunkt des Glieds ist. Sonst reißen Arme und Beine
 * vom Rumpf ab.
 */

/** Düsseldorfer Skyline: Lambertuskirche, Rheinkniebrücke, Rheinturm, Gehry-Bauten, Dreischeibenhaus. */
export function CitySkyline({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      {/* Brückenseile – als Striche, damit sie filigran bleiben */}
      <g stroke="currentColor" strokeWidth="1.6" fill="none" opacity="0.75">
        <path d="M301 80 L228 166M301 80 L258 166M301 80 L344 166M301 80 L374 166M301 80 L402 166" />
      </g>

      <g fill="currentColor">
        {/* Blockbebauung links */}
        <path d="M0 220v-36h34v12h24v-26h28v50z" />

        {/* Lambertuskirche mit verdrehter Turmspitze */}
        <path d="M96 220v-62h40v62z" />
        <path d="M104 158v-42h24v42z" />
        <path d="M104 116q8-32 18-52l2-4 2 4q6 28 4 52z" />
        <path d="M114.6 64h3v-10h-3zM110 58h12v3h-12z" />

        <path d="M146 220v-44h30v-14h30v58z" />

        {/* Rheinkniebrücke */}
        <path d="M210 168h220v8H210z" />
        <path d="M296 176V74h10v102z" />
        <path d="M291 104h20v6h-20z" />
        <path d="M226 176h14v44h-14zM390 176h14v44h-14z" />

        {/* Rheinturm */}
        <path d="M478 220v-14h44v14z" />
        <path d="M488 206l6-122h12l6 122z" />
        <rect x="485" y="68" width="30" height="17" rx="4" />
        <path d="M496 68l2-28h4l2 28z" />
        <rect x="498.4" y="4" width="3.2" height="36" />

        {/* Neuer Zollhof – die drei wellenförmigen Gehry-Bauten */}
        <path d="M546 220l2-96q8-12 20-6t18-4l4 106z" />
        <path d="M598 220l4-124q10-14 24-6t22-4l4 134z" />
        <path d="M660 220l2-88q10-12 22-4t18-6l4 98z" />

        <path d="M716 220v-54h30v-12h28v66z" />

        {/* Dreischeibenhaus */}
        <path d="M796 220V80h20v140zM820 220V72h20v148zM844 220V80h20v140z" />

        {/* Stadttor */}
        <path d="M892 220v-92h28v12h28v-12h28v92z" />

        {/* Baukran – bringt Bewegung in die Linie */}
        <path d="M1016 220V96h8v124z" />
        <path d="M980 90h110v8H980z" />
        <path d="M1016 96l4-18 4 18z" />
        <path d="M1043 98h3v26h-3z" />
        <rect x="1038" y="124" width="13" height="9" rx="2" />

        {/* Blockbebauung rechts, nach außen auslaufend */}
        <path d="M1100 220v-70h34v-12h34v22h28v60z" />
        <path d="M1200 220v-48h40v-14h36v22h24v40z" />
        <path d="M1306 220v-56h40v12h34v-20h36v64z" />
        <path d="M1416 220v-34h24v34z" />

        {/* Bäume am Ufer */}
        <path d="M437 220v-16h6v16zM426 206a14 14 0 1 1 28 0 14 14 0 0 1-28 0z" />
        <path d="M757 220v-13h5v13zM748 208a11 11 0 1 1 22 0 11 11 0 0 1-22 0z" />
        <path d="M1082 220v-15h6v15zM1072 206a13 13 0 1 1 26 0 13 13 0 0 1-26 0z" />
      </g>
    </svg>
  );
}

/** Zwei Helfer, die gemeinsam einen Karton tragen. */
export function MoversCarrying({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  const figure = (
    <>
      {/* Kopf und Rumpf */}
      <circle cx="56" cy="26" r="14" />
      <rect x="42" y="40" width="28" height="58" rx="13" />

      {/* Hinteres Bein – Drehpunkt ist die Hüfte */}
      <g transform="rotate(15 50 90)">
        <rect x="43.5" y="82" width="13" height="68" rx="6.5" />
      </g>
      <rect x="20" y="145" width="31" height="12" rx="6" />

      {/* Vorderes Bein */}
      <g transform="rotate(-17 62 90)">
        <rect x="55.5" y="82" width="13" height="68" rx="6.5" />
      </g>
      <rect x="64" y="145" width="31" height="12" rx="6" />

      {/* Arm zum Karton – die Hand kommt oberhalb der Kartonkante auf,
          sonst verschmelzen Arm und Deckel zu einem Balken */}
      <g transform="rotate(-16 63 56)">
        <rect x="58" y="50" width="55" height="12" rx="6" />
      </g>
    </>
  );

  return (
    <svg
      viewBox="0 0 360 170"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <g fill="currentColor">
        {figure}

        {/* Karton – Deckel und Korpus getrennt, die Fuge liest sich als Klebenaht */}
        <rect x="104" y="46" width="152" height="28" rx="6" />
        <rect x="104" y="78" width="152" height="40" rx="6" />

        {/* Zweiter Helfer, gespiegelt */}
        <g transform="translate(360 0) scale(-1 1)">{figure}</g>
      </g>
    </svg>
  );
}

/** Helfer mit Sackkarre und gestapelten Kartons. */
export function MoverHandTruck({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 240 180"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <g fill="currentColor">
        {/* Sackkarre samt Ladung – leicht nach hinten gekippt */}
        <g transform="rotate(8 106 140)">
          <rect x="32" y="32" width="74" height="46" rx="6" />
          <rect x="36" y="84" width="66" height="44" rx="6" />
          <rect x="99" y="24" width="12" height="118" rx="6" />
          <rect x="99" y="18" width="38" height="11" rx="5.5" />
          <rect x="26" y="132" width="86" height="11" rx="5" />
        </g>

        {/* Rad mit ausgesparter Nabe */}
        <path
          fillRule="evenodd"
          d="M104 134a18 18 0 1 1 0 36 18 18 0 0 1 0-36zm0 11a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"
        />

        {/* Helfer */}
        <circle cx="186" cy="30" r="14" />
        <rect x="172" y="44" width="28" height="56" rx="13" />

        <g transform="rotate(14 180 94)">
          <rect x="173.5" y="86" width="13" height="64" rx="6.5" />
        </g>
        <rect x="152" y="146" width="30" height="12" rx="6" />

        <g transform="rotate(-15 192 94)">
          <rect x="185.5" y="86" width="13" height="64" rx="6.5" />
        </g>
        <rect x="192" y="146" width="30" height="12" rx="6" />

        {/* Arm greift den Holm der Karre */}
        <g transform="rotate(50 175 56)">
          <rect x="141" y="50" width="34" height="12" rx="6" />
        </g>
      </g>
    </svg>
  );
}

/** Kastenwagen im Profil. */
export function MovingVan({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 300 150"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <g fill="currentColor">
        {/* Aufbau, Fahrerhaus und Fahrgestell in einer Form, Fenster als Loch */}
        <path
          fillRule="evenodd"
          d="M14 24h174a8 8 0 0 1 8 8v22h34l34 36v26a8 8 0 0 1-8 8H14a8 8 0 0 1-8-8V32a8 8 0 0 1 8-8zm182 40v24h44l-22-24h-22z"
        />
        {/* Räder mit ausgesparter Nabe */}
        <path
          fillRule="evenodd"
          d="M66 106a19 19 0 1 1 0 38 19 19 0 0 1 0-38zm0 12a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"
        />
        <path
          fillRule="evenodd"
          d="M230 106a19 19 0 1 1 0 38 19 19 0 0 1 0-38zm0 12a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"
        />
      </g>
    </svg>
  );
}

/* ───────────────────────────────────────────────────────────
   Szenen für die Leistungsseiten.

   Bewusst ohne Menschen: die Figuren bleiben der Startseite
   vorbehalten, damit sich zwischen den Seiten nichts doppelt.
   Jede Szene nutzt dasselbe Raster wie die Skyline
   (viewBox 1440x220, Standlinie bei y=220), damit sie im
   Seitenkopf identisch angeschnitten wird. Alles Wesentliche
   liegt unterhalb von y≈60, weil der obere Rand wegfällt.
   ─────────────────────────────────────────────────────────── */

/** Übersichtsseite: Verpackungsmaterial und Umzugsgut. */
export function PackingScene({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <g fill="currentColor">
        {/* Kartonstapel */}
        <rect x="96" y="148" width="124" height="72" rx="6" />
        <rect x="112" y="94" width="92" height="48" rx="6" />
        <rect x="128" y="58" width="60" height="30" rx="5" />

        {/* Aufgerollter Teppich, angelehnt */}
        <g transform="rotate(10 300 220)">
          <rect x="286" y="48" width="30" height="172" rx="15" />
        </g>

        {/* Kleiderbox mit Bügelstange */}
        <rect x="356" y="72" width="104" height="148" rx="7" />
        <rect x="374" y="56" width="68" height="10" rx="5" />

        {/* Zimmerpflanze */}
        <path d="M500 220l12-48h60l12 48z" />
        <rect x="538" y="116" width="8" height="60" />
        <path d="M542 114c-32 0-50-20-50-42 28 0 50 18 50 42zM542 114c32 0 50-20 50-42-28 0-50 18-50 42z" />

        {/* Offener Karton mit aufgestellten Laschen */}
        <rect x="640" y="118" width="168" height="102" rx="7" />
        <g transform="rotate(35 640 118)">
          <rect x="578" y="112" width="64" height="13" rx="6.5" />
        </g>
        <g transform="rotate(-35 808 118)">
          <rect x="806" y="112" width="64" height="13" rx="6.5" />
        </g>

        {/* Klebebandrolle */}
        <path
          fillRule="evenodd"
          d="M886 152a34 34 0 1 1 0 68 34 34 0 0 1 0-68zm0 22a12 12 0 1 0 0 24 12 12 0 0 0 0-24z"
        />

        {/* Stuhl */}
        <rect x="968" y="148" width="96" height="15" rx="5" />
        <rect x="1049" y="64" width="15" height="90" rx="6" />
        <rect x="976" y="161" width="12" height="59" rx="5" />
        <rect x="1046" y="161" width="12" height="59" rx="5" />

        {/* Weitere Kartons */}
        <rect x="1120" y="140" width="116" height="80" rx="6" />
        <rect x="1138" y="90" width="82" height="44" rx="6" />
        <rect x="1280" y="158" width="132" height="62" rx="6" />
      </g>
    </svg>
  );
}

/** Umzüge: Treppenhaus, Sofa, Lampe, Kartons. */
export function StairsFurniture({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <g fill="currentColor">
        {/* Treppenlauf */}
        <path d="M40 220v-28h96v-28h96v-28h96v-28h96v-28h96v140z" />

        {/* Gerahmtes Bild, an die Treppe gelehnt */}
        <g transform="rotate(11 560 220)">
          <path
            fillRule="evenodd"
            d="M534 92h72v128h-72zm14 14v100h44V106h-44z"
          />
        </g>

        {/* Sofa */}
        <rect x="668" y="82" width="300" height="42" rx="14" />
        <rect x="668" y="120" width="300" height="54" rx="12" />
        <rect x="654" y="96" width="30" height="78" rx="14" />
        <rect x="952" y="96" width="30" height="78" rx="14" />
        <rect x="678" y="174" width="16" height="28" rx="5" />
        <rect x="942" y="174" width="16" height="28" rx="5" />

        {/* Stehlampe */}
        <path d="M1044 220l10-14h56l10 14z" />
        <rect x="1078" y="88" width="8" height="120" />
        <path d="M1040 88l16-46h72l16 46z" />

        {/* Kartons */}
        <rect x="1190" y="144" width="112" height="76" rx="6" />
        <rect x="1206" y="96" width="80" height="42" rx="6" />
        <rect x="1330" y="162" width="96" height="58" rx="6" />
      </g>
    </svg>
  );
}

/** Entrümpelung: Absetzmulde mit Sperrmüll, Säcke, Besen. */
export function SkipContainer({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <g fill="currentColor">
        {/* Sperrmüll, der oben herausragt – zuerst, damit die Mulde davor liegt */}
        <g transform="rotate(-22 620 112)">
          <rect x="606" y="18" width="26" height="100" rx="5" />
        </g>
        <g transform="rotate(18 722 112)">
          <rect x="710" y="32" width="22" height="88" rx="5" />
        </g>
        <g transform="rotate(-9 846 104)">
          <rect x="762" y="44" width="170" height="20" rx="7" />
        </g>
        {/* Ausrangierter Stuhl */}
        <g transform="rotate(14 976 100)">
          <rect x="918" y="60" width="110" height="16" rx="5" />
          <rect x="1014" y="0" width="16" height="68" rx="6" />
          <rect x="926" y="74" width="13" height="40" rx="5" />
        </g>

        {/* Absetzmulde – oben weiter als unten */}
        <path d="M510 220L480 100h580l-30 120z" />
        <rect x="470" y="92" width="600" height="16" rx="6" />
        {/* Aufnahmehaken */}
        <rect x="588" y="108" width="14" height="62" rx="5" />
        <rect x="938" y="108" width="14" height="62" rx="5" />

        {/* Altreifen, an die Mulde gelehnt */}
        <path
          fillRule="evenodd"
          d="M1162 134a42 42 0 1 1 0 84 42 42 0 0 1 0-84zm0 28a14 14 0 1 0 0 28 14 14 0 0 0 0-28z"
        />

        {/* Müllsäcke */}
        <path d="M180 220c0-46 22-66 40-66s40 20 40 66zM212 156l-10-16h20z" />
        <path d="M262 220c0-36 18-52 32-52s32 16 32 52zM288 170l-8-13h16z" />

        {/* Besen, angelehnt */}
        <g transform="rotate(13 1270 220)">
          <rect x="1262" y="44" width="13" height="148" rx="6.5" />
          <rect x="1240" y="186" width="58" height="32" rx="5" />
        </g>
      </g>
    </svg>
  );
}

/** Transporte: Palette mit gesicherter Ladung, Hubwagen, Paketen und Route. */
export function PalletLoad({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      {/* Route von A nach B, tief gelegt damit sie im Anschnitt bleibt */}
      <g stroke="currentColor" fill="none" strokeWidth="7" strokeLinecap="round" strokeDasharray="20 20" opacity="0.8">
        <path d="M120 96C260 44 380 128 520 96" />
      </g>
      <g fill="currentColor">
        {/* Start- und Zielmarker */}
        <path
          fillRule="evenodd"
          d="M120 96c-18-26-28-40-28-54a28 28 0 1 1 56 0c0 14-10 28-28 54zm0-68a12 12 0 1 0 0 24 12 12 0 0 0 0-24z"
        />
        <path
          fillRule="evenodd"
          d="M520 96c-18-26-28-40-28-54a28 28 0 1 1 56 0c0 14-10 28-28 54zm0-68a12 12 0 1 0 0 24 12 12 0 0 0 0-24z"
        />

        {/* Palette mit Kisten und Spanngurten */}
        <rect x="120" y="128" width="260" height="46" rx="5" />
        <rect x="132" y="176" width="236" height="14" rx="4" />
        <rect x="136" y="190" width="26" height="18" rx="3" />
        <rect x="237" y="190" width="26" height="18" rx="3" />
        <rect x="338" y="190" width="26" height="18" rx="3" />
        <rect x="120" y="208" width="260" height="12" rx="4" />
        {/* Zurrgurte */}
        <rect x="176" y="120" width="12" height="62" rx="3" />
        <rect x="312" y="120" width="12" height="62" rx="3" />

        {/* Große Transportkiste */}
        <rect x="444" y="112" width="196" height="108" rx="7" />
        <rect x="444" y="150" width="196" height="13" rx="4" />

        {/* Hubwagen */}
        <rect x="700" y="188" width="250" height="14" rx="5" />
        <rect x="700" y="150" width="14" height="42" rx="5" />
        <g transform="rotate(-14 946 188)">
          <rect x="940" y="76" width="14" height="116" rx="7" />
          <rect x="918" y="68" width="58" height="13" rx="6.5" />
        </g>
        <path
          fillRule="evenodd"
          d="M714 190a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 11a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
        />
        <path
          fillRule="evenodd"
          d="M930 188a16 16 0 1 1 0 32 16 16 0 0 1 0-32zm0 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
        />
        {/* Ladung auf dem Hubwagen */}
        <rect x="730" y="106" width="180" height="80" rx="6" />

        {/* Pakete unterschiedlicher Größe */}
        <rect x="1012" y="146" width="120" height="74" rx="6" />
        <rect x="1062" y="146" width="14" height="74" rx="3" />
        <rect x="1160" y="170" width="90" height="50" rx="6" />
        {/* Langes Bündel */}
        <g transform="rotate(-6 1350 200)">
          <rect x="1272" y="180" width="168" height="26" rx="12" />
          <rect x="1318" y="174" width="12" height="38" rx="4" />
          <rect x="1390" y="174" width="12" height="38" rx="4" />
        </g>
      </g>
    </svg>
  );
}

/** Möbelmontage: halb aufgebautes Regal, Korpus, Werkzeug. */
export function AssemblyScene({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <g fill="currentColor">
        {/* Halb aufgebautes Regal – oberes Fach fehlt noch */}
        <rect x="120" y="58" width="18" height="162" rx="4" />
        <rect x="292" y="58" width="18" height="162" rx="4" />
        <rect x="120" y="202" width="190" height="18" rx="4" />
        <rect x="120" y="138" width="190" height="16" rx="4" />

        {/* Das noch lose Fachbrett, angelehnt */}
        <g transform="rotate(-24 370 220)">
          <rect x="352" y="76" width="20" height="146" rx="5" />
        </g>

        {/* Schrankkorpus, liegend auf dem Rücken */}
        <path
          fillRule="evenodd"
          d="M444 96h300v124H444zm20 20v84h260v-84H464z"
        />

        {/* Werkzeugkiste */}
        <rect x="800" y="150" width="170" height="70" rx="8" />
        <rect x="800" y="150" width="170" height="16" rx="6" />
        <path d="M858 148v-18h54v18h-18v-8h-18v8z" />

        {/* Akkuschrauber */}
        <g transform="rotate(-16 1080 150)">
          <rect x="1012" y="120" width="120" height="46" rx="16" />
          <rect x="1130" y="134" width="42" height="18" rx="6" />
          <rect x="1044" y="160" width="46" height="56" rx="12" />
          <rect x="1032" y="206" width="70" height="16" rx="6" />
        </g>

        {/* Inbusschlüssel */}
        <path d="M1212 220v-14h78v14zM1276 206v-70h14v70z" />

        {/* Schrauben und Dübel */}
        <rect x="1322" y="206" width="58" height="12" rx="6" />
        <rect x="1322" y="200" width="14" height="24" rx="4" />
        <rect x="1340" y="180" width="52" height="11" rx="5.5" />
        <rect x="1340" y="174" width="12" height="23" rx="4" />
      </g>
    </svg>
  );
}

/** Haushaltsauflösung: geräumter Raum mit letzten Gegenständen. */
export function EmptyRoom({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <g fill="currentColor">
        {/* Fenster mit Sprossenkreuz */}
        <path
          fillRule="evenodd"
          d="M140 34h216v168H140zm18 18v58h90V52h-90zm108 0v58h72V52h-72zm-108 76v56h90v-56h-90zm108 0v56h72v-56h-72z"
        />
        <rect x="124" y="202" width="248" height="14" rx="4" />

        {/* Nackte Glühbirne an der Leitung */}
        <rect x="600" y="0" width="7" height="72" />
        <path d="M603 72a30 30 0 0 1 18 54v14h-36v-14a30 30 0 0 1 18-54z" />
        <rect x="585" y="142" width="36" height="10" rx="4" />

        {/* Zurückgelassener Stuhl */}
        <rect x="700" y="140" width="104" height="16" rx="5" />
        <rect x="788" y="48" width="16" height="98" rx="6" />
        <rect x="708" y="154" width="13" height="66" rx="5" />
        <rect x="788" y="154" width="13" height="66" rx="5" />

        {/* Besen, an die Wand gelehnt */}
        <g transform="rotate(-12 900 220)">
          <rect x="893" y="46" width="13" height="148" rx="6.5" />
          <rect x="871" y="188" width="58" height="32" rx="5" />
        </g>

        {/* Verschlossene, beschriftete Kartons */}
        <rect x="1000" y="130" width="140" height="90" rx="7" />
        <rect x="1062" y="130" width="15" height="90" rx="4" />
        <rect x="1020" y="160" width="52" height="11" rx="5" />
        <rect x="1160" y="158" width="110" height="62" rx="6" />
        <rect x="1207" y="158" width="15" height="62" rx="4" />

        {/* Türrahmen am rechten Rand */}
        <path
          fillRule="evenodd"
          d="M1308 26h132v194h-132zm20 20v154h92V46h-92z"
        />
      </g>
    </svg>
  );
}

/* ───────────────────────────────────────────────────────────
   Szenen für die übrigen Seiten. Gleiches Raster wie oben.
   ─────────────────────────────────────────────────────────── */

/** Über uns: Betriebshof mit Rolltor, Regal, Paletten, Leiter. */
export function DepotScene({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false" className={className} {...props}>
      <g fill="currentColor">
        {/* Rolltor mit Lamellen */}
        <path
          fillRule="evenodd"
          d="M70 36h300v184H70zm22 24v20h256V60H92zm0 38v20h256V98H92zm0 38v20h256v-20H92zm0 38v20h256v-20H92z"
        />

        {/* Regal mit Kisten */}
        <rect x="452" y="52" width="15" height="168" rx="4" />
        <rect x="700" y="52" width="15" height="168" rx="4" />
        <rect x="452" y="134" width="263" height="14" rx="4" />
        <rect x="452" y="206" width="263" height="14" rx="4" />
        <rect x="480" y="84" width="82" height="50" rx="5" />
        <rect x="576" y="70" width="102" height="64" rx="5" />
        <rect x="480" y="152" width="112" height="54" rx="5" />
        <rect x="606" y="164" width="74" height="42" rx="5" />

        {/* Palettenstapel */}
        <rect x="780" y="196" width="184" height="13" rx="4" />
        <rect x="788" y="209" width="26" height="11" rx="2" />
        <rect x="860" y="209" width="26" height="11" rx="2" />
        <rect x="932" y="209" width="26" height="11" rx="2" />
        <rect x="780" y="168" width="184" height="13" rx="4" />
        <rect x="788" y="181" width="26" height="11" rx="2" />
        <rect x="860" y="181" width="26" height="11" rx="2" />
        <rect x="932" y="181" width="26" height="11" rx="2" />
        <rect x="780" y="140" width="184" height="13" rx="4" />
        <rect x="788" y="153" width="26" height="11" rx="2" />
        <rect x="860" y="153" width="26" height="11" rx="2" />
        <rect x="932" y="153" width="26" height="11" rx="2" />

        {/* Anlehnleiter */}
        <g transform="rotate(13 1070 220)">
          <rect x="1038" y="26" width="12" height="194" rx="5" />
          <rect x="1090" y="26" width="12" height="194" rx="5" />
          <rect x="1038" y="62" width="64" height="10" rx="4" />
          <rect x="1038" y="104" width="64" height="10" rx="4" />
          <rect x="1038" y="146" width="64" height="10" rx="4" />
          <rect x="1038" y="188" width="64" height="10" rx="4" />
        </g>

        {/* Gerollte Umzugsdecken */}
        <rect x="1188" y="148" width="130" height="34" rx="17" />
        <rect x="1204" y="186" width="130" height="34" rx="17" />

        {/* Eimer */}
        <path d="M1368 220l10-62h62l10 62z" />
      </g>
    </svg>
  );
}

/** FAQ: Schreibtisch zum Klären – Klemmbrett, Kalender, Ordner, Rechner, Tasse. */
export function ConsultationDesk({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false" className={className} {...props}>
      <g fill="currentColor">
        {/* Klemmbrett mit Checkliste */}
        <path fillRule="evenodd" d="M120 40h180v180H120zm20 20v140h140V60H140z" />
        <rect x="180" y="24" width="60" height="24" rx="7" />
        <rect x="156" y="82" width="90" height="11" rx="5.5" />
        <rect x="156" y="114" width="108" height="11" rx="5.5" />
        <rect x="156" y="146" width="72" height="11" rx="5.5" />

        {/* Kalenderblatt mit markiertem Tag */}
        <path fillRule="evenodd" d="M360 46h180v174H360zm20 54v100h140V100H380z" />
        <rect x="392" y="26" width="13" height="34" rx="6.5" />
        <rect x="496" y="26" width="13" height="34" rx="6.5" />
        <rect x="432" y="126" width="36" height="32" rx="5" />

        {/* Ordnerstapel */}
        <rect x="600" y="112" width="196" height="34" rx="5" />
        <rect x="646" y="112" width="16" height="34" />
        <rect x="592" y="150" width="196" height="34" rx="5" />
        <rect x="700" y="150" width="16" height="34" />
        <rect x="604" y="188" width="196" height="32" rx="5" />
        <rect x="660" y="188" width="16" height="32" />

        {/* Taschenrechner */}
        <path
          fillRule="evenodd"
          d="M872 104h112a12 12 0 0 1 12 12v92a12 12 0 0 1-12 12H872a12 12 0 0 1-12-12v-92a12 12 0 0 1 12-12zm10 18v26h94v-26h-94zm2 44v14h20v-14h-20zm30 0v14h20v-14h-20zm30 0v14h20v-14h-20zm-60 26v14h20v-14h-20zm30 0v14h20v-14h-20zm30 0v14h20v-14h-20z"
        />

        {/* Kaffeetasse mit Untertasse */}
        <path d="M1078 140h96l-11 70h-74z" />
        <path
          fillRule="evenodd"
          d="M1176 154a28 28 0 0 1 0 42v-14a14 14 0 0 0 0-14z"
        />
        <rect x="1058" y="210" width="136" height="10" rx="5" />

        {/* Kugelschreiber */}
        <g transform="rotate(-26 1310 150)">
          <rect x="1298" y="66" width="22" height="122" rx="6" />
          <rect x="1316" y="80" width="8" height="40" rx="4" />
          <path d="M1298 188l11 26 11-26z" />
        </g>
      </g>
    </svg>
  );
}

/** Kontakt: Briefkasten, Umschlag, Telefonhörer, Wanduhr, Standortnadel. */
export function ContactScene({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false" className={className} {...props}>
      <g fill="currentColor">
        {/* Briefkasten auf Pfosten */}
        <rect x="146" y="144" width="22" height="76" rx="4" />
        <path
          fillRule="evenodd"
          d="M110 56h94a16 16 0 0 1 16 16v78H94V72a16 16 0 0 1 16-16zm6 40v16h82V96h-82z"
        />
        <rect x="222" y="60" width="11" height="48" rx="4" />
        <rect x="233" y="60" width="34" height="24" rx="4" />

        {/* Umschlag */}
        <path
          fillRule="evenodd"
          d="M348 68h214a10 10 0 0 1 10 10v132a10 10 0 0 1-10 10H348a10 10 0 0 1-10-10V78a10 10 0 0 1 10-10zm8 24v8l99 70 99-70v-8H356z"
        />

        {/* Telefonhörer */}
        <g transform="rotate(-28 784 190)">
          <path d="M692 190a92 92 0 0 1 184 0h-38a54 54 0 0 0-108 0z" />
          <rect x="690" y="174" width="42" height="32" rx="13" />
          <rect x="836" y="174" width="42" height="32" rx="13" />
        </g>
        <g stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.75">
          <path d="M700 186q22-22 44 0t44 0t44 0" />
        </g>

        {/* Wanduhr */}
        <path
          fillRule="evenodd"
          d="M1030 88a68 68 0 1 1 0 136 68 68 0 0 1 0-136zm0 20a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
        />
        <rect x="1026" y="118" width="9" height="42" rx="4.5" />
        <rect x="1030" y="151" width="36" height="9" rx="4.5" />

        {/* Standortnadel */}
        <path
          fillRule="evenodd"
          d="M1262 220c-30-46-46-68-46-92a46 46 0 1 1 92 0c0 24-16 46-46 92zm0-114a20 20 0 1 0 0 40 20 20 0 0 0 0-40z"
        />
      </g>
    </svg>
  );
}

/** 404: leerer Karton, verstreuter Inhalt, Wegweiser in alle Richtungen. */
export function LostBox({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false" className={className} {...props}>
      <g fill="currentColor">
        {/* Offener, leerer Karton – aufrecht, damit er als Kiste lesbar bleibt */}
        <rect x="280" y="118" width="200" height="102" rx="8" />
        <rect x="280" y="118" width="200" height="15" rx="7" />
        <g transform="rotate(35 280 118)">
          <rect x="218" y="112" width="64" height="14" rx="7" />
        </g>
        <g transform="rotate(-35 480 118)">
          <rect x="478" y="112" width="64" height="14" rx="7" />
        </g>

        {/* Herausgefallener Inhalt, über den Boden verstreut */}
        <rect x="540" y="164" width="86" height="56" rx="6" />
        <g transform="rotate(-14 690 200)">
          <rect x="646" y="182" width="88" height="38" rx="6" />
        </g>
        <path fillRule="evenodd" d="M772 176a26 26 0 1 1 0 52 26 26 0 0 1 0-52zm0 16a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />

        {/* Wegweiser, der in alle Richtungen zeigt */}
        <rect x="924" y="26" width="21" height="194" rx="5" />
        <path d="M945 48h150l32 27-32 27H945z" />
        <path d="M924 116H774l-32 27 32 27h150z" />
        <path d="M945 184h118l30 18-30 18H945z" />

        {/* Ein Karton, der schon am Ziel steht */}
        <rect x="1240" y="140" width="130" height="80" rx="6" />
        <rect x="1297" y="140" width="16" height="80" rx="4" />
      </g>
    </svg>
  );
}

/** Impressum: Firmenschild, Klingelplatte, Briefschlitz, Tür. */
export function NamePlate({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false" className={className} {...props}>
      <g fill="currentColor">
        {/* Firmenschild mit Schrauben */}
        <path fillRule="evenodd" d="M140 62h320v116H140zm22 22v72h276V84H162z" />
        <rect x="190" y="100" width="176" height="14" rx="7" />
        <rect x="190" y="128" width="112" height="12" rx="6" />
        <circle cx="158" cy="80" r="7" />
        <circle cx="442" cy="80" r="7" />
        <circle cx="158" cy="160" r="7" />
        <circle cx="442" cy="160" r="7" />

        {/* Klingelplatte */}
        <path
          fillRule="evenodd"
          d="M552 56h148a12 12 0 0 1 12 12v140a12 12 0 0 1-12 12H552a12 12 0 0 1-12-12V68a12 12 0 0 1 12-12zm18 30v22h76V86h-76zm92 0v22h22V86h-22zm-92 42v22h76v-22h-76zm92 0v22h22v-22h-22zm-92 42v22h76v-22h-76zm92 0v22h22v-22h-22z"
        />

        {/* Briefschlitz */}
        <path fillRule="evenodd" d="M786 112h190v46H786zm20 16v14h150v-14H806z" />

        {/* Hauseingang mit Tür und Stufe */}
        <path fillRule="evenodd" d="M1064 24h192v196h-192zm24 24v172h144V48h-144z" />
        <circle cx="1210" cy="134" r="10" />
        <rect x="1040" y="206" width="240" height="14" rx="4" />
      </g>
    </svg>
  );
}

/** Datenschutz: Aktenschrank, Vorhängeschloss, Ordner, Schlüssel. */
export function LockedFiles({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false" className={className} {...props}>
      <g fill="currentColor">
        {/* Aktenschrank mit drei Schubladen */}
        <path
          fillRule="evenodd"
          d="M150 34h270v186H150zm20 20v44h230V54H170zm0 60v44h230v-44H170zm0 60v42h230v-42H170z"
        />
        <rect x="252" y="68" width="66" height="12" rx="6" />
        <rect x="252" y="128" width="66" height="12" rx="6" />
        <rect x="252" y="186" width="66" height="12" rx="6" />

        {/* Vorhängeschloss */}
        <path d="M562 116V96a46 46 0 1 1 92 0v20h-26V96a20 20 0 1 0-40 0v20z" />
        <path
          fillRule="evenodd"
          d="M548 116h120a14 14 0 0 1 14 14v76a14 14 0 0 1-14 14H548a14 14 0 0 1-14-14v-76a14 14 0 0 1 14-14zm60 30a15 15 0 0 0-8 28v14h16v-14a15 15 0 0 0-8-28z"
        />

        {/* Aufrechte Ordner */}
        <rect x="780" y="66" width="56" height="154" rx="5" />
        <rect x="780" y="104" width="56" height="26" />
        <rect x="844" y="52" width="56" height="168" rx="5" />
        <rect x="844" y="94" width="56" height="26" />
        <rect x="908" y="74" width="56" height="146" rx="5" />
        <rect x="908" y="112" width="56" height="26" />

        {/* Schlüssel */}
        <path
          fillRule="evenodd"
          d="M1120 108a44 44 0 1 1 0 88 44 44 0 0 1 0-88zm0 26a18 18 0 1 0 0 36 18 18 0 0 0 0-36z"
        />
        <rect x="1158" y="138" width="196" height="24" rx="8" />
        <rect x="1288" y="162" width="18" height="30" rx="4" />
        <rect x="1324" y="162" width="18" height="22" rx="4" />
      </g>
    </svg>
  );
}

/** AGB: Vertragsblatt mit Unterschrift, Klemmbrett, Stempel, Füller, Paragraf. */
export function ContractPapers({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false" className={className} {...props}>
      <g fill="currentColor">
        {/* Vertragsblatt mit Textzeilen und Unterschriftslinie */}
        <path fillRule="evenodd" d="M180 26h280v194H180zm22 22v150h236V48H202z" />
        <rect x="226" y="72" width="188" height="12" rx="6" />
        <rect x="226" y="100" width="160" height="12" rx="6" />
        <rect x="226" y="128" width="196" height="12" rx="6" />
        <rect x="226" y="178" width="126" height="8" rx="4" />
      </g>
      {/* Unterschrift */}
      <g stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round">
        <path d="M232 172q16-26 30-6t26-10 24 8 28-14" />
      </g>
      <g fill="currentColor">
        {/* Klemmbrett, gefüllt – als Kontrast zum ausgelinierten Blatt */}
        <path
          fillRule="evenodd"
          d="M588 48h184a10 10 0 0 1 10 10v152a10 10 0 0 1-10 10H588a10 10 0 0 1-10-10V58a10 10 0 0 1 10-10zm22 44v14h140V92H610zm0 36v14h110v-14H610zm0 36v14h140v-14H610z"
        />
        <rect x="648" y="32" width="64" height="24" rx="7" />

        {/* Stempel mit Kissen */}
        <rect x="880" y="54" width="72" height="52" rx="14" />
        <rect x="898" y="106" width="36" height="36" />
        <rect x="856" y="142" width="120" height="36" rx="9" />
        <rect x="846" y="188" width="140" height="32" rx="9" />

        {/* Füller */}
        <g transform="rotate(-30 1124 136)">
          <rect x="1094" y="48" width="30" height="140" rx="11" />
          <rect x="1118" y="64" width="9" height="46" rx="4.5" />
          <path d="M1094 188l15 32 15-32z" />
        </g>
      </g>
      {/* Paragrafenzeichen */}
      <g stroke="currentColor" strokeWidth="12" fill="none" strokeLinecap="round">
        <path d="M1332 70c-8-9-24-11-35-4-15 9-15 29 2 38l35 18c17 9 17 29 2 38-11 7-27 5-35-4" />
        <path d="M1332 116c-8-9-24-11-35-4-15 9-15 29 2 38l35 18c17 9 17 29 2 38-11 7-27 5-35-4" />
      </g>
    </svg>
  );
}
