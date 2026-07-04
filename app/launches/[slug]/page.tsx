type Film = {
  title: string;
  poster_url: string;
  synopsis: string;
  cast: string;
  release_date: string;
  trailer_url: string;
};

async function getFilm(slug: string): Promise<Film | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/films/${slug}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function FilmDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const film = await getFilm(slug);
  if (!film) return <main className="px-8 py-16">Film not found.</main>;

  return (
    <main className="px-8 py-16 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <img src={film.poster_url} alt={film.title} className="w-full rounded-lg" />
        <div>
          <h1 className="text-4xl font-bold mb-4">{film.title}</h1>
          <p className="text-red-500 uppercase text-sm tracking-wider mb-6">
            {new Date(film.release_date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
          <p className="text-white/70 mb-6 leading-relaxed">{film.synopsis}</p>
          <p className="text-white/50 mb-6"><span className="text-white">Cast:</span> {film.cast}</p>
          {film.trailer_url && (
            <div className="aspect-video">
              <iframe src={film.trailer_url} className="w-full h-full rounded-lg" allowFullScreen />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
