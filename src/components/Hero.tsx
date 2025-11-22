import { Button } from "@/components/ui/button";
import img1 from "@/assets/bg1.jpg";
import { useState } from "react";

const WEBHOOK_URL =
  "https://offbeatn8n.coachswastik.com/webhook/black-friday-an";

const Hero = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const onChange =
    (key: "name" | "email" | "phone") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setStatus(null);
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // you can add more fields if you want
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          page: "black-friday-hero",
          ts: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Webhook failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "" });
    } catch (err) {
      console.error("Webhook error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Radial gradient backgrounds */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-orange/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-orange-light/20 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl flex flex-col items-center text-center gap-10">
        {/* MAIN TITLE */}
        <div className="space-y-4">
          <h1
            className="
              font-black tracking-tight
              text-3xl sm:text-4xl md:text-6xl lg:text-7xl
              leading-snug
              bg-gradient-to-r from-orange via-orange-light to-yellow 
              bg-clip-text text-transparent
            "
          >
            The Only Black Friday Offer That Can Change Your Whole Life – For ₹0
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-lg md:text-xl text-foreground font-medium leading-relaxed">
            A live 3-hour online session with Ankit, Shankar &amp; Swastik to
            Master your Mind, Multiply your Money &amp; Kickstart Manifestation –
            and get access to tools, frameworks &amp; gifts worth over ₹50,000…
            for free.
          </p>
        </div>

        {/* Event Details */}
        <div className="w-full max-w-4xl mx-auto bg-background/60 border border-white/10 rounded-xl backdrop-blur-sm py-4 px-6 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm md:text-base text-foreground font-medium">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 2a1 1 0 012 0v1h4V2a1 1 0 112 0v1h1a2 2 0 012 2v2H3V5a2 2 0 012-2h1V2z" />
              <path d="M3 9h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            </svg>
            Date: 28th November
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 9H9V5a1 1 0 112 0v6z" />
            </svg>
            Time: 7 PM IST
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-orange" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            Location: Live on Zoom
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 5a2 2 0 012-2h8a2 2 0 012 2v1H4V5z" />
              <path
                fillRule="evenodd"
                d="M4 9v6a2 2 0 002 2h8a2 2 0 002-2V9H4zm8 5H8a1 1 0 010-2h4a1 1 0 110 2z"
                clipRule="evenodd"
              />
            </svg>
            Price: ₹0 (Black Friday Special)
          </div>
        </div>

        {/* IMAGE BLOCK */}
        <div className="w-full max-w-3xl">
          <div className="rounded-2xl overflow-hidden border border-primary/30 bg-background/40 shadow-2xl">
            <img
              src={img1}
              alt="Mind, Money & Manifestation Black Friday Session"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* LEAD FORM */}
        <div className="w-full max-w-md mx-auto">
          <form
            onSubmit={onSubmit}
            className="space-y-4 bg-background/70 border border-white/10 rounded-2xl p-6 shadow-xl"
          >
            <div className="text-left mb-2">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Save Your Free Seat
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Enter your details below to receive your joining link and Black Friday gift bundle.
              </p>
            </div>

            {/* Name */}
            <div className="text-left">
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={onChange("name")}
                className="w-full rounded-lg border border-white/10 bg-background/80 px-3 py-2 text-sm sm:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="text-left">
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={onChange("email")}
                className="w-full rounded-lg border border-white/10 bg-background/80 px-3 py-2 text-sm sm:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div className="text-left">
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-1">
                WhatsApp Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={onChange("phone")}
                className="w-full rounded-lg border border-white/10 bg-background/80 px-3 py-2 text-sm sm:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange"
                placeholder="+91 ..."
              />
            </div>

            {/* Submit */}
            <div className="pt-2 flex flex-col items-center gap-2">
              <Button
                type="submit"
                disabled={loading}
                className={`
                  w-full rounded-full font-bold px-10 py-5 text-sm sm:text-base
                  text-white bg-[#11c064]
                  border border-[#34ff9b]/60
                  shadow-[0_0_0_2px_rgba(34,197,94,0.5),0_0_28px_rgba(34,197,94,0.95)]
                  hover:shadow-[0_0_0_2px_rgba(34,197,94,0.8),0_0_45px_rgba(34,197,94,1)]
                  hover:bg-[#0fb85f]
                  transition-all duration-300
                  ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"}
                `}
              >
                {loading ? "Saving..." : "Save My Free Seat Now"}
              </Button>

              {status === "success" && (
                <p className="text-xs text-emerald-400 text-center">
                  ✅ Saved! Check WhatsApp/Email for updates.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-400 text-center">
                  ❌ Something went wrong. Please try again.
                </p>
              )}

              <p className="text-[11px] sm:text-xs text-muted-foreground text-center">
                No recordings guaranteed. Show up live to receive all gifts &amp; bonuses.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
