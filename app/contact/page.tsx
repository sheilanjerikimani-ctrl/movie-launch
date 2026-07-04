"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="px-8 py-16 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold mb-2">Stay in the Loop</h1>
      <p className="text-white/50 mb-10">Get notified before we go public with the next launch.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input name="name" required placeholder="Name"
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3" />
        <input name="email" type="email" required placeholder="Email"
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3" />
        <textarea name="message" placeholder="Message (optional)" rows={4}
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3" />
        <button type="submit" disabled={status === "loading"}
          className="bg-red-600 hover:bg-red-700 transition px-8 py-3 uppercase text-sm tracking-wider">
          {status === "loading" ? "Sending..." : "Join"}
        </button>
        {status === "success" && <p className="text-green-500">You're on the list.</p>}
        {status === "error" && <p className="text-red-500">Something went wrong. Try again.</p>}
      </form>
    </main>
  );
}
