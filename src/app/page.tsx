export default function HomePage() {
  return (
    <main className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Wes To do</h1>
        <p className="text-sm text-slate-500">Personal task board</p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {["To do", "Doing", "Done"].map((title) => (
          <div key={title} className="rounded-2xl border p-4">
            <h2 className="text-sm font-semibold">{title}</h2>
            <div className="mt-3 min-h-[240px] rounded-xl bg-slate-50 p-2 text-xs text-slate-500">
              Tasks will go here
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
