"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err.message || "Failed to send");
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="section grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 items-start">
        <div className="space-y-5">
          <SectionTitle
            eyebrow="Get In Touch"
            title="Interested in deploying EMMO at your transport hub?"
            subtitle="We’d love to discuss how our AI assistant can enhance your travelers’ experience."
            align="left"
          />
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• Expert Consultation</li>
            <li>• Quick Response Time</li>
            <li>• Live Demo Available</li>
          </ul>
        </div>

        <div className="card">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium text-slate-700"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your Name"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-slate-700"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-slate-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                placeholder="Share a bit about your transport hub and timelines."
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-teal-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-xs text-primary">
                  Thank you! We&apos;ll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-rose-600">
                  {error || "Something went wrong."}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
