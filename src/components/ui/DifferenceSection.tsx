"use client";

const components = [
  {
    num: 1,
    title: "Threshold Mapping System",
    descriptions: [
      "Think of this as your dog's emotional GPS. You'll learn to identify exactly what triggers your dog and how close is too close. No more surprise lunges or being caught off guard.",
      "This system maps your dog's stress zones so you can stay in the calm learning zone where real progress happens.",
    ],
  },
  {
    num: 2,
    title: "Micro-Session Protocol",
    descriptions: [
      "Forget hour-long training sessions that exhaust both of you.",
      "These 10-15 minute daily sessions work with your dog's natural attention span. Short, focused practice creates faster results than marathon training sessions.",
      "Each session has a clear warm-up, single focus drill, and calm cool-down. Perfect for busy schedules.",
    ],
  },
  {
    num: 3,
    title: "ARC Decision Framework",
    descriptions: [
      "When you see another dog approaching, you'll know exactly what to do in 3 seconds or less.",
      "Assess the situation. React with the right technique. Control the outcome.",
      "No more panic or guessing. You'll have a clear action plan for every scenario.",
    ],
  },
  {
    num: 4,
    title: "Reactivity-Safe Passing Protocols",
    descriptions: [
      "Walk past dogs, people, bikes, and strollers without stress or drama.",
      "These step-by-step protocols use distance management and smart positioning to keep your dog calm and focused on you instead of the trigger.",
    ],
  },
  {
    num: 5,
    title: "Leash Mechanics Mastery",
    descriptions: [
      "Your hands, feet, and timing matter more than expensive gear.",
      "Learn the precise hand positions, footwork, and reward timing that turn any leash into a communication tool. No special equipment required.",
    ],
  },
];

export default function DifferenceSection() {
  const firstRow = components.slice(0, 3);
  const secondRow = components.slice(3);

  return (
    <section className="space">
      <div className="container">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          What Makes Loose Leash Mastery Different
        </h2>

        <p className="text-xl text-gray-700 mb-6 text-center max-w-3xl mx-auto leading-relaxed">
          Most dog training programs throw generic tips at you and hope
          something sticks.
        </p>

        <p className="text-2xl text-gray-900 font-bold mb-10 text-center">
          This isn't that.
        </p>

        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          Loose Leash Mastery uses a science-based system that prevents pulling
          before it starts. Instead of fighting your dog's strength, you'll work
          with their natural learning patterns.
        </p>

        {/* Section Title */}
        <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          The 5 Core Components That Stop Pulling
        </h3>

        {/* ROW 1 — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {firstRow.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {/* ROW 2 — 2 centered columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondRow.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ item }: any) {
  return (
    <div className="bg-bg p-8 rounded-3xl shadow-lg">
      {/* Title Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
          {item.num}
        </div>
        <h4 className="text-2xl font-bold text-gray-900">{item.title}</h4>
      </div>

      {/* Description */}
      {item.descriptions.map((text: string, idx: number) => {
        const isLast = idx === item.descriptions.length - 1;
        return (
          <p
            key={idx}
            className={`text-lg leading-relaxed mb-4 ${
              isLast ? "text-gray-800 font-medium" : "text-gray-700"
            }`}
          >
            {text}
          </p>
        );
      })}
    </div>
  );
}
