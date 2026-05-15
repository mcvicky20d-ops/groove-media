"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { services, site, whatsappLink } from "@/lib/site";

const initial = {
  name: "",
  phone: "",
  email: "",
  service: services[0].title,
  date: "",
  message: "",
};

export default function LeadForm() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof typeof initial) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `New enquiry for ${site.name}`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      `Service: ${form.service}`,
      form.date ? `Preferred date: ${form.date}` : "",
      "",
      `Details: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(lines), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-3xl bg-white p-10 text-center shadow-xl"
      >
        <CheckCircle2 size={56} className="text-forest-500" />
        <h3 className="font-display text-2xl font-bold text-forest-900">
          Thank you, {form.name.split(" ")[0] || "there"}!
        </h3>
        <p className="max-w-sm text-sm text-forest-700/70">
          Your enquiry is opening in WhatsApp. If it didn&apos;t, message us at{" "}
          <a
            href={`tel:${site.phoneE164}`}
            className="font-semibold text-forest-600 underline"
          >
            {site.phoneDisplay}
          </a>{" "}
          — we typically reply within a few hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initial);
            setSent(false);
          }}
          className="mt-2 text-sm font-semibold text-gold-600 hover:text-gold-500"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  const field =
    "w-full rounded-xl border border-forest-100 bg-cream/60 px-4 py-3 text-sm text-forest-900 outline-none transition-colors placeholder:text-forest-700/40 focus:border-gold-400 focus:bg-white";

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-3xl bg-white p-7 shadow-xl sm:p-9"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-700/70">
            Your name *
          </label>
          <input
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Full name"
            className={field}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-700/70">
            Phone / WhatsApp *
          </label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+91 ..."
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-700/70">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
            className={field}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-700/70">
            Preferred date
          </label>
          <input
            type="date"
            value={form.date}
            onChange={update("date")}
            className={field}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-700/70">
          What do you need? *
        </label>
        <select
          required
          value={form.service}
          onChange={update("service")}
          className={field}
        >
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other / Not sure">Other / Not sure</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-700/70">
          Tell us about your project *
        </label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Date, venue, vibe, references, budget range…"
          className={`${field} resize-none`}
        />
      </div>

      <button type="submit" className="btn-primary mt-2 w-full">
        Send enquiry <Send size={16} />
      </button>
      <p className="text-center text-xs text-forest-700/50">
        Opens WhatsApp with your details pre-filled. No spam, ever.
      </p>
    </form>
  );
}
