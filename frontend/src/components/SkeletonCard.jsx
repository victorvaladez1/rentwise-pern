export default function SkeletonCard() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="mb-3 aspect-[4/3] animate-pulse rounded-xl bg-gray-100" />
      <div className="h-4 w-2/3 animate-pulse rounded bg-gray-100" />
      <div className="mt-2 h-3 w-full animate-pulse rounded bg-gray-100" />
      <div className="mt-1 h-3 w-5/6 animate-pulse rounded bg-gray-100" />
      <div className="mt-3 flex gap-2">
        <div className="h-5 w-16 animate-pulse rounded-full bg-gray-100" />
        <div className="h-5 w-12 animate-pulse rounded-full bg-gray-100" />
        <div className="h-5 w-14 animate-pulse rounded-full bg-gray-100" />
      </div>
    </div>
  );
}
