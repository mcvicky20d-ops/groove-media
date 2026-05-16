"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const update =
    (key: keyof typeof initial) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const buildBody = () =>
    [
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

  const formValid = () =>
    Boolean(form.name && form.phone && form.service && form.message);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValid() || sending) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${site.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New enquiry · ${form.service} · ${form.name}`,
            _template: "table",
            _captcha: "false",
            Name: form.name,
            Phone: form.phone,
            Email: form.email || "—",
            Service: form.service,
            "Preferred date": form.date || "—",
            Details: form.message,
            Source: `${site.name} website`,
          }),
        }
      );
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === "true" || data.success === true)) {
        setSent(true);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch {
      setError(
        "Couldn't send right now. Please try WhatsApp below, or call us directly."
      );
    } finally {
      setSending(false);
    }
  };

  const sendWhatsApp = () => {
    if (!formValid()) {
      alert("Please fill in your name, phone, service and project details.");
      return;
    }
    window.open(whatsappLink(buildBody()), "_blank", "noopener,noreferrer");
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
          Your enquiry has been sent to{" "}
          <span className="font-semibold text-forest-800">{site.email}</span>.
          We&apos;ll get back to you within a few hours. Prefer to talk? Call
          us at{" "}
          <a
            href={`tel:${site.phoneE164}`}
            className="font-semibold text-forest-600 underline"
          >
            {site.phoneDisplay}
          </a>
          .
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

      <button
        type="submit"
        disabled={sending}
        className="btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {sending ? (
          "Sending…"
        ) : (
          <>
            Send enquiry by email <Send size={16} />
          </>
        )}
      </button>

      {error && (
        <p
          role="alert"
          className="rounded-xl bg-red-50 px-4 py-3 text-center text-xs font-medium text-red-600"
        >
          {error}
        </p>
      )}

      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-forest-100" />
        <span className="text-xs font-medium uppercase tracking-wide text-forest-700/40">
          or
        </span>
        <span className="h-px flex-1 bg-forest-100" />
      </div>

      <button
        type="button"
        onClick={sendWhatsApp}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366] px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#1c9b4d] transition-colors hover:bg-[#25D366] hover:text-white"
      >
        <MessageCircle size={16} /> Send via WhatsApp
      </button>

      <p className="text-center text-xs text-forest-700/50">
        Email goes straight to {site.email}. No spam, ever.
      </p>
    </form>
  );
}
