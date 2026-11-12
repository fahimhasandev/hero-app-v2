import AppCardSkeleton from "../components/shared/AppCard/loading";

export default function Loading() {
  return (
    <div className="space-y-4 mx-auto text-center mt-8">
      {/* Header Skeleton */}
      <div className="mx-auto h-9 w-72 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
      <div className="mx-auto h-5 w-full max-w-md animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />

      {/* 4-Column Responsive Card Grid Skeleton */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-left">
        {Array.from({ length: 8 }).map((_, index) => (
          <AppCardSkeleton key={index} />
        ))}
      </div>

      {/* Bottom Button Skeleton */}
      <div className="mx-auto h-12 w-28 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
    </div>
  );
}
