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
      company: form.company.value,
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
            eyebrow="Get in Touch"
            title="Schedule a demo or talk to our team."
            subtitle="Share a few details about your venue and we&apos;ll follow up with deployment options, pricing and a pilot plan."
            align="left"
          />
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• Customizable flows for railway, metro, malls and airports.</li>
            <li>• On‑site or remote PoC deployments in under 6 weeks.</li>
            <li>• Enterprise‑grade security with data residency options.</li>
          </ul>
        </div>

        <div className="card">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  placeholder="Arun Kumar"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="company"
                  className="text-xs font-medium text-slate-700"
                >
                  Organisation / Venue
                </label>
                <input
                  id="company"
                  name="company"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  placeholder="Example Metro Corp"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-slate-700"
              >
                Work Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                placeholder="you@company.com"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-slate-700"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none"
                placeholder="Share a bit about your use case, expected footfall and timelines."
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-sm font-medium text-white shadow-soft hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {status === "loading" ? "Sending..." : "Submit Enquiry"}
              </button>
              {status === "success" && (
                <p className="text-xs text-emerald-600">
                  Thank you! We&apos;ll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-rose-600">
                  {error || "Something went wrong."}
                </p>
              )}
            </div>

            <p className="text-[11px] text-slate-500">
              By submitting this form you agree that we may contact you about
              EMMO deployments, pricing and product updates.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
