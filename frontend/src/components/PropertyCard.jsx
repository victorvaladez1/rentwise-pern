export default function PropertyCard({ p }) {
  const address = [
    p.line_1,
    p.line_2,
    p.city,
    p.state,
    p.country,
    p.postal_code,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="mb-3 aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100" />
      <h3 className="truncate text-base font-medium text-gray-900">
        {p.title || "Untitled property"}
      </h3>
      {p.description && (
        <p className="mt-1 line-clamp-2 text-sm text-gray-600">
          {p.description}
        </p>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-700">
        {p.property_type && (
          <span className="rounded-full bg-indigo-50 px-2 py-0.5 font-medium text-indigo-700">
            {p.property_type}
          </span>
        )}
        <span className="rounded-full bg-gray-100 px-2 py-0.5">
          {p.bedrooms ?? 0} bd
        </span>
        <span className="rounded-full bg-gray-100 px-2 py-0.5">
          {p.bathrooms ?? 0} ba
        </span>
        <span className="rounded-full bg-gray-100 px-2 py-0.5">
          {p.max_guests ?? 0} guests
        </span>
      </div>

      {address && (
        <p className="mt-3 truncate text-sm text-gray-500">{address}</p>
      )}
    </div>
  );
}
