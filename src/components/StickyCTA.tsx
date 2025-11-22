import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 800px
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      } md:hidden`}
    >
      <div className="bg-neon-green px-4 py-3 shadow-[0_-10px_30px_rgba(34,197,94,0.4)]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-background truncate">
              Last chance to secure Early Drop Access
            </p>
            <p className="text-[10px] text-background/80">Extra 5% Off • Limited Seats</p>
          </div>
          <Button className="bg-background text-neon-green hover:bg-background/90 font-bold px-4 py-2 rounded-full text-sm whitespace-nowrap flex-shrink-0">
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
