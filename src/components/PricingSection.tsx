import { Button } from "@/components/ui/button";
import { Crown, Gem, Lock } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Best deals across all our products!!!
          </h2>
          <p className="text-sm text-primary italic">
            (the below offer is for existing Enterprise Setup Users)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Advance Plan */}
          <div className="bg-card rounded-3xl p-8 border border-orange/30 hover:border-orange/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,120,0,0.2)] group">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Crown className="w-8 h-8 text-primary" />
              <Gem className="w-8 h-8 text-blue-400" />
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-2 text-foreground">Advance Plan</h3>
            
            <div className="text-center mb-6">
              <p className="text-xs text-muted-foreground mb-2">PRICING ON USUAL DAYS</p>
              <p className="text-3xl font-bold text-primary line-through decoration-2">₹1,80,000 <span className="text-sm font-normal">+GST</span></p>
            </div>

            <div className="bg-muted/50 rounded-2xl p-6 mb-6 border border-orange/20">
              <p className="text-2xl font-bold text-center text-foreground mb-4">36% Off</p>
              
              <div className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
                BLACK FRIDAY SPECIAL
              </div>
              
              <p className="text-xs text-muted-foreground mb-2">AVAIL 5% EXTRA ON TOP</p>
              <p className="text-4xl font-bold text-neon-green">₹1,15,000 <span className="text-base font-normal">+GST/year</span></p>
            </div>

            <div className="text-center mb-6 text-sm space-y-1">
              <p className="text-foreground">2.5% Commission*</p>
              <p className="text-muted-foreground text-xs">(including domestic PG)</p>
            </div>

            <Button 
              disabled 
              className="w-full bg-muted/50 text-muted-foreground py-6 rounded-full font-bold hover:bg-muted/50 cursor-not-allowed"
            >
              <Lock className="w-4 h-4 mr-2" />
              Purchase Now!
            </Button>

            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p className="flex items-center gap-1">
                <span className="text-primary">⚡</span> Early Drop Live on 21st Nov. Get Additional 5% Discount
              </p>
              <p className="text-muted-foreground/60">*International gateway is Exclusive at 5%</p>
            </div>
          </div>

          {/* Ultimate Plan - Popular */}
          <div className="bg-card rounded-3xl p-8 border-2 border-primary hover:border-yellow transition-all duration-300 shadow-[0_0_60px_rgba(255,120,0,0.3)] relative group">
            {/* Popular badge */}
            <div className="absolute -top-3 left-0 right-0 flex justify-center">
              <div className="bg-gradient-to-r from-primary via-orange-light to-yellow px-6 py-1 rounded-full text-xs font-bold text-background animate-pulse">
                POPULAR • MOST POPULAR • MOST POPULAR • MOST
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6 justify-center">
              <Crown className="w-8 h-8 text-primary" />
              <div className="w-8 h-8 bg-gradient-to-br from-yellow to-orange rounded-lg flex items-center justify-center text-lg">🏆</div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-2 text-foreground">Ultimate Plan</h3>
            
            <div className="text-center mb-6">
              <p className="text-xs text-muted-foreground mb-2">PRICING ON USUAL DAYS</p>
              <p className="text-3xl font-bold text-primary line-through decoration-2">₹3,60,000 <span className="text-sm font-normal">+GST</span></p>
            </div>

            <div className="bg-muted/50 rounded-2xl p-6 mb-6 border-2 border-primary/40">
              <p className="text-2xl font-bold text-center text-foreground mb-4">35% Off</p>
              
              <div className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
                BLACK FRIDAY SPECIAL
              </div>
              
              <p className="text-xs text-muted-foreground mb-2">AVAIL 5% EXTRA ON TOP</p>
              <p className="text-4xl font-bold text-neon-green">₹2,35,000 <span className="text-base font-normal">+GST/year</span></p>
            </div>

            <div className="text-center mb-6 text-sm space-y-1">
              <p className="text-foreground">Zero commission Plan*</p>
              <p className="text-muted-foreground text-xs">(Lowest domestic PG charges at 1.5%)</p>
            </div>

            <Button 
              disabled 
              className="w-full bg-muted/50 text-muted-foreground py-6 rounded-full font-bold hover:bg-muted/50 cursor-not-allowed"
            >
              <Lock className="w-4 h-4 mr-2" />
              Purchase Now!
            </Button>

            <div className="mt-4 text-xs text-muted-foreground space-y-1">
              <p className="flex items-center gap-1">
                <span className="text-primary">⚡</span> Early Drop Live on 21st Nov. Get Additional 5% Discount
              </p>
              <p className="text-muted-foreground/60">*International gateway is Exclusive at 5%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
