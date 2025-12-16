import { Clock3, Heart, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="space">
      <div className="container">
        <div className="bg-theme rounded-3xl p-10 text-center">
          <h2 className="text-white">
            Your Dog Deserves Calm, Confident Walks
          </h2>

          <p className="mt-6 text-lg text-white">
            And you deserve to enjoy them together without stress, pain, or
            embarrassment.
          </p>

          <p className="mt-6 text-xl font-semibold max-w-3xl mx-auto text-white">
            Isn&apos;t today the perfect day to rewrite your walks and your
            relationship forever?
          </p>

          <Link
            href="https://whop.com/checkout/6cgnKv3wP3P6YzMBlD-ZryI-6qkd-2RbL-20VKX54YTH6d/"
            className="cursor-pointer"
          >
            <button className="mt-10 bg-white text-theme font-semibold py-4 px-10 rounded-full hover:bg-gray-100 transition text-lg shadow-md cursor-pointer">
              Start My 30-Day Transformation – $147
            </button>
          </Link>

          <div className="flex items-center justify-center gap-10 mt-6 text-sm opacity-90">
            <span className="flex items-center gap-2 text-white">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-white">30-Day Guarantee</span>
            </span>

            <span className="flex items-center gap-2 text-white">
              <Clock3 className="w-4 h-4" />
              <span className="text-white">Instant Access</span>
            </span>

            <span className="flex items-center gap-2 text-white">
              <Heart className="w-4 h-4" />
              <span className="text-white">Science-Based</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
