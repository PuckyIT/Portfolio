"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Check, Copy, Github, Mail, Phone, Send } from "lucide-react";
import { personalInfo } from "../data/project";
import { SectionHeading } from "./SectionHeading";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus("idle");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_name: personalInfo.name,
          },
          publicKey
        );
      } else {
        window.open(
          `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Hello from ${form.name}`)}&body=${encodeURIComponent(
            `${form.message}\n\nFrom: ${form.name} (${form.email})`
          )}`,
          "_blank"
        );
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  const links = [
    { icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phoneClean}` },
    ...personalInfo.githubProfiles.map((gh) => ({
      icon: Github,
      label: `github.com/${gh.username}`,
      href: gh.url,
    })),
  ];

  return (
    <section id="contact" className="border-t border-slate-200 py-20 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Let's work together" />

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex min-w-0 items-center gap-3 text-lg font-medium text-slate-900 underline-offset-4 hover:text-brand-600 hover:underline"
            >
              <Mail className="h-5 w-5 shrink-0 text-brand-600" aria-hidden />
              <span className="truncate">{personalInfo.email}</span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email"}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>

          <ul className="mt-4 space-y-1">
            {links.map(({ icon: Icon, label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  className="inline-flex items-center gap-3 py-2 text-slate-600 transition-colors hover:text-slate-900"
                >
                  <Icon className="h-5 w-5 text-slate-400" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4" aria-hidden />
            {sending ? "Sending…" : "Send message"}
          </button>

          <p role="status" aria-live="polite" className="text-sm">
            {status === "success" && <span className="text-emerald-700">Thanks! I&apos;ll get back to you soon.</span>}
            {status === "error" && (
              <span className="text-rose-700">Couldn&apos;t send. Please email {personalInfo.email} directly.</span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
