"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPreview() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl bg-black px-8 py-16 text-white shadow-2xl md:px-16">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              Contact
            </p>

            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Have a Question About Gerard Towers?
            </h2>

            <p className="text-lg leading-8 text-gray-300">
              Please do not submit sensitive personal, financial, or emergency
              information through this form. For urgent matters, contact the
              building office directly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Name *"
                className="rounded-xl border border-white/20 bg-white px-4 py-3 text-black outline-none"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email *"
                className="rounded-xl border border-white/20 bg-white px-4 py-3 text-black outline-none"
              />
            </div>

            <input
              name="subject"
              required
              placeholder="Subject *"
              className="mt-5 w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-black outline-none"
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Message *"
              className="mt-5 w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-black outline-none"
            />

            <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status === "success" && (
              <p className="mt-4 text-center text-sm font-semibold text-green-300">
                Message sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-center text-sm font-semibold text-red-300">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}