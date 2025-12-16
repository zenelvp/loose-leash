"use client";

const cards = [
  {
    title: "WALK WITH CONFIDENCE — NOT FEAR",
    desc: "No more anxiety before walks. No more dreading other dogs or busy streets. You'll know exactly what to do in any situation because you have a clear plan that works every time.",
  },
  {
    title: "PROTECT YOUR BODY FROM DAILY DAMAGE",
    desc: "Stop the shoulder pain. End the wrist strain. Your body will thank you when walks become smooth and easy instead of a daily wrestling match that leaves you sore.",
  },
  {
    title: "ENJOY PEACEFUL BONDING TIME",
    desc: "Transform stressful battles into calm connection. Watch your relationship with your dog grow stronger as you both learn to trust each other during every walk.",
  },
  {
    title: "SAVE MONEY ON FAILED SOLUTIONS",
    desc: "No more expensive gear that doesn't work. No more costly trainers who can't help. This science based system gives you everything you need to succeed without wasting another dollar.",
  },
];

export default function Sleep30() {
  return (
    <section className="space bg-bg">
      <div className="container">
        <h2 className="max-w-[950px] text-center m-auto">
          Here&apos;s what happens when you master Loose Leash Walking
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-title">
                {item.title}
              </h3>
              <p className="text-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
