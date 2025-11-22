const WhoThisIsFor = () => {
  return (
    <section className="relative px-4 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-orange/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-orange-light/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-background/60 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide text-orange uppercase">
            Who This Is For (And Not For)
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Make Sure This Session Is the Right Fit for You
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-foreground/80">
            This is a transformation-focused training — not a motivational talk, not a hack, not a shortcut.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT CARD – WHO THIS IS FOR */}
          <div className="p-8 rounded-3xl bg-background/70 border border-white/10 shadow-xl hover:border-orange/60 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              This Free Session Is For You If:
            </h3>

            <ul className="space-y-4 text-sm sm:text-base text-foreground leading-relaxed">
              <li className="flex gap-3">
                <span className="text-orange font-bold text-xl">✓</span>
                You know you’re meant for more than your current reality
              </li>
              <li className="flex gap-3">
                <span className="text-orange font-bold text-xl">✓</span>
                You want to feel calm and in control of your money
              </li>
              <li className="flex gap-3">
                <span className="text-orange font-bold text-xl">✓</span>
                You’re curious about manifestation, but also want structure and logic
              </li>
              <li className="flex gap-3">
                <span className="text-orange font-bold text-xl">✓</span>
                You’re tired of consuming random content and want a coherent framework
              </li>
              <li className="flex gap-3">
                <span className="text-orange font-bold text-xl">✓</span>
                You’re willing to show up live, take notes and implement
              </li>
            </ul>
          </div>

          {/* RIGHT CARD – WHO THIS IS NOT FOR */}
          <div className="p-8 rounded-3xl bg-background/70 border border-white/10 shadow-xl hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              This Is NOT For You If:
            </h3>

            <ul className="space-y-4 text-sm sm:text-base text-foreground leading-relaxed">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold text-xl">✕</span>
                You’re looking for a “get rich overnight” trick
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold text-xl">✕</span>
                You don’t want to take responsibility for your actions
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold text-xl">✕</span>
                You aren’t willing to block 3 hours and be fully present
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold text-xl">✕</span>
                You expect guarantees instead of guidance, tools and support
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
