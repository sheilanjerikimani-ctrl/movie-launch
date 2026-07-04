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
        <div className="fixed-bg-photo" />
        <div className="fixed-bg-overlay" />
        <nav className="relative z-20 flex flex-wrap items-center justify-between gap-3 px-4 sm:px-8 py-4 sm:py-6 border-b border-white/10">
          <a href="/" className="logo-text text-xl font-bold tracking-widest">MOVIX NIGHT</a>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider">
            <a href="/launches" className="px-4 py-2 rounded-full bg-red-950/60 hover:bg-red-600 transition">Launches</a>
            <a href="/about" className="px-4 py-2 rounded-full bg-red-950/60 hover:bg-red-600 transition">Company</a>
            <a href="/contact" className="px-4 py-2 rounded-full bg-red-950/60 hover:bg-red-600 transition">Stay in the Loop</a>
          </div>
        </nav>
        <div className="relative z-20">{children}</div>
        <footer className="relative z-20 px-8 py-10 border-t border-white/10 mt-20 text-white/40 text-sm">© 2026 Movix Night. Every premiere is a promise.</footer>
        <style>{`
          .logo-text{background:linear-gradient(90deg,#ffffff,#ff3b3b,#ffffff);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;cursor:pointer;transition:letter-spacing 0.3s ease;animation:shimmer 4s linear infinite}
          .logo-text:hover{letter-spacing:0.15em;animation-duration:1.5s}
          @keyframes shimmer{0%{background-position:0% center}100%{background-position:200% center}}
          .fixed-bg-photo{position:fixed;top:0;left:0;width:100%;height:100%;background-image:url(/hero.jpg);background-size:cover;background-position:center;z-index:0;opacity:0.35}
          .fixed-bg-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#000000;z-index:0;opacity:0.6}
        `}</style>
      </body>
    </html>
  );
}
