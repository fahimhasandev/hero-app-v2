"use client";
import { Star, Download, HardDrive } from "lucide-react"; // Optional: npm install lucide-react
import { IApp } from "@/app/types/app.type";
import Image from "next/image";

interface AppCardProps {
  app: IApp;
  onSelect?: (app: IApp) => void;
}

export const AppCard = ({ app }: AppCardProps) => {
  const handleAppClick = (app: IApp) => {
    // e.stopPropagation();
    console.log("Selected app:", app.title);
    // Navigate to details page or open a modal showing `app.ratings`
  };
  return (
    <div
      onClick={() => handleAppClick(app)}
      className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Top Section: Icon & Header Info */}
      <div>
        <div className="flex items-start gap-4">
          <Image
            src={app.image}
            alt={app.title}
            height={64}
            width={64}
            className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow-sm border border-gray-100 dark:border-gray-800"
          />
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              {app.title}
            </h3>
            <p className="truncate text-sm font-medium text-blue-600 dark:text-blue-400">
              {app.companyName}
            </p>

            {/* Rating & Reviews Badge */}
            <div className="mt-1.5 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
              <span className="inline-flex items-center gap-1 font-semibold text-gray-900 dark:text-gray-100">
                {app.ratingAvg.toFixed(1)}
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              </span>
              <span>•</span>
              <span>{app.reviews} reviews</span>
            </div>
          </div>
        </div>

        {/* Middle Section: Description */}
        <p className="mt-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
          {app.description}
        </p>
      </div>

      {/* Bottom Section: Stats & Action */}
      <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1" title="Downloads">
            <Download className="h-3.5 w-3.5" />
            <span>{app.downloads}</span>
          </div>
          <div className="flex items-center gap-1" title="App Size">
            <HardDrive className="h-3.5 w-3.5" />
            <span>{app.size} MB</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => handleAppClick(app)}
          className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
        >
          View
        </button>
      </div>
    </div>
  );
};
