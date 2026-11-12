import { IApp } from "@/app/types/app.type";
import { AppCard } from "../shared/AppCard/AppCard";
import getALlData from "@/app/lib/apps";

const TrendingApp = async () => {
  const appData = await getALlData();

  return (
    <div className="space-y-4  mx-auto text-center mt-8">
      <h2 className="text-3xl font-bold">Trending Apps</h2>
      <p className="text-slate-400">
        Explore All Trending Apps on the Market developed by us
      </p>

      {/* Data Display via card */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {appData.slice(0, 8).map((app: IApp) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <button className="btn btn-success text-white">See More</button>
    </div>
  );
};

export default TrendingApp;
