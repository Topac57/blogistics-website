import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren vollständigen Namen ein."),
  phone: z.string().min(6, "Bitte geben Sie eine gültige Telefonnummer ein."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  service: z.string().min(1, "Bitte wählen Sie eine Leistung aus."),
  date: z.string().min(1, "Bitte geben Sie einen Wunschtermin an."),
  message: z.string().min(10, "Ihre Nachricht sollte mindestens 10 Zeichen lang sein."),
  privacy: z.boolean().refine((val) => val === true, "Bitte stimmen Sie der Datenschutzerklärung zu.")
});

type FormValues = z.infer<typeof formSchema>;

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur"
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
          wunschtermin: data.date,
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
        setSubmitError(`Übermittlung fehlgeschlagen: ${msg}. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.`);
      }
    } catch {
      setSubmitError("Netzwerkfehler. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-8 rounded-xl shadow-lg text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-emerald-900 mb-2">Vielen Dank für Ihre Anfrage!</h3>
        <p className="text-emerald-700">
          Ihre Nachricht wurde erfolgreich übermittelt. Wir werden uns schnellstmöglich bei Ihnen melden.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-emerald-600 font-semibold hover:text-emerald-800 underline"
        >
          Weitere Anfrage stellen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-zinc-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/80 to-primary"></div>

      {submitError && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-zinc-700">Name *</label>
          <input
            id="name"
            {...register("name")}
            className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-zinc-200 focus:border-primary focus:ring-primary/20'} focus:outline-none focus:ring-4 transition-all`}
            placeholder="Max Mustermann"
          />
          {errors.name && <p className="text-red-500 text-xs font-medium">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-semibold text-zinc-700">Telefonnummer *</label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-zinc-200 focus:border-primary focus:ring-primary/20'} focus:outline-none focus:ring-4 transition-all`}
            placeholder="0151 1234567"
          />
          {errors.phone && <p className="text-red-500 text-xs font-medium">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-zinc-700">E-Mail *</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-zinc-200 focus:border-primary focus:ring-primary/20'} focus:outline-none focus:ring-4 transition-all`}
            placeholder="mail@beispiel.de"
          />
          {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-semibold text-zinc-700">Gewünschte Leistung *</label>
          <select
            id="service"
            {...register("service")}
            className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${errors.service ? 'border-red-500 focus:ring-red-200' : 'border-zinc-200 focus:border-primary focus:ring-primary/20'} focus:outline-none focus:ring-4 transition-all appearance-none`}
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
          {errors.service && <p className="text-red-500 text-xs font-medium">{errors.service.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="date" className="text-sm font-semibold text-zinc-700">Wunschtermin *</label>
        <input
          id="date"
          type="date"
          {...register("date")}
          className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${errors.date ? 'border-red-500 focus:ring-red-200' : 'border-zinc-200 focus:border-primary focus:ring-primary/20'} focus:outline-none focus:ring-4 transition-all text-zinc-700`}
        />
        {errors.date && <p className="text-red-500 text-xs font-medium">{errors.date.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-zinc-700">Ihre Nachricht *</label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-zinc-200 focus:border-primary focus:ring-primary/20'} focus:outline-none focus:ring-4 transition-all resize-y`}
          placeholder="Beschreiben Sie kurz Ihr Anliegen (z.B. von wo nach wo, Etage, Aufzug vorhanden?)"
        />
        {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <div className="pt-1">
          <input
            id="privacy"
            type="checkbox"
            {...register("privacy")}
            className="w-5 h-5 rounded border-zinc-300 text-primary focus:ring-primary"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="privacy" className="text-sm text-zinc-600 cursor-pointer">
            Ich habe die <a href="/datenschutz" className="text-primary hover:underline font-medium" target="_blank">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. *
          </label>
          {errors.privacy && <p className="text-red-500 text-xs font-medium">{errors.privacy.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !isValid}
        className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 ${
          isSubmitting || !isValid
            ? 'bg-zinc-300 text-zinc-500 cursor-not-allowed shadow-none'
            : 'bg-primary text-primary-foreground hover:bg-[#e5ae06] hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30'
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-6 h-6 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Unverbindlich anfragen
          </>
        )}
      </button>

      <p className="text-xs text-center text-zinc-400">* Pflichtfelder</p>
    </form>
  );
}
