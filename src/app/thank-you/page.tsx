"use client";

import Button from "@/components/button/Button";
import Image from "next/image";

export default function ThankYouPage() {
  return (
    <div className="container flex flex-col items-center pb-12 pt-12">
      {/* Thank You Section */}
      <div className="lg:max-w-5xl w-full text-center">
        <h1 className="font-extrabold mb-4 text-theme">
          Thank You — Your Loose Leash Mastery Journey Starts Now!
        </h1>

        <p className="text-lg mb-4" style={{ color: "var(--color-desc)" }}>
          You Just Made a Decision Most Dog Owners Never Make.
        </p>

        <p className="text-lg mb-4" style={{ color: "var(--color-desc)" }}>
          While most people stay stuck in the same exhausting patterns pulling,
          embarrassment, frustration — <strong>you took action!</strong>
        </p>

        <p className="text-lg mb-4" style={{ color: "var(--color-desc)" }}>
          You stepped into becoming the calm, confident leader your dog has
          always needed.
        </p>

        <p className="text-lg mb-6" style={{ color: "var(--color-desc)" }}>
          This is the moment your walks start transforming.
        </p>

        {/* <Button label="👉 Access Your Loose Leash Mastery Program" /> */}
      </div>

      {/* Upsell Section */}
      <div id="upsell" className="mt-4 w-full rounded-xl">
        <h2 className="mb-6 text-center bg-theme px-4 py-1 text-white lg:w-max m-auto">
          Want Faster, Deeper, Long-Term Results?
        </h2>

        <p className="mb-8 text-center" style={{ color: "var(--color-desc)" }}>
          Your dog is about to get better, but you can accelerate the progress
          dramatically.
          <br />
          The biggest struggle dog owners face{" "}
          <strong>after fixing pulling</strong> is:
          <br />
          <strong>Reactivity around neighbor dogs.</strong>
        </p>

        <p className="mb-8 text-center" style={{ color: "var(--color-desc)" }}>
          Barking, lunging, freezing, exploding out of nowhere.
          <br />
          So we built the perfect solution.
        </p>

        <h3 className="mb-6 text-center text-theme">
          🔓 Upgrade to the Full 30-Day Loose Leash Formula
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 px-6">
          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: "var(--color-bg)",
              border: `1px solid var(--color-border)`,
            }}
          >
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--color-title)" }}
            >
              This course eliminates:
            </h3>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "var(--color-desc)" }}
            >
              <li>Dog to dog lunging</li>
              <li>Sudden explosion when another dog appears</li>
              <li>Barking at neighbor dogs</li>
              <li>Tight leash panic moments</li>
              <li>Embarrassing “I can’t control him” scenes</li>
            </ul>

            <h3
              className="text-xl font-semibold mt-6 mb-3"
              style={{ color: "var(--color-title)" }}
            >
              You’ll Learn:
            </h3>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "var(--color-desc)" }}
            >
              <li>The Cul-de-Sac Reset Method</li>
              <li>Pattern Interrupts that calm reactivity fast</li>
              <li>The Grounding Loop for neighborhood triggers</li>
              <li>Distance Based Confidence Building</li>
              <li>The Mirror Calm Technique</li>
            </ul>
          </div>

          {/* Bonus Section */}
          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: "var(--color-bg)",
              border: `1px solid var(--color-border)`,
            }}
          >
            <h3
              className="font-semibold text-xl mb-4"
              style={{ color: "var(--color-title)" }}
            >
              🎁 FREE BONUS WHEN YOU UPGRADE TODAY
            </h3>

            <h3 className="text-theme text-2xl mb-4">
              Elevator & Hallway Harmony — 7-Day Tight-Space Etiquette System
              <br /> ($97 Value)
            </h3>

            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "var(--color-desc)" }}
            >
              <li>Seven-Day Checklist & Progress Tracker ($39 Value)</li>
              <li>Elevator & Door Etiquette Cue Cards ($59 Value)</li>
              <li>Troubleshooting Guide & Decision Trees ($57 Value)</li>
            </ul>

            <p className="mt-4 text-sm" style={{ color: "var(--color-desc)" }}>
              Total Bonus Value: <strong>$252</strong> — Yours FREE When You
              Upgrade Today.
            </p>
          </div>
        </div>

        {/* BUTTON #1 */}
        <div className="text-center mb-8">
          <Button
            href="https://whop.com/checkout/1RbXQdDM5BrRKP7lrH-qn6n-NxuH-6VTG-XlrRryO3QyKn/"
            label="Cul-de-Sac Calm — 30-Day Neighbor’s Dog Lunge Fix (Video Course) — $247"
          />
        </div>

        {/* Already Have / Unlock */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div>
            <Image
              src="/assets/img/pp.webp"
              alt=""
              width="800"
              height="1080"
              className="max-h-full object-contain"
            />
          </div>
          <div className="px-6 mb-12">
            <div className="text-sm" style={{ color: "var(--color-desc)" }}>
              <h3 className="font-semibold text-lg mb-2">✔ You Already Have</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Loose Leash Mastery in 30 Days (your main program)</li>
              </ul>

              <h3 className="font-semibold text-lg mb-2">
                🔓 You Unlock When You Upgrade
              </h3>
              <ul className="list-disc list-inside">
                <li>30-Day Loose Leash Formula: Cul-de-Sac Calm</li>
                <li>FREE Elevator & Hallway Harmony</li>
                <li>FREE Checklist & Progress Tracker</li>
                <li>FREE Cue Cards & Scripts</li>
                <li>FREE Troubleshooting Guide</li>
              </ul>
            </div>
          </div>
        </div>

        <h5 className="text-center text-theme mb-6">
          ⚠️ One-Time Exclusive Upgrade
        </h5>

        <p className="mb-6 text-center text-sm">
          This offer and bonus pack are Only Available On This Page.
          <br />
          If you leave, it disappears permanently.
        </p>

        {/* BUTTON #2 */}
        <div className="text-center pb-8">
          <Button
            href="https://whop.com/checkout/1RbXQdDM5BrRKP7lrH-qn6n-NxuH-6VTG-XlrRryO3QyKn/"
            label="YES — Upgrade My Training & Get the Free Bonus"
          />
        </div>
      </div>

      {/* Footer */}
      <footer
        className="mt-16 text-center text-sm"
        style={{ color: "var(--color-desc)" }}
      >
        &copy; {new Date().getFullYear()} Loose Leash. All rights reserved.
      </footer>
    </div>
  );
}
