const AppCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900 animate-pulse">
      {/* Top Section: Icon & Header Info */}
      <div>
        <div className="flex items-start gap-4">
          {/* App Icon Placeholder */}
          <div className="h-16 w-16 shrink-0 rounded-2xl bg-gray-200 dark:bg-gray-800" />

          <div className="min-w-0 flex-1 space-y-2 py-0.5">
            {/* Title Placeholder */}
            <div className="h-5 w-3/4 rounded-md bg-gray-200 dark:bg-gray-800" />

            {/* Company Name Placeholder */}
            <div className="h-4 w-1/2 rounded-md bg-gray-200 dark:bg-gray-800" />

            {/* Rating & Reviews Placeholder */}
            <div className="mt-1.5 flex items-center gap-2 pt-0.5">
              <div className="h-3.5 w-10 rounded bg-gray-200 dark:bg-gray-800" />
              <div className="h-3.5 w-16 rounded bg-gray-200 dark:bg-gray-800" />
            </div>
          </div>
        </div>

        {/* Description Placeholder (2 lines) */}
        <div className="mt-3 space-y-2">
          <div className="h-3.5 w-full rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-3.5 w-5/6 rounded bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>

      {/* Bottom Section: Downloads & Size Metadata */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-800">
        <div className="h-3.5 w-14 rounded bg-gray-200 dark:bg-gray-800" />
        <div className="h-3.5 w-14 rounded bg-gray-200 dark:bg-gray-800" />
      </div>
    </div>
  );
};

export default AppCardSkeleton;
