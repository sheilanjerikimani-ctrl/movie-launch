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
        <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <a href="/" className="text-xl font-bold tracking-widest">MOVIX NIGHT</a>
          <div className="flex gap-8 text-sm uppercase tracking-wider">
            <a href="/launches" className="hover:text-red-500 transition">Launches</a>
            <a href="/about" className="hover:text-red-500 transition">Company</a>
            <a href="/contact" className="hover:text-red-500 transition">Stay in the Loop</a>
          </div>
        </nav>
        {children}
        <footer className="px-8 py-10 border-t border-white/10 mt-20 text-white/40 text-sm">© 2026 Movix Night. Every premiere is a promise.</footer>
      </body>
    </html>
  );
}
