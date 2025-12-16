"use client";

import Image from "next/image";
import ThresholdBlindnessSection from "./ThresholdBlindnessSection";
import ThresholdMappingSection from "./ThresholdMappingSection";

const sleepData = [
  {
    component: <ThresholdBlindnessSection />,
    image: "/assets/img/trap.jpg",
  },
  {
    component: <ThresholdMappingSection />,
    image: "/assets/img/Tnd.jpg",
  },
];

export default function CoreProblem() {
  return (
    <section className="space py-12">
      <div className="container mx-auto space-y-12">
        {sleepData.map((sleep, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row gap-8 ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="flex-1 space-y-6">{sleep.component}</div>

            {/* Image Section */}
            <div className="flex-1 h-max w-full md:sticky md:top-20">
              <Image
                src={sleep.image}
                width={600}
                height={400}
                alt="image"
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
