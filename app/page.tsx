export default function Home() {
  return (
    <main>
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden bg-black">
        <div className="hero-photo" style={{ backgroundImage: "url(/hero.jpg)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
        <div className="spotlight-glow" />
        <div className="relative z-10 px-6">
          <p className="uppercase tracking-[0.4em] text-red-500 text-sm mb-4 fade-in-1">The night belongs to film</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 fade-in-2">Every film deserves<br />a night to remember.</h1>
          <p className="text-white/70 max-w-xl mx-auto mb-8 fade-in-3">Movix Night designs and stages theatrical launches - red carpets, teaser drops, and the countdown that turns a release date into an event.</p>
          <a href="/launches" className="inline-block bg-red-600 hover:bg-red-700 transition px-8 py-3 uppercase tracking-wider text-sm font-semibold fade-in-4">See Upcoming Launches</a>
        </div>
        <style>{`
          .hero-photo{position:absolute;inset:0;background-size:cover;background-position:center;animation:kenBurns 20s ease-in-out infinite alternate}
          @keyframes kenBurns{0%{transform:scale(1)}100%{transform:scale(1.12)}}
          .spotlight-glow{position:absolute;inset:0;background:radial-gradient(ellipse 55% 45% at 25% -5%,rgba(220,38,38,0.25),transparent 60%),radial-gradient(ellipse 55% 45% at 75% -5%,rgba(220,38,38,0.25),transparent 60%),radial-gradient(ellipse 70% 55% at 50% 105%,rgba(127,29,29,0.4),transparent 70%);animation:glowPulse 6s ease-in-out infinite}
          @keyframes glowPulse{0%,100%{opacity:0.85}50%{opacity:1}}
          .fade-in-1{opacity:0;animation:fadeUp 0.9s ease-out 0.1s forwards}
          .fade-in-2{opacity:0;animation:fadeUp 0.9s ease-out 0.3s forwards}
          .fade-in-3{opacity:0;animation:fadeUp 0.9s ease-out 0.5s forwards}
          .fade-in-4{opacity:0;animation:fadeUp 0.9s ease-out 0.7s forwards}
          @keyframes fadeUp{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}
        `}</style>
      </section>
    </main>
  );
}
