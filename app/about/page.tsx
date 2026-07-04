export default function About() {
  return (
    <main className="px-8 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">The Company</h1>
      <p className="text-white/70 leading-relaxed mb-4">Movix Night is a launch studio. We do not distribute films - we make their arrival unforgettable. From the first teaser to the closing frame of opening night, we build the moments that turn a release date into a cultural event.</p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">What we do</h2>
      <ul className="space-y-3 text-white/70">
        <li><span className="text-red-500 font-semibold">Premieres</span> - red carpet events, staged for press and public alike.</li>
        <li><span className="text-red-500 font-semibold">Campaigns</span> - teaser drops, countdowns, and rollout strategy.</li>
        <li><span className="text-red-500 font-semibold">Press</span> - media relations that keep a film in conversation.</li>
      </ul>
    </main>
  );
}
