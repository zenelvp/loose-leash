const cards = [
  {
    title: "🏠 Suburban Dog Parents",
    desc: "Working professionals and busy families with medium to large dogs who pull relentlessly, making every walk feel stressful instead of enjoyable.",
  },
  {
    title: "🦮 First-Time Large Dog Owners",
    desc: "People who finally got their dream dog but feel overwhelmed by their strength and reactivity during everyday walks.",
  },
  {
    title: "💔 Frustrated Previous Trainees",
    desc: "Owners who invested in harnesses, classes, or online programs but still struggle because nothing addressed their dog's specific triggers.",
  },
  {
    title: "❤️ Gentle Method Seekers",
    desc: "Caring dog owners who want effective, humane solutions without resorting to harsh corrections or dominance based techniques.",
  },
  {
    title: "⚡ Reactive Dog Guardians",
    desc: "Owners of dogs who lunge, bark, or become overstimulated around triggers and want a science-backed training system that builds confidence not fear.",
  },
];

export default function Who() {
  return (
    <section className="space">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <h2>Who Is This For</h2>
          <p>This proven system works perfectly for</p>
        </div>

        {/* Row 1 – exactly 3 cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white border border-border shadow-lg"
            >
              <h4 className="text-[26px] mb-2 text-title">{item.title}</h4>
              <p className="text-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 2 – exactly 2 cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.slice(3, 5).map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white border border-border shadow-lg"
            >
              <h4 className="text-[26px] font-semibold mb-2 text-title">
                {item.title}
              </h4>
              <p className="text-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
