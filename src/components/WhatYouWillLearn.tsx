const WhatYouWillLearn = () => {
  return (
    <section className="relative px-4 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* background glows */}
      <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-orange/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-orange-light/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-12">
        
        {/* Section heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-background/60 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide text-orange uppercase">
            What You’ll Learn in 3 Hours
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            The Mind–Money–Manifestation Framework
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white-foreground leading-relaxed">
            In this special session, you’ll experience a simple but powerful
            3-part framework that helps you think clearer, grow your wealth and
            align your inner world with your outer goals.
          </p>
        </div>

        {/* 3-part framework grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* PART 1 – MIND */}
          <div className="group p-6 rounded-2xl bg-background/70 border border-white/10 shadow-md hover:border-orange/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.45)] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-br from-orange to-yellow text-background font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Mind: Rewiring How You Think
              </h3>
            </div>

            <ul className="space-y-3 text-sm sm:text-base text-white-foreground leading-relaxed">
              <li>How to break the “I’m not ready / I’m not enough / I can’t” loops</li>
              <li>How to create inner clarity so decisions feel lighter</li>
              <li>Simple daily practices to keep your mind focused on what you want, not what you fear</li>
            </ul>
          </div>

          {/* PART 2 – MONEY */}
          <div className="group p-6 rounded-2xl bg-background/70 border border-white/10 shadow-md hover:border-orange/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.45)] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-br from-orange to-yellow text-background font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Money: Structuring Your Finances For Freedom
              </h3>
            </div>

            <ul className="space-y-3 text-sm sm:text-base text-white-foreground leading-relaxed">
              <li>A simple way to think about income, savings and investments</li>
              <li>How to start where you are – even if your numbers feel “too small”</li>
              <li>Practical tools to calculate how much you need to invest every month (and how to step it up over time)</li>
            </ul>
          </div>

          {/* PART 3 – MANIFESTATION */}
          <div className="group p-6 rounded-2xl bg-background/70 border border-white/10 shadow-md hover:border-orange/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.45)] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-br from-orange to-yellow text-background font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Manifestation: Turning Intention Into Reality
              </h3>
            </div>

            <ul className="space-y-3 text-sm sm:text-base text-white-foreground leading-relaxed">
              <li>How to align your actions, emotions and energy</li>
              <li>Why some people “try everything” and still feel stuck – and how to avoid that trap</li>
              <li>A grounded approach to manifestation that respects both strategy and spirit</li>
            </ul>
          </div>
        </div>

        {/* Bottom summary */}
        <p className="text-center text-sm sm:text-base md:text-lg text-white-foreground leading-relaxed max-w-4xl mx-auto">
          You’ll walk out of the session with a clearer mind, a simple money plan
          and a deeper sense of what’s possible for you in the next 12–24 months.
        </p>

      </div>
    </section>
  );
};

export default WhatYouWillLearn;
