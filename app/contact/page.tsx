"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
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
      phone: formData.get("phone"),
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
    <main className="bg-white">
<section className="relative h-125 overflow-hidden">
  <Image
    src="/hero/back.webp"
    alt="Contact Gerard Towers"
    fill
    priority
    className="object-cover object-center"
  />

  <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/35 to-black/60" />

  <div className="absolute inset-0 flex items-center justify-center px-6">
    <div className="max-w-4xl text-center text-white">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em]">
        Contact
      </p>

      <h1 className="mb-6 text-4xl font-semibold md:text-6xl">
        Contact Gerard Towers
      </h1>

      <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-100">
        For general questions, resident services, building information,
        management inquiries, or assistance, please contact the building office
        or use the form below.
      </p>
    </div>
  </div>
</section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">
              Building Information
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                <br />
                Gerard Towers
                <br />
                70-25 Yellowstone Boulevard
                <br />
                Forest Hills, NY 11375
              </p>

              <p>
                <strong className="text-gray-900">Contact Info:</strong>
                <br />
                Phone: (718) 263-7799
                <br />
                Fax: (718) 263-6569
                <br />
                Email: contact@gerardownerscorp.com
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-8 shadow-sm"
          >
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">
              Send a Message
            </h2>
            <p className="mb-5 text-sm leading-6 text-black">
                Please do not submit sensitive personal, financial, or emergency
                information through this form. For urgent matters, contact the
                building office directly.
            </p>
<br></br>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Name *
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Subject *
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm font-semibold text-green-700">
                  Message sent successfully.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-semibold text-red-700">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}