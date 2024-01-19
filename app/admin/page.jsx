"use client";

import SalesRevenueGraph from "@/components/Graph/SalesRevenueGraph";
import LatestPublishedProperties from "@/components/Sections/LatestProperty/LatestPublishedProperties";
import StatsSection from "@/components/Sections/StatsSection";
import TopProperties from "@/components/Sections/TopProperty/TopProperties";
import LatestSalesSection from "@/components/Sections/LatestSales/LatestSalesSection";
import AnalyticsSection from "@/components/Sections/Analytics/AnalyticsSection";
import UsersGraph from "@/components/Graph/UsersGraph";
import ListingSection from "@/components/Sections/ListingSection";

export default function Home() {
  return (
    <div>
      <div className="flex w-full p-[30px] gap-6">
        <LatestPublishedProperties />
        <div className="w-1/4">
          <TopProperties />
        </div>
      </div>
      <div className="p-[30px]">
        <StatsSection />
      </div>
      <div className="flex gap-8 px-[30px] pb-[30px]">
        <div className="flex flex-col gap-6 w-3/4">
          <SalesRevenueGraph />
          <AnalyticsSection />
        </div>
        <div className="flex flex-col w-1/4 gap-8">
          <LatestSalesSection />
          <UsersGraph />
          <ListingSection />
        </div>
      </div>
    </div>
  );
}
