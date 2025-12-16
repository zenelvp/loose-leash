"use client";

export default function MyStorySection() {
  return (
    <section className="space">
      <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
        My Story: From Chaos to Calm
      </h2>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          Three years ago, I was exactly where you are now.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          My 70-pound Labrador mix, Max, turned every walk into a nightmare. He
          dragged me down the sidewalk. Lunged at every dog we passed. Left me
          with bruised arms and wounded pride.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          I tried everything the &quot;experts&quot; recommended.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Expensive harnesses that promised instant results. Group training
          classes where Max was too distracted to learn. YouTube videos with
          conflicting advice. Even a trainer who told me to &quot;be the alpha&quot; and
          jerk his collar.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Nothing worked. In fact, Max got worse.
        </p>

        {/* RED WARNING BOX */}
        <div className="bg-white p-8 rounded-2xl shadow-lg my-8 border-l-4 border-red-400">
          <p className="text-lg text-gray-800 mb-4 leading-relaxed">
            The breaking point came on a Tuesday morning. Max spotted a small
            terrier across the street and lunged so hard he pulled me into
            traffic. A car had to slam on its brakes. The driver yelled. Other
            dog owners stared.
          </p>

          <p className="text-lg text-gray-800 font-semibold">
            I wanted to disappear.
          </p>
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          That night, I couldn&apos;t sleep. My shoulder throbbed. My confidence was
          shattered. I started wondering if I&apos;d have to give up the dog I loved
          because I couldn&apos;t handle him.
        </p>

        <p className="text-xl text-gray-900 font-bold mb-6">
          But then I discovered something that changed everything.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          I learned that dogs don't pull to be "dominant." They pull because
          they're excited, stressed, or haven't learned proper walking skills.
          The harsh methods I'd tried were actually making Max more anxious and
          reactive.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          I found research showing that reward-based training works better than
          punishment. Studies proving that dogs learn faster when they're calm
          and confident, not scared and stressed.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          So I threw out everything I thought I knew about dog training.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          I started mapping Max's triggers. Measuring his stress levels.
          Creating safe distances where he could stay calm and actually learn. I
          broke training into tiny 10-minute sessions that fit our busy
          schedule.
        </p>

        {/* WHITE STORY PROGRESSION BOX */}
        <div className="bg-white p-8 rounded-2xl shadow-lg my-8">
          <p className="text-lg text-gray-700 mb-4">
            The first week, nothing seemed to happen. But I kept going.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Week two brought small wins. Max walked a few steps without pulling.
            He looked at me instead of lunging at a squirrel.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            By week three, we passed our first dog without drama.
          </p>

          <p className="text-lg text-gray-700">
            By week four, neighbors were asking what I'd done differently.
          </p>
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Max transformed from an out-of-control puller into a calm, confident
          walking partner. But more importantly, I transformed from a
          frustrated, embarrassed dog owner into someone who finally understood
          how to communicate with my dog.
        </p>

        {/* ORANGE/AMBER GRADIENT BOX */}
        <div className="bg-linear-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl my-8">
          <p className="text-xl font-bold mb-4 text-white">
            That&apos;s when I knew I had to share this system with other dog owners
            who were struggling like I was.
          </p>

          <p className="text-lg text-white">
            Because you shouldn&apos;t have to choose between loving your dog and
            enjoying peaceful walks. You can have both.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}
