import { Button } from "@/components/ui/button";

const GiftBundleSection = () => {
  return (
    <section className="relative px-4 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-orange/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-orange-light/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-10">
        {/* Heading & intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-background/60 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide text-orange uppercase">
            Your Black Friday Gift Bundle
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Your Black Friday Gift Bundle{" "}
            <span className="bg-gradient-to-r from-orange via-orange-light to-yellow bg-clip-text text-transparent">
              (For Live Attendees Only)
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Everyone sells on Black Friday.{" "}
            <span className="text-foreground font-semibold">
              We want to give first.
            </span>
          </p>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            If you attend the entire 3-hour session live, you unlock a special Black
            Friday Gift Bundle packed with tools to help you think clearer, plan your
            money better and manifest with more confidence.
          </p>
        </div>

        {/* Gift grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {/* Mind Workbook */}
          <div className="flex gap-4 rounded-2xl border border-white/10 bg-background/80 p-5 shadow-md transition-all duration-300 hover:border-orange/60 hover:shadow-[0_0_22px_rgba(249,115,22,0.4)]">
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange to-yellow">
              {/* icon: brain-like */}
              <svg
                className="h-6 w-6 text-background"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 2a3 3 0 00-3 3v.1A3.001 3.001 0 003 8v2a3 3 0 001 5.83V16a3 3 0 003 3h1a3 3 0 002.83-2H11a2 2 0 010-4h1V4a2 2 0 00-2-2H9z" />
                <path d="M15 2a3 3 0 013 3v.1A3.001 3.001 0 0121 8v2a3 3 0 01-1 5.83V16a3 3 0 01-3 3h-1a3 3 0 01-2.83-2H13a2 2 0 100-4h-1V4a2 2 0 012-2h1z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Mind Workbook
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Journaling prompts to clear mental clutter, release old stories and
                set aligned goals for the next 12–24 months.
              </p>
            </div>
          </div>

          {/* Money Clarity Sheets */}
          <div className="flex gap-4 rounded-2xl border border-white/10 bg-background/80 p-5 shadow-md transition-all duration-300 hover:border-orange/60 hover:shadow-[0_0_22px_rgba(249,115,22,0.4)]">
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange to-yellow">
              {/* icon: rupee / sheet */}
              <svg
                className="h-6 w-6 text-background"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 2a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2V4a2 2 0 00-2-2H6z" />
                <path d="M10 7h6v2h-3.086l1.543 1.543A2.5 2.5 0 0113 15H9v-2h4a.5.5 0 00.354-.854L11.5 10.293V9H10V7z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Money Clarity Sheets
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Simple templates to map income, expenses, savings and investments so
                you know exactly where your money is going.
              </p>
            </div>
          </div>

          {/* Manifestation Audio / Script */}
          <div className="flex gap-4 rounded-2xl border border-white/10 bg-background/80 p-5 shadow-md transition-all duration-300 hover:border-orange/60 hover:shadow-[0_0_22px_rgba(249,115,22,0.4)]">
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange to-yellow">
              {/* icon: audio / waves */}
              <svg
                className="h-6 w-6 text-background"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 4a1 1 0 00-1 1v14l4-3 4 3V5a1 1 0 00-1-1H9z" />
                <path d="M5 8a1 1 0 00-1 1v6a1 1 0 102 0V9a1 1 0 00-1-1zm14 0a1 1 0 00-1 1v6a1 1 0 102 0V9a1 1 0 00-1-1z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Manifestation Audio / Script
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                A guided practice you can plug into daily to realign your energy,
                emotions and focus with what you truly want.
              </p>
            </div>
          </div>

          {/* Framework PDFs */}
          <div className="flex gap-4 rounded-2xl border border-white/10 bg-background/80 p-5 shadow-md transition-all duration-300 hover:border-orange/60 hover:shadow-[0_0_22px_rgba(249,115,22,0.4)]">
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange to-yellow">
              {/* icon: documents */}
              <svg
                className="h-6 w-6 text-background"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 2a2 2 0 00-2 2v16a2 2 0 002 2h7a2 2 0 002-2V9l-5-7H7z" />
                <path d="M14 2.5V8h4.5L14 2.5z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Framework PDFs
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Clean summaries of the core ideas and frameworks from the session so
                you can revisit and implement them anytime.
              </p>
            </div>
          </div>

          {/* Surprise Bonuses */}
          <div className="flex gap-4 rounded-2xl border border-white/10 bg-background/80 p-5 shadow-md transition-all duration-300 hover:border-orange/60 hover:shadow-[0_0_22px_rgba(249,115,22,0.4)] sm:col-span-2">
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange to-yellow">
              {/* icon: gift */}
              <svg
                className="h-6 w-6 text-background"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 7h-1.18A3 3 0 0013 4.82V5h-2v-.18A3 3 0 005.18 7H4a2 2 0 00-2 2v3h20V9a2 2 0 00-2-2zM4 20a2 2 0 002 2h4v-7H4v5zm10 2h4a2 2 0 002-2v-5h-6v7z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Surprise Bonuses
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Handpicked tools, resources and behind-the-scenes assets from
                Ankit, Shankar &amp; Swastik’s personal libraries to support your
                journey long after the session is over.
              </p>
            </div>
          </div>
        </div>

        {/* Note + CTA */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Note:</span> Gifts are
            shared only with live attendees who stay till the end of the session.
            No exceptions.
          </p>

          <Button className="rounded-full bg-neon-green text-background font-bold px-10 py-5 text-sm sm:text-base md:text-lg shadow-lg hover:scale-105 hover:bg-neon-green-light hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all">
            Yes, I Want My Free Ticket + Gift Bundle
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GiftBundleSection;
