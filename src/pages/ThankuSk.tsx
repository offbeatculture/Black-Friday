import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://chat.whatsapp.com/YOUR_LINK_SWASTIK";

const ThankuSk = () => {
  return (
   <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
         {/* Glows */}
         <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-orange/25 blur-[140px]" />
         <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-orange-light/20 blur-[140px]" />
   
         <section className="relative z-10 mx-auto max-w-4xl px-4 py-14 sm:py-20 text-center space-y-10">
           {/* Badge */}
           <div className="flex justify-center">
             <p className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-background/60 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide text-orange uppercase">
               Registration Confirmed
             </p>
           </div>
   
           {/* Headline */}
           <div className="space-y-4">
             <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-orange via-orange-light to-yellow bg-clip-text text-transparent">
               You’re In. Your Free Seat Is Locked.
             </h1>
   
             <p className="text-sm sm:text-base md:text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed">
               You’re registered for the live 3-hour Black Friday session with Ankit,
               Shankar & Swastik.  
               Your joining link and reminders will be sent on email + WhatsApp.
             </p>
           </div>
   
           {/* Details Card */}
           <div className="rounded-3xl border border-white/10 bg-background/70 px-6 py-6 sm:px-8 sm:py-8 text-left shadow-xl space-y-4 max-w-3xl mx-auto">
             <h2 className="text-lg sm:text-xl font-semibold text-foreground">
               What Happens Next
             </h2>
   
             <ul className="space-y-3 text-sm sm:text-base text-foreground/90 leading-relaxed">
               <li className="flex gap-3">
                 <span className="text-orange font-bold">1.</span>
                 Check your inbox for the confirmation email.
               </li>
               <li className="flex gap-3">
                 <span className="text-orange font-bold">2.</span>
                 Join the WhatsApp group to get your reminders + gift bundle access.
               </li>
               <li className="flex gap-3">
                 <span className="text-orange font-bold">3.</span>
                 Block 3 hours, bring a notebook, and show up live till the end.
               </li>
             </ul>
   
             <p className="text-xs sm:text-sm text-foreground/70 pt-2">
               Gifts are shared only with live attendees who stay till the end. No exceptions.
             </p>
           </div>
   
           {/* WhatsApp CTA */}
           <div className="space-y-3">
             <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
               <Button className="rounded-full bg-neon-green text-background font-bold px-8 py-5 text-base sm:text-lg shadow-lg hover:scale-105 hover:bg-neon-green-light hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all inline-flex items-center gap-3">
                 <WhatsAppIcon />
                 Join WhatsApp Group Now
               </Button>
             </a>
   
             <p className="text-xs sm:text-sm text-foreground/70">
               Important updates, joining link, and gift access will be shared there.
             </p>
           </div>
         </section>
       </main>
     );
   };

export default ThankuSk;

const WhatsAppIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
);
