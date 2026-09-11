import type { ComponentType, ReactNode, SVGProps } from 'react';
import { motion } from 'framer-motion';
import { CitySkyline } from '@/components/decor/Silhouettes';

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Optionales Element über der Überschrift, z. B. das Icon der Leistung */
  aside?: ReactNode;
  /**
   * Silhouette am unteren Rand. Ohne Angabe die Skyline als Seiten-Signatur;
   * die Leistungsseiten geben hier jeweils ihre eigene Szene mit, `null`
   * unterdrückt die Dekoration ganz.
   */
  decor?: ComponentType<SVGProps<SVGSVGElement>> | null;
};

/**
 * Einheitlicher heller Seitenkopf für alle Unterseiten – mittig gesetzt wie die
 * Startseite, mit Farbnebel und einer Silhouette als Horizontlinie am unteren Rand.
 */
export function PageHero({ eyebrow, title, lead, aside, decor }: PageHeroProps) {
  const Decor = decor === undefined ? CitySkyline : decor;

  return (
    <section className="relative overflow-hidden bg-background bg-mesh grain border-b border-card-border">
      {Decor && (
        <Decor className="pointer-events-none absolute inset-x-0 bottom-0 h-[110px] md:h-[150px] text-tint-sky/20 mask-fade-top" />
      )}

      <div className="shell relative z-10 pt-14 pb-28 md:pt-20 md:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {aside && <div className="flex justify-center mb-7">{aside}</div>}

          <span className="eyebrow mb-5 justify-center">{eyebrow}</span>

          <h1 className="mx-auto max-w-3xl text-[2.3rem] leading-[1.1] sm:text-5xl lg:text-[3.4rem] font-bold text-ink mb-5">
            {title}
          </h1>

          {lead && <p className="lead mx-auto max-w-2xl">{lead}</p>}
        </motion.div>
      </div>
    </section>
  );
}
