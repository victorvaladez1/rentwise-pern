import { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import SkeletonCard from "./SkeletonCard";
import axios from "axios";

export default function PropertiesList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function fetchProperties() {
      try {
        const res = await axios.get("/api/properties");
        if (!ignore) setProperties(res.data?.data ?? []);
      } catch (err) {
        if (!ignore) setError(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    setTimeout(() => fetchProperties(), 2000);
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section className="space-y-4 mt-6">
      {!loading && !error && properties.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      )}

      {error && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
        >
          Failed to load properties: {error}
        </div>
      )}

      {loading && !error && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}
    </section>
  );
}
