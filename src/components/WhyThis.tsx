const WhyThisBlackFriday = () => {
  return (
    <section className="relative px-4 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* soft background glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-orange/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-light/15 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-start">
        {/* Left: heading + story */}
        <div className="w-full lg:w-1/2 space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-background/60 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide text-orange uppercase">
            Why this Black Friday is different
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Don’t Spend Black Friday Shopping.{" "}
            <span className="bg-gradient-to-r from-orange via-orange-light to-yellow bg-clip-text text-transparent">
              Spend It Rewriting Your Next 10 Years.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white-foreground leading-relaxed">
            Everywhere you look, Black Friday is about buying more things. This year,
            we want to flip that.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-white-foreground leading-relaxed">
            Instead of discounts on gadgets, we want to help you create compounding
            change in three areas of your life that actually move the needle.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-white-foreground leading-relaxed">
            In one 3-hour live session, three mentors come together to give you their
            most powerful ideas, stories and tools – so that when everyone else is
            tracking parcels, you’re tracking your dreams, goals and net worth.
          </p>
        </div>

        {/* Right: three pillars */}
        <div className="w-full lg:w-1/2">
          <div className="grid gap-4 sm:gap-5">
            {/* card 1 */}
            <div className="group rounded-2xl border border-white/10 bg-background/80 px-5 py-4 sm:px-6 sm:py-5 shadow-md transition-all duration-300 hover:border-orange/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.45)]">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange to-yellow text-background text-sm font-bold">
                  01
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    How you think
                  </h3>
                  <p className="text-sm sm:text-sm text-white-foreground leading-relaxed">
                    Upgrade your mindset, beliefs and inner dialogue so your default
                    setting is clarity, courage and momentum.
                  </p>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="group rounded-2xl border border-white/10 bg-background/80 px-5 py-4 sm:px-6 sm:py-5 shadow-md transition-all duration-300 hover:border-orange/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.45)]">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange to-yellow text-background text-sm font-bold">
                  02
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    How you save &amp; invest
                  </h3>
                  <p className="text-sm sm:text-sm text-white-foreground leading-relaxed">
                    See money differently, plug hidden leaks and learn simple,
                    practical ways to grow your wealth without overwhelm.
                  </p>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="group rounded-2xl border border-white/10 bg-background/80 px-5 py-4 sm:px-6 sm:py-5 shadow-md transition-all duration-300 hover:border-orange/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.45)]">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange to-yellow text-background text-sm font-bold">
                  03
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    How you manifest &amp; receive
                  </h3>
                  <p className="text-sm sm:text-sm text-white-foreground leading-relaxed">
                    Align your actions, energy and environment so opportunities,
                    people and ideas start compounding in your favour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisBlackFriday;
