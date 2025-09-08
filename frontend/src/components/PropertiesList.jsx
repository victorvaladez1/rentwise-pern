import { useState, useEffect } from "react";
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
    fetchProperties();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm mt-6">
      {loading && <p>Loading properties ...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul>
        {properties.length > 0 ? (
          properties.map((p) => (
            <li className=" p-6 mt-6" key={p.id}>
              <h3>{p.title}</h3>
              <div>
                <p>{p.description}</p>
                <p>{p.property_type}</p>
                <p>Bedrooms: {p.bedrooms}</p>
                <p>Bathrooms: {p.bathrooms}</p>
                <p>Max guests: {p.max_guests}</p>
                <p>
                  Address: {p.line_1}, {p.line_2} {p.city}, {p.state},
                  {p.country}, {p.postal_code}
                </p>
              </div>
            </li>
          ))
        ) : (
          <p>No properties</p>
        )}
      </ul>
    </div>
  );
}