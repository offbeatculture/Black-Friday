const WhatHappensAfter = () => {
  return (
    <section className="relative px-4 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-orange-light/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl space-y-10">
        {/* Heading + intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-background/60 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide text-orange uppercase">
            What Happens After the Session?
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Your Next Steps After 3 Hours of Massive Value
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
            We want this session to stand on its own as{" "}
            <span className="font-semibold">massive value</span>.  
            No pressure, no tricks — just clarity, tools and momentum.
          </p>
        </div>

        {/* Bootcamp card */}
        <div className="rounded-3xl border border-white/10 bg-background/70 px-6 py-8 sm:px-8 sm:py-10 shadow-xl transition-all duration-300 hover:border-orange/60 hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-2xl font-bold text-foreground">
                If You Want to Go Deeper: Mind–Money–Manifestation 3-Day Bootcamp
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                At the end of the 3 hours, if you feel deeply connected to this work and
                want to go further, you’ll get an invitation to a special 3-day live bootcamp
                with all three mentors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange">
                  What it is
                </p>
                <p className="text-foreground leading-relaxed">
                  <span className="font-semibold">
                    Mind–Money–Manifestation 3-Day Bootcamp
                  </span>{" "}
                  – 3 full days of deeper frameworks, live coaching and implementation.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange">
                  Why it exists
                </p>
                <p className="text-foreground leading-relaxed">
                  Designed to help you <span className="font-semibold">apply</span> what you learn,
                  build real momentum and stop treating this as “just another webinar”.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange">
                  Black Friday bonus
                </p>
                <p className="text-foreground leading-relaxed">
                  Special <span className="font-semibold">Black Friday pricing</span> only for those
                  who attend the free session live.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* No-pressure note */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-sm sm:text-base text-foreground leading-relaxed">
            You’re absolutely free to simply attend the free event, take your gifts and
            leave with a clearer plan for the next 12–24 months.
          </p>
          <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
            If you choose to step into the 3-day bootcamp, that’s your{" "}
            <span className="font-semibold">next-level commitment</span> to this journey — not a requirement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensAfter;
