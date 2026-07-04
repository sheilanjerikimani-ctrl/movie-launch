import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOVIX NIGHT — Movie Launches",
  description: "Where films become events.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <nav className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-white/10">
          <a href="/" className="text-lg font-bold tracking-widest">MOVIX NIGHT</a>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider">
            <a href="/launches" className="px-4 py-2 rounded-full bg-white/10 hover:bg-red-600 transition">Launches</a>
            <a href="/about" className="px-4 py-2 rounded-full bg-white/10 hover:bg-red-600 transition">Company</a>
            <a href="/contact" className="px-4 py-2 rounded-full bg-white/10 hover:bg-red-600 transition">Stay in the Loop</a>
          </div>
        </nav>
        <div className="page-bg">
          <div className="page-bg-photo" style={{ backgroundImage: "url(/hero.jpg)" }} />
          <div className="page-bg-overlay" />
          <div className="relative z-10">{children}</div>
        </div>
        <footer className="px-8 py-10 border-t border-white/10 text-white/40 text-sm relative z-10">© 2026 Movix Night. Every premiere is a promise.</footer>
        <style>{`
          .page-bg{position:relative;min-height:60vh}
          .page-bg-photo{position:fixed;inset:0;background-size:cover;background-position:center;z-index:0;opacity:0.25}
          .page-bg-overlay{position:fixed;inset:0;background:linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.92));z-index:0}
        `}</style>
      </body>
    </html>
  );
}
