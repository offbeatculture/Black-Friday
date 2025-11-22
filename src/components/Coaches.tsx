import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const mentors = [
  {
    name: "Shankar",
    role: "Money & Wealth-Building Mentor",
    description:
      "Simplifies money, wealth-building and financial planning so it feels less scary and more doable.",
  },
  {
    name: "Swastik",
    role: "Mindset & Inner Transformation Coach",
    description:
      "Helps you break long-held patterns and create deep inner shifts with high-energy, practical frameworks.",
  },
  {
    name: "Ankit",
    role: "Manifestation & Energy Mentor",
    description:
      "Aligns your actions with intuition and deeper desires using a grounded approach to manifestation.",
  },
];

const MeetYourMentorsStrip = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const secondCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const target = secondCardRef.current;

    if (!scrollContainer || !target) return;

    const stopAnimation = () => {
      // Only stop after the user has actually scrolled horizontally
      if (scrollContainer.scrollLeft <= 0) return;

      target.classList.remove("mentor-bounce");
      scrollContainer.removeEventListener("scroll", stopAnimation);
    };

    scrollContainer.addEventListener("scroll", stopAnimation);

    return () => {
      scrollContainer.removeEventListener("scroll", stopAnimation);
    };
  }, []);

  return (
    <section className="relative px-4 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* background glows */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-orange-light/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-8">
        {/* Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-background/60 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide text-orange uppercase">
            Meet Your Mentors
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            The Minds Behind Mind, Money &amp; Manifestation
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
            Swipe through to meet the mentors who’ll guide you through this Black Friday transformation.
          </p>
        </div>

        {/* Horizontal scroll strip */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
          >
            {mentors.map((mentor, index) => (
              <div
                key={mentor.name}
                ref={index === 1 ? secondCardRef : null}
                className={`
                  snap-start shrink-0 w-64 sm:w-72 md:w-80
                  rounded-3xl bg-[#111111] border border-white/10 shadow-xl
                  px-4 pb-5 pt-4 flex flex-col gap-4
                  transition-all duration-300 
                  hover:border-orange/70 hover:shadow-[0_12px_35px_rgba(0,0,0,0.7)]
                  ${index === 1 ? "mentor-bounce" : ""}
                `}
              >
                {/* Photo placeholder */}
                <div className="w-full rounded-3xl overflow-hidden bg-white/5 aspect-[4/5]">
                  <div className="h-full w-full bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900" />
                </div>

                {/* Text content */}
                <div className="space-y-1 text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                    {mentor.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80">
                    {mentor.role}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-foreground leading-relaxed">
                    {mentor.description}
                  </p>
                </div>

                {/* Bottom row */}
                <div className="mt-2 flex items-center justify-between text-xs sm:text-sm text-foreground/80">
                  <div className="flex items-center gap-1">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                    <span>Live mentor</span>
                  </div>

                  <Button
                    variant="outline"
                    className="rounded-full border-white/20 bg-transparent px-4 py-1 text-xs sm:text-sm text-foreground hover:bg-white/10"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Fade right */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default MeetYourMentorsStrip;
