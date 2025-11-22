const FAQAndFinalCTA = () => {
  return (
    <section className="relative px-4 py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-orange-light/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl space-y-16">
        {/* FAQ Heading */}
        <div className="text-center space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-background/60 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide text-orange uppercase">
            FAQs
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Common Questions Before You Join
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {/* FAQ ITEM */}
          {[
            {
              q: "Is this really free? What’s the catch?",
              a: "Yes, the 3-hour session is 100% free. The only “catch” is: you have to show up live and stay till the end to unlock the gifts. At the end, we’ll share details of a premium 3-day bootcamp. Joining that is completely optional.",
            },
            {
              q: "Will there be a recording?",
              a: "This is meant to be a live, high-energy experience. Recordings are not guaranteed. Please treat this as a live-only opportunity.",
            },
            {
              q: "I’m a complete beginner with money / manifestation. Can I still join?",
              a: "Yes. We’ll start from first principles. You just need an open mind, a notebook, and 3 hours of focused attention.",
            },
            {
              q: "I’m already in one of your 1L programs. Should I still attend?",
              a: "If you’re part of our communities, this session will help you refresh your foundations, reconnect with your goals and deepen your implementation. You’re very welcome to join.",
            },
            {
              q: "How do I join the session on the day?",
              a: "Once you register, you’ll receive an email / WhatsApp message with your unique joining link and reminders as we get closer to the date.",
            },
          ].map((item, i) => (
            <details
              key={i}
              className="group rounded-xl border border-white/10 bg-background/70 px-6 py-4 shadow-md transition-all duration-300 hover:border-orange/50"
            >
              <summary className="flex cursor-pointer items-center justify-between text-left text-base sm:text-lg font-semibold text-foreground">
                {item.q}
                <span className="transition-transform duration-200 group-open:rotate-45 text-orange text-2xl font-bold">
                  +
                </span>
              </summary>

              <p className="mt-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        {/* FINAL CTA SECTION */}
        <div className="space-y-6 text-center pt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-snug">
            Ready to Make This Black Friday About Your Future —
            <br className="hidden sm:block" />
            Not Just Your Shopping Cart?
          </h2>

          <p className="text-sm sm:text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Block 3 hours. Bring your notebook.  
            Come meet Mind, Money & Manifestation in one live, high-energy session.
          </p>

          <button className="mt-4 w-full max-w-xs mx-auto rounded-full bg-orange text-background font-bold px-8 py-5 text-base sm:text-lg shadow-lg transition-all duration-300 hover:bg-orange-light hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]">
            Save My Free Seat Now
          </button>

          <p className="text-xs sm:text-sm text-foreground/70 mt-2">
            Limited seats for the live room. Once it’s full, registrations will close.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQAndFinalCTA;
