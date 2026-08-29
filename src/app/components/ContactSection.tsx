"use client";

import { useState } from "react";
import { personalInfo } from "../data/project";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Github,
  Send,
  Download,
  Copy,
  Check,
  Phone,
  ArrowUpRight,
  MessageSquare
} from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsSubmitting(true);
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
          `mailto:${personalInfo.email}?subject=Collaboration Inquiry from ${form.name}&body=${encodeURIComponent(
            form.message + "\n\nFrom: " + form.name + " (" + form.email + ")"
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
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#111110] border-t border-[#1f1f1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1a] border border-[#2e2e2a] text-xs font-mono text-[#c8a44e]">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#eeeeec]">
            Let&apos;s Build Something Impactful Together
          </h2>
          <p className="text-[#8a8a85] text-sm sm:text-base max-w-2xl leading-relaxed">
            Interested in discussing engineering opportunities, architecture consulting, or full-stack contributions? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-[#171715] border border-[#272724] hover:border-[#383833] transition-all space-y-2">
              <div className="text-xs font-mono text-[#7a7a75] flex items-center justify-between">
                <span>PRIMARY EMAIL</span>
                <span className="text-[#c8a44e]">DIRECT</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-[#c8a44e] shrink-0" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-base sm:text-lg font-bold text-[#eeeeec] hover:text-[#c8a44e] transition-colors font-mono truncate"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, "email")}
                  className="p-2 rounded-lg bg-[#121211] hover:bg-[#1f1f1c] text-[#8a8a85] hover:text-[#eeeeec] transition-all shrink-0"
                  title="Copy email"
                >
                  {copiedField === "email" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-[#171715] border border-[#272724] hover:border-[#383833] transition-all space-y-2">
              <div className="text-xs font-mono text-[#7a7a75] flex items-center justify-between">
                <span>PHONE & WHATSAPP / ZALO</span>
                <span className="text-[#c8a44e]">DIRECT</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#c8a44e] shrink-0" />
                  <a
                    href={`tel:${personalInfo.phoneClean}`}
                    className="text-base sm:text-lg font-bold text-[#eeeeec] hover:text-[#c8a44e] transition-colors font-mono"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                  className="p-2 rounded-lg bg-[#121211] hover:bg-[#1f1f1c] text-[#8a8a85] hover:text-[#eeeeec] transition-all shrink-0"
                  title="Copy phone"
                >
                  {copiedField === "phone" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Profiles & Location */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.githubProfiles.map((gh) => (
                  <a
                    key={gh.username}
                    href={gh.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-[#171715] border border-[#272724] hover:border-[#383833] transition-all flex items-center justify-between group"
                    title={`GitHub Profile: ${gh.name}`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Github className="w-4 h-4 text-[#c8a44e] shrink-0" />
                      <div className="min-w-0 truncate">
                        <div className="text-[10px] font-mono text-[#7a7a75]">{gh.tag}</div>
                        <div className="text-xs font-bold text-[#eeeeec] font-mono truncate">{gh.username}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#5c5c58] group-hover:text-[#c8a44e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </a>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-[#171715] border border-[#272724] flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#c8a44e] shrink-0" />
                <div>
                  <div className="text-[10px] font-mono text-[#7a7a75]">LOCATION</div>
                  <div className="text-xs font-bold text-[#eeeeec]">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Download CV Action */}
            <a
              href={personalInfo.cvUrl}
              download="Resume_Le_Thanh_Phat.pdf"
              className="w-full py-3.5 rounded-xl bg-[#c8a44e] hover:bg-[#d4b35c] text-[#111110] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Official CV (Resume_Le_Thanh_Phat.pdf)</span>
            </a>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl p-6 sm:p-8 bg-[#171715] border border-[#272724] text-left shadow-lg">
              <div className="flex items-center gap-2 pb-4 border-b border-[#232320] mb-6">
                <MessageSquare className="w-4 h-4 text-[#c8a44e]" />
                <span className="text-sm font-mono text-[#eeeeec] font-semibold">
                  Send a Direct Message
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#8a8a85]">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Alex Nguyen"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#121211] border border-[#232320] text-sm text-[#eeeeec] placeholder:text-[#444440] focus:outline-none focus:border-[#c8a44e] font-mono transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#8a8a85]">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#121211] border border-[#232320] text-sm text-[#eeeeec] placeholder:text-[#444440] focus:outline-none focus:border-[#c8a44e] font-mono transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#8a8a85]">Project / Opportunity Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project, team requirements, or role specifications..."
                    className="w-full px-4 py-3 rounded-lg bg-[#121211] border border-[#232320] text-sm text-[#eeeeec] placeholder:text-[#444440] focus:outline-none focus:border-[#c8a44e] font-mono transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-[#c8a44e] hover:bg-[#d4b35c] disabled:bg-[#1f1f1c] disabled:text-[#5c5c58] text-[#111110] font-bold font-mono text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  {isSubmitting ? (
                    <span>Transmitting message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Dispatch</span>
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="p-3 rounded-lg bg-[#121211] border border-emerald-500/40 text-emerald-400 text-xs font-mono flex items-center gap-2 animate-fadeIn">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Message sent successfully! Thank you for reaching out.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3 rounded-lg bg-[#121211] border border-rose-500/40 text-rose-400 text-xs font-mono animate-fadeIn">
                    Failed to send via direct gateway. Please contact via email at {personalInfo.email}.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
