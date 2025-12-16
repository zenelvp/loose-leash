"use client";

import Link from "next/link";
import Button from "../button/Button";
import FutureVisionSection from "./FutureVisionSection";
import GuaranteeSection from "./GuaranteeSection";

// LEFT SIDE – Pricing items
const pricingItems = [
  { label: "Complete 30-Day Loose Leash Mastery Program", price: 297 },
  { label: "4 Essential Quick-Reference Guides", price: 97 },
  { label: "Weekly Assessment Tools", price: 67 },
  { label: "Troubleshooting Playbook", price: 87 },
  { label: "Lifetime Access to All Materials", price: 197 },
];

// RIGHT SIDE – What You Get Today (in sections)
const data = [
  {
    title: "Complete 30-Day Curriculum",
    items: [
      "9 step-by-step training modules designed for real-life results",
      "Daily training plans with clear success criteria",
      "Weekly progress check-ins to measure improvement",
      "Final graduation assessment with measurable behavior goals",
    ],
  },
  {
    title: "Essential Quick-Reference Tools",
    items: [
      "Gear & Safety Setup Checklist for stress-free walks",
      "30-Day Training Planner to track daily sessions",
      "Reactivity-Safe Passing Protocols for smooth walk-by situations",
      "Trigger Mapping & Threshold Tracker to monitor progress",
    ],
  },
  {
    title: "Real-World Training Progressions",
    items: [
      "Begin in your yard to build foundational skills",
      "Advance to calm streets in a structured way",
      "Confidently transition to busier environments",
      "Master parks, sidewalks, and everyday social encounters",
    ],
  },
  {
    title: "Troubleshooting & Support",
    items: [
      "Proven strategies for breaking through plateaus",
      "Clear plans to recover from setbacks or regression",
      "Techniques to manage over-arousal and emotional spikes",
      "Emergency action protocols for difficult or unexpected situations",
    ],
  },
];

// Price justification bullets
const priceLogicBullets = [
  "One emergency vet visit from a pulling incident costs more than this entire program.",
  "Professional trainers charge $100-200 per session. You'd need at least 6 sessions to see real results.",
  "This program gives you a complete system for less than two training sessions.",
  "Remember All The Bonuses are Limited!",
  "Simple Next Step",
  "Click the button below to secure your spot and Start My Transformation Today.",
];

export default function Pricing() {
  const totalValue = pricingItems.reduce((acc, item) => acc + item.price, 0);
  const discountedPrice = 147;

  return (
    <section className="space bg-bg">
      <div className="container">
        <h2 className="mb-12">
          What’s Included in Your Program — All for Only ${discountedPrice}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT SIDE */}

          <div className="bg-theme p-8 rounded-xl space-y-4 text-black h-max lg:sticky lg:top-20 shadow-2xl">
            {pricingItems.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="text-body">✔</span>
                  <p className="text-body">{item.label}</p>
                </span>
                <span className="font-semibold text-body">${item.price}</span>
              </div>
            ))}

            <div className="border-t border-black mt-4 pt-4 flex justify-between text-lg font-semibold">
              <h5 className="text-body">Total Value:</h5>
              <h5 className="text-body">${totalValue}</h5>
            </div>

            <div className="mt-6 text-2xl font-bold flex justify-between items-center">
              <h4 className="text-body">Your Price Today:</h4>
              <h4 className="text-body">${discountedPrice}</h4>
            </div>

            <Link href="https://whop.com/checkout/6cgnKv3wP3P6YzMBlD-ZryI-6qkd-2RbL-20VKX54YTH6d/">
              <button className="mt-6 bg-body py-5 px-6 font-bold rounded-3xl text-title">
                SECURE MY TRAINING PROGRAM NOW
              </button>
            </Link>
          </div>

          {/* RIGHT SIDE */}

          <div className="bg-body p-8 rounded-xl space-y-6 text-gray-200">
            <h3 className="mb-2">What&apos;s Included in Your Program</h3>
            <hr className="border border-border/20" />

            {data.map((section, i) => (
              <div key={i} className="space-y-2">
                <h4 className="font-bold text-lg">{section.title}</h4>
                <ul className="list-disc pl-6 space-y-1">
                  {section.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h3 className="mt-10">Why This Price Makes Sense</h3>
            <hr className="border border-border/20" />

            <ul className="list-disc pl-6 space-y-2 mt-4">
              {priceLogicBullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <Button href="https://whop.com/checkout/6cgnKv3wP3P6YzMBlD-ZryI-6qkd-2RbL-20VKX54YTH6d/" label="YES! Give Me Calm Walks in 30 Days" />
            <p>Secure checkout - Your information is protected</p>
          </div>
        </div>

        <GuaranteeSection />
        <FutureVisionSection />
      </div>
    </section>
  );
}
