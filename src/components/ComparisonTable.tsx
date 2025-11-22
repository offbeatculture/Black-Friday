import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    { name: "Gamification (Points system, Badges, Leaderboard)", advance: true, ultimate: true },
    { name: "Affiliate System", advance: true, ultimate: true },
    { name: "Meeting In-built", advance: "300 People", ultimate: "300 People" },
    { name: "Webinar In-built", advance: "500 People", ultimate: "500 People" },
    { name: "AI Content Assistant", advance: true, ultimate: true },
    { name: "Custom Branding", advance: true, ultimate: true },
    { name: "Advanced Analytics", advance: false, ultimate: true },
    { name: "Priority Support", advance: false, ultimate: true },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Feature Comparison
        </h2>

        {/* Purchase buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-4xl mx-auto">
          <div className="flex-1 text-center">
            <h3 className="text-xl font-bold text-muted-foreground mb-3">Advance Plan</h3>
            <Button 
              disabled 
              className="w-full max-w-sm bg-muted/50 text-muted-foreground py-6 rounded-full font-bold hover:bg-muted/50 cursor-not-allowed"
            >
              <Lock className="w-4 h-4 mr-2" />
              Purchase Now!
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Everything in Pro Plan+</p>
          </div>
          
          <div className="flex-1 text-center">
            <h3 className="text-xl font-bold text-muted-foreground mb-3">Ultimate Plan</h3>
            <Button 
              disabled 
              className="w-full max-w-sm bg-muted/50 text-muted-foreground py-6 rounded-full font-bold hover:bg-muted/50 cursor-not-allowed"
            >
              <Lock className="w-4 h-4 mr-2" />
              Purchase Now!
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Everything in Advance Plan+</p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 text-foreground font-bold">Particulars</th>
                  <th className="text-center p-6 text-foreground font-bold">Advance Plan</th>
                  <th className="text-center p-6 text-foreground font-bold">Ultimate Plan</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-border/50 hover:bg-muted/20 transition-colors ${
                      index % 2 === 0 ? 'bg-muted/5' : ''
                    }`}
                  >
                    <td className="p-6 text-foreground">
                      {feature.name.includes("Meeting") || feature.name.includes("Webinar") ? (
                        <span className="flex items-center gap-2">
                          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">zoom</span>
                          {feature.name}
                        </span>
                      ) : (
                        feature.name
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof feature.advance === 'boolean' ? (
                        feature.advance ? (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 rounded-full bg-neon-green flex items-center justify-center">
                              <Check className="w-4 h-4 text-background" />
                            </div>
                          </div>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-foreground font-semibold">{feature.advance}</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof feature.ultimate === 'boolean' ? (
                        feature.ultimate ? (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 rounded-full bg-neon-green flex items-center justify-center">
                              <Check className="w-4 h-4 text-background" />
                            </div>
                          </div>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-foreground font-semibold">{feature.ultimate}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
