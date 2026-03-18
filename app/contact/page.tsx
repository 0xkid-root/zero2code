"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState, ChangeEvent, FormEvent } from "react";

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

interface ContactInfoItem {
  icon: string;
  label: string;
  lines: string[];
  href?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

// ─────────────────────────────────────────
// Static Data
// ─────────────────────────────────────────

const CONTACT_INFO: ContactInfoItem[] = [
  {
    icon: "📍",
    label: "Visit Us",
    lines: ["Plot no 43 Vikas Nagar Sector", "5 Ring Road, Lucknow 226022"],
  },
  {
    icon: "📞",
    label: "Call Us",
    lines: ["+91-7007237006", "9140444301 | 9120936936"],
    href: "tel:+917007237006",
  },
  {
    icon: "✉",
    label: "Email Us",
    lines: ["zerotocode@gmail.com", "hr@zerotocode.in"],
    href: "mailto:zerotocode@gmail.com",
  },
  {
    icon: "🕐",
    label: "Office Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: 10:00 AM – 4:00 PM"],
  },
];

const SUBJECT_OPTIONS: string[] = [
  "Summer Training Enquiry",
  "Winter Training Enquiry",
  "Vocational Training Enquiry",
  "Apprenticeship Program",
  "Internship",
  "Live Project",
  "Workshop",
  "Placement Support",
  "Other",
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer MERN Stack, Python with Django, Java Full Stack, .NET MVC, Flutter, Android, and AI & ML — across Summer, Winter, Vocational, and Apprenticeship programs.",
  },
  {
    question: "How long are the training programs?",
    answer:
      "Programs range from 4 weeks (Basic Session) up to 12 months (1-Year Apprenticeship). Most popular is the 6-week Technology Session.",
  },
  {
    question: "Is placement assistance provided?",
    answer:
      "Yes! zerotocode has a dedicated HR team that supports resume building, mock interviews, and direct placement assistance after program completion.",
  },
  {
    question: "Can I visit the campus before enrolling?",
    answer:
      "Absolutely. We welcome campus visits. Come to our Vikas Nagar, Lucknow campus any weekday between 9 AM and 6 PM and our team will give you a full tour.",
  },
];

const NAV_LINKS: string[] = ["Home", "Training", "Services", "Blog", "Contact", "Career"];

// ─────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────

function validate(form: ContactForm): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) {
    errors.phone = "Enter a valid 10-digit phone number.";
  }
  if (!form.subject) errors.subject = "Please select a subject.";
  if (!form.message.trim()) errors.message = "Message cannot be empty.";
  return errors;
}



// ── Input field ──
interface FieldProps {
  label: string;
  name: keyof ContactForm;
  type: string;
  value: string;
  placeholder: string;
  error?: string;
  focused: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: (name: string) => void;
  onBlur: () => void;
}

function Field({
  label, name, type, value, placeholder, error, focused, onChange, onFocus, onBlur,
}: FieldProps): JSX.Element {
  const isFocused = focused === name;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-[#1C1C1C]">
        {label} <span className="text-[#F05A28]">*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => onFocus(name)}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`px-4 py-3 text-sm rounded-xl outline-none transition-all duration-200 bg-white text-[#1C1C1C] placeholder-[#B0A89E] border-[1.5px] ${
          error
            ? "border-red-400 ring-2 ring-red-100"
            : isFocused
            ? "border-[#F05A28] ring-2 ring-[#F05A28]/10"
            : "border-[#DDD8CF] hover:border-[#F0C4B0]"
        }`}
      />
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}

// ── FAQ accordion item ──
function FaqAccordion({ item }: { item: FaqItem }): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="border border-[#DDD8CF] rounded-2xl overflow-hidden bg-white">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#FFF5F1] transition-colors group"
      >
        <span className="text-sm font-bold text-[#1C1C1C] group-hover:text-[#F05A28] transition-colors pr-4">
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
            open ? "bg-[#F05A28] text-white rotate-45" : "bg-[#EEEBE4] text-[#5A5A5A]"
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 border-t border-[#DDD8CF]/60">
          <p className="text-sm text-[#5A5A5A] leading-relaxed pt-3">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────
// Page
// ─────────────────────────────────────────

export default function ContactPage(): JSX.Element {
  const [form, setForm] = useState<ContactForm>({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [focused, setFocused] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-[#EEEBE4] font-sans">
        <Header/>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-[#1C1C1C] py-14 sm:py-20 px-4">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#F05A28]/10 pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-[#F05A28]/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F05A28]/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block bg-[#F05A28]/20 text-[#F05A28] text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-[#F05A28]/30">
            📬 Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            Let&apos;s Talk About{" "}
            <span className="text-[#F05A28]">Your Future</span>
          </h1>
          <p className="text-sm sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed">
            Have questions about our programs? Want to visit the campus? We&apos;re here to help
            you every step of the way.
          </p>

          {/* Quick contact pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="tel:+917007237006"
              className="flex items-center gap-2 bg-white/10 hover:bg-[#F05A28] border border-white/20 hover:border-[#F05A28] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200"
            >
              📞 Call Now
            </a>
            <a
              href="mailto:zerotocode@gmail.com"
              className="flex items-center gap-2 bg-white/10 hover:bg-[#F05A28] border border-white/20 hover:border-[#F05A28] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200"
            >
              ✉ Send Email
            </a>
            <a
              href="https://wa.me/917007237006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-[#F05A28] border border-white/20 hover:border-[#F05A28] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Contact Info Cards ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACT_INFO.map((info: ContactInfoItem) => (
            <div
              key={info.label}
              className="bg-white rounded-2xl border border-[#DDD8CF] p-5 shadow-sm hover:shadow-md hover:border-[#F05A28]/40 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFF5F1] border border-[#F0C4B0] flex items-center justify-center text-xl mb-3 group-hover:bg-[#F05A28] transition-colors duration-200">
                <span className="group-hover:grayscale-0 transition-all">{info.icon}</span>
              </div>
              <p className="text-xs font-bold text-[#F05A28] uppercase tracking-widest mb-2">
                {info.label}
              </p>
              {info.lines.map((line: string, i: number) =>
                info.href && i === 0 ? (
                  <a
                    key={i}
                    href={info.href}
                    className="block text-sm text-[#1C1C1C] font-semibold hover:text-[#F05A28] transition-colors"
                  >
                    {line}
                  </a>
                ) : (
                  <p key={i} className={`text-sm ${i === 0 ? "text-[#1C1C1C] font-semibold" : "text-[#5A5A5A]"}`}>
                    {line}
                  </p>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Main 2-col: Form + Sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── LEFT: Contact Form ── */}
          <div className="w-full lg:flex-1">
            <div className="bg-white rounded-3xl border border-[#DDD8CF] p-6 sm:p-10 shadow-sm">
              {/* Header */}
              <div className="mb-7">
                <h2 className="text-xl sm:text-2xl font-black text-[#1C1C1C]">Send Us a Message</h2>
                <div className="w-10 h-1 rounded-full bg-[#F05A28] mt-2" />
                <p className="text-sm text-[#5A5A5A] mt-3">
                  Fill in the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              {/* Success state */}
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mx-auto mb-4">
                    ✅
                  </div>
                  <h3 className="text-lg font-black text-[#1C1C1C] mb-2">Message Sent!</h3>
                  <p className="text-sm text-[#5A5A5A] mb-6 max-w-sm mx-auto">
                    Thanks for reaching out. Our team will contact you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#F05A28] text-white text-sm font-bold hover:bg-[#D94E20] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      label="Full Name" name="name" type="text"
                      value={form.name} placeholder="Your full name"
                      error={errors.name} focused={focused}
                      onChange={handleChange as (e: ChangeEvent<HTMLInputElement>) => void}
                      onFocus={setFocused} onBlur={() => setFocused("")}
                    />
                    <Field
                      label="Email Address" name="email" type="email"
                      value={form.email} placeholder="you@example.com"
                      error={errors.email} focused={focused}
                      onChange={handleChange as (e: ChangeEvent<HTMLInputElement>) => void}
                      onFocus={setFocused} onBlur={() => setFocused("")}
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-sm font-semibold text-[#1C1C1C]">
                      Phone Number <span className="text-[#F05A28]">*</span>
                    </label>
                    <div
                      className={`flex rounded-xl overflow-hidden border-[1.5px] transition-all duration-200 ${
                        errors.phone
                          ? "border-red-400 ring-2 ring-red-100"
                          : focused === "phone"
                          ? "border-[#F05A28] ring-2 ring-[#F05A28]/10"
                          : "border-[#DDD8CF]"
                      }`}
                    >
                      <div className="bg-[#EEEBE4] border-r border-[#DDD8CF] px-4 flex items-center text-xs font-bold text-[#5A5A5A] whitespace-nowrap flex-shrink-0">
                        IN +91
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused("")}
                        placeholder="98765 43210"
                        className="flex-1 min-w-0 px-4 py-3 text-sm text-[#1C1C1C] placeholder-[#B0A89E] outline-none bg-white"
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 mt-0.5">{errors.phone}</p>}
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-sm font-semibold text-[#1C1C1C]">
                      Subject <span className="text-[#F05A28]">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused("")}
                      className={`px-4 py-3 text-sm rounded-xl outline-none transition-all duration-200 bg-white cursor-pointer border-[1.5px] ${
                        form.subject ? "text-[#1C1C1C]" : "text-[#B0A89E]"
                      } ${
                        errors.subject
                          ? "border-red-400 ring-2 ring-red-100"
                          : focused === "subject"
                          ? "border-[#F05A28] ring-2 ring-[#F05A28]/10"
                          : "border-[#DDD8CF] hover:border-[#F0C4B0]"
                      }`}
                    >
                      <option value="" disabled>-- Select a subject --</option>
                      {SUBJECT_OPTIONS.map((opt: string) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.subject && <p className="text-xs text-red-500 mt-0.5">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-[#1C1C1C]">
                      Message <span className="text-[#F05A28]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused("")}
                      placeholder="Tell us about your query, training interest, or anything you'd like to know..."
                      rows={5}
                      className={`px-4 py-3 text-sm rounded-xl outline-none transition-all duration-200 bg-white text-[#1C1C1C] placeholder-[#B0A89E] resize-none border-[1.5px] ${
                        errors.message
                          ? "border-red-400 ring-2 ring-red-100"
                          : focused === "message"
                          ? "border-[#F05A28] ring-2 ring-[#F05A28]/10"
                          : "border-[#DDD8CF] hover:border-[#F0C4B0]"
                      }`}
                    />
                    <div className="flex justify-between items-center">
                      {errors.message
                        ? <p className="text-xs text-red-500">{errors.message}</p>
                        : <span />}
                      <p className="text-xs text-[#B0A89E] text-right">{form.message.length} / 500</p>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-black text-white bg-[#F05A28] hover:bg-[#D94E20] disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-[#F05A28]/30 hover:shadow-[#F05A28]/50 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-[#B0A89E]">
                    🔒 Your information is safe with us. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* ── RIGHT: Sidebar ── */}
          <div className="w-full lg:w-[340px] lg:flex-shrink-0">
            <div className="lg:sticky lg:top-[72px] space-y-5">

              {/* Quick Enquiry CTA */}
              <div className="bg-[#1C1C1C] rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#F05A28]/15 pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-xs font-bold text-[#F05A28] uppercase tracking-widest mb-2">
                    Quick Connect
                  </p>
                  <h3 className="text-lg font-black text-white mb-1">Talk to an Advisor</h3>
                  <p className="text-sm text-white/50 mb-5">
                    Not sure which program suits you? Our advisors will guide you to the right course.
                  </p>
                  <div className="flex flex-col gap-2.5">
                    <a
                      href="tel:+917007237006"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F05A28] text-white text-sm font-bold hover:bg-[#D94E20] transition-colors shadow-lg shadow-[#F05A28]/25"
                    >
                      📞 Call +91-7007237006
                    </a>
                    <a
                      href="https://wa.me/917007237006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                    >
                      💬 WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-2xl border border-[#DDD8CF] p-6 shadow-sm">
                <h3 className="font-black text-[#1C1C1C] mb-4">Office Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM", active: true },
                    { day: "Saturday", time: "9:00 AM – 6:00 PM", active: true },
                    { day: "Sunday", time: "10:00 AM – 4:00 PM", active: false },
                  ].map((row) => (
                    <div key={row.day} className="flex items-center justify-between text-sm">
                      <span className="text-[#5A5A5A]">{row.day}</span>
                      <span className={`font-semibold ${row.active ? "text-[#1C1C1C]" : "text-[#B0A89E]"}`}>
                        {row.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#DDD8CF]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                    <p className="text-xs text-[#5A5A5A]">We are <strong className="text-[#1C1C1C]">open now</strong> — usually respond within 2 hours</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="bg-white rounded-2xl border border-[#DDD8CF] p-6 shadow-sm">
                <h3 className="font-black text-[#1C1C1C] mb-4">Follow Us</h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { name: "LinkedIn", icon: "💼", color: "hover:border-blue-500 hover:text-blue-600" },
                    { name: "Instagram", icon: "📸", color: "hover:border-pink-500 hover:text-pink-600" },
                    { name: "YouTube", icon: "▶️", color: "hover:border-red-500 hover:text-red-600" },
                    { name: "Twitter / X", icon: "𝕏", color: "hover:border-gray-800 hover:text-gray-800" },
                  ].map((s) => (
                    <a
                      key={s.name}
                      href="#"
                      className={`flex items-center gap-2 border border-[#DDD8CF] rounded-xl px-3 py-2.5 text-xs font-semibold text-[#5A5A5A] transition-all duration-200 ${s.color}`}
                    >
                      <span>{s.icon}</span>
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl border border-[#DDD8CF] overflow-hidden shadow-sm">
                <div className="bg-gradient-to-br from-[#EEEBE4] to-[#DDD8CF] h-40 flex flex-col items-center justify-center relative">
                  <span className="text-4xl mb-2" role="img" aria-label="map pin">📍</span>
                  <p className="text-sm font-bold text-[#1C1C1C]">Vikas Nagar, Lucknow</p>
                  <p className="text-xs text-[#5A5A5A]">226022, Uttar Pradesh</p>
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(circle, #F05A28 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                  />
                </div>
                <div className="p-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border-2 border-[#DDD8CF] text-sm font-bold text-[#1C1C1C] hover:border-[#F05A28] hover:text-[#F05A28] transition-all duration-200"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ Section ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
        <div className="text-center mb-8">
          <span className="inline-block bg-[#F05A28]/10 text-[#F05A28] text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-widest uppercase">
            FAQs
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#1C1C1C]">Frequently Asked Questions</h2>
          <div className="w-10 h-1 rounded-full bg-[#F05A28] mx-auto mt-3" />
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item: FaqItem) => (
            <FaqAccordion key={item.question} item={item} />
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}