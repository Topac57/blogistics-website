import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, Loader2, AlertCircle, Phone } from 'lucide-react';
import { company } from '@/data/company';

const formSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren vollständigen Namen ein."),
  phone: z.string().min(6, "Bitte geben Sie eine gültige Telefonnummer ein."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  service: z.string().min(1, "Bitte wählen Sie eine Leistung aus."),
  /* Optional – Wunschtermin steht am Anfang oft noch gar nicht fest */
  date: z.string().optional(),
  fromPlace: z.string().optional(),
  toPlace: z.string().optional(),
  message: z.string().min(10, "Ein paar Sätze mehr helfen uns bei der Einschätzung."),
  privacy: z.boolean().refine((val) => val === true, "Bitte stimmen Sie der Datenschutzerklärung zu.")
});

type FormValues = z.infer<typeof formSchema>;

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

const fieldBase =
  "w-full px-4 py-3 rounded-xl bg-surface border text-ink placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 transition-all";
const fieldOk = "border-card-border focus:border-primary focus:ring-primary/20";
const fieldErr = "border-destructive focus:border-destructive focus:ring-destructive/15";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "all"
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    if (!FORMSPREE_ENDPOINT) {
      setIsSubmitting(false);
      setSubmitError("Der Versanddienst ist noch nicht eingerichtet. Bitte kontaktieren Sie uns direkt per Telefon oder E-Mail.");
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          telefon: data.phone,
          email: data.email,
          leistung: data.service,
          wunschtermin: data.date || "flexibel / noch offen",
          von: data.fromPlace || "-",
          nach: data.toPlace || "-",
          nachricht: data.message,
          _subject: `Neue Anfrage von ${data.name} – ${data.service}`
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        const json = await response.json().catch(() => ({}));
        const msg = (json as { error?: string }).error || "Unbekannter Fehler";
        setSubmitError(`Übermittlung fehlgeschlagen: ${msg}. Bitte versuchen Sie es erneut oder rufen Sie uns an.`);
      }
    } catch {
      setSubmitError("Netzwerkfehler. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="card-soft p-10 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-primary-soft border border-primary-line text-amber-ink rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-3">Ihre Anfrage ist angekommen</h3>
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-7">
          Wir sehen sie uns an und melden uns in der Regel am selben Werktag mit einem
          Terminvorschlag. Falls es eilig ist, rufen Sie gern direkt an.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="btn-primary">
            <Phone className="w-4 h-4" />
            {company.phoneDisplay}
          </a>
          <button onClick={() => setIsSuccess(false)} className="btn-outline">
            Weitere Anfrage stellen
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 card-soft p-6 md:p-9 shadow-[0_30px_70px_-50px_rgba(60,45,10,0.6)]"
    >
      <div className="mb-2">
        <h2 className="text-xl font-bold mb-1.5">Anfrage stellen</h2>
        <p className="text-sm text-muted-foreground">
          Kostenlos und unverbindlich. Dauert keine zwei Minuten.
        </p>
      </div>

      {submitError && (
        <div className="flex items-start gap-3 bg-destructive/8 border border-destructive/30 text-destructive px-4 py-3 rounded-xl text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-ink-soft">Name *</label>
          <input
            id="name"
            {...register("name")}
            className={`${fieldBase} ${errors.name ? fieldErr : fieldOk}`}
            placeholder="Max Mustermann"
          />
          {errors.name && <p className="text-destructive text-xs font-medium">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-semibold text-ink-soft">Telefonnummer *</label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={`${fieldBase} ${errors.phone ? fieldErr : fieldOk}`}
            placeholder="0151 1234567"
          />
          {errors.phone && <p className="text-destructive text-xs font-medium">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-ink-soft">E-Mail *</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`${fieldBase} ${errors.email ? fieldErr : fieldOk}`}
            placeholder="mail@beispiel.de"
          />
          {errors.email && <p className="text-destructive text-xs font-medium">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-semibold text-ink-soft">Gewünschte Leistung *</label>
          <select
            id="service"
            {...register("service")}
            className={`${fieldBase} ${errors.service ? fieldErr : fieldOk} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23785f2a%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_0.9rem_center] bg-no-repeat pr-11`}
          >
            <option value="">-- Bitte wählen --</option>
            <option value="Umzug">Umzug</option>
            <option value="Entrümpelung">Entrümpelung</option>
            <option value="Transport">Transport</option>
            <option value="Möbelmontage">Möbelmontage</option>
            <option value="Haushaltsauflösung">Haushaltsauflösung</option>
            <option value="Tragearbeiten">Tragearbeiten</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
          {errors.service && <p className="text-destructive text-xs font-medium">{errors.service.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="fromPlace" className="text-sm font-semibold text-ink-soft">
            Von <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="fromPlace"
            {...register("fromPlace")}
            className={`${fieldBase} ${fieldOk}`}
            placeholder="PLZ / Ort, z. B. 40225 Düsseldorf"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="toPlace" className="text-sm font-semibold text-ink-soft">
            Nach <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="toPlace"
            {...register("toPlace")}
            className={`${fieldBase} ${fieldOk}`}
            placeholder="PLZ / Ort oder „bleibt gleich“"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="date" className="text-sm font-semibold text-ink-soft">
          Wunschtermin <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input
          id="date"
          type="date"
          {...register("date")}
          className={`${fieldBase} ${fieldOk}`}
        />
        <p className="text-xs text-muted-foreground">
          Noch nichts fest? Feld einfach frei lassen – wir schlagen Ihnen Termine vor.
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-ink-soft">Ihre Nachricht *</label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className={`${fieldBase} ${errors.message ? fieldErr : fieldOk} resize-y`}
          placeholder="Hilfreich für uns: Zimmeranzahl, Etage, Aufzug vorhanden? Gibt es sperrige Stücke wie Klavier oder Tresor? Soll auch Keller oder Dachboden mit?"
        />
        {errors.message && <p className="text-destructive text-xs font-medium">{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-3 pt-1">
        <input
          id="privacy"
          type="checkbox"
          {...register("privacy")}
          className="w-5 h-5 mt-0.5 rounded border-input accent-[hsl(45_100%_51%)] shrink-0"
        />
        <div className="space-y-1">
          <label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
            Ich habe die <a href="/datenschutz" className="text-amber-ink hover:underline font-medium" target="_blank">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. *
          </label>
          {errors.privacy && <p className="text-destructive text-xs font-medium">{errors.privacy.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !isValid}
        className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-base transition-all duration-300 ${
          isSubmitting || !isValid
            ? 'bg-surface-strong text-muted-foreground cursor-not-allowed'
            : 'bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_rgba(214,158,0,1)] hover:brightness-[1.04] hover:-translate-y-0.5'
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Unverbindlich anfragen
          </>
        )}
      </button>

      <p className="text-xs text-center text-muted-foreground">
        * Pflichtfelder · Ihre Daten nutzen wir ausschließlich zur Bearbeitung dieser Anfrage.
      </p>
    </form>
  );
}
