"use client";

export default function ThresholdMappingSection() {
  return (
    <div className="w-full">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
        The Breakthrough Threshold Mapping
      </h2>

      <div className="space-y-6 mb-10">
        <p className="text-xl text-gray-700 leading-relaxed">
          What if you could see exactly what triggers your dog before they start
          pulling?
        </p>
        <p className="text-xl text-gray-700 leading-relaxed">
          What if you knew the precise distance to keep from other dogs so your
          dog stays calm and focused on you?
        </p>
        <p className="text-xl text-gray-700 leading-relaxed">
          What if you had a simple system that prevents lunging before it
          happens instead of trying to stop it after your dog is already
          stressed?
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg mb-10">
        <p className="text-2xl text-gray-900 font-bold mb-4">
          This is what Threshold Mapping does.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          It&apos;s the missing piece that finally makes loose-leash walking
          possible even with strong, reactive dogs.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Here&apos;s how it works:
      </h3>

      <div className="space-y-4 mb-10">
        {/* Step 1 */}
        <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
          <div className="shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
            1
          </div>
          <p className="text-lg text-gray-700">
            You learn to identify your dog&apos;s specific triggers (other dogs,
            people, bikes, squirrels).
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
          <div className="shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
            2
          </div>
          <p className="text-lg text-gray-700">
            You measure their safe zone&quot; the exact distance where your dog
            notices the trigger but stays calm.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
          <div className="shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
            3
          </div>
          <p className="text-lg text-gray-700">
            You use this map to navigate any environment with confidence,
            knowing exactly when to create space and when to reward good
            behavior.
          </p>
        </div>
      </div>

      <div className="bg-linear-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl mb-10">
        <p className="text-2xl font-bold mb-4 text-white">The result:</p>
        <p className="text-xl text-white/90">
          Walks where your dog chooses to stay beside you instead of fighting
          the leash.
        </p>
      </div>

      <div className="space-y-4 mb-10 text-lg text-gray-700">
        <p>No more shoulder pain.</p>
        <p>No more embarrassing lunges.</p>
        <p>No more dreading what should be the best part of your day.</p>
      </div>

      <p className="text-xl text-gray-800 font-semibold mb-8">
        Over 2,400 dog owners have used this exact system to transform their
        walks in just 30 days.
      </p>

      <div className="space-y-6">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-600">
          <p className="text-gray-700 italic mb-3">
            I can finally walk past the dog park without my Golden Retriever
            losing his mind. Neighbors actually compliment us now.
          </p>
          <p className="text-gray-600 font-semibold">- Sarah, Denver</p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-600">
          <p className="text-gray-700 italic mb-3">
            My 80-pound German Shepherd used to drag me down the street. Now he
            walks calmly beside me, even around other dogs.
          </p>
          <p className="text-gray-600 font-semibold">- Mike, Atlanta</p>
        </div>
      </div>
    </div>
  );
}
