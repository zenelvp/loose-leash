"use client";

import { TbBadge } from "react-icons/tb";
import Button from "../button/Button";

export default function GuaranteeSection() {
  const sections = [
    {
      title: "Why I Can Make This Guarantee",
      items: [
        "This system has worked for thousands of dog owners with medium to large breeds.",
        "The science is proven and the methods are tested.",
        "When people follow the program, the results speak for themselves.",
      ],
    },
    {
      title: "How It Works",
      items: [
        "Try the program for a full 30 days.",
        "If you’re not satisfied, email our support team and get a full refund within 48 hours.",
        "Keep all the materials as a gift for giving the program an honest try.",
      ],
    },
    {
      title: "The Real Risk",
      items: [
        "The risk isn’t trying this program — it’s continuing to struggle with painful, embarrassing walks.",
        "Every day you wait is another day of shoulder strain, frustration, and missed bonding opportunities.",
        "This guarantee removes all the risk. The only risk is doing nothing.",
      ],
    },
  ];

  return (
    <section className="space">
      <div className="p-8 bg-[#00d378]/5 border border-[#00d378]/30 rounded-3xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-8 mb-12 text-center">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#00D378]/20 text-4xl">
            <TbBadge />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            30-Day “Calm Walks or Your Money Back” Guarantee
          </h2>
        </div>

        {/* Intro */}
        <div className="space-y-4 mb-10 text-center">
          <p>
            Follow the program exactly as outlined. Do the daily micro-sessions.
            Use the tools, protocols, and step-by-step progression.
          </p>
          <p className="font-semibold">
            If your dog isn’t walking calmly on a loose leash by day 30, I’ll
            refund every penny. No questions asked. No hoops to jump through.
          </p>
          <p>
            You keep all the materials as a gift for giving the program an
            honest try.
          </p>
        </div>

        {/* FIRST ROW — 2 Columns */}
        <div className="grid gap-8 md:grid-cols-2">
          {sections.slice(0, 2).map((section, i) => (
            <div
              key={i}
              className="bg-[#ffffff] rounded-2xl p-6 flex flex-col h-full shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-title">
                {section.title}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SECOND ROW — 1 Column */}
        <div className="mt-8">
          <div className="bg-[#dc2626] rounded-2xl p-6 shadow-2xl">
            <h3 className="mb-3 text-[#ffffff]">{sections[2].title}</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {sections[2].items.map((item, index) => (
                <li key={index} className="text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button label="SECURE MY TRAINING PROGRAM NOW" />
          <p className="mt-4 text-gray-500 text-sm">
            Instant Lifetime Access — Fully Risk Free
          </p>
        </div>
      </div>
    </section>
  );
}
