export default function CvPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f1eee7] grid place-items-center p-6">
      <section className="w-full max-w-xl border border-white/15 p-8 md:p-12 text-center">
        <p className="font-mono text-xs tracking-[.2em] text-[#d7ff39] uppercase">Sahil Wadhwa / CV</p>
        <h1 className="mt-5 text-5xl font-bold tracking-tighter">Curriculum Vitae</h1>
        <p className="mt-5 text-white/60 leading-relaxed">The latest version of my CV will be available here.</p>
        <a className="inline-block mt-8 rounded-full bg-[#d7ff39] px-6 py-3 font-mono text-sm font-bold text-black" href="/cv/Sahil-Wadhwa-CV.pdf" download>Download CV ↗</a>
        <p className="mt-8 text-sm text-white/40"><a className="underline" href="mailto:sahilwadhwa520@gmail.com">Email me</a> if you would like to get in touch.</p>
      </section>
    </main>
  );
}
