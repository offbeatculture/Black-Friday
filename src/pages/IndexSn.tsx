import AnnouncementBar from "@/components/AnnouncementBar";
import PricingSection from "@/components/PricingSection";
import ComparisonTable from "@/components/ComparisonTable";
import StickyCTA from "@/components/StickyCTA";
import WhyThisBlackFriday from "@/components/WhyThis";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import GiftBundleSection from "@/components/GiftBundleSection";
import MeetYourMentors from "@/components/Coaches";
import MeetYourMentorsStrip from "@/components/Coaches";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import WhatHappensAfter from "@/components/WhatHappensAfter";
import FAQAndFinalCTA from "@/components/FAQAndFinalCTA";
import HeroSn from "@/components/HeroSn";

const IndexSn = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <HeroSn />
      <WhyThisBlackFriday/>
      <WhatYouWillLearn/>
      <GiftBundleSection/>
      <MeetYourMentorsStrip/>
      <WhoThisIsFor/>
      <WhatHappensAfter/>
      <FAQAndFinalCTA/>
      <StickyCTA />
    </div>
  );
};

export default IndexSn;
