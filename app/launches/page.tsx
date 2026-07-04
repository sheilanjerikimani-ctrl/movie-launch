type Film = {
  id: number;
  title: string;
  slug: string;
  poster_url: string;
  logline: string;
  release_date: string;
};

async function getFilms(): Promise<Film[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/films`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function Launches() {
  const films = await getFilms();

  return (
    <main className="px-8 py-16">
      <h1 className="text-4xl font-bold mb-2">Upcoming Launches</h1>
      <p className="text-white/50 mb-12">Films currently in the pipeline.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {films.map((film) => (
          <a key={film.id} href={`/launches/${film.slug}`} className="group block bg-white/5 hover:bg-white/10 transition rounded-lg overflow-hidden">
            <img src={film.poster_url} alt={film.title} className="w-full h-80 object-cover" />
            <div className="p-5">
              <p className="text-red-500 text-xs uppercase tracking-wider mb-2">
                {new Date(film.release_date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </p>
              <h2 className="text-xl font-semibold mb-2">{film.title}</h2>
              <p className="text-white/60 text-sm">{film.logline}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
